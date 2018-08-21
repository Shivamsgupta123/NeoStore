import { Platform, StyleSheet, Dimensions } from 'react-native';
import { ProductProducer, White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import { DetailScreenFont, HeaderTextFontWeight, HeaderText, LogoSize, LogoFontWeight, LogoPadding, TextInputFont, RegularFont, ButtonTextSize } from '../../../utils/FontSizes';

export default styles = StyleSheet.create({

    button: {

        borderWidth: 1,
        backgroundColor: HeaderColor,
        height: 60,
        width: 170,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: Platform.OS == 'ios' ? 0 : 8,




    },
    buttontext: {

        color: White,
        fontWeight: "bold",
        fontSize: ButtonTextSize

    },
    headertitle: {
        color: White,
        textAlign: 'center',
        fontSize: HeaderText,
        width: 230,
        fontWeight: HeaderTextFontWeight
    },

    button1: {

        borderWidth: 1,
        backgroundColor: "#c8cbd1",
        height: 60,
        width: 170,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center",
        marginRight: Platform.OS == 'ios' ? 0 : 8,




    },
    buttontext1: {

        color: "#7F7F7F",
        fontWeight: "bold",
        fontSize: ButtonTextSize

    },
    popupbutton: {

        color: "#7F7F7F",
        fontWeight: "bold",
        fontSize: ButtonTextSize,
        paddingLeft: 10


    },


    popupback: {

        borderWidth: 1,
        backgroundColor: "#c8cbd1",
        height: 60,
        width: 130,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center",
        marginRight: Platform.OS == 'ios' ? 0 : 8,

    },

    ratingbutton: {

        borderWidth: 1,
        backgroundColor: HeaderColor,
        height: 60,
        width: 130,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: White,
        justifyContent: "center",
        alignItems: "center",
    },
    buypopupimage: {

        width: 250,
        height: 140,
        marginTop: Platform.OS === 'ios' ? 5 : 12,
        borderWidth: 2,
        borderColor: "#7F7F7F"

    },
    ratingbuttontext: {

        color: White,
        fontWeight: "bold",
        fontSize: ButtonTextSize

    },
    buypopuptext: {
        fontSize: 25,
        paddingTop: 12,
        paddingBottom: 10
    },
    textinput: {
        textAlign: 'center',
        // padding:20,
        height: Platform.OS == 'ios' ? 40 : 50,
        width: 130,
        borderWidth: 2,
        borderColor: "green",
        fontSize: 25
    },
    productname: {
        color: "#111111",
        fontSize: 25,
        fontWeight: '600',
        marginLeft: 8,
        marginTop: 4
    },
    subview1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "95%"
    },
    productproducer: {
        color: ProductProducer,
        fontSize: 17,
        marginLeft: 8
    },
    subview2: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "90%"
    },
    productcost: {
        color: HeaderColor,
        fontSize: 25,
        marginTop: 35,
        fontWeight: '600'
    },
    subview3: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    productimage: {
        width: 250,
        height: 150,
        marginTop: 12,
    },
    subview4: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15
    },
    productdescription: {
        color: "#111111",
        fontSize: 25,
        fontWeight: '600',
        marginLeft: 12
    },
    productdetail: {
        color: "#333333",
        fontSize: Platform.OS === 'ios' ? 20 : 16,
        marginLeft: 12,
        marginRight: 12
    },
    subview5: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Platform.OS == 'ios' ? 10 : 0
    },
    modalview1: {
        flex: 1,
        backgroundColor: White,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalview2: {
        fontSize: 30,
        fontWeight: "700",
        paddingBottom: 40
    },
    modalimage: {
        width: 250,
        height: 160,
        marginTop: 12,
    },
    modalview3: {
        flex: 1,
        justifyContent: 'center',
        width: "95%",
        height: 50
    },
    modalview4: {
        flex: 1,
        justifyContent: 'center',
        width: "95%",
        height: "50%"
    },
    buypopupname: {
        fontSize: 30,
        fontWeight: "700",
        paddingBottom: 40
    },
    modalview5: {
        flex: 1,
        backgroundColor: White,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainview: {
        flex: 1,
        paddingBottom: 10,
        height: Dimensions.get('window').height
    }




});