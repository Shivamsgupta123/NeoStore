import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TextInput, TouchableOpacity, Platform, Dimensions, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { White, ButtonText, PlusIconBackground, HeaderColor } from '../../../utils/Colors';
import Editprofile from '../Editprofile/Editprofile';
import { AsyncStorage } from 'react-native';
// import { login } from '../../../lib/api';
import { _login, fetchaccountdetail, prductlist, productdetail, productrating, register, changepassword } from '../../../lib/api';
import { GlobalAPI } from '../../../lib/Globals';


export default class Login extends Component {
    constructor(props) {
        super(props)

    }


    state = {
        Username: '',
        Password: '',
        Loading: false

    }


    componentWillMount = async () => {
        let user = await AsyncStorage.getItem('Username')

        // if (user != null) {
        //     this.setState({ Loading: false })
        //     this.props.navigation.navigate('Homescreen')
        // }
        // this.setState({ Loading: false })


    }



    validate() {
        var emailreg = /\S+@\S+\.\S+/;
        var passwordreg = /^[0-9a-zA-Z]+$/;

        if (this.state.Username == "" || !this.state.Username.match(emailreg)) {
            alert("Enter Valid User Name.")
            return false
        }
        else
            if (this.state.Password == "" || !this.state.Password.match(passwordreg) || this.state.Password.length < 8) {
                alert("Enter alphanumeric password having atleast 8 characters.")
                return false
            }
            else
                this.login()

    }

    userdetails(access_token) {
        GlobalAPI(fetchaccountdetail, "GET", null, { "shivam": "gupta" }, (response) => {

            if (response.status == 200) {

                this.props.navigation.replace('MyApp', response)
                this.setState({ Loading: true })
            }
            else
                alert(response.user_msg)

        }, error => {
            console.log(error.error)

        }
        )



    }

    login() {

        let formData = new FormData();
        formData.append('email', this.state.Username);
        formData.append('password', this.state.Password);

        GlobalAPI(_login, "POST", formData, null, response => {

            if (response.status == 200) {
                // console.log(response.data.access_token)


                AsyncStorage.setItem("access_token", response.data.access_token, () => {
                    this.userdetails(response.data.access_token);
                    this.setState({ Loading: true })
                })
                AsyncStorage.setItem("ResponseData", JSON.stringify(response))



            }
            else {
                alert(response.user_msg)
                // alert("Connection Failed!")
            }
        }, error => {
            console.log(error.error)
            alert("Connection Failed!")

        })


        // fetch(
        //     login
        //     , {
        //         method: 'POST',
        //         body: formData,
        //     })
        //     .then(response => response.json())
        //     .then(response => {
        //         if (response.status == 200) {
        //             console.log(response.data.access_token)

        //             alert("success")


        //             AsyncStorage.setItem("access_token", response.data.access_token, () => {
        //                 this.userdetails(response.data.access_token);
        //             })

        //             AsyncStorage.setItem("ResponseData", JSON.stringify(response))


        //         }
        //         else
        //             alert(response.user_msg)

        //     }
        //     )

    }


    render() {

        if (this.state.Loading)
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#e91b1a" />

        return (
            <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>

                <ImageBackground source={require('../../../assets/images/red_1.jpg')} style={{ flex: 1, borderColor: "red", borderWidth: 1, height: Dimensions.get("window").height }}>

                    <View style={styles.view1}>
                        <Text style={styles.neostore}>NeoSTORE</Text>

                        <View style={styles.view3}>
                            <Icon name="user" size={30} color="#FFFFFF" style={{ padding: Platform.OS === 'ios' ? 0 : 5 }} />
                            <TextInput returnKeyType={"next"} onChangeText={(text) => this.setState({ Username: text })} style={styles.textinput} placeholder="Username" placeholderTextColor={White} ></TextInput>

                        </View>
                        <View style={styles.view3}>
                            <Icon name="lock" size={30} color="#FFFFFF" style={{ padding: Platform.OS === 'ios' ? 0 : 5 }} />
                            <TextInput onChangeText={(text) => this.setState({ Password: text })} style={styles.textinput} secureTextEntry={true} placeholder="Password" placeholderTextColor={White} ></TextInput>
                        </View>
                        <TouchableOpacity onPress={() => this.validate()} style={styles.loginbutton}>
                            <Text style={styles.buttontext}>LOGIN</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpassword')}>
                            <Text style={styles.forgotpassword}>Forgot Password?</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.view2}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.newaccount}>DONT HAVE AN ACCOUNT?</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                                <FeatherIcon style={{ marginRight: 15, backgroundColor: PlusIconBackground, padding: 2 }} name="plus" size={40} color="#FFFFFF" />

                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
            </View>


        );
    }


}