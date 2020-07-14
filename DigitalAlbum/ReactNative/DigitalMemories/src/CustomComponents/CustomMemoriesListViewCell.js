import React, { useState } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native"
// import {Tooltip} from "react-native-elements"

const CustomMemoriesListViewCell = (props) => {
    const { dataItem } = props;
    const {isVisible, setIsVisible} = useState(false);
    const item = dataItem;
    // console.log(item);

    const onPressHandler = () => {
        props.onPress(item.item);
    }

    const viewCellComponent = (
        // <View>
        <TouchableOpacity activeOpacity="0.4" onPress={onPressHandler}>
            <View style={styles.itemViewCellStyle}>
                <Image style={styles.itemViewCellImageStyle} source={require("./../Assets/CommonImages/profileDummyImage.jpeg")} />
                <View style={{ flex: 1, paddingLeft: 15 }}>
                    <Text style={styles.itemViewCellNameTextStyle}>{item.item.name}</Text>
                    <Text>{item.item.createdOn}</Text>
                </View>
                <View style={styles.itemViewCellNumberTextHolderStyle}>
                    <Text style={styles.itemViewCellNumberTextStyle}>{item.item.id}</Text>
                </View>
                {/* {(item.item.showAccessibleButtons) ? <Button title="Delete" /> : <></>} */}
            </View>
        </TouchableOpacity>
        // </View>
    );
    return viewCellComponent;
}

const styles = StyleSheet.create({
    itemViewCellStyle: {
        backgroundColor: "gray",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        minHeight: 60,
        borderRadius: 30,
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 5,
        overflow: "hidden"
    },
    itemViewCellImageStyle: {
        height: 60,
        borderRadius: 30,
        width: 60
    },
    itemViewCellNameTextStyle: {
        fontSize: 18
    },
    itemViewCellNumberTextStyle: {
        fontSize: 30
    },
    itemViewCellNumberTextHolderStyle: {
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: 60,
        borderRadius: 30,
        padding: 5,
        overflow: "hidden"
    }
});

export default CustomMemoriesListViewCell;