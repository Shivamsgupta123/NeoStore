import React, { Component } from 'react';
import { View, FlatList, Dimensions, ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cartitem, editcart, deletecartitem } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import ModalDropdown from 'react-native-modal-dropdown';
import { SwipeListView } from 'react-native-swipe-list-view';


export default class MyCart extends Component {
    constructor(props) {
        super(props)
        this.state = { fetcheddata: [], Loading: true, Quantity: '', product_ID: '' }
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

    setquantity(index, value) {
        this.setState({ Quantity: value })

        console.log("value", this.state.Quantity)

        let formData = new FormData();
        formData.append("product_id", index)
        // console.log("index", index)
        formData.append("quantity", value)
        GlobalAPI(editcart, "POST", formData, null, response => {
            if (response.status == 200) {
                alert("Quantity Updated")
                this.setState({

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
        return true
    }

    deleteItem(item) {
        console.log("item", item)
        let formData = new FormData();
        formData.append("product_id", item.item.product.id)
        console.log("formData", formData)
        GlobalAPI(deletecartitem, "POST", formData, null, response => {
            if (response.status == 200) {
                console.log("deletd")
                // alert("Item Deleted")
                this.setState({

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

    render() {
        this.leftOpenValue = Dimensions.get('window').width;
        this.rightOpenValue = -Dimensions.get('window').width;
        if (this.state.Loading)
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" />
        return (
            <View pointerEvents={this.state.Loading ? "none" : "auto"} style={{ flex: 1, backgroundColor: "white" }}>
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


                    <SwipeListView
                        useFlatList
                        data={this.state.fetcheddata.data}
                        disableRightSwipe={true}
                        renderItem={({ item }, rowMap) => (
                            <View style={styles.mainview}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={{ uri: item.product.product_images }} style={styles.productimage} />
                                </View>
                                <View >
                                    <Text style={styles.productname}>{item.product.name}</Text>
                                    <Text style={styles.productcategory}>({item.product.product_category})</Text>
                                    <View style={styles.subview}>

                                        <ModalDropdown
                                            style={styles.quantitylist}
                                            options={['1', '2', '3', '4', '5', '6', '7', '8']}
                                            // defaultValue={item.quantity}
                                            textStyle={styles.productquantitytext}
                                            onSelect={(index, value) => { return this.setquantity(item.product.id, value) }}
                                            dropdownTextStyle={styles.dropdowntext}
                                        >
                                            <View style={{ flexDirection: "row" }}>
                                                <Text>{item.quantity}</Text>
                                                <Icon name="angle-down" style={styles.countlist} size={25} color="#1C1C1C" />
                                            </View>
                                        </ModalDropdown>
                                        {/* </View> */}
                                        <Text style={styles.productcost}>Rs. {item.product.sub_total}</Text>
                                    </View>
                                </View>
                            </View>


                        )}
                        renderHiddenItem={(item, rowMap) => (
                            <View style={styles.deletebutton}>

                                <TouchableOpacity onPress={() => this.deleteItem(item)}>
                                    <Icon style={styles.del} name="trash" size={30} color="white" />
                                </TouchableOpacity>
                            </View>
                        )}
                        // leftOpenValue={75}
                        rightOpenValue={-75}
                        keyExtractor={(item, index) => '' + index}
                    />

                    <View style={styles.totalview}>
                        <Text style={styles.producttotal}>TOTAL</Text>
                        <Text style={styles.producttotal}>Rs. {this.state.fetcheddata.total}</Text>
                    </View>
                    <View style={styles.buttonview}>
                        <TouchableOpacity style={styles.orderbutton}>
                            {this.state.Loading ? <ActivityIndicator size="large" color="red" /> : <Text style={styles.orderbuttontext}>ORDER NOW</Text>}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}