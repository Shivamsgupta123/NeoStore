import { Platform, StyleSheet, Dimensions } from 'react-native';
// import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
// import { LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFont, ButtonTextSize } from '../../../utils/FontSizes';

export default styles = StyleSheet.create({
    circle: {
        width: 15,
        height: 15,
        marginRight: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15 / 2,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    square: {
        width: 7,
        height: 7,
    },
    checkboxContainer: {
        width: 12,
        height: 12,
        borderColor: '#ffffff',
        borderWidth: 1,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});