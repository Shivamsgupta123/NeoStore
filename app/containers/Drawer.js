import React, { Component } from 'react';
import {AppRegistry,  StyleSheet,  Text, Platform, View, Image, ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './Styles';
import Login from '../components/screens/Loginscreen/Loginscreen';
import Myaccount from '../components/screens/Myaccount/Myaccount';
import { AsyncStorage } from 'react-native';

export default class Drawer extends Component{

    logout = () => {
        async() => {
            try {
              await AsyncStorage.multiRemove(['Username','Password']);
        
            
            }
            catch(exception) {
              alert("failed.")

            }
          }
        this.props.navigation.navigate('Loginscreen')
    }



    render(){
        return(
            <View style = {{flex:1, backgroundColor:'black'}}>

            <View style = {{ alignItems:'center',padding:20}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Myaccount')}>
            <Image style={{width: 80, height: 80, borderRadius:40,borderColor:'white',borderWidth:2}} source={require('../assets/images/lion.jpg')}/>
            </TouchableOpacity>
            <Text style = {{color:'white',fontWeight:'500',fontSize:25,paddingTop:10}}>Shivam Gupta</Text>
            <Text style = {{color:'white',fontWeight:'400',fontSize:16}}>shivamsgupta@outlook.com</Text>
            </View>
            <ScrollView>
            <View style = {styles.drawerview}>
            
            <Icon name="shopping-cart" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity>
           <Text style = {styles.drawertext}>My Cart</Text>
            </TouchableOpacity>
            </View>
            
            <View style = {styles.drawerview}>
            
            <Icon name="table" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity>
           <Text style = {styles.drawertext}>Tables</Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.drawerview}>
            
            <Icon name="table" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity>
           <Text style = {styles.drawertext}>Sofas</Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.drawerview}>
            
            <Icon name="table" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity>
           <Text style = {styles.drawertext}>Chairs</Text>
            </TouchableOpacity>
            </View>

           <View style = {styles.drawerview}>
            
            <Icon name="table" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity>
           <Text style = {styles.drawertext}>Cupboards</Text>
            </TouchableOpacity>
            </View>

             <View style = {styles.drawerview}>
            
            <Icon name="user" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Myaccount')}>
           <Text style = {styles.drawertext}>My Acoount</Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.drawerview}>
            
            <Icon name="location-arrow" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity>
           <Text style = {styles.drawertext}>Store Locators</Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.drawerview}>
            
            <Icon name="list" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity>
           <Text style = {styles.drawertext}>My Orders</Text>
            </TouchableOpacity>
            </View>

             <View style = {styles.drawerview}>
            
            <Icon name="sign-out" style = {styles.drawericon} size={30} color="#FFFFFF" />
            <TouchableOpacity onPress = {()=>this.logout()} >
           <Text style = {styles.drawertext}>Logout</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>

                
            </View>

        );
    }
}