import React from "react"

import { View, Text, StyleSheet } from "react-native"
import CustomHeader from "./../../CustomComponents/CustomHeader";
import { YING_YANG } from "./../../Constants/UniCodesForImages";
import { IMAGE_BACK } from "../../Constants/LocalImages";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            title: "Profile",
            headerTitleStyle: {
                alignSelf: 'center'
            },
            headerStyle: {
                backgroundColor: "skyblue"
            }
        });
    }

    onBackButtonPressHandler = () => {
        this.props.navigation.toggleDrawer();
    }

    render() {
        const mainUIComponent = (
            <View>
                <CustomHeader
                    headerViewStyle={styles.headerStyle}
                    headerTextStyle={styles.headerTextStyle}
                    title="Profile"
                    backButtonIconSource={IMAGE_BACK}
                    hideBackButton={false}
                    onBackButtonPress={this.onBackButtonPressHandler} />
                <Text>Profile Page</Text>
        <Text>{YING_YANG}</Text>
            </View>
        )
        return mainUIComponent;
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 50,
        backgroundColor: "yellow"
    },
    headerTextStyle: {
        marginRight: 50
    }
});
export default ProfilePage;