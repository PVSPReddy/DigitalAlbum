import React, { useState } from "react"
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import CustomHeader from "./../../CustomComponents/CustomHeader";
import CustomMemoriesListViewCell from "../../CustomComponents/CustomMemoriesListViewCell";



const HomePage = (props) => {

    const [itemsList, setItemsList] = useState([
        {
            id: "1",
            name: "Sivaprasad",
            number: 10,
            createdOn: (new Date).toString()
        },
        {
            id: "2",
            name: "P V Sivaprasad",
            number: 5,
            createdOn: (new Date).toString()
        },
        {
            id: "3",
            name: "Sivaprasad Reddy",
            number: 6,
            createdOn: (new Date).toString()
        },
        {
            id: "4",
            name: "P V Sivaprasad Reddy",
            number: 15,
            createdOn: (new Date).toString()
        }
    ]);

    const onBackButtonPressHandler = () => {
        props.navigation.toggleDrawer();
    }

    const onitemViewCellPressHandler = (item) => {
        props.navigation.navigate("MemoryDetailPage", item);
    }

    const mainUIComponent = (
        <View>
            <CustomHeader
                headerViewStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                title="Home"
                backButtonIconSource={require("./../../Assets/CommonImages/hamburgerMenu.png")}
                hideBackButton={false}
                onBackButtonPress={onBackButtonPressHandler} />
            <View style={styles.sortOptionsHolderStyle}></View>
            <View>
                <FlatList keyExtractor={(item) => item.id} data={itemsList} renderItem={(item) => <CustomMemoriesListViewCell dataItem={item} onPress={onitemViewCellPressHandler} />} />
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

export default HomePage;