import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStar} from '@fortawesome/free-regular-svg-icons';

const RatingStars = ({rating}) => {

  const fullStars = Math.round(rating / 2); // Count the number of rating stars (Maximum 5 stars)
  

  return (
    <View style={styles.ratingContainer}>
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < fullStars ? solidStar : regularStar}
          style={styles.starIcon}
          size={20}
        />
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row', 
    flexWrap: 'nowrap', // Ensure stars stay on the same line
    alignItems: 'center', 
  },
  starIcon: {
    color: '#ffd43b',
    width: 30, 
  },
});

export default RatingStars;
