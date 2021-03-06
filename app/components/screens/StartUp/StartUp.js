import React, { Component } from 'react';
import { View, Text, Alert, BackHandler } from 'react-native';
import { AsyncStorage } from 'react-native';
import { fetchaccountdetail, } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { UserProvider } from '../../../lib/UserProvider';
import { connect } from "react-redux";
import { addUserData } from '../../../redux/actions/UserData_Action';

class StartUp extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    componentDidMount() {
        this.starter()
        // SplashScreen.hide();

    }
    // Checking whether user is already login or not... if he's not login then move to login scrreen else move to home screen.
    starter() {
        AsyncStorage.getItem("access_token").then((value) => {
            // console.log(value)
            if (value !== null) {
                // console.log("welcome")
                GlobalAPI(fetchaccountdetail, "GET", null, value, (response) => {
                    if (response.status == 200) {
                        this.props.addUserData(response.data)
                        UserProvider.setUserData(response.data)
                        this.props.navigation.replace('MyApp', response);
                    }
                    //move user to login screen if he's logout
                    else {
                        // AsyncStorage.removeItem("access_token")
                        this.props.navigation.replace('Login')
                    }
                }, error => {
                    Alert.alert(
                        'Failed!',
                        'No Internet Connection.',
                        [
                            { text: 'Exit', onPress: () => BackHandler.exitApp(), style: 'cancel' },
                            { text: 'Retry', onPress: () => this.starter() },
                        ],
                        { cancelable: false }
                    )
                    console.log(error)
                }
                )
            }
            // Move to login screen if network failed.
            else {
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
const mapStateToProps = (state) => {
    console.log("state2", state)
    return {
        //    first_name: state.first_name,
    }
}
export default connect(mapStateToProps, { addUserData })(StartUp)
