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
    }

});