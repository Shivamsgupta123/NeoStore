import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Styles';


export default class CheckBox extends Component {

    state = {
        Ischecked: this.props.Ischecked,
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => { this.setState({ Ischecked: !this.state.Ischecked }) }} >
                <View style={styles.checkboxContainer}>
                    <View style={[styles.square, this.state.Ischecked ? { backgroundColor: 'rgba(256,256,256,1.0)', } : { backgroundColor: 'rgba(256,256,256,0)', },]} ></View>
                </View>
                <View>
                    <Text style={{ color: this.props.color, fontSize: 17, marginRight: 10, fontWeight: 'bold' }}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
