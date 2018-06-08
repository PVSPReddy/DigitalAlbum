import React, { Component } from "react";
import { StackNavigator, NavigatorDrawer, TabNavigator, TabBarTop } from "react-navigation";//npm install --save react-navigation
//import App from '../../App';
import UserLoginScreen from "../ParentViews/UserLogin";
import UserRegisterScreen from "../ParentViews/UserRegister";
import UserHomeScreen from "../ParentViews/UserHome";

const mainNavigator = StackNavigator({
    // App : {
    //     screen : App,
    //     navigationOptions : {
    //         gesturesEnabled: false,
    //         header: false
    //     }
    // },
    LoginScreen : {
        screen : UserLoginScreen,
        navigationOptions : {
            gesturesEnabled: false,
            header: false
        }
    },
    RegisterScreen : {
        screen : UserRegisterScreen,
        navigationOptions : {
            gesturesEnabled: false,
            header: false
        }
    },
    HomeScreen : {
        screen : UserHomeScreen,
        navigationOptions : {
            gesturesEnabled: false,
            header: false
        }
    }
},
{
    headerMode: 'none',
    //initialRouteName: 'LoginScreen'
});
export default mainNavigator;