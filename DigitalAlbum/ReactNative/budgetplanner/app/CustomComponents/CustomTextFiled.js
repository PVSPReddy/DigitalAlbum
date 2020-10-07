import React from "react"
import { StyleSheet, Text, View } from "react-native"

class CustomTextField extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {
            style,
            fontStyle,
            legendTextStyle,
            numberOfLines,
            legendTitle,
            value,

        } = this.props;

        const uiMainComponent = (
            <View style={{ ...styles.containerStyle, ...style }}>
                <View style={{ ...styles.textDataContainerStyle }}>
                    <Text
                        style={{ ...styles.textDataStyle, ...fontStyle }}
                        numberOfLines={numberOfLines}
                    >{value}</Text>
                    <Text style={{ ...styles.textLegendStyle, ...legendTextStyle }}>{legendTitle}</Text>
                </View>
            </View>
        )

        return uiMainComponent;
    }
}

const styles = StyleSheet.create({
    textLegendStyle: {
        position: 'absolute',
        top: -10,
        left: 10,
        backgroundColor: "#FFFFFF"
    },
    textDataStyle: {
        fontSize: 20,
        color: "#000000",
        margin: 10
    },
    textDataContainerStyle: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        justifyContent: "center",
        borderColor: "#000000",
        borderWidth: 1,
        margin: 0,
        padding: 0
    },
    containerStyle: {
        backgroundColor: "#00000000",
        paddingTop: 10
    },
});

export default CustomTextField;