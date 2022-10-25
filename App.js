import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StarInfo from "./screens/star_info";
import HomeScreen from "./screens/home";

export default function App()
{
    return <AppContainer/>
}

const appStackNavigator = createStackNavigator(
    {
        Home:
        {
            screen: HomeScreen,
            navigationOptions:
            {
                headerShown: false
            }
        },
        StarInformation:
        {
            screen: StarInfo
        }
    },
    {
        initialRouteName: 'Home'
    }
)

const AppContainer = createAppContainer(appStackNavigator);