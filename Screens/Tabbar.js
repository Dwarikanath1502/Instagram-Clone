import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Tabbar extends Component {
  


  render() {
    return (
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.container}
        onPress = {this.props.onPressHome}
        >
          <Icon name="home" size={35} />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={this.props.onPressMovie}
        >
          <Icon name="movie" size={35} 
          onPress = {this.props.onPressReels}  
        />
           
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.container}
        onPress = {this.props.onPressAdd}
        >
          <Icon name="add" size={55} />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={this.props.onPressFavourite}
        >
          <Icon name='favorite' size={35} />
         
        </TouchableOpacity>
        <TouchableOpacity 
        onPress = {this.props.onPressAccount}
        style={styles.container}>
          <Icon name="person" size={35} />
         
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 2,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth:2
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mytext: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 2,
    color: 'rgb(50,50,50)',
  },
});
