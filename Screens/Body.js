import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
//importing screens
import Tabbar from './Tabbar'
import Story from './Story'
import Navbar from './Navbar'

export default class BodyScreen extends Component {
    render() {
        return (
          <View style = {styles.container}>
              <Navbar 
                onPressCamera = {
                  ()=>{this.props.navigation.navigate('Camera')}
                }
                onPressSearch={
                  ()=>{this.props.navigation.navigate('Search')}
                }
                onPressChat = {
                  ()=>{this.props.navigation.navigate('Chat')}
                }
              />
            <ScrollView>
              <Story/>
              <Content>
          <Card> 
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/cute1.jpg')} /> 
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body> 
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/img2.jpeg')} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" color= 'red'/> 
                  <Text>555 Reacts</Text>
                </Button> 
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>         

          <Content> 
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>gamechangerDnRocks</Text>
                  <Text note>Instagrammer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/cute1.jpg')} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>1126Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>          
      {/* TODO: Add Suggestons */}
          <View style = {styles.suggestionView}>
            <Text style = {{marginTop:5 ,marginLeft: 8, fontWeight: "bold", color:'#4834DF' }}>Suggestions</Text>
             	{/* FIXME: ScrollView not workview replace View */}
               <View style = {styles.suggestionViewInner}>
                  <TouchableOpacity style = {styles.suggestionTch}>
                    <Image  
                      source = {require('../Images/suggest1.jpg')}
                      style = {styles.icon}
                      
                    />
                    <Text style = {styles.suggestionName}>Alis</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.suggestionTch}>
                    <Image  
                      source = {require('../Images/suggest2.jpg')}
                      style = {styles.icon}
                    />
                    <Text style = {styles.suggestionName}>Oliver</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.suggestionTch}>
                    <Image  
                      source = {require('../Images/suggest3.jpg')}
                      style = {styles.icon}
                    />
                    <Text style = {styles.suggestionName}>Amelia</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.suggestionTch}>
                    <Image  
                      source = {require('../Images/suggest4.jpg')}
                      style = {styles.icon}
                    />
                  </TouchableOpacity>
              </View>

          </View>

          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left> 
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/tatto1.jpg')} style={{height: 350, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>    

          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>Sammy</Text>
                  <Text note>Youtuber</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/couple1.jpg')} style={{height: 450, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>121 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>    
         
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/cute2.jpg')} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/couple2.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/tatto2.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/cute3.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/tatto3.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/couple3.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/cute4.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/couple4.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/tatto4.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/cute5.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/tatto7.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/tatto5.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/tatto6.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail souce={require('../Images/img1.jpg')} />
                <Body>
                  <Text>hey.dn1502</Text>
                  <Text note>Student</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
       </ScrollView>
       
            <Tabbar
              onPressReels = {
                ()=>{this.props.navigation.navigate('Reels')}
              }
              onPressAdd = {
                ()=>{this.props.navigation.navigate('Add')}
              }
              onPressFavourite= {
                ()=>{this.props.navigation.navigate('Notifications')}
              }
              onPressAccount = {
                ()=>{this.props.navigation.navigate('Account')}
              }
            />
     
      </View>
        ) 
    }
}

const styles = StyleSheet.create({
  
    container:{
        flex:1
    },
    suggestionView:{
      height:230,

    },
    suggestionViewInner:{
     flexDirection:'row',
     marginTop: 5
    },
    icon:{
      borderColor: '#000',
      borderWidth: 2,
      height:150,
      width:160,
      padding:12,
      marginTop:10,
      marginLeft:7,
      borderRadius:15
    },
    suggestionTch:{
      alignItems: 'center'
    },
    suggestionName:{
      fontWeight: 'bold',
    fontSize:15
    }
})
