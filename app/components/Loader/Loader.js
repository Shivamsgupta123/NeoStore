import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';


export default class Loader extends Component {
    render() {

        return (
            <View>
                {this.props.isRed ? <ActivityIndicator size="large" color="red" /> : <ActivityIndicator size="large" color="white" />}
            </View>
        );
    }
}
