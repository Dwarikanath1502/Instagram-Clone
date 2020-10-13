import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
//HomeScreen Icons
import BodyScreen from './Screens/Body';
import AccountScreen from './NavigationScreens/AccountScreen'
import CameraScreen from './NavigationScreens/CameraScreen'
import ChatScreen from './NavigationScreens/ChatScreen'
import NotificationScreen from './NavigationScreens/NotificationScreen'
import ReelsScreen from './NavigationScreens/ReelsScreen'
import SearchScreen from './NavigationScreens/SearchScreen'
import AddMore from './NavigationScreens/AddMore'

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  
          name = "Body"
          component = {BodyScreen}
          options = {{
            headerShown : false
          }}
        />
        
        <Stack.Screen 
          name = 'Account'
          component = {AccountScreen}
        />
        <Stack.Screen 
          name = 'Reels'
          component = {ReelsScreen}
        />
         <Stack.Screen 
          name = 'Notifications'
          component = {NotificationScreen}
        /> 
        <Stack.Screen 
          name = 'Camera'
          component = {CameraScreen}
        />
        <Stack.Screen 
          name = 'Chat'
          component = {ChatScreen}
        />
         <Stack.Screen 
          name = 'Search'
          component = {SearchScreen}
        />
        <Stack.Screen 
          name = 'Add'
          component = {AddMore}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;