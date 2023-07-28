import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Keyboard} from 'react-native';
import AnimatedSearchBox from '@ocean28799/react-native-animated-searchbox';
import RemoveIcon from '../Global/RemoveIcon';
const SearchBar = ({setInputText}) => {

  const refSearchBox = useRef();

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Call for the open
  const openSearchBox = () => {
    refSearchBox.current.open();
    setIsSearchFocused(true);
  };

  // Call for the close
  const closeSearchBox = () => {
    refSearchBox.current.close();
    setIsSearchFocused(false);
  };

  // Function to handle the close button press

  const handleCloseButtonPress = () => {
    Keyboard.dismiss();
    closeSearchBox();
    setIsSearchFocused(false);
    setInputText('');
  };
  return (
    <View style={{width: '90%'}}>
    {/* Used the AnimatedSearchBox from react-native-animated-searchbox package */}
      <AnimatedSearchBox
        ref={refSearchBox}
        placeholder={'Search'}
        placeholderTextColor="#848484"
        backgroundColor="#f6f6f7"
        searchIconColor="#FFF"
        focusAfterOpened
        searchIconSize={21}
        borderRadius={12}
        onChangeText={text => {
          setInputText(text);
        }}
        onFocus={() => setIsSearchFocused(true)} // Set isSearchFocused to true when search bar is focused
      />
      {/* Close button */}
      {isSearchFocused && (
        <TouchableOpacity
          style={{position: 'absolute', top: 14, right: 14}}
          onPress={handleCloseButtonPress}>
          <RemoveIcon handleCloseButtonPress={handleCloseButtonPress} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  xbutton: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'red',
  },
});

export default SearchBar;
