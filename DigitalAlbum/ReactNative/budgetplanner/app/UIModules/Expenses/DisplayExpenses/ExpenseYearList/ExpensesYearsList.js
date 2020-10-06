import React, { useEffect, useState } from "react"
import { SafeAreaView, View, Text, Alert, StyleSheet, ScrollView, Platform } from "react-native"
import CustomButton from "../../../../CustomComponents/CustomButton"
import CustomActivityIndicator from "../../../../CustomComponents/CustomActivityIndicator"
import CustomHeader from "../../../../CustomComponents/CustomHeader"
import { IMAGE_BACK } from "../../../../Assets/ImageHelper"
import { HOME_PAGE } from "../../../../Constants/PageNameConstants"
import { mainURL, PostGetAvailableYearsMonths, successStatusCode } from "../../../../Constants/URLConstants"


const ExpensesYearsList = (props) => {

    const [listItems, setListItems] = useState([
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
        {
            Text: "sdfsfsdfds"
        },
    ]);
    const [loaderVisibility, setLoaderVisibility] = useState(false);

    useEffect(() => {
        GetAvailableYearsMonthsData();
    }, []);

    const GetAvailableYearsMonthsData = async () => {
        try {
            setLoaderVisibility(true);
            const url = mainURL + PostGetAvailableYearsMonths;
            const postData = {
                "method_name":"addNewBudgetData",
                "service_request_data":
                {
                    "month":"september",
                    "year":"2020"
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
        props.navigation.navigate(HOME_PAGE);
    }

    const getListViews = (data) => {
        const inputFiledView = (
            <View style={styles.listTextContainerStyle}>
                <Text style={styles.listTextStyle}>{data.Text}</Text>
                <View style={styles.ulineStyle}></View>
            </View>
        )
        return inputFiledView;
    };

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
                        {listItems.map(item => getListViews(item))}
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
        marginHorizontal: 30,
        justifyContent: "center",
        borderBottomColor: "green",
        borderBottomWidth: 2
    },
    bottomSpaceStyle: {
        paddingBottom: (Platform.OS === "ios") ? 40 : 0
    }
})

export default ExpensesYearsList;