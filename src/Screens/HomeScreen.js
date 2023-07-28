import {StyleSheet, Text, FlatList, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  fetchTopRatedMoviesRequest,
  fetchTopRatedMoviesSuccess,
  fetchTopRatedMoviesFailure,
} from '../Redux/actions/moviesActions';
import {fetchTopRatedMovies} from '../Api/TMDB_API';
import {connect} from 'react-redux';
import {renderMovieItem} from '../Components/Global/MovieItem';
import TopBar from '../Components/HomeScreen/TopBar';

export function HomeScreen({
  topRatedMovies,
  isLoading,
  error,
  fetchTopRatedMoviesRequest,
  fetchTopRatedMoviesSuccess,
  fetchTopRatedMoviesFailure,
}) {
  const navigation = useNavigation();

  const [inputText, setInputText] = useState('');

  // Declanche fetchTopRatedMoviesFromApi function once the component is mounted
  useEffect(() => {
    fetchTopRatedMoviesFromApi();
  }, []);

  // Rerender the component once the inputText variable is changed
  useEffect(() => {
    console.log('The inputText from the search bar is changed ');
  }, [inputText]);

  const fetchTopRatedMoviesFromApi = async () => {
    try {
      // Dispatch the action to indicate that we are fetching the movies
      fetchTopRatedMoviesRequest();

      // Fetch the top-rated movies using the API function
      const movies = await fetchTopRatedMovies();

      // Dispatch the action with the fetched movies
      fetchTopRatedMoviesSuccess(movies);
    } catch (error) {
      // Dispatch the action with the error if there's a failure
      fetchTopRatedMoviesFailure(error.message);
    }
  };

  // Filter the topRatedMovies object based on the inputText
  const filteredMovies = topRatedMovies.filter(movie =>
    movie.title.toLowerCase().includes(inputText.toLowerCase()),
  );

  return (
    <View style={styles.pagecontainer}>
      <TopBar navigation={navigation} setInputText={setInputText} />

      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={inputText != '' ? filteredMovies : topRatedMovies}
          renderItem={({item}) => renderMovieItem({item, navigation})}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pagecontainer: {
    backgroundColor: '#101820',
    flex: 1,
    alignItems: 'center',
  },
  flatListContainer: {
    gap: 10,
    paddingTop: 10,
  },
});

const mapStateToProps = state => ({
  topRatedMovies: state.movies.topRatedMovies,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
});

// mapDispatchToProps function to map the action creators to component props
const mapDispatchToProps = {
  fetchTopRatedMoviesRequest,
  fetchTopRatedMoviesSuccess,
  fetchTopRatedMoviesFailure,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
