import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import IntroNavigation from "./IntroNavigation";
import UserAuthenticationPage from "../Screens/UserAuthenticationPage";
import MainNavigation from "./MainNavigation";
// import HomePage from "../Screens/HomePage";
// import LoginPage from "../Screens/LoginPage";
// import IntroPage from "../Screens/IntroPage";
// import RegistrationPage from "../Screens/RegistrationPage";

const stack = createStackNavigator();

const AppNavigation = () => {
    const mainNavigationComponent = (
        <stack.Navigator headerMode="none">
            <stack.Screen name="UserAuthenticationPage" component={UserAuthenticationPage}/>
            <stack.Screen name="IntroNavigation" component={IntroNavigation} options = {{headerMode: "None"}} />
            <stack.Screen name="MainNavigation" component={MainNavigation} />
        </stack.Navigator>
    )
    return mainNavigationComponent;
}

export default AppNavigation;