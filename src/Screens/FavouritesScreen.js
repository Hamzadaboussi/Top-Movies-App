import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {removeFromFavourites} from '../Redux/actions/moviesActions';
import {renderMovieItem} from '../Components/Global/MovieItem';
import {useNavigation} from '@react-navigation/native';
import {ReturnButton} from '../Components/Global/ReturnButton';
import FavouriteButton from '../Components/Global/FavouriteButton';
import { Snackbar } from 'react-native-paper';

const FavouritesScreen = ({Favourites, topRatedMovies, removeFromFavourites}) => {

  const navigation = useNavigation();
  
  const [isShowedSnackbar,setIsShowedSnackbar] = useState(false)

  // Rerender the component once isShowedSnackbar state is changed
  useEffect(() => {
   console.log('')
  }, [isShowedSnackbar]); 
  

  //Filter FavouriteMovies from topRatedMovies
  const FavouriteMovies = topRatedMovies.filter(movie =>
    Favourites.includes(movie.id),
  );

 
  const handleRemoveFromFavourites = movieId => {
    // Dispatch the action with moviesId
    removeFromFavourites(movieId);
  };
  
  
  const isFavouriteScreen = true;
  
  return (
    <View style={styles.pagecontainer}>
      <View style={styles.return}>
        <ReturnButton navigation={navigation} />
        <View style={styles.favouriteButton}>
          <Text style={styles.header}>Favourites</Text>
        </View>
        <View style={styles.favouriteButton}>
          <FavouriteButton isFavourite={true}/>
        </View>
      </View>
      

      {/* Conditionally render the FlatList or the empty text */}
      {FavouriteMovies.length > 0 ? (
        <FlatList
          data={FavouriteMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>
            renderMovieItem({
              item,
              navigation,
              isFavouriteScreen,
              handleRemoveFromFavourites,
              setIsShowedSnackbar,
            })
          }
          contentContainerStyle={styles.flatListContainer}
          numColumns={3}
        />
      ) : (
        <View style={styles.emptyTextContainer}>
          <Text style={styles.emptyText}>The Favourites list is empty</Text>
        </View>
      )}

    <Snackbar visible={isShowedSnackbar} onDismiss={() => setIsShowedSnackbar(false)} duration={Snackbar.DURATION_SHORT} style={{ backgroundColor: '#FFFFFF88' ,borderRadius:10}}><Text style={{color:"#00000088",fontFamily:"DMSans-Bold",textAlign:"center",}}>The Movie is successfully deleted From your Favourites list</Text></Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  pagecontainer: {
    backgroundColor: '#101820',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'DMSans-Bold',
    paddingHorizontal: 10,

    textAlign: 'center',
  },

  movieContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieRating: {
    fontSize: 16,
    color: '#888',
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  flatListContainer: {
    gap: 10,
    paddingTop: 80,
  },
  return: {
    flexDirection: 'row', 
    position: 'relative',

    width: '100%',
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1,

    paddingHorizontal: 20,
  },
  favouriteButton: {
    marginLeft: 'auto', 
  },
  emptyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 15,
    color: 'white',
  },
});


const mapStateToProps = state => ({
  Favourites: state.Favourites.Favourites,
  topRatedMovies: state.movies.topRatedMovies,
});

// Connect the component to the Redux store
export default connect(mapStateToProps, {removeFromFavourites})(FavouritesScreen);
