import { Platform, StyleSheet, Dimensions } from 'react-native';
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
        paddingRight: Platform.OS === 'ios' ? 0 : 14,
        fontFamily: FontMedium
    },
    buttonview: {
        flex: 1,
        paddingTop: "2%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    orderbutton: {
        borderWidth: 1,
        backgroundColor: White,
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
        color: HeaderColor,
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        fontFamily: FontMedium,
        paddingTop: Platform.OS === "ios" ? 7 : 0
    },
})