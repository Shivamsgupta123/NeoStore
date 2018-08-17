import React, { Component } from 'react';
import { AppRegistry, ImageBackground, TextInput, StyleSheet, Text, Platform, View, KeyboardAvoidingView, Image, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';


export default class Loader extends Component {
    render() {

        return (


            <View style={{ flex: 1, padding: 15, justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                <ActivityIndicator size="large" color="#e91b1a" />
            </View>



        );
    }
}
