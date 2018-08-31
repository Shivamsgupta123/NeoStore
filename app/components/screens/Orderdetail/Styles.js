import { Platform, StyleSheet, Dimensions } from 'react-native';
// import { ButtonText } from '../../../Utils/Colors';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({
    headertitle: {
        color: White, textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        fontFamily: FontBold
    },
    mainview: {
        // height: Dimensions.get('window').height,
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'grey'

    },
    productimage: {
        height: 90,
        width: 82,
        borderWidth: 1,
        borderColor: "grey"
    },
    productname: {
        fontSize: Platform.OS === 'ios' ? 21 : 19,
        color: "#1C1C1C",
        fontWeight: "300",
        paddingLeft: 15,
        fontFamily: FontBook

    },
    productcategory: {
        paddingLeft: 15,
        fontWeight: "200",
        fontSize: 19,
        color: "#6b6b6b"

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
        borderBottomWidth: 1

    },
    producttotal: {
        fontSize: 18,
        fontWeight: "300",
        color: "#1C1C1C",
        fontWeight: "500",
        fontFamily: FontBold
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
        paddingLeft: 15,
        fontSize: 18,
        fontWeight: "200",
        color: "#333333",
        fontFamily: FontBook
        // fontSizes: 15,
        // width: 10
    },




})