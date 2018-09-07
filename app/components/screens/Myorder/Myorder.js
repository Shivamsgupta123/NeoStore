import React, { Component } from 'react';
import { View, Alert, Image, FlatList, Text, ImageBackground, TextInput, TouchableOpacity, Platform, Dimensions, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import styles from './Styles';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { orderlist } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';

export default class Myorder extends Component {
    constructor(props) {
        super(props)
        this.state = { fetcheddata: [], Loading: true, Quantity: '' }
    }

    componentDidMount() {
        this.fetchResult()
    }
    fetchResult() {
        GlobalAPI(orderlist, "GET", null, null, response => {
            if (response.status == 200) {
                // console.log("myorder", response)
                this.setState({
                    fetcheddata: response,
                    Loading: false
                }
                );
                console.log("myorder", this.state.fetcheddata.data)
            }
        },
            error => {
                Alert.alert(
                    'Failed!',
                    'No Internet Connection.',
                    [
                        { text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'Retry', onPress: () => this.fetchResult() },
                    ],
                    { cancelable: false }
                )
                console.log(error)
            }
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="angle-left" size={22} style={styles.headreicon1} />
                        </Button>
                    </Left>
                    <Text style={styles.headerText}>My Orders</Text>
                    <Right>
                        <Icon name="search" size={22} style={styles.headericon2} />
                    </Right>
                </Header>



                <FlatList
                    data={this.state.fetcheddata.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Orderdetail', item.id)}>
                            <View style={styles.mainview}>

                                <View >
                                    <View style={styles.orderidview}>
                                        <Text style={styles.orderid}>Order ID : {item.id}</Text>
                                    </View>
                                    <View style={styles.orderdateview}>
                                        <Text style={styles.orderdate}>Orderd Date : {item.created}</Text>
                                    </View>
                                </View>

                                <View style={styles.costview}>
                                    <Text style={styles.cost}>&#8377; {item.cost}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => '' + index}
                />

            </View>


        );
    }
}

