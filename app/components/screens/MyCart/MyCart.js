import React, { Component } from 'react';
import { View, Alert, FlatList, Dimensions, ActivityIndicator, Image, Text, TouchableOpacity, Vibration } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title, Toast } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import { cartitem, editcart, deletecartitem } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import ModalDropdown from 'react-native-modal-dropdown';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from "react-redux";

const addUpdateData = (data) => {
    return {
        type: 'ADD_UPDATE_DATA',
        data
    }
}

class MyCart extends Component {
    constructor(props) {
        super(props)
        this.state = { fetcheddata: [], autoplay: true, Loading: true, Quantity: null, product_ID: '' }
    }

    componentDidMount() {
        this.fetchResult()
    }
    fetchResult() {
        GlobalAPI(cartitem, "GET", null, null, response => {
            if (response.status == 200) {
                // console.log("mycart123", response)
                this.setState({
                    fetcheddata: response,
                    Loading: false,
                    // Quantity: this.state.fetcheddata.data[0].quantity
                }
                );
                console.log("value", this.state.fetcheddata)
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
    componentWillUnmount() {
        console.log("welcome")
    }
    setquantity(index, id, value, item) {
        this.setState({})
        this.state.fetcheddata.data[index].quantity = value
        this.setState({ Loading: true })
        // console.log("value", value)
        // console.log("value1", this.state.Quantity)
        let formData = new FormData();
        formData.append("product_id", id)
        // console.log("index", index)
        formData.append("quantity", value)
        GlobalAPI(editcart, "POST", formData, null, response => {
            if (response.status == 200) {
                Vibration.vibrate(200)
                this.state.fetcheddata.total = this.state.fetcheddata.total - this.state.fetcheddata.data[index].product.sub_total
                // console.log("subtotal", this.state.fetcheddata.data[index].product.sub_total)
                var cost = this.state.fetcheddata.data[index].product.cost
                var total = cost * value
                // this.state.fetcheddata.total = this.state.fetcheddata.total - this.state.fetcheddata.total - this.state.fetcheddata.data[index].product.sub_total
                item.product.sub_total = total
                this.state.fetcheddata.total = this.state.fetcheddata.total + total
                // console.log("cost", total)
                Toast.show({
                    text: 'Quantity Updated.',
                    duration: 2000,
                    type: "success"
                })
                this.setState({
                    Loading: false,
                }
                );
            }
        },
            error => {
                console.log(error)
            }
        )
        return true
    }
    deleteItem(index, item) {
        Alert.alert(
            'Delete!',
            'Remove Item From Cart?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.delete(index, item) },
            ],
            { cancelable: false }
        )
    }
    delete(index, item) {
        this.setState({ Loading: true })
        let formData = new FormData();
        formData.append("product_id", item.item.product_id)
        GlobalAPI(deletecartitem, "POST", formData, null, response => {
            if (response.status == 200) {
                Vibration.vibrate(200)
                this.props.addUpdateData({ total_carts: response.total_carts })
                this.state.fetcheddata.total = this.state.fetcheddata.total - item.item.product.sub_total
                // console.log("deletd", response)
                this.state.fetcheddata.data.splice(item.index, 1)
                Toast.show({
                    text: 'Item Deleted',
                    duration: 2000,
                    type: "success"
                })
                this.setState({
                    Loading: false,
                }
                );
            }
        },
            error => {
                console.log(error)
            }
        )
    }
    render() {
        // console.log("fetchdata", this.state.fetcheddata)
        console.log("data lenght", this.state.fetcheddata.data)
        this.leftOpenValue = Dimensions.get('window').width;
        this.rightOpenValue = -Dimensions.get('window').width;
        // if (this.state.Loading)
        //     return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" />
        return (
            <View pointerEvents={this.state.Loading ? "none" : "auto"} style={{ flex: 1, backgroundColor: "white" }}>
                <Header style={{ backgroundColor: HeaderColor }}>
                    <Left >
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="angle-left" size={22} style={styles.iconback} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headertitle}>My Cart</Text>
                    </Body>
                    <Right style={{ paddingRight: 7 }}>
                        <Icon name="search" size={22} style={styles.iconback} />
                    </Right>
                </Header>

                {this.state.fetcheddata.data == null || this.state.fetcheddata.data.length == 0 ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>Cart Is Empty!</Text></View> :
                    // <View>
                    <View style={{ flex: 1 }}>


                        {/* Display cart items */}


                        <SwipeListView
                            useFlatList
                            data={this.state.fetcheddata.data}
                            disableRightSwipe={true}
                            renderItem={({ item, index }) => (
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
                                                onSelect={(i, value) => { return this.setquantity(index, item.product_id, value, item) }}
                                                dropdownTextStyle={styles.dropdowntext}
                                            >
                                                <View style={styles.quantitysubview}>
                                                    <Text>{item.quantity}</Text>
                                                    <View style={{ paddingTop: 5 }} >
                                                        <Icon name="angle-down" style={styles.countlist} size={12} />
                                                    </View>
                                                </View>
                                            </ModalDropdown>
                                            {/* </View> */}
                                            <Text style={styles.productcost}>Rs. {item.product.sub_total}</Text>
                                        </View>
                                    </View>
                                </View>


                            )}
                            renderHiddenItem={(item, index) => (
                                <View style={styles.deletebutton}>

                                    <TouchableOpacity onPress={() => this.deleteItem(index, item)}>
                                        <Icon style={styles.del} name="delete" size={25} />
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
                            <TouchableOpacity style={styles.orderbutton} onPress={() => this.props.navigation.push('AddressList')}>
                                {this.state.Loading ? <ActivityIndicator size="large" color="White" /> : <Text style={styles.orderbuttontext}>ORDER NOW</Text>}
                            </TouchableOpacity>
                        </View>

                    </View>
                    // </View>
                }
            </View>

        )
    }
}
const mapStateToProps = (state) => {
    console.log("mycart state", state)
    return {
        state
    }
}
export default connect(mapStateToProps, { addUpdateData })(MyCart)