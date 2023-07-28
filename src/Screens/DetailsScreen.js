import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {
  addToFavourites,
  removeFromFavourites,
} from '../Redux/actions/moviesActions';
import PosterBackgroud from '../Components/DetailScreen/PosterBackground';
import RatingStars from '../Components/DetailScreen/RatingStars';
import {Dimensions} from 'react-native';
import MovieTitle from '../Components/DetailScreen/MovieTitle';
import {ReturnButton} from '../Components/Global/ReturnButton';
import FavouriteButton from '../Components/Global/FavouriteButton';

export function DetailsScreen({
  route,
  Favourites,
  addToFavourites,
  removeFromFavourites,
}) {
  // Retrieve the movie details
  const {movieDetails} = route.params;

  const navigation = useNavigation();

  const [isFavourite, setIsFavourite] = useState(false);

  // Each time the Favourites list change the component rerender to update the view
  useEffect(() => {
    setIsFavourite(Favourites.includes(movieDetails.id));
  }, [Favourites, movieDetails.id]);

  const handleFavouritesButtonPress = () => {
    if (isFavourite) {
      // Dispatch the action with the movie id to remove it From Favourites 
      removeFromFavourites(movieDetails.id);
    } else {
      // Dispatch the action with the movie id to add it to Favourites 
      addToFavourites(movieDetails);
    }
  };

  // Fix the date format to be as dd/Month/yyyy
  const formatDate = dateString => {
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  // Fix the duration format to be as hour minutes
  const formatDuration = minutes => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} h ${remainingMinutes} min`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.return}>
        <ReturnButton navigation={navigation} />
        <View style={styles.favouriteButton}>
          <TouchableOpacity onPress={handleFavouritesButtonPress}>
            <FavouriteButton isFavourite={isFavourite} />
          </TouchableOpacity>
        </View>
      </View>

      <PosterBackgroud posterPath={movieDetails.backdrop_path} />
      <View style={styles.textcontainer}>
        <MovieTitle title={movieDetails.title} />
        <Text style={styles.genre}>{movieDetails.genre}</Text>
        <View style={styles.DateandDurationContainer}>
          <Text style={styles.ReleaseDate}>
            {formatDate(movieDetails.release_date)}
          </Text>
          <View style={styles.dot}></View>
          
          <Text style={styles.duration}>
            {formatDuration(movieDetails.duration)}
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingtext}>{movieDetails.vote_average}</Text>
          <RatingStars rating={movieDetails.vote_average} />
        </View>

        <Text style={styles.overview}>{movieDetails.overview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101820',

    alignItems: 'center',
    height: "100%",
  },
  textcontainer: {
    top: -40,
    display: 'flex',
    alignItems: 'center',
  },
  return: {
    flexDirection: 'row', // Display components horizontally
    position: 'absolute',

    width: "100%",
    top: 20,
    
    zIndex: 1,
    alignContent: 'space-between',
    paddingHorizontal: 20,
  },
  favouriteButton: {
    marginLeft: 'auto', // Move the FavouriteButton to the right side
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'DMSans-Medium',
  },
  genre: {
    color: 'white',
    paddingTop: 10,
    fontFamily: 'DMSans-Medium',
  },
  rating: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ratingtext: {
    fontFamily: 'DMSans-Medium',
    color: '#ffd43b',
    fontSize: 19,
  },
  duration: {
    color: 'white',
    fontFamily: 'DMSans-Medium',
  },
  ReleaseDate: {
    color: 'white',
    fontFamily: 'DMSans-Medium',
  },
  overview: {
    color: 'white',
    textAlign: 'left',
    fontFamily: 'DMSans-Medium',
    paddingHorizontal: 20,
    paddingTop: 45,
  },
  DateandDurationContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center',
    gap: 20,
  },
  dot: {
    borderRadius: 100,
    width: 5,
    height: 5,
    backgroundColor: 'white',
  },
});

const mapStateToProps = state => ({
  Favourites: state.Favourites.Favourites,
});

// Connect the component to the Redux store
export default connect(mapStateToProps, {addToFavourites, removeFromFavourites})(
  DetailsScreen,
);
