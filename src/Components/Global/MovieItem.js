import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MoviePoster from '../HomeScreen/MoviePoster';
import {TouchableOpacity} from 'react-native';
import RemoveIcon from '../Global/RemoveIcon';

export function renderMovieItem({
  item, // The movie item that contain the movie information
  navigation, // The navigation object defined in the previous screen
  isFavouriteScreen, // This flag indicate if the screen calling the component is the FavouriteScreen
  handleRemoveFromFavourites, // Function to Remove the movie from Favourites
  setIsShowedSnackbar, //This action set the visibility of the Snackbar
}) {
  const windowWidth = Dimensions.get('window').width;
  const itemWidth = windowWidth / 3 - 20; // Calculate the width of each movie item (subtract 20 for margins)

  function handleMoviePress(movie) {
    navigation.navigate('DetailsScreen', {movieDetails: movie});
  }

  return (
    <TouchableOpacity onPress={() => handleMoviePress(item)}>
      <View style={[styles.container, {width: itemWidth}]}>
        <View style={styles.movieContentContainer}>
          <MoviePoster posterPath={item.poster_path} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.rating}>Rating: {item.vote_average}</Text>
        </View>
      </View>

      {isFavouriteScreen ? (
        <View style={styles.closebutton}>
          <RemoveIcon
            handleRemoveFromFavourites={handleRemoveFromFavourites}
            item={item}
            setIsShowedSnackbar={setIsShowedSnackbar}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    margin: 5,
  },
  movieContentContainer: {
    padding: 2,
    justifyContent: 'center', // Center the content vertically
  },
  title: {
    color: 'white',
    fontFamily: 'DMSans-Bold',
    paddingTop: 10,
  },
  rating: {
    color: '#FFFFFF77',
    fontFamily: 'DMSans-Regular',
    paddingTop: 5,
  },
  closebutton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
