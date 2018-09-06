import React, { Component } from 'react';
import { Text, Platform, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from '../../utils/Icon/Icon';
import styles from './Styles';
import { AsyncStorage } from 'react-native';
import { UserObject } from '../../lib/UserProvider';
// import { UserProvider } from '../../lib/Globals';
import { connect } from "react-redux";

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            profileimage: 'abc',
            autoplay: true,
            TotalCart: ''
        }
        console.log("Drawer props", props)
    }

    componentWillMount = async () => {
        var getdata = await AsyncStorage.getItem('ResponseData');
        // console.log("userobj21", UserObject)
        getdata = JSON.parse(getdata)

    }

    closeScreen = (screen, params = {}) => {
        setTimeout(() => {
            this.props.navigation.navigate(screen, params)
        }, 600)
        this.props.navigation.closeDrawer()
    }

    componentDidMount() {

        // const didBlurSubscription = this.props.navigation.addListener(
        //     'willFocus',
        //     payload => {

        //         this.setState({ autoplay: false })
        //         // console.log("autoplay", this.state.autoplay)
        //         // console.log('called25')
        //     }
        // );
    }
    logout = async () => {
        try {
            AsyncStorage.removeItem("access_token");
        }
        catch (exception) {
            alert("failed.")

        }
        this.props.navigation.replace('Login')
    }
    render() {
        return (
            <View style={styles.mainview}>
                {/* <View style={{ alignItems: 'center', padding: 20 }}> */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Myaccount')}>
                    <View style={{ alignItems: 'center', padding: 20 }}>
                        <Image style={styles.profileimage} source={{ uri: this.props.state.user_data.profile_pic }} />
                        <Text style={styles.username}>{this.props.state.user_data.first_name} {this.props.state.user_data.last_name}</Text>
                        <Text style={styles.useremail}>{this.props.state.user_data.email}</Text></View>

                </TouchableOpacity>
                {/* </View> */}
                {/* <ScrollView> */}
                <View style={styles.drawerview2}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.closeScreen('MyCart')}>
                        <Icon name="cart" style={styles.drawericon} size={28} color="#FFFFFF" />
                        <Text style={styles.drawertext}>My Cart</Text>
                        <View style={styles.cartitemview}>
                            <Text style={styles.cartitemcount}>{this.props.state.total_carts}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.closeScreen('Productlist', { Title: 'Tables', Id: "1" })}>
                        <Icon name="table" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Tables</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.closeScreen('Productlist', { Title: 'Sofas', Id: "3" })}>
                        <Icon name="sofa" style={styles.drawericon} size={30} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Sofas</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.closeScreen('Productlist', { Title: 'Chairs', Id: "2" })}>
                        <Icon name="chair" style={styles.drawericon} size={28} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Chairs</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.closeScreen('Productlist', { Title: 'Cupboards', Id: "5" })}>
                        <Icon name="cupboard" style={styles.drawericon} size={26} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Cupboards</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.closeScreen('Myaccount')}>
                        <Icon name="user" style={styles.drawericon} size={25} color="#FFFFFF" />
                        <Text style={styles.drawertext}>My Account</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.closeScreen('StoreLocator')}>
                        <Icon name="location" style={styles.drawericon} size={25} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Store Locators</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.closeScreen('Myorder')}>
                        <Icon name="myorder" style={styles.drawericon} size={28} color="#FFFFFF" />
                        <Text style={styles.drawertext}>My Orders</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerview1}>
                    <TouchableOpacity style={styles.drawerview} onPress={() => this.logout()} >
                        <Icon name="logout" style={styles.drawericon} size={25} color="#FFFFFF" />
                        <Text style={styles.drawertext}>Logout</Text>
                    </TouchableOpacity>
                </View>
                {/* </ScrollView> */}
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("Drawer state", state)
    return {
        state
    }
}
export default connect(mapStateToProps)(Drawer)