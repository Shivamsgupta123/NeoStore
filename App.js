

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './app/components/screens/Loginscreen/Loginscreen';
import Forgotpassword from './app/components/screens/Forgotpasswordscreen/Forgotpasswordscreen';
import Registration from './app/components/screens/Registrationscreen/Registrationscreen';
import { createStackNavigator } from 'react-navigation';
import Home from './app/components/screens/Homescreen/Homescreen';
import {createDrawerNavigator} from 'react-navigation';
import Drawer from './app/containers/Drawer';
import Myaccount from './app/components/screens/Myaccount/Myaccount';
import Editprofile from './app/components/screens/Editprofile/EditProfilescreen';
import { AsyncStorage } from 'react-native';
import Productlist from './app/components/screens/Productlist/Productlist';
import Productdetailscreen from './app/components/screens/Productdetailscreen/Productdetailscreen';
import { productdetail } from './app/lib/api';
import ResetPasswordScreen from './app/components/screens/ResetPassword/ResetPasswordScreen';
//  import MyHomeScreen from './app/components/screens/demo';
// import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
// import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';



 const MyApp = createDrawerNavigator({
    MyCart: {
      screen:Home
    },
    // Tables: {
    //   screen:Tables
    // },
    


    // Notifications: {
    //   screen: MyNotificationsScreen,
    // },
  },
  {
  contentComponent: Drawer,
  // drawerWidth: 300
  }

);

const RootStack = createStackNavigator(
  {
    Loginscreen:{
      screen:Login,
      navigationOptions:{
        header:null,
      }
    },
     
    Forgotpasswordscreen: {
      screen:Forgotpassword,
      navigationOptions:{
        header:null,
        
      }
    },
    Registrationscreen: {
      screen: Registration,
      navigationOptions:{
        header:null,
        
      }
    },
    //  Homescreen: {
    //   screen: Home,
    //   navigationOptions:{
    //     header:null,
    //   }
      
    // },
    Homescreen:{
      screen:MyApp,
      navigationOptions:{
        header:null,
      }

    },
    Myaccount:{
      screen: Myaccount,
      navigationOptions:{
        header:null,
      }
    },
    EditProfilescreen:{
      screen: Editprofile,
      navigationOptions:{
        header:null,
      }
    },
    Productlist: {
      screen: Productlist,
      navigationOptions:{
        header:null
      }
    },
    Productdetailscreen:{
      screen :Productdetailscreen,
      navigationOptions:{
        header:null
      }
    },
    ResetPasswordScreen:{
      screen: ResetPasswordScreen,
      navigationOptions:{
        header:null
      }
    }
  
    


   
  },

  
  {
    
    initialRouteName: 'Loginscreen',
  }
);



export default class App extends Component {




  render() {
    return (
        
          
          <RootStack/>
          
    
    )
  }
}


