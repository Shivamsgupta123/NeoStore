import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { AsyncStorage } from 'react-native';
import { fetchaccountdetail, } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { UserProvider } from '../../../lib/UserProvider';
import { connect } from "react-redux";

const addUserData = (data) => {
    return {
        type: 'ADD_USER-DATA',
        data
    }
}

class StartUp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // SplashScreen.hide();
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
                    else {
                        // console.log("456", response)
                        AsyncStorage.removeItem("access_token")
                        this.props.navigation.replace('Login')
                    }
                }, error => {
                    alert("No Internet Connection")
                    this.props.navigation.replace('Login')
                    console.log(error)
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
const mapStateToProps = (state) => {
    console.log("state2", state)
    return {
        //    first_name: state.first_name,
    }
}
export default connect(mapStateToProps, { addUserData })(StartUp)
