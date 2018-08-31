import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ProductlistFont, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, ProductlistTitle, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({
    productList: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        borderWidth: 1,
        borderColor: 'green'
    },

    productproducer: {
        fontSize: 15,
        color: ProductlistFont,
        paddingLeft: 9
    },
    productcost: {
        fontSize: ProductlistTitle,
        color: HeaderColor,
        padding: 7
    },
    mainview: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 13,
        paddingLeft: 13,
        paddingBottom: 10,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    productimage: {
        height: 90,
        width: 90,
        borderColor: "grey",
        borderWidth: 1
    },
    productname: {
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        color: ProductlistFont,
        padding: 2,
        fontFamily: FontMedium
    },
    itemcount: {
        fontSize: 20,
        paddingLeft: 7,
        paddingRight: 7,
        color: "#111111",
        backgroundColor: "#7a7676"
    },
    headertext: {
        color: White,
        fontSize: HeaderText,
        marginLeft: Platform.OS === 'ios' ? -3 : 75,
        marginTop: Platform.OS === 'ios' ? 10 : 13,
        fontWeight: HeaderTextFontWeight,
        fontFamily: FontMedium
    },
    productproducer: {
        fontSize: 15,
        color: ProductlistFont, paddingLeft: 9,
        fontFamily: FontBook
    },
    ratingview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "77%"
    },
    productcost1: {
        fontSize: 18,
        color: HeaderColor,
        padding: 7,
        fontFamily: FontMedium
    }

});