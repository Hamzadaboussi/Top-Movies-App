import React from 'react';
import {Text,StyleSheet} from 'react-native';

const MovieTitle = ({title}) => {

  let size = title.length > 14 ? 30 : 50; // The fontsize of the title depend and the lenght of the title 

  return (
    <Text style={[styles.title, {fontSize: size}]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'DMSans-Bold',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default MovieTitle;
