import React, { Component } from 'react'
import { Text,
         StyleSheet,
         View,
         TouchableOpacity, 
         ScrollView,
         Image
        
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Story extends Component {
    render() {
        return (
          
            <View style = {styles.container}>
                
              <View style = {styles.innerContainer}>
                  <TouchableOpacity>
                  <Icon 
                  name = 'person'
                  size = {53}
                  style = {styles.icon}
                  />
                  </TouchableOpacity>
                   <TouchableOpacity>
                  <Image    
                    source = {require('../Images/img4.jpg')}
                    style = {styles.icon}
                  />
                  </TouchableOpacity> 
                  <TouchableOpacity>
                  <Image    
                    source = {require('../Images/img5.jpg')}
                    style = {styles.icon}
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image    
                    source = {require('../Images/img3.png')}
                    style = {styles.icon}
                    
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Icon 
                  name = 'person'
                  size = {53}
                  style = {styles.icon}
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Icon 
                  name = 'person'
                  size = {53}
                  style = {styles.icon}
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Icon 
                  name = 'person'
                  size = {53}
                  style = {styles.icon}
                  />
                  </TouchableOpacity>
              </View>
               
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:0.2
    },
    innerContainer:{
        flexDirection:'row',
        flexShrink:20
    },
    icon:{
        borderColor: '#000',
        borderWidth: 2,
        height:80,
        width:80,
        padding:12,
        marginTop:10,
        marginLeft:7,
        borderRadius:180

    }
})
