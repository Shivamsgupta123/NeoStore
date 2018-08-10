import React, { Component } from 'react';
import {AppRegistry,  StyleSheet,  Text, Platform, View, Image, Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import styles from './Styles';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';
import { Calendar } from 'react-native-calendars'; 
import Productlist from '../Productlist/Productlist';
import { AsyncStorage } from 'react-native';
 
export default class Home extends Component{
  componentWillMount = async () => {
    var getdata = await AsyncStorage.getItem('ResponseData');   
    getdata = JSON.parse(getdata)
    await fetch(
      'http://staging.php-dev.in:8844/trainingapp/api/users/getUserData'
      ,{
        method : 'GET',
        headers:{
          access_token: getdata.data.access_token
        }
      }
    )
    .then(response => response.json()  )
    .then(  response =>{
    if(response.status == 200)
    {
        // alert("success")
        console.log(response)
      
        AsyncStorage.setItem("ResData",JSON.stringify(response))
        this.props.navigation.navigate('Homescreen')
    }
    else
      alert(response.user_msg)

    }
    )  
  }
  render() {
    return (
        
          
      <View style = {{marginBottom:50}}>
            
          <Header style = {{backgroundColor:HeaderColor}}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="bars" size={22}  color="#f9fbff" style = {{marginLeft:40/3}} />
              </Button>
            </Left>
            
            <Text style = {{ color:White,fontSize:HeaderText,marginLeft:Platform.OS === 'ios'? 0 : 65, fontWeight:HeaderTextFontWeight,marginTop:Platform.OS === 'ios'? 5:10}}>NeoSTORE</Text>
            
            <Right>
              <Icon name="search" size={22}  color="#f9fbff" style = {{marginRight:40/3}} />
            </Right>
                     
          </Header>

          <ScrollView>
                      
            <View>
              <View style = {styles.swiperimage}>   
                <Swiper >
                  
                  <View style = {{flex:1}}>
                    <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../../assets/images/sofa.jpeg')}/>
                                     
                  </View>
                  <View style = {{flex:1}}>
                   <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../../assets/images/cupboard.jpg')}/>
                  </View>
                  <View style = {{flex:1}}>
                    <Image resizeMode="stretch" style = {styles.swiperimage} source={require('../../../assets/images/table.jpg')}/>
                  </View>
                </Swiper>
              </View>


              <View style = {{height:Platform.OS === 'ios' ? 380 : 340}}>
                <View style={ styles.containerbottom }>
                  <View style={styles.boxrow}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', {Title:'Tables',Id:"1"})} style={[styles.boxtop,]} >
                      <Text style={styles.homescreenboxtext1}>Tables</Text>
                      <Icon name='table' style={{textAlign: 'left' }} color="#ffffff" size={80} />
                        
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', {Title:'Sofas',Id:"3"})} style={[styles.boxtop,]}>
                      <Icon style={{textAlign: 'right' }} name='loveseat' color="#ffffff" size={80} />
                      <Text style={styles.homescreenboxtext2}>Sofas</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.boxrow}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', {Title:'Chairs',Id:"2"})} style={[styles.boxbottom,]}>
                      <Text style={styles.homescreenboxtext2}>Chairs</Text>
                      <Icon name='wheelchair' color="#ffffff" style={{textAlign: 'right' }} size={80} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist', {Title:'Cupboards',Id:"5"})} style={[styles.boxbottom,]}>
                      <Icon name='archway' style={{textAlign: 'left' }} color="#ffffff" size={80} />
                      <Text style={styles.homescreenboxtext1}>Cupboards</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>




            

            </View>
          </ScrollView>
      </View>



          
        );
      }
    }
