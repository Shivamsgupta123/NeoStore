import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Image, Text, ImageBackground, TextInput, TouchableOpacity, Platform, Dimensions, KeyboardAvoidingView, ScrollView, } from 'react-native';
import styles from './Styles';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cartitem } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { AsyncStorage } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';


export default class MyCart extends Component {
    constructor(props) {
        super(props)
        this.state = { fetcheddata: [], Loading: true }
    }

    componentDidMount() {
        GlobalAPI(cartitem, "GET", null, null, response => {
            if (response.status == 200) {
                // console.log("mycart123", response)
                this.setState({
                    fetcheddata: response,
                    Loading: false
                }
                );
                console.log("mycart", this.state.fetcheddata)
            }
        },
            error => {
                console.log(error)
            }
        )
    }

    show() {
        <ModalDropdown options={['1', '2', '3', '4', '5']} />

    }

    render() {
        if (this.state.Loading)
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" />
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={22} color="#f9fbff" />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headertitle}>My Cart</Text>
                    </Body>
                    <Right>
                        <Icon name="search" size={22} color="#f9fbff" />
                    </Right>

                </Header>

                <View style={{ flex: 1 }}>

                    {/* Display cart items */}
                    <FlatList
                        data={this.state.fetcheddata.data}
                        renderItem={({ item }) => (
                            <View style={styles.mainview}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={{ uri: item.product.product_images }} style={styles.productimage} />
                                </View>
                                <View >
                                    <Text style={styles.productname}>{item.product.name}</Text>
                                    <Text style={styles.productcategory}>({item.product.product_category})</Text>
                                    <View style={styles.subview}>
                                        <Text style={styles.quantity}>{item.quantity}</Text>
                                        <TouchableOpacity onPress={() => this.show()}>
                                            <Icon name="angle-down" style={styles.countlist} size={25} color="#1C1C1C" />
                                        </TouchableOpacity>
                                        <Text style={styles.productcost}>Rs. {item.product.sub_total}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => '' + index}
                    />
                    <View style={styles.totalview}>
                        <Text style={styles.producttotal}>TOTAL</Text>
                        <Text style={styles.producttotal}>Rs. {this.state.fetcheddata.total}</Text>
                    </View>
                    <View style={styles.buttonview}>
                        <TouchableOpacity style={styles.orderbutton}>
                            <Text style={styles.orderbuttontext}>ORDER NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}