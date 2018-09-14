import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

var myBoolean = true

export const Console = (name, message) => {
    if (myBoolean) {
        if (name != null)
            console.log(name, message)
        // else
        //     console.log(message)
    }

}



export const GlobalAPI = (api, method, body, header, success_callback, error_callback) => {
    // console.log('head', header)
    AsyncStorage.getItem("access_token").then((value) => {
        let obj = { method: method }
        let headers = {};
        // headers = header
        body != null ? obj["body"] = body : null
        value != null ? headers["access_token"] = value : null
        value != null ? obj["headers"] = headers : null
        // console.log('head123', headers)
        fetch(
            api,
            obj)
            .then((response) => response.json())
            .then(response => {
                success_callback(response)

            })
            .catch(error => {
                error_callback(error)
            })
    })
}









