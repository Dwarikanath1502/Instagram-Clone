import React, { Component } from 'react'
import {  StyleSheet, View, StatusBar , ScrollView} from 'react-native'
import Navbar from './Screens/Navbar'
import Tabbar from './Screens/Tabbar'
//Screens
import Story from './Screens/Story'
import BodyScreen from './Screens/Body'
export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar backgroundColor = '#DAE0E2' />
         <Navbar  />
         <ScrollView>
         <Story />
         <BodyScreen  />
         </ScrollView>
       <Tabbar  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
