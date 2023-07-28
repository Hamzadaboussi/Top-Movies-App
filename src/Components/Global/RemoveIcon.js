import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const RemoveIcon = ({
  handleRemoveFromFavourites, //Function that contain the logic of the delete from the Favourites list
  item, // The movie item that contain the movie information
  handleCloseButtonPress, // Function that contain the logic to close the search bar
  setIsShowedSnackbar, // Action that change the state of the visibility of the Snackbar
}) => {
  const handlePress = () => {
    if (item) {
      // When the component is called from the Movieitem component
      handleRemoveFromFavourites(item.id);
      setIsShowedSnackbar(true);
    } else {
      // When the component is called from the Searchbar component
      handleCloseButtonPress();
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.iconWrapper} onPress={handlePress}>
        <FontAwesomeIcon icon={faXmark} style={styles.icon} size={10} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 5,
    backgroundColor: '#33333388',
    borderRadius: 50,
  },
  icon: {
    color: 'white',
    borderWidth: 3,
    borderColor: '#33333322',
    borderRadius: 50,
  },
});

export default RemoveIcon;
