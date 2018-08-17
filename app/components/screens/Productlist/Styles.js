import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ProductlistFont, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, ProductlistTitle, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';

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
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    productimage: {
        height: 90,
        width: 90
    },
    productname: {
        fontSize: Platform.OS === 'ios' ? 22 : 20,
        color: ProductlistFont,
        padding: 2
    },
    itemcount: {
        fontSize: 20,
        paddingLeft: 7,
        paddingRight: 7,
        color: "#111111",
        backgroundColor: "#7a7676"
    }

});