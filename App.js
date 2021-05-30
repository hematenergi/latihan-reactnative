import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {} from 'react-native';
import Home from './Screen/Home/Home';
import About from './Screen/About/About';
import Fontisto from 'react-native-vector-icons/Fontisto';

// const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// functional component
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{backgroundColor: '#5f27cd'}}>
        <Tab.Screen
          name="Hire"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Fontisto name="odnoklassniki" color="white" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => <Fontisto name="react" color="white" size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
