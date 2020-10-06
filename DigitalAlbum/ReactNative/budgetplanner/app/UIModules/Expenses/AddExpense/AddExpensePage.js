import React, { useState } from "react"
import { SafeAreaView, View, Text, Alert, StyleSheet, ScrollView } from "react-native"
import AppStyleConstants from "../../../Constants/AppStyleConstants"
import CustomButton from "../../../CustomComponents/CustomButton"
import CustomTextInputField from "../../../CustomComponents/CustomTextInputField"
import CustomActivityIndicator from "../../../CustomComponents/CustomActivityIndicator"
import { HOME_PAGE } from "../../../Constants/PageNameConstants"
import { mainURL, PostExpenditureURL, successStatusCode } from "../../../Constants/URLConstants"
import { IMAGE_BACK } from "../../../Assets/ImageHelper"
import CustomHeader from "../../../CustomComponents/CustomHeader"

const AddExpensePage = (props) => {

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

    const [loaderVisibility, setLoaderVisibility] = useState(false);


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
            value: paidBy.value
        },
        {
            inputID: DATE_OF_PURCHASE,
            placeHolder: "Date of Purchase",
            legendTitle: "Date of Purchase",
            hintText: dateOfPurchase.errorText,
            isError: dateOfPurchase.isError,
            value: dateOfPurchase.value
        },
        {
            inputID: EXPENDITURE_TYPE,
            placeHolder: "Expenditure Type",
            legendTitle: "Expenditure Type",
            hintText: expenditureType.errorText,
            isError: expenditureType.isError,
            value: expenditureType.value
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
        let textInputFieldProps =
        {
            style: {
                marginVertical: 10
            }
        };
        if (data.isEditor) {
            textInputFieldProps = {
                ...textInputFieldProps,
                multiline: true,
                fontStyle: {
                    minHeight: 150
                }
            };
        }
        if (data.isNumber) {
            textInputFieldProps = {
                ...textInputFieldProps,
                keyboardType: "numeric"
            };
        }
        const inputFiledView = (
            <CustomTextInputField
                placeHolder={data.placeHolder}
                legendTitle={data.legendTitle}
                hintText={data.hintText}
                isError={data.isError}
                inputID={data.inputID}
                {...textInputFieldProps}
                onChangeText={onChangeTextHandler}
            />
        )
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
                case PAID_BY:
                    setPaidBy({ ...paidBy, value: textValue, isError: false, errorText: "" });
                    break;
                case DATE_OF_PURCHASE:
                    setDateOfPurchase({ ...dateOfPurchase, value: textValue, isError: false, errorText: "" });
                    break;
                case EXPENDITURE_TYPE:
                    setExpenditureType({ ...expenditureType, value: textValue, isError: false, errorText: "" });
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

    const OnSubmitButtonClickHandler = async () => {
        try {
            if (nameOfPurchase.value === "" || nameOfPurchase.value === undefined) {
                setNameOfPurchase({ ...nameOfPurchase, isError: true, errorText: "Please Enter a valid Name" });
            }
            else if (amountSpend.value === "" || amountSpend.value === undefined) {
                setAmountSpend({ ...amountSpend, value: textValue, isError: true, errorText: "Please Enter a valid amount" });
            }
            else if (paidBy.value === "" || paidBy.value === undefined) {
                setPaidBy({ ...paidBy, value: textValue, isError: true, errorText: "Please Enter a valid payment type" });
            }
            else if (dateOfPurchase.value === "" || dateOfPurchase.value === undefined) {
                setDateOfPurchase({ ...dateOfPurchase, value: textValue, isError: true, errorText: "Please Enter a valid date" });
            }
            else if (expenditureType.value === "" || expenditureType.value === undefined) {
                setExpenditureType({ ...expenditureType, value: textValue, isError: true, errorText: "Please Enter a valid type" });
            }
            else if (details.value === "" || details.value === undefined) {
                setDetails({ ...details, value: textValue, isError: true, errorText: "Please Enter a valid detail" });
            }
            else {
                setLoaderVisibility(true);
                const url = mainURL + PostExpenditureURL;
                const postData = {
                    "method_name": "addNewBudgetData",
                    "service_request_data":
                    {
                        "dateOfPurchase": dateOfPurchase.value,
                        "nameOfPurchase": nameOfPurchase.value,
                        "expenditureType": expenditureType.value,
                        "paidBy": paidBy.value,
                        "amountSpend": amountSpend.value,
                        "details": details.value,
                        "dateCreated": new Date().toString()
                    }
                }

                fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: '*/*',
                        "Accept-Encoding": ["gzip", "deflate", "br"],
                        "Connection": "keep-alive",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                }).then((response) => {
                    setLoaderVisibility(false);
                    return response.json();
                }).then((responseJSON) => {
                    console.log(responseJSON);
                    if (responseJSON.status_code === successStatusCode) {
                        Alert.alert("Alert", "Values are successfully added to the data base", [
                            {
                                text: "OK",
                                onPress: () => {
                                    moveBack();
                                }
                            }
                        ])
                    }
                }).catch((error) => {
                    setLoaderVisibility(false);
                    console.log(error);
                    Alert.alert("Error", "Unable to add input value", [
                        {
                            text: "OK",
                            onPress: () => { }
                        }
                    ]);
                });
            }
        }
        catch (error) {
            console.log(error);
            setLoaderVisibility(false);
        }

    }

    const moveBack = () => {
        props.navigation.navigate(HOME_PAGE);
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

export default AddExpensePage;