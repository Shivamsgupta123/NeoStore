import React, { Component } from 'react';
import { View, Alert, FlatList, Dimensions, ActivityIndicator, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { HeaderColor } from '../../../utils/Colors';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import { cartitem, editcart, deletecartitem } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';
import ModalDropdown from 'react-native-modal-dropdown';
import { SwipeListView } from 'react-native-swipe-list-view';
import MapView, { Marker } from 'react-native-maps';

export default class StoreLocator extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { region } = this.props;
        console.log(region);
        return (
            <View style={styles.mainview}>
                <Header style={styles.header}>
                    <Left style={styles.headerleft}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="angle-left" size={22} color="#f9fbff" />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headertitle}>Store Locator</Text>
                    </Body>
                    <Right style={styles.headerright}>
                        <Icon name="search" size={22} color="#f9fbff" />
                    </Right>

                </Header>

                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                    >
                        <Marker
                            coordinate={{ latitude: 18.957045, longitude: -5327.199201 }}
                            title={"SKYLAND STORE"}
                            description={"Unit No 501, Sigma IT Park,MIDC,Rabale"}
                        />
                        <Marker
                            coordinate={{ latitude: 18.518659, longitude: -5326.145559 }}
                            title={"WOODMOUNT STORE"}
                            description={"1st Floor, Rajiv Gandhi-Infotech Park, Pune"}
                        />
                        <Marker
                            coordinate={{ latitude: 18.938422, longitude: -5327.165179 }}
                            title={"NEO STORE"}
                            description={"Ruby, shivam-Infotech Park, Mumbai"}
                        />
                        <Marker
                            coordinate={{ latitude: 19.019543, longitude: -5326.929107 }}
                            title={"FURNITURE STORE"}
                            description={"Ravi Nagar, Amravati"}
                        />

                    </MapView>

                </View>
                {/* <ScrollView> */}
                <View style={styles.addressview}>
                    <View style={styles.iconView}>
                        <Icon name="location" size={25} color="black" />
                    </View>
                    <View>
                        <Text style={styles.storename}>SKYLAND STORE</Text>
                        <Text style={styles.address}> Unit No 501, Sigma IT Park,MIDC,Rabale </Text>
                    </View>

                </View>
                <View style={styles.addresssubview}>
                    <View style={{ padding: 15 }}>
                        <Icon name="location" size={25} color="black" />
                    </View>
                    <View style={styles.addressview1}>
                        <Text style={styles.storename}>WOODMOUNT STORE</Text>
                        <Text style={styles.address}>1st Floor, Rajiv Gandhi-Infotech Park, Pune</Text>
                    </View>
                </View>
                <View style={styles.addresssubview}>
                    <View style={{ padding: 15 }}>
                        <Icon name="location" size={25} color="black" />
                    </View>
                    <View style={styles.addressview1}>
                        <Text style={styles.storename}>NEO STORE</Text>
                        <Text style={styles.address}>Ruby, shivam-Infotech Park, Mumbai</Text>
                    </View>
                </View>
                <View style={styles.addresssubview}>
                    <View style={{ padding: 15 }}>
                        <Icon name="location" size={25} color="black" />
                    </View>
                    <View style={styles.addressview1}>
                        <Text style={styles.storename}>FURNITURE STORE</Text>
                        <Text style={styles.address}>Ravi Nagar, Amravati</Text>
                    </View>
                </View>
                {/* </ScrollView> */}

            </View>
        )
    }
}