import { Platform, StyleSheet, Dimensions } from 'react-native';


export default styles = StyleSheet.create({

    drawericon: {
        paddingTop: Platform.OS === 'ios' ? 20 : 12,
        paddingLeft: 20
    },
    drawertext: {
        color: 'white',
        fontSize: 18,
        paddingTop: Platform.OS === 'ios' ? 20 : 12,
        marginLeft: 20,
        fontWeight: '400',

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
        fontSize: 16
    },
    drawerview: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent:'center'
        // padding:20,
        // borderColor:'white'

    },
    profileimage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: 'white',
        borderWidth: 2

    }
});
