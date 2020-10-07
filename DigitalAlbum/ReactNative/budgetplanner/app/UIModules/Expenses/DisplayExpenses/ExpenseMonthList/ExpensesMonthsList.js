import React, { useState } from "react"
import { SafeAreaView, View, Text, Alert, StyleSheet, ScrollView, Platform } from "react-native"
import CustomActivityIndicator from "../../../../CustomComponents/CustomActivityIndicator"
import CustomHeader from "../../../../CustomComponents/CustomHeader"
import { IMAGE_BACK } from "../../../../Assets/ImageHelper"
import { EACH_MONTH_EXPENSES_LIST } from "../../../../Constants/PageNameConstants"
import CustomTouch from "../../../../CustomComponents/CustomTouch"


const ExpensesMonthsList = (props) => {

    const {route, navigation} = props;

    const yearItemData = route.params.monthsListData;

    const moveBack = () => {
        navigation.pop();
    }
    
    const onItemSelectionhandler = (data) => {
        props.navigation.navigate(EACH_MONTH_EXPENSES_LIST, { monthsExpensesParams: data });
    }
    const getParentListViews = (data) => {
        const _year = yearItemData.name.split("_")[1];
        const eachMonthItem = {year: _year, ...data }
        const inputFiledView = (
            <CustomTouch isRequiredFeedback={true} childData={eachMonthItem} onPress={(data)=>{ onItemSelectionhandler(data); }} >
                <View style={styles.listTextContainerStyle}>
                    <Text style={styles.listTextStyle}>{data.sheetName}</Text>
                </View>
            </CustomTouch >
        )
        return inputFiledView;
    };

    const mainUIComponent = (
        <SafeAreaView>
            <>
                <CustomHeader
                    title={yearItemData.name}
                    backButtonIconSource={IMAGE_BACK}
                    hideBackButton={false}
                    onBackButtonPress={() => { moveBack(); }}
                />
                <ScrollView>
                    <View style={styles.bottomSpaceStyle}>
                        {yearItemData.sheetsList.map(item => getParentListViews(item))}
                    </View>
                </ScrollView>
                <View></View>
            </>
        </SafeAreaView>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    listTextContainerStyle: {
        height: 50,
        justifyContent: "center",
        borderBottomColor: "green",
        borderBottomWidth: 2
    },
    listTextStyle: {
        marginHorizontal: 30
    },
    bottomSpaceStyle: {
        paddingBottom: (Platform.OS === "ios") ? 40 : 0
    }
})

export default ExpensesMonthsList;