<FlatList

    data={this.state.fetcheddata}
    renderItem={({ item }) =>
        (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Productdetail', { Title: item.name, Id: item.id, })}>
                <View style={styles.mainview}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: item.product_images }} style={styles.productimage} />
                    </View>
                    <View>
                        <Text style={styles.productname}> {item.name}</Text>


                        <Text style={{ fontSize: 15, color: ProductlistFont, paddingLeft: 9 }}>{item.producer}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "77%" }}>
                            <Text style={{ fontSize: ProductlistTitle, color: HeaderColor, padding: 7 }}>Rs. {item.cost}</Text>

                            <Rating

                                type="custom"
                                fractions={1}
                                startingValue={item.rating}
                                readonly
                                imageSize={20}

                                ratingBackgroundColor='#7F7F7F'
                            // style={{ paddingVertical: 10 ,marginLeft:30}}
                            />
                            {/* </View> */}


                        </View>
                    </View>

                </View>
            </TouchableOpacity>

        )

    }
    keyExtractor={(item, index) => index}
/>








this.setState({
    list: list.concat(res.list),
    page: page + 1,
    limit: limit + 6
})










export const GlobalAPI = (api, method, body, headers, success_callback, error_callback) => {
    // console.log('head', header)
    AsyncStorage.getItem("access_token").then((value) => {
        let obj = { method: method, }

        // console.log('head123', headers)
        body != null ? obj["body"] = body : null
        value != null ? headers["access_token"] = value : null
        // console.log("headers123", headers)
        headers != null ? obj["headers"] = headers : null
        console.log('headers123', headers)

        fetch(
            api,
            obj)
            .then((response) => response.json())
            .then(response => {
                success_callback(response)

            })
            .catch(error => {
                error_callback(error)
            })


    })
}