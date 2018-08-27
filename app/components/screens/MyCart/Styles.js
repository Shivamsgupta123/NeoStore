import { Platform, StyleSheet, Dimensions } from 'react-native';
// import { ButtonText } from '../../../Utils/Colors';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';

export default styles = StyleSheet.create({
    headertitle: {
        color: White, textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight
    },
    mainview: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
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
        fontSize: 23,
        color: "#1C1C1C",
        fontWeight: "300",
        paddingLeft: 30

    },
    productcategory: {
        paddingLeft: 30,
        fontWeight: "200",
        fontSize: 19,
        color: "#606163"

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
        paddingLeft: Platform.OS === 'ios' ? 110 : 100,


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
        fontWeight: "500"
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
    buttonview: {
        padding: 15,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: "grey",

    },
    countlist: {
        paddingLeft: 0,
        color: "#1C1C1C"

    },
    quantitylist: {
        paddingLeft: 40,

        // fontSizes: 15,
        // width: 10
    },
    productquantitytext: {
        fontSize: Platform.OS === "ios" ? 18 : 20,
        fontWeight: "100",
        color: "#606163"

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
        padding: 2,
        width: 35,
        height: 35,
        textAlign: 'center',
    }




})