import React from 'react';
import {TransitionSpecs, createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          // Defining the animation of the navigation 
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
          cardStyleInterpolator: ({current, next, layouts}) => {
            const translateX = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            });

            const opacity = next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                })
              : 1;

            return {
              cardStyle: {
                transform: [{translateX}],
                opacity,
              },
            };
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FavouritesScreen"
          component={FavouritesScreen}
          options={{headerShown: false}}
        />

    
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

export default NavigationStack;
