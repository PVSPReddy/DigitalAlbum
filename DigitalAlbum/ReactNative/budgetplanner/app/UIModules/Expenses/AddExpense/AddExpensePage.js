import React, { useEffect, useState } from "react"
import { SafeAreaView, View, Alert, StyleSheet, ScrollView } from "react-native"
import AppStyleConstants from "../../../Constants/AppStyleConstants"
import CustomButton from "../../../CustomComponents/CustomButton"
import CustomTextInputField from "../../../CustomComponents/CustomTextInputField"
import CustomActivityIndicator from "../../../CustomComponents/CustomActivityIndicator"
import { HOME_PAGE } from "../../../Constants/PageNameConstants"
import { IMAGE_BACK } from "../../../Assets/ImageHelper"
import CustomHeader from "../../../CustomComponents/CustomHeader"
import { connect } from "react-redux"
import SpaceView from "../../../CustomComponents/AppLocalComponents/SpaceView"
import { fetchAddExpense } from "./AddExpensePageService"
import { POPUP_OKAY_BUTTON_TEXT, POPUP_HEADER_TEXT, POPUP_ERROR_ALERT_HEADER } from "../../../Constants/TextConstants"
import { getAddExpenseReset } from "./AddExpensePageActions"
import CustomTextInputPickerField from "./../../../CustomComponents/CustomTextInputPickerField"
import { PaymentTypes, ExpenditureTypes } from "./AddExpenseConstants"
import CustomTextInputDatePickerField from "../../../CustomComponents/CustomTextInputDatePickerField"


const AddExpense_Page = (props) => {

    const {
        dispatch,
        serviceState,
        loaderVisibility,
        errorMessage,
        successMessage
    } = props;

    const requiredFiled = "*Required";

    const NAME_OF_PURCHASE = "nameOfPurchase";
    const AMOUNT_SPEND = "amountSpend";
    const PAID_BY = "paidBy";
    const DATE_OF_PURCHASE = "dateOfPurchase";
    const EXPENDITURE_TYPE = "expenditureType";
    const DETAILS = "details";


    const [nameOfPurchase, setNameOfPurchase] = useState({ value: "", isError: false, errorText: "" });
    const [amountSpend, setAmountSpend] = useState({ value: "", isError: false, errorText: "" });
    const [paidBy, setPaidBy] = useState({ value: "", isError: false, errorText: "" });
    const [dateOfPurchase, setDateOfPurchase] = useState({ value: "", isError: false, errorText: "" });
    const [expenditureType, setExpenditureType] = useState({ value: "", isError: false, errorText: "" });
    const [details, setDetails] = useState({ value: "", isError: false, errorText: "" });

    const paymentTypePickerValues = [];
    PaymentTypes.forEach(element => {
        paymentTypePickerValues.push(element.displayText);
    });

    const expenditureTypePickerValues = [];
    ExpenditureTypes.forEach(element => {
        expenditureTypePickerValues.push(element.displayText);
    });

    const textFileds = [
        {
            inputID: NAME_OF_PURCHASE,
            placeHolder: "Enter Name/Title of Expense",
            legendTitle: "Enter Name/Title of Expense",
            hintText: nameOfPurchase.errorText,
            isError: nameOfPurchase.isError,
            value: nameOfPurchase.value
        },
        {
            inputID: AMOUNT_SPEND,
            placeHolder: "Amount Spend",
            legendTitle: "Amount Spend",
            hintText: amountSpend.errorText,
            isError: amountSpend.isError,
            value: amountSpend.value,
            isNumber: true
        },
        {
            inputID: PAID_BY,
            placeHolder: "Payment Type",
            legendTitle: "Payment Type",
            hintText: paidBy.errorText,
            isError: paidBy.isError,
            value: paidBy.value,
            isPicker: true,
            pickerData: paymentTypePickerValues,
        },
        {
            inputID: DATE_OF_PURCHASE,
            placeHolder: "Date of Purchase",
            legendTitle: "Date of Purchase",
            hintText: dateOfPurchase.errorText,
            isError: dateOfPurchase.isError,
            value: dateOfPurchase.value,
            isDatePicker: true
        },
        {
            inputID: EXPENDITURE_TYPE,
            placeHolder: "Expenditure Type",
            legendTitle: "Expenditure Type",
            hintText: expenditureType.errorText,
            isError: expenditureType.isError,
            value: expenditureType.value,
            isPicker: true,
            pickerData: expenditureTypePickerValues,
        },
        {
            inputID: DETAILS,
            placeHolder: "Details",
            legendTitle: "Details",
            hintText: details.errorText,
            isError: details.isError,
            value: details.value,
            isEditor: true
        }
    ];

    const getInputFileds = (data) => {
        const {
            placeHolder,
            legendTitle,
            hintText,
            isError,
            inputID,
            isEditor,
            isPicker,
            isNumber,
            isDatePicker,
            pickerData,
        } = data;
        let textInputFieldProps =
        {
            style: {
                marginVertical: 10
            }
        };
        if (isEditor) {
            textInputFieldProps = {
                ...textInputFieldProps,
                multiline: true,
                fontStyle: {
                    minHeight: 150,
                    textAlignVertical: 'top'
                }
            };
        }
        if (isNumber) {
            textInputFieldProps = {
                ...textInputFieldProps,
                keyboardType: "numeric"
            };
        }
        let inputFieldView = (<></>);
        if (isPicker) {
            inputFiledView = (
                <CustomTextInputPickerField
                    pickerData={pickerData}
                    placeHolder={placeHolder}
                    legendTitle={legendTitle}
                    hintText={hintText}
                    isError={isError}
                    inputID={inputID}
                    {...textInputFieldProps}
                    onItemSelected={onItemSelectedHandler}
                />
            )
        }
        else if (isDatePicker) {
            inputFiledView = (
                <CustomTextInputDatePickerField
                    placeHolder={placeHolder}
                    legendTitle={legendTitle}
                    hintText={hintText}
                    isError={isError}
                    inputID={inputID}
                    {...textInputFieldProps}
                    onChange={onChangeHandler}
                />
            )
        }
        else {
            inputFiledView = (
                <CustomTextInputField
                    placeHolder={placeHolder}
                    legendTitle={legendTitle}
                    hintText={hintText}
                    isError={isError}
                    inputID={inputID}
                    {...textInputFieldProps}
                    onChangeText={onChangeTextHandler}
                />
            )
        }
        return inputFiledView;
    };

    const onChangeTextHandler = (textValue, inputID) => {
        try {
            switch (inputID) {
                case NAME_OF_PURCHASE:
                    setNameOfPurchase({ ...nameOfPurchase, value: textValue, isError: false, errorText: "" });
                    break;
                case AMOUNT_SPEND:
                    setAmountSpend({ ...amountSpend, value: textValue, isError: false, errorText: "" });
                    break;
                case DETAILS:
                    setDetails({ ...details, value: textValue, isError: false, errorText: "" });
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const onChangeHandler = (textValue, inputID) => {
        try {
            switch (inputID) {
                case DATE_OF_PURCHASE:
                    setDateOfPurchase({ ...dateOfPurchase, value: textValue, isError: false, errorText: "" });
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const onItemSelectedHandler = (textValue, inputID) => {
        try {
            switch (inputID) {
                case PAID_BY:
                    setPaidBy({ ...paidBy, value: textValue, isError: false, errorText: "" });
                    break;
                case EXPENDITURE_TYPE:
                    setExpenditureType({ ...expenditureType, value: textValue, isError: false, errorText: "" });
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const OnSubmitButtonClickHandler = async () => {
        try {
            if (nameOfPurchase.value === "" || nameOfPurchase.value === undefined) {
                setNameOfPurchase({ ...nameOfPurchase, isError: true, errorText: "Please Enter a valid Name" });
            }
            else if (amountSpend.value === "" || amountSpend.value === undefined) {
                setAmountSpend({ ...amountSpend, isError: true, errorText: "Please Enter a valid amount" });
            }
            else if (paidBy.value === "" || paidBy.value === undefined) {
                setPaidBy({ ...paidBy, isError: true, errorText: "Please Enter a valid payment type" });
            }
            else if (dateOfPurchase.value === "" || dateOfPurchase.value === undefined) {
                setDateOfPurchase({ ...dateOfPurchase, isError: true, errorText: "Please Enter a valid date" });
            }
            else if (expenditureType.value === "" || expenditureType.value === undefined) {
                setExpenditureType({ ...expenditureType, isError: true, errorText: "Please Enter a valid type" });
            }
            else if (details.value === "" || details.value === undefined) {
                setDetails({ ...details, isError: true, errorText: "Please Enter a valid detail" });
            }
            else {
                const postData = {
                    "dateOfPurchase": dateOfPurchase.value,
                    "nameOfPurchase": nameOfPurchase.value,
                    "expenditureType": expenditureType.value,
                    "paidBy": paidBy.value,
                    "amountSpend": amountSpend.value,
                    "details": details.value,
                    "dateCreated": new Date().toString()
                }
                dispatch(fetchAddExpense(postData));
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const moveBack = () => {
        dispatch(getAddExpenseReset());
        props.navigation.navigate(HOME_PAGE);
    }

    if (successMessage !== "") {
        Alert.alert(POPUP_HEADER_TEXT, successMessage, [{
            text: POPUP_OKAY_BUTTON_TEXT,
            onPress: () => {
                moveBack();
            }
        }]);
    }
    else if (errorMessage !== "") {
        Alert.alert(POPUP_ERROR_ALERT_HEADER, errorMessage, [{
            text: POPUP_OKAY_BUTTON_TEXT,
            onPress: () => {
            }
        }]);
    }

    const uiMainComponent = (
        <SafeAreaView>
            <>
                <CustomActivityIndicator visibility={loaderVisibility} />

                <CustomHeader
                    title="Add Expense"
                    backButtonIconSource={IMAGE_BACK}
                    hideBackButton={false}
                    onBackButtonPress={() => { moveBack(); }}
                />
                <ScrollView>
                    <View style={styles.mainContainerStyle}>
                        {textFileds.map(item => getInputFileds(item))}
                        <CustomButton title="Add Expense" onPress={OnSubmitButtonClickHandler} />
                        <SpaceView />
                    </View>
                </ScrollView>
            </>
        </SafeAreaView>
    )
    return uiMainComponent;
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        padding: 20
    }
});

const mapStateToProps = (state) => {
    return {
        serviceState: state.AddExpensePageReducer.serviceState,
        loaderVisibility: state.AddExpensePageReducer.loaderVisibility,
        errorMessage: state.AddExpensePageReducer.errorMessage,
        successMessage: state.AddExpensePageReducer.successMessage,
    };
}

const AddExpensePage = connect(mapStateToProps)(AddExpense_Page);

export default AddExpensePage;