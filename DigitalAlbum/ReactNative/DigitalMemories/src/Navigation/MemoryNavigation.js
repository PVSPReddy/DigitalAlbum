import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import HomePage from "../Screens/MainScreens/HomePage";
import MemoryDetailPage from "../Screens/MainScreens/MemoryDetailPage";
import PersonDetailPage from "../Screens/MainScreens/PersonDetailPage";

const stack = createStackNavigator();

const MemoryNavigation = (params) => {
    const memoryNavigationComponent = (
        <stack.Navigator initialRouteName="HomePage" headerMode="none">
            <stack.Screen name="HomePage" component={HomePage} />
            <stack.Screen name="MemoryDetailPage" component={MemoryDetailPage}/>
            <stack.Screen name="PersonDetailPage" component={PersonDetailPage} />
        </stack.Navigator>
    )
    return memoryNavigationComponent;
}

export default MemoryNavigation;