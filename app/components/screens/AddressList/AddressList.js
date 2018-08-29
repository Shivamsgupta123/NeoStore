import React, { Component } from 'react';
import { View, TextInput, Alert, FlatList, ScrollView, KeyboardAvoidingView, Dimensions, ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import { AsyncStorage } from 'react-native';
import { UserObject } from '../../../lib/UserProvider'

export default class AddressList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left style={{ paddingRight: -10 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="angle-left" size={22} color="#f9fbff" />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headertitle}>Address List</Text>
                    </Body>
                    <Right style={{ paddingRight: 0 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate("Addaddress")}>
                            <Icon name="plus" size={22} color="#f9fbff" />
                        </Button>
                    </Right>
                </Header>
            </View>

        )
    }
}