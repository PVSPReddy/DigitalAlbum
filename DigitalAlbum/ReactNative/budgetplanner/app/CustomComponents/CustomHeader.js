import React from "react"
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { IMAGE_BACK } from "../Assets/ImageHelper";

const CustomHeader = (props) => {
    const { 
        headerViewStyle,
        headerTextStyle,
        headerTitleFontStyle,

        title,

        hideBackButton, 
        backButtonIconSource,

        leftSideView,
        rightSideView,

        onBackButtonPress
    } = props;

    var backButtonImageSource = backButtonIconSource;
    if (backButtonIconSource === null) {
        backButtonImageSource = IMAGE_BACK;
    }

    const mainUIComponent = (
        <View style={{ ...styles.mainHeaderHolderStyle, ...headerViewStyle }}>
            {(!hideBackButton) ? <TouchableWithoutFeedback onPress={onBackButtonPress}>{/*() => {navigation.pop()}*/}
                <Image source={backButtonImageSource} />
            </TouchableWithoutFeedback> : <></>}
            {leftSideView}
            <View style={{ ...styles.headerTitleHolderStyle, ...headerTextStyle }}>
                <Text style={{ ...styles.headerTitleFontStyle, ...headerTitleFontStyle }}>{title}</Text>
            </View>
            {rightSideView}
        </View>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    mainHeaderHolderStyle: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#C2C2C2",
        paddingHorizontal: 10
    },
    backImageStyle: {
        alignSelf: "flex-start",
    },
    headerTitleFontStyle: {
        fontSize: 20
    },
    headerTitleHolderStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        flex: 1,
        paddingHorizontal: 10
    }
})

export default CustomHeader;