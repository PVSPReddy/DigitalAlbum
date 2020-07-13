import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import IntroPage from "../Screens/IntroPage";
import LoginPage from "../Screens/LoginPage";
import CarouselPage from "../Screens/CarouselPage";
import RegistrationPage from "../Screens/RegistrationPage";
import ResetPage from "../Screens/ResetPage";

const stack = createStackNavigator();

const IntroNavigation = (params) => {
    const stackNaviComponent = (
        <stack.Navigator initialRouteName="LoginPage" headerMode="none">
            {/* <stack.Screen name="IntroPage" component={IntroPage} /> */}
            <stack.Screen name="LoginPage" component={LoginPage} />
            <stack.Screen name="RegistrationPage" component={RegistrationPage} 
            options={{
                title: "Registration",
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerStyle: {
                    backgroundColor: "skyblue"
                }
            }}/>
            <stack.Screen name="ResetPage" component={ResetPage} />
            <stack.Screen name="CarouselPage" component={CarouselPage} />
        </stack.Navigator>
    )
    return stackNaviComponent;
}

export default IntroNavigation;