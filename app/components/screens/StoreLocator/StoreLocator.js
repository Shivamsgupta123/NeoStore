import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import { Icon } from '../../../utils/Icon/Icon';
import MapView, { Marker } from 'react-native-maps';
import Polyline from '@mapbox/polyline';

export default class StoreLocator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            coords: [],
            x: 'false',
            concat: null
        }

    }
    //Return Route from current location to store.
    async getDirections(startLoc, destinationLoc) {
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`)
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            console.log(points)
            let coords = points.map((point, index) => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            console.log(coords)
            this.setState({ coords: coords })
            this.setState({ x: "true" })
            return coords
            this.fitPadding()
        }
        catch (error) {
            console.log('masuk fungsi')
            this.setState({ x: "error" })
            return error
        }
    }

    //Return Current postion of user.
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("wokeeey");
                console.log("position", position);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            console.log(this.state.error),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }
    //Passing Latitude, Longitude of store location to getDirection().
    findRoute = (Latitude, Longitude) => {
        this.getDirections(`${this.state.latitude},${this.state.longitude}`, `${Latitude},${Longitude}`)
        this.map.fitToCoordinates([{ latitude: Latitude, longitude: Longitude }], {
            edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
            animated: true,
        });
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
                        ref={ref => { this.map = ref; }}
                        style={styles.map}
                        initialRegion={{
                            latitude: 19.137048,
                            longitude: 73.006706,
                            latitudeDelta: 1.1922,
                            longitudeDelta: 0.1421
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: 19.060298, longitude: 73.012019 }}
                            title={"SKYLAND STORE"}
                            description={"Unit No 501, Sigma IT Park,MIDC,Rabale"}
                        />
                        <Marker
                            coordinate={{ latitude: 18.519608, longitude: 73.856285 }}
                            title={"WOODMOUNT STORE"}
                            description={"1st Floor, Rajiv Gandhi-Infotech Park, Pune"}
                        />
                        <Marker
                            coordinate={{ latitude: 19.027566, longitude: 73.041950 }}
                            title={"NEO STORE"}
                            description={"Ruby, shivam-Infotech Park, Mumbai"}
                        />
                        <Marker
                            coordinate={{ latitude: 19.013751, longitude: 73.016312 }}
                            title={"FURNITURE STORE"}
                            description={"Ravi Nagar, Mumbai"}
                        />
                        {!!this.state.latitude && !!this.state.longitude && <Marker pinColor="green"
                            coordinate={{ "latitude": this.state.latitude, "longitude": this.state.longitude }}
                            title={"Your Location"}
                        />}

                        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
                            coordinates={this.state.coords}
                            strokeWidth={2}
                            strokeColor="red" />
                        }

                    </MapView>

                </View>
                <TouchableOpacity onPress={() => this.findRoute(19.060298, 73.012019)}>
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
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.findRoute(18.519608, 73.856285)} >
                    <View style={styles.addresssubview}>
                        <View style={{ padding: 15 }}>
                            <Icon name="location" size={25} color="black" />
                        </View>
                        <View style={styles.addressview1}>
                            <Text style={styles.storename}>WOODMOUNT STORE</Text>
                            <Text style={styles.address}>1st Floor, Rajiv Gandhi-Infotech Park, Pune</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.findRoute(19.027566, 73.041950)}>
                    <View style={styles.addresssubview}>
                        <View style={{ padding: 15 }}>
                            <Icon name="location" size={25} color="black" />
                        </View>
                        <View style={styles.addressview1}>
                            <Text style={styles.storename}>NEO STORE</Text>
                            <Text style={styles.address}>Ruby, shivam-Infotech Park, Mumbai</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.findRoute(19.013751, 73.016312)}>
                    <View style={styles.addresssubview}>
                        <View style={{ padding: 15 }}>
                            <Icon name="location" size={25} color="black" />
                        </View>
                        <View style={styles.addressview1}>
                            <Text style={styles.storename}>FURNITURE STORE</Text>
                            <Text style={styles.address}>Ravi Nagar, Mumbai</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* </ScrollView> */}
            </View>
        )
    }
}