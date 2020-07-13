import React from "react"
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native"

const CustomHeader = (props) => {
    const { hideBackButton, backButtonIconSource } = props;//backButtonImageSource

    var backButtonImageSource = backButtonIconSource;
    if (backButtonIconSource === null) {
        backButtonImageSource = require("./../Assets/CommonImages/back.png");
    }

    // navigation.setParams("props", props);
    const mainUIComponent = (
        <View style={{ ...styles.mainHeaderHolderStyle, ...props.headerViewStyle }}>
            {(!hideBackButton) ? <TouchableWithoutFeedback onPress={props.onBackButtonPress}>{/*() => {navigation.pop()}*/}
                <Image source={backButtonImageSource} />
            </TouchableWithoutFeedback> : <></>}
            {props.leftSideView}
            <View style={{ ...styles.headerTitleHolderStyle, ...props.headerTextStyle }}>
                <Text style={{ ...styles.headerTitleFontStyle, ...props.headerTitleFontStyle }}>{props.title}</Text>
            </View>
            {props.rightSideView}
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