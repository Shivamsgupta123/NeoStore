import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Image, Text, ImageBackground, TextInput, TouchableOpacity, Platform, Dimensions, KeyboardAvoidingView, ScrollView, } from 'react-native';
import styles from './Styles';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { orderdetail } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import { AsyncStorage } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


export default class Orderdetail extends Component {
    constructor(props) {
        super(props)
        console.log("order", props)
        this.state = { fetcheddata: [], Loading: true, Quantity: '' }
    }

    componentDidMount() {
        let url = orderdetail + "?order_id=" + this.props.navigation.state.params;
        GlobalAPI(url, "GET", null, null, response => {
            if (response.status == 200) {
                console.log("mycart123", response)
                this.setState({
                    fetcheddata: response,
                    Loading: false
                }
                );
                console.log("mycart", this.state.fetcheddata.data.order_details[0].id)
            }
        },
            error => {
                console.log(error)
            }
        )
    }

    setquantity(index, value) {
        // console.log("ind", index)
        this.setState({ Quantity: value })
        console.log("qty", this.state.Quantity)


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
                        <Text style={styles.headertitle}>Order ID :{this.props.navigation.state.params} </Text>
                    </Body>
                    <Right>
                        <Icon name="search" size={22} color="#f9fbff" />
                    </Right>

                </Header>

                <View>

                    {/* Display cart items */}
                    <FlatList
                        data={this.state.fetcheddata.data.order_details}
                        renderItem={({ item }) => (
                            <View style={styles.mainview}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={{ uri: item.prod_image }} style={styles.productimage} />
                                </View>
                                <View >
                                    <Text style={styles.productname}>{item.prod_name}</Text>
                                    <Text style={styles.productcategory}>({item.prod_cat_name})</Text>
                                    <View style={styles.subview}>
                                        <Text style={styles.quantitylist}>QTY : {item.quantity}</Text>
                                        <Text style={styles.productcost}>&#8377; {item.total}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => '' + index}
                    />
                    <View style={styles.totalview}>
                        <Text style={styles.producttotal}>TOTAL</Text>
                        <Text style={styles.producttotal}>&#8377; {this.state.fetcheddata.data.cost}</Text>
                    </View>

                </View>
            </View>

        )
    }
}