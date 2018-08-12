import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Platform, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';


export const Globals = (api, data, callback) => {
    fetch(
        api
        , data)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            callback(response)

        }
        )
        .catch(err => {

            console.log(err)
        })
};










// Globals(login, { method: 'POST', body: formData }, response => {
//     if (response.status == 200) {
//         console.log(response.data.access_token)

//         alert("success")

//         this.props.navigation.navigate('Home', response)

//     }
//     else
//         alert(response.user_msg)
// })