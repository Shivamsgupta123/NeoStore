import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor, ProductProducer } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        paddingRight: Platform.OS === 'ios' ? 0 : 14,
        fontFamily: FontMedium
    },
    productproducer: {
        color: ProductProducer,
        fontSize: 15,
        marginLeft: 8,
        fontFamily: FontBook
    },
    productcost: {
        color: HeaderColor,
        fontSize: 23,

        fontWeight: '600'
    },
    shareicon: {
        color: "#7F7F7F",


    },

})