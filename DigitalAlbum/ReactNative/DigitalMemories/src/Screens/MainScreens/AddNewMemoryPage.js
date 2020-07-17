import React, { useState } from "react"
import { View, ScrollView, StyleSheet, Dimensions, Text, Image, Button } from "react-native"
import CustomHeader from "../../CustomComponents/CustomHeader";
import CustomButton from "../../CustomComponents/CustomButton";
import CustomTextInput from "../../CustomComponents/CustomTextInput";
import CustomCarouselView from "../../CustomComponents/CustomCarouselView";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomHeaderContentCardView from "../../CustomComponents/CustomHeaderContentCardView";

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

    const carouselData = [
        {
            id: 1,
            color: "yellow",
            width: screenWidth,
            imageID: "",
            imageURL: ""
        },
        {
            id: 2,
            color: "blue",
            width: screenWidth,
            imageID: "",
            imageURL: ""
        },
        {
            id: 3,
            color: "green",
            width: screenWidth,
            imageID: "",
            imageURL: ""
        },
        {
            id: 4,
            color: "maroon",
            width: screenWidth,
            imageID: "",
            imageURL: ""
        }
    ]

    const [memory, setMemory] = useState({
        images: carouselData,
        persons: [
            {
                contactId: "",
                contactFirstName: "Hello World 1",
                contactLastName: "",
                contactImageURL: require("./../../Assets/CommonImages/profileIcon.png"),
                contactNickName: "",
                contactRelation: "",
                contactMobileNo: "",
                contactEmailID: ""
            },
            {
                contactId: "",
                contactFirstName: "Hello World 2",
                contactLastName: "",
                contactImageURL: require("./../../Assets/CommonImages/profileIcon.png"),
                contactNickName: "",
                contactRelation: "",
                contactMobileNo: "",
                contactEmailID: ""
            },
            {
                contactId: "",
                contactFirstName: "Hello World 3",
                contactLastName: "",
                contactImageURL: require("./../../Assets/CommonImages/profileIcon.png"),
                contactNickName: "",
                contactRelation: "",
                contactMobileNo: "",
                contactEmailID: ""
            },
            {
                contactId: "",
                contactFirstName: "Hello World 4",
                contactLastName: "",
                contactImageURL: require("./../../Assets/CommonImages/profileIcon.png"),
                contactNickName: "",
                contactRelation: "",
                contactMobileNo: "",
                contactEmailID: ""
            },
            {
                contactId: "",
                contactFirstName: "Hello World 5",
                contactLastName: "",
                contactImageURL: require("./../../Assets/CommonImages/profileIcon.png"),
                contactNickName: "",
                contactRelation: "",
                contactMobileNo: "",
                contactEmailID: ""
            },
            {
                contactId: "",
                contactFirstName: "Hello World 6",
                contactLastName: "",
                contactImageURL: require("./../../Assets/CommonImages/profileIcon.png"),
                contactNickName: "",
                contactRelation: "",
                contactMobileNo: "",
                contactEmailID: ""
            }
        ],
        loaction: {
            lat: 0,
            long: 0
        },
        memoryInfo: ""
    });

    const addNewPerson = {
        contactId: "dummy",
        contactFirstName: "Hello World 1",
        contactLastName: "",
        contactImageURL: require("./../../Assets/CommonImages/profileIcon.png"),
        contactNickName: "",
        contactRelation: "",
        contactMobileNo: "",
        contactEmailID: ""
    };

    const screenWidth = Dimensions.get("screen").width;
    const screenHeight = Dimensions.get("screen").height;


    const memoryCarouselContent = (data) => {
        const carouselView = (
            <View key={data.key} style={{ ...styles.carouselContentMainStyle, width: data.width, backgroundColor: data.color }}>
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

                    <Text>{(data.contactId !== "dummy") ? data.contactFirstName : "Add New Person"}</Text>
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
        
        <View>
            <CustomHeader
                headerViewStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                title="New Memmory"
                backButtonIconSource={require("./../../Assets/CommonImages/back.png")}
                hideBackButton={false}
                onBackButtonPress={onBackButtonPressHandler} />

<View style={styles.bodyHolderViewStyle}>
<ScrollView>

                <CustomHeaderContentCardView style={styles.cardStyle} title="Add Images">
                    <CustomCarouselView style={{ height: 150, backgroundColor: "blue" }}>
                        {memory.images.map(item => memoryCarouselContent(item))}
                    </CustomCarouselView>
                    <CustomButton style={styles.buttonStyle} title="Add Image of Memory" onPress={onSelectImage} />
                </CustomHeaderContentCardView>

                <CustomHeaderContentCardView style={styles.cardStyle} title="Add Persons">
                    <ScrollView
                        style={{ ...styles.scrollContent, ...props.style }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        {personCarouselContent(addNewPerson)}
                        {memory.persons.map(item => personCarouselContent(item))}
                    </ScrollView>
                </CustomHeaderContentCardView>

                <CustomHeaderContentCardView style={styles.cardStyle} title="No Coordinates available">
                    <CustomTextInput placeholder="Enter Location Address or Details" inputTextStyle={styles.addInfoInputTextStyle} multiline={true} />
                    <CustomButton style={styles.buttonStyle} title="Get and Add Location" onPress={onSelectLocation} />
                </CustomHeaderContentCardView>

                <CustomHeaderContentCardView style={styles.cardStyle} title="Enter more info">
                    <CustomTextInput placeholder="Enter Description" inputTextStyle={styles.addInfoInputTextStyle} multiline={true} />
                </CustomHeaderContentCardView>


                <CustomButton style={styles.buttonStyle} title="Add Memory" onPress={onSubmit} />
                </ScrollView>
            </View>
        </View>

    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 50,
        backgroundColor: "gray"
    },
    headerTextStyle: {
        marginRight: 50
    },
    bodyHolderViewStyle: {
        // flex: 1,
        margin: 10
    },
    addInfoInputTextStyle: {
        textAlignVertical: "top",
        minHeight: 150
    },
    buttonStyle: {
        // color: "yellow",
        // marginVertical: 10,
    },

    carouselContentMainStyle: {
        flex: 1,
    },
    cardStyle: {
        backgroundColor: "white",
        // marginBottom: 20,
        // paddingBottom: 10
    }
})

export default AddNewMemoryPage;