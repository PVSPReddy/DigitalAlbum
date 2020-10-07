import React, { useEffect, useState } from "react"
import { SafeAreaView, View, Text, Alert, StyleSheet, ScrollView, Platform } from "react-native"
import CustomActivityIndicator from "../../../../CustomComponents/CustomActivityIndicator"
import CustomHeader from "../../../../CustomComponents/CustomHeader"
import { IMAGE_BACK } from "../../../../Assets/ImageHelper"
import { DISPLAY_EXPENSE_ITEM } from "../../../../Constants/PageNameConstants"
import { mainURL, PostGetAvailableMonthlyExpenseData, successStatusCode } from "../../../../Constants/URLConstants"
import CustomTouch from "../../../../CustomComponents/CustomTouch"


const EachMonthExpenseList = (props) => {

    const [expenseListItems, setExpenseListItems] = useState([]);
    const [loaderVisibility, setLoaderVisibility] = useState(false);

    useEffect(() => {
        const { route } = props;
        const expensesRequestParms = route.params.monthsExpensesParams;
        GetAvailableYearsMonthsData(expensesRequestParms);
    }, []);

    const GetAvailableYearsMonthsData = async (expensesRequestParms) => {
        try {
            setLoaderVisibility(true);

            const url = mainURL + PostGetAvailableMonthlyExpenseData;
            const postData = {
                "method_name": "addNewBudgetData",
                "service_request_data":
                {
                    "month": expensesRequestParms.sheetName,
                    "year": expensesRequestParms.year
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
                    setExpenseListItems(responseJSON.response_data);
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
        catch (error) {
            console.log(error);
            setLoaderVisibility(false);
        }
    }

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
                    <View>
                        <Text style={styles.listTextStyle}>{data.nameOfPurchase}</Text>
                    </View>
                </View>
            </CustomTouch >
        )
        return inputFiledView;
    };

    const { route } = props;
    const expensesRequestParms = route.params.monthsExpensesParams;

    const mainUIComponent = (
        <SafeAreaView>
            <>
                <CustomActivityIndicator visibility={loaderVisibility} />
                <CustomHeader
                    title={expensesRequestParms.sheetName}
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

export default EachMonthExpenseList;