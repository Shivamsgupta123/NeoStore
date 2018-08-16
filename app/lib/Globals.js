import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Platform, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';


// export const Globals = (api, data, callback) => {
//     fetch(
//         api
//         , data)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             callback(response)

//         }
//         )
//         .catch(err => {

//             console.log(err)
//         })
// };

export const GlobalAPI = (api, method, body, header, success_callback, error_callback) => {
    console.log('head', header)
    AsyncStorage.getItem("access_token").then((value) => {
        let obj = { method: method }
        let headers = header;
        body != null ? obj["body"] = body : null
        value != null ? headers["access_token"] = value : null
        value != null ? obj["headers"] = headers : null
        console.log('head123', headers)

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
    //     if (header != null) {
    //         console.log('global123', header)
    //         fetch(
    //             api, {
    //                 method: "GET",
    //                 headers: {
    //                     access_token: header
    //                 }
    //             })
    //             .then((response) => response.json())
    //             .then(response => {
    //                 success_callback(response)

    //             })
    //             .catch(error => {
    //                 error_callback(error)
    //             })
    //     }
    //     else {
    //         fetch(
    //             api, {
    //                 method: "GET",
    //             })
    //             .then((response) => response.json())
    //             .then(response => {
    //                 success_callback(response)

    //             })
    //             .catch(error => {
    //                 error_callback(error)
    //             })
    //     }

    // }




//     export const GlobalAPIPost = (api, body, header, success_callback, error_callback) => {
//         if (header != null) {
//             fetch(
//                 api, {
//                     method: "POST",

//                     body: body,

//                     headers: {
//                         access_token: header
//                     }

//                 }
//             )
//                 .then((response) => response.json())
//                 .then(response => {
//                     success_callback(response)
//                 })
//                 .catch(error => {
//                     error_callback(error)


//                 })
//         }
//         else {
//             fetch(
//                 api, {
//                     method: "POST",

//                     body: body,

//                 }
//             )
//                 .then((response) => response.json())
//                 .then(response => {
//                     success_callback(response)
//                 })
//                 .catch(error => {
//                     error_callback(error)

//                 })
//         }



//     }










