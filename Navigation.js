import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen';
import AddScreen from './Screens/AddScreen';
import NotificationScreen from './Screens/NotificationScreen';
import AccountScrren from './Screens/AccountScrren';
import MessageScrren from './Screens/MessageScrren';
import SearchScreen from './Screens/SearchScreen';
import MovieScreen from './Screens/MovieScreen';

const Stack = createStackNavigator();

function App () {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name = 'Instagram'
        component = {HomeScreen}
        options={{
         
          headerStyle: {
            backgroundColor: '#6A89CC',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> 
      <Stack.Screen 
        name = 'Add'
        component = {AddScreen}
      />
       <Stack.Screen 
        name = 'Notifications'
        component = {NotificationScreen}
      />
       <Stack.Screen 
        name = 'Account'
        component = {AccountScrren}
      /> 
      <Stack.Screen 
        name = 'Message'
        component = {MessageScrren}
      />
      <Stack.Screen 
        name = 'Search'
        component = {SearchScreen}
      />
       <Stack.Screen 
        name = 'Movie'
        component = {MovieScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;