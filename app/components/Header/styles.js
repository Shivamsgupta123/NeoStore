import {Platform, StyleSheet} from 'react-native';


export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // height: (globals.OS === 'ios')? 70: 50,
        width: '100%',
        // backgroundColor:white,
        alignItems: 'center'
    },
    Titlecontainer: {
        width: '70%',
        alignItems: 'center'
    },
    Backcontainer: {
        width: '15%',
        alignItems: 'center'
    },
    text: {
        alignItems: 'center',
        fontSize: 18,
        marginTop: 5,
        color:'white',
        // color: colors.black,
    },
    menuIcon: {
        backgroundColor: 'transparent',
        marginLeft: 10
    }

});
