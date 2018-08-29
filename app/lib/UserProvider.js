
export let UserObject = {
    user_data: {
        first_name: '',
        last_name: '',
        email: '',
        profile_pic: '',
        gender: '',
        phone_no: null,
        dob: null,
        access_token: ''
    },
    product_categories: [],
    total_carts: null,
    total_orders: null,
}
export const UserProvider = {
    setUserData: (response) => {
        UserObject = response
        console.log("userobj", UserObject)
    },
    setUserInfo: (key, value) => {
        UserObject[key] = value
        // console.log("updated", UserObject)
    }
}
