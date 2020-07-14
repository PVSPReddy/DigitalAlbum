import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import CustomHeader from "../../CustomComponents/CustomHeader";

const AddNewPersonPage = (props) => {

    const onBackButtonPressHandler = () => {
        props.navigation.pop();
    }

    const mainUIComponent = (
        <ScrollView>
            <CustomHeader
                headerViewStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                title="Add New Person"
                backButtonIconSource={require("./../../Assets/CommonImages/back.png")}
                hideBackButton={false}
                onBackButtonPress={onBackButtonPressHandler} />
        </ScrollView>
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
    }
})

export default AddNewPersonPage;