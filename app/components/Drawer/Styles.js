import { Platform, StyleSheet, Dimensions } from 'react-native';


export default styles = StyleSheet.create({

    drawericon: {
        paddingTop: Platform.OS === 'ios' ? 9 : 3,
        paddingLeft: 20
    },
    drawericon1: {
        paddingTop: Platform.OS === 'ios' ? 11 : 6,
        paddingLeft: 20
    },
    drawertext: {
        color: 'white',
        fontSize: 18,
        paddingTop: Platform.OS === 'ios' ? 11 : 3,
        marginLeft: 25,
        fontWeight: '400',



    },
    mainview: {
        flex: 1,
        backgroundColor: '#2a2a2b',
    },
    username: {
        color: 'white',
        fontWeight: '500',
        fontSize: 25,
        paddingTop: 10

    },
    useremail: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16,
    },
    drawerview1: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent:'center'
        padding: 2,
        // borderColor:'white'
        borderBottomWidth: 1,
        borderColor: "#020202",


    },
    drawerview: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent:'center'
        padding: 2,
        // borderColor:'white'
        // borderBottomWidth: 1,
        // borderColor: "grey",
    },
    profileimage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: 'white',
        borderWidth: 2

    },
    cartitemcount: {
        // paddingTop: Platform.OS === 'ios' ? 16 : 10,
        color: "white",
        // height: 35,
        // width: 35,
        fontSize: 15,
        // marginLeft: 100,
        // backgroundColor: "red",
        // backgroundColor: "red",
        // borderRadius: 20,
        // borderWidth: 1
    },
    cartitemview: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 10 : 5,
        height: 26,
        width: 26,
        marginLeft: 100,
        backgroundColor: "red",
        borderRadius: 20,
        // borderWidth: 1

    }
});
