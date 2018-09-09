import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './app/components/screens/Login/Login';
import Forgotpassword from './app/components/screens/Forgotpassword/Forgotpassword';
import Registration from './app/components/screens/Registration/Registration';
import { createStackNavigator } from 'react-navigation';
import Home from './app/components/screens/Home/Home';
import { createDrawerNavigator } from 'react-navigation';
import Drawer from './app/components/Drawer/Drawer';
import Myaccount from './app/components/screens/Myaccount/Myaccount';
import Editprofile from './app/components/screens/Editprofile/Editprofile';
import { AsyncStorage } from 'react-native';
import Productlist from './app/components/screens/Productlist/Productlist';
import Productdetail from './app/components/screens/Productdetail/Productdetail';
import { productdetail } from './app/lib/api';
import ResetPasswordScreen from './app/components/screens/ResetPassword/ResetPasswordScreen';
import StartUp from './app/components/screens/StartUp/StartUp';
import Addaddress from './app/components/screens/Addaddress/Addaddress';
import MyCart from './app/components/screens/MyCart/MyCart';
import Swiper from './app/containers/Swiper';
import Myorder from './app/components/screens/Myorder/Myorder';
import Orderdetail from './app/components/screens/Orderdetail/Orderdetail';
import StoreLocator from './app/components/screens/StoreLocator/StoreLocator';
import AddressList from './app/components/screens/AddressList/AddressList';
import { UserObject } from './app/lib/UserProvider';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import { connect } from "react-redux";
import { Root } from 'native-base'
import { store } from './app/redux/configureStore';

// const store = createStore(changeData);
// function changeData(state, action) {
//     switch (action.type) {
//         case 'ADD_UPDATE_DATA':
//             return { ...state, ...action.data }
//         case 'ADD_USER-DATA':
//             return { ...state, ...action.data }
//         default:
//             return state
//     }
// }
// console.log("state4", state.user_data)
// ...state.user_data, ...action.data
// store.dispatch({
//     type: 'first_name',
//     text: 'Shivam'
// })
// store.dispatch({
//     type: 'last_name',
//     text: 'Gupta'
// })

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
        },
        MyCart: {
            screen: MyCart,
            navigationOptions: {
                header: null
            }

        },
        Swiper: {
            screen: Swiper,
            navigationOptions: {
                header: null
            }
        },
        Myorder: {
            screen: Myorder,
            navigationOptions: {
                header: null
            }
        },
        Orderdetail: {
            screen: Orderdetail,
            navigationOptions: {
                header: null
            }
        },
        Addaddress: {
            screen: Addaddress,
            navigationOptions: {
                header: null
            }
        },
        StoreLocator: {
            screen: StoreLocator,
            navigationOptions: {
                header: null
            }
        },
        AddressList: {
            screen: AddressList,
            navigationOptions: {
                header: null
            }
        }
    },


    {

        initialRouteName: 'StartUp',
    }
);

// const SubStack = createStackNavigator()

export default class App extends Component {
    // componentDidMount(){
    //     SplashScreen.hide()
    // }
    render() {
        console.log("store", store.getState())
        return (
            // console.log("store", store.getState())
            <Provider store={store}>
                <Root>
                    <RootStack />
                </Root>
            </Provider>
        )
    }
}


