import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"


const CustomMemoriesListViewCell = (props) => {
    const { dataItem } = props;
    const item = dataItem;
    console.log(item);
    const viewCellComponent = (
        <TouchableOpacity activeOpacity="0.4" onPress={() => { props.onPress(item.item); }}>
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