import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import Home from './Screen/Home/Home';
import About from './Screen/About/About';

// functional component
const App = () => {
  return (
    <ScrollView>
      <NavigationContainer />
      <Home />
      <About />
    </ScrollView>
  );
};

export default App;
