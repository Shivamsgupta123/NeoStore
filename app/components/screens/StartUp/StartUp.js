import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { AsyncStorage } from 'react-native';
import { fetchaccountdetail, } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { UserProvider } from '../../../lib/UserProvider';

export default class StartUp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // SplashScreen.hide();
        AsyncStorage.getItem("access_token").then((value) => {
            console.log(value)
            if (value !== null) {
                console.log("welcome")
                GlobalAPI(fetchaccountdetail, "GET", null, value, (response) => {

                    if (response.status == 200) {
                        UserProvider.setUserData(response.data)
                        this.props.navigation.replace('MyApp', response);

                    }
                    else {
                        AsyncStorage.removeItem("access_token")
                        this.props.navigation.replace('Login')
                        // console.log("456")

                    }
                }, error => {
                    console.log(error.error)
                }
                )

            }
            else {
                // console.log("login")
                this.props.navigation.replace('Login')
            }
        });
    }
    render() {
        return (


            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Please Wait...</Text>
            </View>


        );
    }

}
// react-native run-android --variant=release