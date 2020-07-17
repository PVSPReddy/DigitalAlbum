import React from "react"
import { View, StyleSheet, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { HOME_PAGE, PROFILE_PAGE, SETTINGS_PAGE } from "../Helpers/PageNameConstants";

const SidebarMenu = (props) => {
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

    const onPressNavigationHandler = (navigationID) => {
        props.navigation.navigate(navigationID);
    }

    const pageListDesign = (item) => {
        const pageListCellView = (
            <TouchableOpacity activeOpacity="0.2" onPress={() => onPressNavigationHandler(item.navigationRouter)}>
                <View style={styles.itemViewCellHolderStyle}>
                    <Image style={styles.itemViewCellImageStyle} source={item.pageIcon} />
                    <Text style={styles.pageNameTextStyle}>{item.pageTitle}</Text>
                </View>
            </TouchableOpacity>
        );
        return pageListCellView;
    }

    const mainUIComponent = (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text></Text>
                    <View style={styles.profileImageHolderStyle}>
                        {/* <TouchableOpacity> */}
                        <Image source={require("./../Assets/CommonImages/profileDummyImage.jpeg")} />
                        {/* </TouchableOpacity> */}
                    </View>
                    {
                        pageDetails.map((item) => { return pageListDesign(item) })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    profileImageHolderStyle: {
        height: 250,
        paddingVertical: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    itemViewCellHolderStyle: {
        flexDirection: "row",
        backgroundColor: "blue",
        alignItems: "center",
        height: 50,
        marginHorizontal: 10,
        marginBottom: 5
    },
    itemViewCellImageStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 10
    },
    pageNameTextStyle: {
        fontSize: 18,
        flex: 1
    }
})

export default SidebarMenu;