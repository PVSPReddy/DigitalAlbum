import React, { useEffect, useState } from "react"
import { SafeAreaView, View, Text, Alert, StyleSheet, ScrollView, Platform } from "react-native"
import CustomActivityIndicator from "../../../../CustomComponents/CustomActivityIndicator"
import CustomHeader from "../../../../CustomComponents/CustomHeader"
import { IMAGE_BACK } from "../../../../Assets/ImageHelper"
import { EXPENSES_MONTHS_LIST } from "../../../../Constants/PageNameConstants"
import CustomTouch from "../../../../CustomComponents/CustomTouch"
import { connect } from "react-redux"
import { fetchYearsData } from "./ExpenseYearListActions"
import { ERROR_ALERT_HEADER, OKAY_BUTON_TEXT } from "./../../../../Constants/TextConstants"


const ExpensesYears_List = (props) => {

    //const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getYearsMonthsData());
    // }, [dispatch]);


    const {
        dispatch,
        match,
        loaderVisibility,
        listItems,
        errorCode
    } = props;

    useEffect(() => {
        dispatch(fetchYearsData());
    }, []);

    const moveBack = () => {
        props.navigation.pop();
    }

    const onItemSelectionhandler = (data) => {
        props.navigation.navigate(EXPENSES_MONTHS_LIST, { monthsListData: data });
    }
    const getParentListViews = (data) => {
        const inputFiledView = (
            <CustomTouch isRequiredFeedback={true} childData={data} onPress={onItemSelectionhandler} >
                <View style={styles.listTextContainerStyle}>
                    <Text style={styles.listTextStyle}>{data.name}</Text>
                </View>
            </CustomTouch >
        )
        return inputFiledView;
    };

    if(errorCode !== "")
    {
        Alert.alert(ERROR_ALERT_HEADER, errorCode, [
            {
                text: OKAY_BUTON_TEXT,
                onPress: () => { }
            }
        ]);
    }

    const mainUIComponent = (
        <SafeAreaView>
            <>
                <CustomActivityIndicator visibility={loaderVisibility} />
                <CustomHeader
                    title="Select Year"
                    backButtonIconSource={IMAGE_BACK}
                    hideBackButton={false}
                    onBackButtonPress={() => { moveBack(); }}
                />
                <ScrollView>
                    <View style={styles.bottomSpaceStyle}>
                        {listItems.map(item => getParentListViews(item))}
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
});

const mapStateToProps = (state) => {
    return {
        serviceState: state.ExpenseYearListReducer.serviceState,
        loaderVisibility: state.ExpenseYearListReducer.loaderVisibility,
        listItems: state.ExpenseYearListReducer.listItems,
        errorCode: state.ExpenseYearListReducer.errorCode,
    };
}

const ExpensesYearsList = connect(mapStateToProps)(ExpensesYears_List);
export default ExpensesYearsList;