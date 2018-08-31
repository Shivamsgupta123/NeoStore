import { Platform, StyleSheet, Dimensions } from 'react-native';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFon, HeaderTextFontWeight, HeaderText, ButtonTextSize } from '../../../utils/FontSizes';
import { FontBold, FontMedium, FontBook } from '../../../utils/Fonts';

export default styles = StyleSheet.create({
    mainview: {
        flex: 1,
        height: Dimensions.get('window').height
    },
    header: {
        backgroundColor: HeaderColor
    },
    headerleft: {
        paddingRight: -10
    },
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 250,
        fontWeight: HeaderTextFontWeight,
        paddingRight: Platform.OS === 'ios' ? 0 : 14,
        fontFamily: FontBold

    },
    headerright: {
        paddingRight: 8
    },
    container: {

        height: 230,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        height: 230,
        width: 400,
    },
    storename: {
        fontWeight: "500",
        color: "#333333",
        fontSize: 17,
        fontFamily: FontBold
    },
    address: {
        fontSize: 14,
        paddingTop: 5,
        color: "#4f4f4f",
        fontFamily: FontMedium

    },
    addressview: {
        paddingTop: 14,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "grey",
        paddingBottom: 10
    },
    addressview1: {
        paddingTop: 10
    },
    addresssubview: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "grey",
        paddingBottom: 15

    },
    iconView: {
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 6
    }

})