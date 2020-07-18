import React from "react"

import { View, Text, Modal } from "react-native"
import CustomTouch from "./CustomTouch";

class CustomActionSheet extends React.Component {
    constructor(props) {
        super(props);
    }

    items = () => {
        let dataItems = props.itemData;
        if(typeof items === "undefined")
        {
            dataItems = [];
        }
        return dataItems;
    }
    

    createButtons = (item) => {
        const uiComponent = (
            <CustomTouch>
                <View style={styles.actionSheetItemsHolder}>
                    <Text style={{...styles.actionSheetItemsTextStyle, ...this.props.actionSheetItemsTextStyle}}>{item}</Text>
                </View>
            </CustomTouch>
        )
    }

    render() {
        const mainUIComponent = (
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visibility}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <View style={{ ...styles.cardMainHolderStyle, ...props.style }}>
                    <View style={{ ...styles.cardHeaderHolderStyle, ...props.headerStyle }}>
                        <Text style={{ ...styles.cardHeaderTextStyle, ...props.headerTextStyle }}>{props.title}</Text>
                    </View>
                    <View style={{ ...styles.cardContentHolderStyle, ...props.bodyStyle }}>
                        {/* {props.children} */}
                        {this.items.map(item => {
                            this.createButtons(item);
                        })}
                    </View>
                </View>
            </Modal>
        )
        return mainUIComponent;
    }
}

const styles = StyleSheet.create({
    actionSheetMainHolderStyle: {
        marginBottom: 30,
        overflow: "hidden"
    },
    actionSheetHeaderHolderStyle: {
        backgroundColor: "#c7c7c7",
        margin: 0,
        paddingVertical: 10
    },
    actionSheetHeaderTextStyle: {
        fontSize: 20,
    },
    actionSheetContentHolderStyle: {
        backgroundColor: "transparent",
        margin: 0,
        padding: 0
    },

    actionSheetItemsHolder: {
        height: 50,
        alignItems: "center"
    },
    actionSheetItemsTextStyle: {
        fontSize: 20,
    }

});

export default CustomActionSheet;