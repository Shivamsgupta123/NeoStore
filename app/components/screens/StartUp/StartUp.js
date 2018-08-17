import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TextInput, TouchableOpacity, Platform, Dimensions, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { AsyncStorage } from 'react-native';
import { login, fetchaccountdetail, prductlist, productdetail, productrating, register, changepassword } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';

export default class StartUp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        AsyncStorage.getItem("access_token").then((value) => {
            console.log(value)
            if (value !== null) {
                // console.log(access_token)
                GlobalAPI(fetchaccountdetail, "GET", null, value, (response) => {

                    if (response.status == 200) {
                        // console.log("123")
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
                // fetch(
                //     fetchaccountdetail
                //     , {
                //         method: 'GET',
                //         headers: {
                //             'access_token': value
                //         }


                //     })
                //     .then(response => response.json())
                //     .then(response => {
                //         if (response.status == 200) {
                //             console.log("123")
                //             this.props.navigation.replace('MyApp', response);



                //         }
                //         else {
                //             AsyncStorage.removeItem("access_token")
                //             this.props.navigation.replace('Login')
                //             console.log("456")
                //         }
                //     })

                // .catch(err => {

                //     this.props.navigation.replace('Login')
                // })

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