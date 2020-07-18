import React, { useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

import CustomHeader from "./../../CustomComponents/CustomHeader";
import CustomMemoriesListViewCell from "../../CustomComponents/AppLocalComponents/CustomMemoriesListViewCell";
import CustomFloatingButton from "../../CustomComponents/CustomFloatingButton";

import { memoriesListItems } from "./../../Constants/ListItems"
import { IMAGE_HAMBURGER_MENU } from "../../Constants/LocalImages";
import AppStyleConstants from "../../Constants/AppStyleConstants";


const HomePage = (props) => {

    const [itemsList, setItemsList] = useState(memoriesListItems);

    const [addNewButtonVisibility, setAddNewButtonVisibility] = useState(false);

    const onBackButtonPressHandler = () => {
        props.navigation.toggleDrawer();
    }

    const onitemViewCellPressHandler = (item) => {
        props.navigation.navigate("MemoryDetailPage", item);
    }

    const onAddNewHandler = (pageID) => {
        props.navigation.navigate(pageID)
        setAddNewButtonVisibility(false);
    }

    const mainUIComponent = (
        <View style={styles.mainComponentStyle}>
            <CustomHeader
                headerViewStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                title="Home"
                backButtonIconSource={IMAGE_HAMBURGER_MENU}
                hideBackButton={false}
                onBackButtonPress={onBackButtonPressHandler} />
            <View style={styles.sortOptionsHolderStyle}></View>
            <View style={styles.listItemHolderStyle}>
                <FlatList keyExtractor={(item) => item.id} data={itemsList} renderItem={(item) => <CustomMemoriesListViewCell dataItem={item} onPress={onitemViewCellPressHandler} />} />
            </View>
            <CustomFloatingButton item={<Text style={{ fontSize: 30 }}>{addNewButtonVisibility ? "X" : "+"}</Text>} onPress={() => { setAddNewButtonVisibility(!addNewButtonVisibility) }} />
            {addNewButtonVisibility ? <CustomFloatingButton style={styles.memoryFloatingButtonStyle} item={<Text style={{ fontSize: 30 }}>M</Text>} onPress={() => onAddNewHandler("AddNewMemoryPage")} /> : <></>}
            {addNewButtonVisibility ? <CustomFloatingButton style={styles.personFloatingButtonStyle} item={<Text style={{ fontSize: 30 }}>P</Text>} onPress={() => onAddNewHandler("AddNewPersonPage")} /> : <></>}
        </View>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    mainComponentStyle: {
        flex: 1,
        backgroundColor: AppStyleConstants.colors.MAIN_CONTAINER_COLOR
    },
    headerStyle: {
        height: 50,
        backgroundColor: AppStyleConstants.colors.MAIN_HEADER_COLOR
    },
    headerTextStyle: {
        marginRight: 50
    },
    sortOptionsHolderStyle: {
        flexDirection: "row"
    },
    listItemHolderStyle: {
        flex: 1
    },
    memoryFloatingButtonStyle: {
        backgroundColor: "blue",
        right: 40,
        bottom: 120,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },
    personFloatingButtonStyle: {
        backgroundColor: "blue",
        right: 120,
        bottom: 40,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default HomePage;