import React from "react"
import {View, Text, StyleSheet} from "react-native"

const CustomHeaderContentCardView = (props) => {
    const mainUIContent = (
        <View style={{...styles.cardMainHolderStyle, ...props.style}}>
            <View style={{...styles.cardHeaderHolderStyle, ...props.HeaderStyle}}>
    <Text style={{...styles.cardHeaderTextStyle, ...props.HeaderTextStyle}}>{props.title}</Text>
            </View>
            <View style={{...styles.cardContentHolderStyle, ...props.style}}>
                {props.children}
            </View>
        </View>
    )
    return mainUIContent;
}

const styles = StyleSheet.create({
    cardMainHolderStyle: {
        marginBottom: 30
    },
    cardHeaderHolderStyle: {
        backgroundColor: "#c7c7c7",
        margin: 0,
        paddingVertical: 10
    },
    cardHeaderTextStyle: {
        fontSize: 20,
    },
    cardContentHolderStyle: {
        backgroundColor: "#c9c9c9",
        margin: 0,
        padding: 0
    }
});

export default CustomHeaderContentCardView;