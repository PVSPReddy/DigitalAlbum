import React, { useState } from "react"
import { View, ScrollView, StyleSheet, Dimensions, Text, Image, Button } from "react-native"
import CustomHeader from "../../CustomComponents/CustomHeader";
import CustomButton from "../../CustomComponents/CustomButton";
import CustomTextInput from "../../CustomComponents/CustomTextInput";
import CustomCarouselView from "../../CustomComponents/CustomCarouselView";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomHeaderContentCardView from "../../CustomComponents/CustomHeaderContentCardView";
import { IMAGE_PROFILE_ICON, IMAGE_BACK } from "../../Constants/LocalImages";
import AppStyleConstants from "../../Constants/AppStyleConstants";
import { personsDummyList, carouselViewDummyData } from "../../Constants/ListItems";

const AddNewMemoryPage = (props) => {

    const onBackButtonPressHandler = () => {
        props.navigation.pop();
    }

    const imageDetails = {
        imageID: "",
        imageURL: ""
    }
    const contactDetails = {
        contactId: "",
        contactFirstName: "",
        contactLastName: "",
        contactImageURL: "",
        contactNickName: "",
        contactRelation: "",
        contactMobileNo: "",
        contactEmailID: ""
    }

    const carouselData = carouselViewDummyData;

    const [memory, setMemory] = useState({
        images: carouselData,
        persons: personsDummyList,
        loaction: {
            lat: 0,
            long: 0
        },
        memoryInfo: ""
    });

    const addPerson = {
        contactId: "dummy",
        contactFirstName: "Hello World 1",
        contactLastName: "",
        contactImageURL: IMAGE_PROFILE_ICON,
        contactNickName: "",
        contactRelation: "",
        contactMobileNo: "",
        contactEmailID: ""
    };

    const screenWidth = Dimensions.get("screen").width;
    // const screenHeight = Dimensions.get("screen").height;


    const memoryCarouselContent = (data) => {
        const carouselView = (
            <View key={data.key} style={{ ...styles.carouselContentMainStyle, width: screenWidth, backgroundColor: data.color }}>
                <Text>One</Text>
            </View>
        )
        return carouselView;
    }

    const personCarouselContent = (data) => {
        const carouselView = (
            <TouchableOpacity activeOpacity="0.8" onPress={() => { if (data.contactId !== "dummy") { } else { } }}>
                <View style={{ alignItems: "center" }}>

                    <View key={data.contactId} style={{ height: 100, width: 100, borderRadius: 50, borderWidth: 2, overflow: "hidden", margin: 10, alignItems: "center", justifyContent: "center" }}>
                        {(data.contactId !== "dummy") ?
                            <Image style={{ height: 100, width: 100 }} source={data.contactImageURL}></Image> :
                            <Text style={{ fontSize: 40 }}>+</Text>
                            // <Image style={{height: 100, width: 100}} source={data.contactImageURL}></Image>
                        }
                    </View>

                    <Text>{(data.contactId !== "dummy") ? data.contactFirstName : "Add Person"}</Text>
                </View>
            </TouchableOpacity>
        )
        return carouselView;
    }

    const onSelectImage = () => {

    }

    const onSelectPerson = () => {

    }

    const onSelectLocation = () => {

    }

    const onSubmit = () => {

    }

    const mainUIComponent = (
        
        <View style={styles.mainComponentStyle}>
            <CustomHeader
                headerViewStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                title="New Memmory"
                backButtonIconSource={IMAGE_BACK}
                hideBackButton={false}
                onBackButtonPress={onBackButtonPressHandler} />

<View style={styles.bodyHolderViewStyle}>
<ScrollView>

                <CustomHeaderContentCardView style={styles.cardStyle} HeaderStyle={styles.cardTitleStyle} title="Add Images">
                    <CustomCarouselView style={{ height: 150 }}>
                        {memory.images.map(item => memoryCarouselContent(item))}
                    </CustomCarouselView>
                    <CustomButton style={styles.buttonStyle} title="Add Image of Memory" onPress={onSelectImage} />
                </CustomHeaderContentCardView>

                <CustomHeaderContentCardView style={styles.cardStyle} HeaderStyle={styles.cardTitleStyle} title="Add Persons">
                    <ScrollView
                        style={{ ...styles.scrollContent, ...props.style }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        {personCarouselContent(addPerson)}
                        {memory.persons.map(item => personCarouselContent(item))}
                    </ScrollView>
                </CustomHeaderContentCardView>

                <CustomHeaderContentCardView style={styles.cardStyle} HeaderStyle={styles.cardTitleStyle} title="No Coordinates available">
                    <CustomTextInput placeholder="Enter Location Address or Details" inputTextStyle={styles.inputTextStyle} multiline={true} />
                    <CustomButton style={styles.buttonStyle} title="Get and Add Location" onPress={onSelectLocation} />
                </CustomHeaderContentCardView>

                <CustomHeaderContentCardView style={styles.cardStyle} HeaderStyle={styles.cardTitleStyle} title="Enter more info">
                    <CustomTextInput placeholder="Enter Description" inputTextStyle={styles.inputTextStyle} multiline={true} />
                </CustomHeaderContentCardView>

                <CustomButton style={styles.buttonStyle} title="Add Memory" onPress={onSubmit} />
                </ScrollView>
            </View>
        </View>

    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    mainComponentStyle: {
        flex: 1,
        backgroundColor: AppStyleConstants.colors.MAIN_CONTAINER_COLOR
    },
    headerStyle: {
        height: 50,
        backgroundColor: AppStyleConstants.colors.MAIN_HEADER_COLOR
    },
    headerTextStyle: {
        marginRight: 50,
    },
    bodyHolderViewStyle: {
        flex: 1,
        margin: 10
    },
    inputTextStyle: {
        textAlignVertical: "top",
        borderBottomWidth:0,
        minHeight: 150
    },
    buttonStyle: {
        backgroundColor: AppStyleConstants.colors.BUTTON_COLOR,
        // color: "yellow",
        marginTop: 10,
    },

    carouselContentMainStyle: {
        flex: 1,
        // width: "100%"
    },

    cardStyle: {
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // marginBottom: 20,
        // paddingBottom: 10
    },
    cardTitleStyle: {
        paddingLeft: 20,
        marginBottom: 10,
        backgroundColor: AppStyleConstants.colors.DATA_CARD_HEADER_COLOR
    }
})

export default AddNewMemoryPage;