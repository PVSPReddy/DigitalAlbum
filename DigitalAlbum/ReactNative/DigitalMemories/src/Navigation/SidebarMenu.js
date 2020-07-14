import React from "react"
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { HOME_PAGE, PROFILE_PAGE, SETTINGS_PAGE } from "../Helpers/PageNameConstants";

const SidebarMenu = (props) => {
    console.log("side menu", props);
    console.log("side menu", props.state.routeNames);
    const pageDetails = [
        {
            pageIcon: require("./../Assets/CommonImages/homeIcon.png"),
            pageTitle: "Home Page",
            navigationRouter: HOME_PAGE
        },
        {
            pageIcon: require("./../Assets/CommonImages/profileIcon.png"),
            pageTitle: "Profile",
            navigationRouter: PROFILE_PAGE
        },
        {
            pageIcon: require("./../Assets/CommonImages/settingsIcon.png"),
            pageTitle: "Settings",
            navigationRouter: SETTINGS_PAGE
        }
    ]

    const pageListDesign = (item) => {
        const pageListCellView = (
            <TouchableOpacity>
                <View style={styles.itemViewCellHolderStyle}>
                    <Image source={pageIcon} />
                    <Text style={styles.pageNameTextStyle}>{item.pageTitle}</Text>
                </View>
            </TouchableOpacity>
        );
        return pageListCellView;
    }

    const mainUIComponent = (
        // <SafeAreaView>
        //     <ScrollView>
        //         {/* <DrawerItem {...props} /> */}
        //         {/* {props.state.routeNames.map((item) => { <View id={item}><Text>{item}</Text></View> })} */}
        //         {/* {props.state.routeNames.map((item) => {console.log(item)})} */}
        //         {pageDetails.map((item) => {pageListDesign(item)})}
        //     </ScrollView>
        // </SafeAreaView>
        <View>
            {pageDetails.map((item) => { pageListDesign(item) })}
        </View>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    itemViewCellHolderStyle: {
        flexDirection: "row",
        height: 50,
        backgroundColor: "blue"
    },
    pageNameTextStyle: {
        flex: 1
    }
})

export default SidebarMenu;