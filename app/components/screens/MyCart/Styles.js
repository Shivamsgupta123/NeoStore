import { Platform, StyleSheet, Dimensions } from 'react-native';
// import { ButtonText } from '../../../Utils/Colors';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';
export default styles = StyleSheet.create({
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        paddingRight: Platform.OS === 'ios' ? 0 : 15,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    mainview: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
        backgroundColor: "white"


    },
    productimage: {
        height: 90,
        width: 82,
        borderWidth: 1,
        borderColor: "grey"
    },
    productname: {
        fontSize: 20,
        color: "#1C1C1C",
        fontWeight: "300",
        paddingLeft: 15,
        fontFamily: FontBook

    },
    productcategory: {
        paddingLeft: 15,
        fontWeight: "200",
        fontSize: 17,
        color: "#606163",
        fontFamily: FontBook

    },
    quantity: {
        fontSize: 19,
        paddingLeft: 35,
        fontWeight: "100",
        color: "#1C1C1C"
    },
    subview: {
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        // justifyContent: "space-between",
        alignItems: 'center',
        // width: "65%"


    },
    productcost: {
        fontSize: 19,
        fontWeight: "300",
        color: "#1C1C1C",
        paddingLeft: Platform.OS === 'ios' ? 115 : 102,
        fontFamily: FontBook


    },
    totalview: {
        // flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 11,
        // borderTopWidth: 1,
        borderColor: "grey",

    },
    producttotal: {
        fontSize: 21,
        fontWeight: "300",
        color: "#1C1C1C",
        fontWeight: "500",
        fontFamily: FontMedium
    },
    orderbutton: {
        borderWidth: 1,
        backgroundColor: ButtonText,
        height: Platform.OS === 'ios' ? "45%" : "50%",
        width: "94%",
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center"
    },
    orderbuttontext: {
        color: White,
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 7 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    buttonview: {
        // padding: "5%",
        height: "20%",
        justifyContent: 'center',
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "grey",

    },
    countlist: {
        paddingLeft: 3,

        color: "#1C1C1C"

    },
    quantitylist: {
        paddingLeft: 28,

        // fontSizes: 15,
        // width: 10
    },
    productquantitytext: {
        fontSize: Platform.OS === "ios" ? 18 : 20,
        fontWeight: "100",
        color: "#606163",
        fontFamily: FontBook

    },
    dropdowntext: {
        fontSize: Platform.OS === "ios" ? 16 : 19,
        fontWeight: "100",
        color: "#606163",
        width: 35
    },
    deletebutton: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        height: 110,
        width: 50,

    },
    del: {
        borderRadius: 17,
        backgroundColor: 'red',
        padding: 4,
        width: 35,
        height: 35,
        textAlign: 'center',
        color: "white"
    },
    quantitysubview: {
        flexDirection: "row",
        backgroundColor: "#b3b5b7",
        paddingLeft: 6,
        paddingRight: 6
    },
    iconback: {
        color: White,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    }





})