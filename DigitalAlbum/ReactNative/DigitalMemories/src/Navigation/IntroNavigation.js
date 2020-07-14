import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import IntroPage from "../Screens/IntroPage";
import LoginPage from "../Screens/LoginPage";
import CarouselPage from "../Screens/CarouselPage";
import RegistrationPage from "../Screens/RegistrationPage";
import ResetPage from "../Screens/ResetPage";
import { LOGIN_PAGE, REGISTRATION_PAGE, RESET_PAGE, CAROUSEL_PAGE } from "../Helpers/PageNameConstants";

const stack = createStackNavigator();

const IntroNavigation = (params) => {
    const stackNaviComponent = (
        <stack.Navigator initialRouteName="LoginPage" headerMode="none">
            {/* <stack.Screen name="IntroPage" component={IntroPage} /> */}
            <stack.Screen name={LOGIN_PAGE} component={LoginPage} />
            <stack.Screen name={REGISTRATION_PAGE} component={RegistrationPage} 
            options={{
                title: "Registration",
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerStyle: {
                    backgroundColor: "skyblue"
                }
            }}/>
            <stack.Screen name={RESET_PAGE} component={ResetPage} />
            <stack.Screen name={CAROUSEL_PAGE} component={CarouselPage} />
        </stack.Navigator>
    )
    return stackNaviComponent;
}

export default IntroNavigation;