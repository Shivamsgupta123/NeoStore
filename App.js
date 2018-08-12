

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './app/components/screens/Login/Login';
import Forgotpassword from './app/components/screens/Forgotpassword/Forgotpassword';
import Registration from './app/components/screens/Registration/Registration';
import { createStackNavigator } from 'react-navigation';
import Home from './app/components/screens/Home/Home';
import { createDrawerNavigator } from 'react-navigation';
import Drawer from './app/containers/Drawer';
import Myaccount from './app/components/screens/Myaccount/Myaccount';
import Editprofile from './app/components/screens/Editprofile/Editprofile';
import { AsyncStorage } from 'react-native';
import Productlist from './app/components/screens/Productlist/Productlist';
import Productdetail from './app/components/screens/Productdetail/Productdetail';
import { productdetail } from './app/lib/api';
import ResetPasswordScreen from './app/components/screens/ResetPassword/ResetPasswordScreen';
import StartUp from './app/components/screens/StartUp/StartUp';
//  import MyHomeScreen from './app/components/screens/demo';
// import {White,ButtonText,PlusIconBackground,HeaderColor} from '../../../utils/Colors';
// import {LogoSize,LogoFontWeight,LogoPadding,TextInputFont,RegularFon,HeaderTextFontWeight,HeaderText,ButtonTextSize} from '../../../utils/FontSizes';



const MyApp = createDrawerNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    }





},
    {
        contentComponent: Drawer

    }

);

const RootStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }
        },

        Forgotpassword: {
            screen: Forgotpassword,
            navigationOptions: {
                header: null,

            }
        },
        Registration: {
            screen: Registration,
            navigationOptions: {
                header: null,

            }
        },
        //  Homescreen: {
        //   screen: Home,
        //   navigationOptions:{
        //     header:null,
        //   }

        // },
        // Homescreen:{
        //   screen:MyApp,
        //   navigationOptions:{
        //     header:null,
        //   }

        // },
        Myaccount: {
            screen: Myaccount,
            navigationOptions: {
                header: null,
            }
        },
        Editprofile: {
            screen: Editprofile,
            navigationOptions: {
                header: null,
            }
        },
        Productlist: {
            screen: Productlist,
            navigationOptions: {
                header: null
            }
        },
        Productdetail: {
            screen: Productdetail,
            navigationOptions: {
                header: null
            }
        },
        ResetPasswordScreen: {
            screen: ResetPasswordScreen,
            navigationOptions: {
                header: null
            }
        },
        MyApp: {
            screen: MyApp,
            navigationOptions: {
                header: null
            }
        },
        StartUp: {
            screen: StartUp,
            navigationOptions: {
                header: null
            }
        }





    },


    {

        initialRouteName: 'StartUp',
    }
);



export default class App extends Component {




    render() {
        return (


            <RootStack />


        )
    }
}


