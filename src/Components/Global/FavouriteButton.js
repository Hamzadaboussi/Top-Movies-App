import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';

const FavouriteButton = ({isFavourite}) => {
  return (
    <View style={styles.iconWrapper}>
      <FontAwesomeIcon
        icon={isFavourite ? solidHeart : regularHeart} // Display solid or regular heart icon based on isFavourite state
        style={!isFavourite ? styles.icon : styles.activeicon} // Display the style of the icon based on isFavourite state
        size={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  activeicon: {
    color: '#e60000',
    borderWidth: 3,
    borderColor: '#33333322',
    borderRadius: 50,
  },
});

export default FavouriteButton;
