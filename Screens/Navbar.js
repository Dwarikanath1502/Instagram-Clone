import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'

export default class Navbar extends Component {
    render() {
        return (
            <View>
               <View style = {styles.navbar}>
               <TouchableOpacity>
          <Entypo 
            name = 'camera'
            size = {27}
            style = {styles.iconsCamera}
          />
          </TouchableOpacity>
        <Image
          style = {styles.logo}
          source = {require('../Images/logo.png')}
        />
        <View style = {styles.moveright}>
        <TouchableOpacity>
          <Icon 
            name = 'search'
            size = {27}
            style = {styles.icons}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Entypo 
            name = 'paper-plane'
            size = {27}
            style = {styles.icons}
          />
          </TouchableOpacity>
        </View>
      </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
    
    },
    navbar:{
        // marginTop:35,
        height:55,
        backgroundColor:'#fff',
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }, 
    logo:{
      width: '27%',
      height:'55%',
      marginRight:70
    },
    moveright:{
      flexDirection:'row',
      
    },
    icons:{
      padding:4,
      marginLeft:0,
      marginRight: 5
     
    },
    iconsCamera:{
        marginLeft:8
    }
  });
  