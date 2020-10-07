import React, { useState } from "react"
import { SafeAreaView, View, StyleSheet, ScrollView, Platform } from "react-native"
import CustomActivityIndicator from "../../../../CustomComponents/CustomActivityIndicator"
import CustomHeader from "../../../../CustomComponents/CustomHeader"
import { IMAGE_BACK } from "../../../../Assets/ImageHelper"
import CustomTouch from "../../../../CustomComponents/CustomTouch"
import CustomTextField from "../../../../CustomComponents/CustomTextFiled"


const DisplayExpenseItem = (props) => {

    //const [listItems, setListItems] = useState([]);
    const [loaderVisibility, setLoaderVisibility] = useState(false);

    const { route, navigation } = props;
    const expenseItem = route.params.expenseItem;

    const moveBack = () => {
        navigation.pop();
    }

    const NAME_OF_PURCHASE = "nameOfPurchase";
    const AMOUNT_SPEND = "amountSpend";
    const PAID_BY = "paidBy";
    const DATE_OF_PURCHASE = "dateOfPurchase";
    const EXPENDITURE_TYPE = "expenditureType";
    const DETAILS = "details";

    const textFileds = [
        {
            inputID: NAME_OF_PURCHASE,
            legendTitle: "Enter Name/Title of Expense",
            value: expenseItem.nameOfPurchase
        },
        {
            inputID: AMOUNT_SPEND,
            legendTitle: "Amount Spend",
            value: expenseItem.amountSpend
        },
        {
            inputID: PAID_BY,
            legendTitle: "Payment Type",
            value: expenseItem.paidBy
        },
        {
            inputID: DATE_OF_PURCHASE,
            legendTitle: "Date of Purchase",
            value: expenseItem.dateOfPurchase
        },
        {
            inputID: EXPENDITURE_TYPE,
            legendTitle: "Expenditure Type",
            value: expenseItem.expenditureType
        },
        {
            inputID: DETAILS,
            legendTitle: "Details",
            value: expenseItem.details
        }
    ];

    const getInputFileds = (data) => {
        const value = data.value;
        if (value !== NaN && value !== undefined && value !== null && value !== "") {
            const inputFiledView = (
                <CustomTextField
                    legendTitle={data.legendTitle}
                    inputID={data.inputID}
                    value={value}
                    style={styles.textInputFieldProps}
                />
            )
            return inputFiledView;
        }
    };

    const mainUIComponent = (
        <SafeAreaView>
            <>
                <CustomActivityIndicator visibility={loaderVisibility} />
                <CustomHeader
                    title={expenseItem.nameOfPurchase}
                    backButtonIconSource={IMAGE_BACK}
                    hideBackButton={false}
                    onBackButtonPress={() => { moveBack(); }}
                />
                <ScrollView>
                    <View style={styles.bottomSpaceStyle}>
                        {textFileds.map(item => getInputFileds(item))}
                    </View>
                </ScrollView>
                <View></View>
            </>
        </SafeAreaView>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    textInputFieldProps: {
        marginVertical: 10
    },
    bottomSpaceStyle: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: (Platform.OS === "ios") ? 40 : 0
    }
})

export default DisplayExpenseItem;