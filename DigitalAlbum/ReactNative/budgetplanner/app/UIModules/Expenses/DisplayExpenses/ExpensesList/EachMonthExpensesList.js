import React, { useEffect } from "react"
import { SafeAreaView, View, Text, Alert, StyleSheet, ScrollView, Platform } from "react-native"
import CustomActivityIndicator from "../../../../CustomComponents/CustomActivityIndicator"
import CustomHeader from "../../../../CustomComponents/CustomHeader"
import { IMAGE_BACK } from "../../../../Assets/ImageHelper"
import { DISPLAY_EXPENSE_ITEM } from "../../../../Constants/PageNameConstants"
import CustomTouch from "../../../../CustomComponents/CustomTouch"
import { connect } from "react-redux"
import { fetchEachMonthExpenseList } from "./EachMonthExpenseListActions"


const EachMonthExpense_List = (props) => {
    
    const {
        route,
        dispatch,
        match,
        pageTitle,
        serviceState,
        loaderVisibility,
        expenseListItems,
        errorCode,
    } = props;

    useEffect(() => {
        const expensesRequestParms = route.params.monthsExpensesParams;
        dispatch(fetchEachMonthExpenseList(expensesRequestParms));
    }, []);

    const moveBack = () => {
        props.navigation.pop();
    }

    const onItemSelectionhandler = (data) => {
        props.navigation.navigate(DISPLAY_EXPENSE_ITEM, { expenseItem: data });
    }

    const getListViews = (data) => {
        const inputFiledView = (
            <CustomTouch isRequiredFeedback={true} childData={data} onPress={(data) => { onItemSelectionhandler(data); }} >
                <View style={styles.listTextContainerStyle}>
                    <View style={styles.expensesTextHolderStyle}>
                        <Text style={styles.listTextStyle}>{data.nameOfPurchase}</Text>
                        <Text style={styles.listTextStyle}>{data.dateOfPurchase}</Text>
                    </View>
                    <Text style={styles.amountTextStyle}>{data.amountSpend}</Text>
                </View>
            </CustomTouch >
        )
        return inputFiledView;
    };

    const mainUIComponent = (
        <SafeAreaView>
            <>
                <CustomActivityIndicator visibility={loaderVisibility} />
                <CustomHeader
                    title={pageTitle}
                    backButtonIconSource={IMAGE_BACK}
                    hideBackButton={false}
                    onBackButtonPress={() => { moveBack(); }}
                />
                <ScrollView>
                    <View style={styles.bottomSpaceStyle}>
                        {expenseListItems.map(item => getListViews(item))}
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
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "green",
        borderBottomWidth: 2
    },
    expensesTextHolderStyle: {
        flex: 1,
        marginHorizontal: 30
    },
    listTextStyle: {
        fontSize: 15
    },
    amountTextStyle: {
        alignSelf: "center",
        marginRight: 30
    },
    bottomSpaceStyle: {
        paddingBottom: (Platform.OS === "ios") ? 40 : 0
    }
})

const mapStateToProps = (state) => {
    return {
        pageTitle: state.EachMonthExpenseListReducer.pageTitle,
        serviceState: state.EachMonthExpenseListReducer.serviceState,
        loaderVisibility: state.EachMonthExpenseListReducer.loaderVisibility,
        expenseListItems: state.EachMonthExpenseListReducer.expenseListItems,
        errorCode: state.EachMonthExpenseListReducer.errorCode,
    };
}

const EachMonthExpenseList = connect(mapStateToProps)(EachMonthExpense_List);

export default EachMonthExpenseList;