import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FavouriteButton from '../Global/FavouriteButton';
import SearchBar from './SearchBar';

const TopBar = ({navigation, setInputText}) => {
  const navigatetoFavouratesScreen = () => {
    navigation.navigate('FavouritesScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <SearchBar setInputText={setInputText} />
      </View>
      <View style={styles.leftcontainer}>
        <View style={styles.logogcontainer}>
          <Image
            source={require('../../assets/Logos/logoCodeChallange.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={navigatetoFavouratesScreen}>
            <FavouriteButton isFavourite={true} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    position: 'relative',
    width: '100%',
    paddingHorizontal: 20,
  },
  leftcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
  },
  logo: {
    width: 'auto',
  },
  logogcontainer: {
    width: '40%',
    minWidth: 150,
  },
  iconWrapper: {
    padding: 10,
    backgroundColor: '#33333388',
    borderRadius: 50,
  },
  icon: {
    color: 'white',
    borderWidth: 3,
    borderColor: '#33333322',
    borderRadius: 50,
  },
  searchbar: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
  },
});

export default TopBar;
