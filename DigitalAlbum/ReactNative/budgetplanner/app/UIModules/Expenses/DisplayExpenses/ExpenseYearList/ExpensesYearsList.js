import React, { useEffect, useState } from "react"
import { SafeAreaView, View, Text, Alert, StyleSheet, ScrollView, Platform } from "react-native"
import CustomActivityIndicator from "../../../../CustomComponents/CustomActivityIndicator"
import CustomHeader from "../../../../CustomComponents/CustomHeader"
import { IMAGE_BACK } from "../../../../Assets/ImageHelper"
import { EXPENSES_MONTHS_LIST, HOME_PAGE } from "../../../../Constants/PageNameConstants"
import { mainURL, GetAvailableYearsMonths, successStatusCode } from "../../../../Constants/URLConstants"
import CustomTouch from "../../../../CustomComponents/CustomTouch"


const ExpensesYearsList = (props) => {

    const [listItems, setListItems] = useState([]);
    
    const [loaderVisibility, setLoaderVisibility] = useState(false);

    useEffect(() => {
        GetAvailableYearsMonthsData();
    }, []);

    const GetAvailableYearsMonthsData = async () => {
        try {
            setLoaderVisibility(true);
            const url = mainURL + GetAvailableYearsMonths;

            fetch(url, {
                method: 'GET',
                headers: {
                    Accept: '*/*',
                    "Accept-Encoding": ["gzip", "deflate", "br"],
                    "Connection": "keep-alive",
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                setLoaderVisibility(false);
                return response.json();
            }).then((responseJSON) => {
                console.log(responseJSON);
                if (responseJSON.status_code === successStatusCode) {
                    const _listItemsData = responseJSON.response_data;
                    var listItemsData = [];
                    for (let i = 0; i < _listItemsData.length; i++) {
                        const eachListItem = _listItemsData[i];
                        listItemsData.push({ ...eachListItem, isOpen: false });
                    }
                    setListItems(listItemsData);
                }
            }).catch((error) => {
                setLoaderVisibility(false);
                console.log(error);
                Alert.alert("Error", "Unable to get data from server please try again later", [
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
        props.navigation.navigate(EXPENSES_MONTHS_LIST, {monthsListData: data});
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

    const getChildListViews = (data) => {

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
})

export default ExpensesYearsList;