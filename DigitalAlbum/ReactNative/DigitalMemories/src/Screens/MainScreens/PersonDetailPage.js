import React, { useState } from "react"
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from "react-native"
import CustomHeader from "../../CustomComponents/CustomHeader";

const PersonDetailPage = (props) => {

    console.log(props);

    const [itemsList, setItemsList] = useState([
        {
            id: "1",
            name: "Sivaprasad",
            number: 10,
            createdOn: new Date
        },
        {
            id: "2",
            name: "P V Sivaprasad",
            number: 5,
            createdOn: new Date
        },
        {
            id: "3",
            name: "Sivaprasad Reddy",
            number: 6,
            createdOn: new Date
        },
        {
            id: "4",
            name: "P V Sivaprasad Reddy",
            number: 15,
            createdOn: new Date
        }
    ]);

    const onBackButtonPressHandler = () => {
        props.navigation.navigate("HomePage");
    }

    const itemViewCell = (item) => {
        const viewCellComponent = (
            <TouchableOpacity activeOpacity="0.4" onPress={() => {
                // toDoList.map((listItem) => {
                //     if (listItem.id === item.item.id) {
                //         listItem.showAccessibleButtons = !(listItem.showAccessibleButtons)
                //     }
                //     else {
                //         listItem.showAccessibleButtons = false;
                //     }
                // })
                // setToDoList(toDoList);
            }}>
                <View style={styles.itemViewCellStyle}>
                    <Image style={styles.itemViewCellImageStyle} source={require("./../../Assets/CommonImages/profileDummyImage.jpeg")} />
                    <View style={{ flex: 1, paddingLeft: 15 }}>
                        <Text style={styles.itemViewCellNameTextStyle}>{item.item.name}</Text>
                    </View>
                    <View style={styles.itemViewCellNumberTextHolderStyle}>
                        <Text style={styles.itemViewCellNumberTextStyle}>{item.item.number}</Text>
                    </View>
                    {/* {(item.item.showAccessibleButtons) ? <Button title="Delete" /> : <></>} */}
                </View>
            </TouchableOpacity>
        )
        return viewCellComponent;
    }

    const mainUIComponent = (
        <View>
            <CustomHeader
                headerViewStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                title={props.route.params.name}
                backButtonIconSource={require("./../../Assets/CommonImages/back.png")}
                hideBackButton={false}
                onBackButtonPress={onBackButtonPressHandler} />
            <View style={styles.sortOptionsHolderStyle}></View>
            <View>
                <FlatList keyExtractor={(item) => item.id} data={itemsList} renderItem={itemViewCell} />
            </View>
        </View>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 50,
        backgroundColor: "yellow"
    },
    headerTextStyle: {
        marginRight: 50
    },
    sortOptionsHolderStyle: {
        flexDirection: "row"
    },
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
    },//profileDummyImage
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

export default PersonDetailPage;