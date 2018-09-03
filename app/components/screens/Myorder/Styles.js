import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoHeaderText, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({
    headreicon1: {
        marginLeft: Platform.OS === 'ios' ? 10 : 0,
        color: "#f9fbff"
    },
    headericon2: {
        marginRight: 13.3,
        color: "#f9fbff"
    },
    headerText: {
        color: "white",
        fontSize: HeaderText,
        marginLeft: Platform.OS === 'ios' ? 0 : 65,
        fontWeight: HeaderTextFontWeight,
        marginTop: Platform.OS === 'ios' ? 10 : 10,
        fontFamily: FontMedium
    },
    mainview: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'grey',
        width: "100%",
        justifyContent: 'space-between'
    },
    orderid: {
        fontSize: 20,
        color: "#1c1c1c",
        fontWeight: "400",
        fontFamily: FontBook
    },
    orderdate: {
        color: "#4f4f4f",
        fontSize: 15,
        fontFamily: FontBook

    },
    costview: {
        marginLeft: Platform.OS === "ios" ? 230 : 230,



    },
    cost: {
        fontSize: 20,
        fontWeight: "400",
        color: "#333333",
        fontFamily: FontBook
    },
    orderidview: {
        paddingBottom: 5

    },
    orderdateview: {
        borderTopWidth: 0.5,
        width: 188,
        paddingTop: 5
    },
    costview: {
        justifyContent: 'center',
        // marginLeft: 60

    }

})