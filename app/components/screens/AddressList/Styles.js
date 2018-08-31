import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';

export default styles = StyleSheet.create({
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        paddingRight: Platform.OS === 'ios' ? 0 : 14

    },
    headericon: {
        color: White
    },

    mainview: {
        flex: 1,
        backgroundColor: "white"
    },
    address: {
        fontSize: 18,
        color: "#1C1C1C",
        paddingBottom: 12,
        // borderBottomWidth: 1,
        borderColor: "grey"
    },
    radiobutton: {
        borderWidth: 3,
        borderColor: "grey",
        height: 25,
        width: 25,
        borderRadius: 12.5,
        justifyContent: "center",
        alignItems: "center"
        // backgroundColor: "black",
    },
    addressview: {
        flex: 1,
        // paddingTop: 15,
        // height: 120,
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"

    },
    radiobuttonfill: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        // backgroundColor: "grey",
    },
    radiobuttonfill1: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        backgroundColor: "white",
    },
    addresssubview: {
        borderColor: "grey",
        borderWidth: 1,
        height: 90,
        width: "88%",
        margin: 10,

    },
    closebutton: {

    },
    name: {
        paddingTop: 6,
        paddingLeft: 6,
        color: "#1C1C1C",
        fontWeight: "500",
        fontSize: 17
        // padd
    },
    add: {
        color: "#1C1C1C",
        paddingLeft: 6,
        paddingTop: 3,
        fontSize: 15
    },
    buttonview: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    closeicon: {
        marginTop: 6,
        marginRight: 6
    },
    buttonview1: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "grey",
    },
    orderbutton: {
        borderWidth: 1,
        backgroundColor: ButtonText,
        height: 55,
        width: Platform.OS === 'ios' ? 347 : 330,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center"
    },
    orderbuttontext: {
        color: White,
        fontWeight: "bold",
        fontSize: ButtonTextSize
    },
})