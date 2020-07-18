import React, { useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

import CustomHeader from "./../../CustomComponents/CustomHeader";
import CustomMemoriesListViewCell from "../../CustomComponents/CustomMemoriesListViewCell";
import CustomFloatingButton from "../../CustomComponents/CustomFloatingButton";

import {memoriesListItems} from "./../../Constants/ListItems"
import { IMAGE_BACK } from "../../Constants/LocalImages";


const PersonDetailPage = (props) => {

    console.log(props);

    const [itemsList, setItemsList] = useState(memoriesListItems);

    const onBackButtonPressHandler = () => {
        props.navigation.navigate("HomePage");
    }

    const onitemViewCellPressHandler = (item) => {
    }

    const mainUIComponent = (
        <View style={{flex: 1}}>
            <CustomHeader
                headerViewStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                title={props.route.params.name}
                backButtonIconSource={IMAGE_BACK}
                hideBackButton={false}
                onBackButtonPress={onBackButtonPressHandler} />
            <View style={styles.sortOptionsHolderStyle}></View>
            <View style={styles.listItemHolderStyle}>
                <FlatList keyExtractor={(item) => item.id} data={itemsList} renderItem={(item) => <CustomMemoriesListViewCell dataItem={item} onPress={onitemViewCellPressHandler} />} />
            </View>
            <CustomFloatingButton item={<Text style={{fontSize:30}}>+</Text>}>
            </CustomFloatingButton>
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
    listItemHolderStyle: {
        flex: 1
    }
});

export default PersonDetailPage;