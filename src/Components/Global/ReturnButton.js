import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const ReturnButton = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => {
          navigation.goBack();
        }}>
        <FontAwesomeIcon icon={faArrowLeft} style={styles.icon} size={30} />
      </TouchableOpacity>
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
});
