import * as React from "react";
import {View, Text, StyleSheet, Button, Alert, SafeAreaView, FlatList} from "react-native";
import {ListItem} from "react-native-elements";
import axios from "axios";

export default class HomeScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            listData: [],
            url: 'http://127.0.0.1:5000/'
        }
    }

    componentDidMount()
    {
        this.getStar();
    }

    getStar =()=>
    {
        const {url} = this.state;
        axios
            .get(url)
            .then(response => {
                return this.setState({
                    listData: response.data.data
                });
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    }

    renderItem = ({item, index})=>
    (
        <ListItem
            key = {index}
            title = {`Star: ${item.name}`} //$ means to show the value present inside the {}
            subtitle = {`Distance from Earth ${item.distance}`}
            bottomDivider
            onPress = {() => {
                this.props.navigation.navigate('Information', {star_name: item.name})
            }}
        />
    )

    keyExtractor =(item, index)=>
    (
        index.toString()
    )

    render()
    {
        const {listData} = this.state
        if(listData.length === 0)
        {
            return(
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }

        return(
            <View>
                <SafeAreaView/>
                <View>
                    <Text>Stars</Text>
                </View>
                <FlatList
                    keyExtractor = {this.keyExtractor}
                    data = {this.state.listData}
                    renderItem = {this.renderItem}
                />
            </View>
        )
    }
}