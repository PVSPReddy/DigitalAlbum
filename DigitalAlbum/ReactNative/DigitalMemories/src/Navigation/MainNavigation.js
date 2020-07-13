import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { useWindowDimensions } from "react-native";
// import HomePage from "../Screens/MainScreens/HomePage";
import ProfilePage from "../Screens/MainScreens/ProfilePage";
import SettingsPage from "../Screens/MainScreens/SettingsPage";
import MemoryNavigation from "./MemoryNavigation";

const Drawer = createDrawerNavigator();

const MainNavigation = () => {

    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 768;

    const mainNavigationComponent = (
        <Drawer.Navigator
            drawerType={isLargeScreen ? 'permanent' : 'front'}
            drawerStyle={isLargeScreen ? null : { width: '70%' }}
            overlayColor="#00000030">
            <Drawer.Screen name="MemoryNavigation" component={MemoryNavigation} options={{
                title: "Home"
            }} />
            {/* openByDefault drawerType={isLargeScreen ? 'permanent' : 'back'} */}
            <Drawer.Screen name="ProfilePage" component={ProfilePage} />
            <Drawer.Screen name="SettingsPage" component={SettingsPage}/>
        </Drawer.Navigator >
    )
    return mainNavigationComponent;
}

export default MainNavigation;