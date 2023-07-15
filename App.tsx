import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import DetailsScreen from './src/screens/details';



const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  // other routes go here
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;