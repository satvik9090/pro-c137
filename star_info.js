import * as React from "react";
import {View, Text, StyleSheet, Button, Alert, SafeAreaView, FlatList} from "react-native";
import axios from "axios";

export default class StarInfo extends React.Component
{  
    constructor(props)
    {
        super(props);
        this.state = 
        {
            details: {},
            imagePath: '',
            url: `http://localhost:5000/planet?name=${this.props.navigation.getParam( "star_name" )}`
        }
    }

    getDetails =()=>
    {
        const {url} = this.state;
        axios.get(url)
        //response is the data present in url
        .then(response => {
            this.setDetails(response.data.data)
        })
        .catch(error => {Alert.alert(error.message)})
    }

    render()
    {
        return(
            <View>
                <Text>Star Information Screen</Text>
            </View>
        )
    }
}