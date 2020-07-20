import React, { useState } from "react"
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from "react-native"

import CustomHeader from "../../CustomComponents/CustomHeader";
import CustomButton from "../../CustomComponents/CustomButton";
import CustomTextInput from "../../CustomComponents/CustomTextInput";
import CustomHeaderContentCardView from "../../CustomComponents/CustomHeaderContentCardView";

import { IMAGE_PROFILE_ICON, IMAGE_BACK } from "../../Constants/LocalImages";
import AppStyleConstants from "../../Constants/AppStyleConstants";
import CameraView from "../../CustomComponents/AppLocalComponents/CameraView";
import CustomActionSheet from "../../CustomComponents/CustomActionSheet";
import { setTimeTicksAsID } from "../../Helpers/GetDynamicID";
import { PageTitles, newPersonPageTextConstants } from "../../Constants/TextConstants";

const AddNewPersonPage = (props) => {

    const NONE = "NONE";
    const DUMMY_ID = "DummyId";

    const PERSON_IMAGE_ID = "PERSON_IMAGE_ID";
    const PERSON_FIRST_NAME_ID = "PERSON_FIRST_NAME_ID";
    const PERSON_LAST_NAME_ID = "PERSON_LAST_NAME_ID";
    const PERSON_NICK_NAME_ID = "PERSON_NICK_NAME_ID";
    const PERSON_RELATION_ID = "PERSON_RELATION_ID";
    const PERSON_DATE_OF_BIRTH_ID = "PERSON_DATE_OF_BIRTH_ID";
    const PERSON_MOBILE_NO_ID = "PERSON_MOBILE_NO_ID";
    const PERSON_EMAIL_ID_ID = "PERSON_EMAIL_ID_ID";
    const PERSON_ADDRESS_ID = "PERSON_ADDRESS_ID";
    const PERSON_DESCRIPTION_ID = "PERSON_DESCRIPTION_ID";


    const [showCamera, setShowCamera] = useState(false);
    const [showImageOptions, setShowImageOptions] = useState(false);
    const [imageOptionsCallerID, setImageOptionsCallerID] = useState(NONE);

    const onBackButtonPressHandler = () => {
        props.navigation.pop();
    }

    const addImage = {
        imageID: DUMMY_ID,
        imageURL: ""
    };

    const [person, setPerson] = useState({
        personInfo: {
            personID: "",
            personImage: "",
            personImageData: "",
            personFirstName: "",
            personLastName: "",
            personRelation: "",
            personNickName: "",
            personDOB: "",
            personMobileNo: "",
            personEmailID: "",
            personAddress: "",
            personDescription: ""
        },
        validations: {
            isFirstNameValid: false
        },
        initValidations: {
            initFirstNameValidation: false
        }
    });

    const onCameraSnappedHandler = (uri, callerID) => {
        // console.log(uri);
        // const tempPerson = {
        //     ...person,
        //     personImage: uri
        // }
        setShowCamera(false);
        setPersonInfo(PERSON_IMAGE_ID, uri);
    }

    const onClosePressHandler = () => {
        setShowCamera(false);
    }

    const onSelectImage = (id) => {
        setShowImageOptions(true);
    }

    const onCancelPressHandler = (id) => {
        setShowImageOptions(false);
        console.log("alert close")
    }

    const onCameraSelectionHandler = () => {
        setShowImageOptions(false);
        setShowCamera(true);
    }

    const onGallerySelectionHandler = () => {
        setShowImageOptions(false);
    }

    const onInputChangedHandler = (inputID, value, isValid) => {
        setPersonInfo(inputID, value);
    }

    function setPersonInfo(inputID, value, isValid) {
        const tempPerson = {
            ...person,
            personInfo: {
                ...person.personInfo,
                personImage: (inputID === PERSON_IMAGE_ID) ? value : person.personInfo.personImage,
                personFirstName: (inputID === PERSON_FIRST_NAME_ID) ? value : person.personInfo.personFirstName,
                personLastName: (inputID === PERSON_LAST_NAME_ID) ? value : person.personInfo.personLastName,
                personRelation: (inputID === PERSON_RELATION_ID) ? value : person.personInfo.personRelation,
                personNickName: (inputID === PERSON_NICK_NAME_ID) ? value : person.personInfo.personNickName,
                personDOB: (inputID === PERSON_DATE_OF_BIRTH_ID) ? value : person.personInfo.personDOB,
                personMobileNo: (inputID === PERSON_MOBILE_NO_ID) ? value : person.personInfo.personMobileNo,
                personEmailID: (inputID === PERSON_EMAIL_ID_ID) ? value : person.personInfo.personEmailID,
                personAddress: (inputID === PERSON_ADDRESS_ID) ? value : person.personInfo.personAddress,
                personDescription: (inputID === PERSON_DESCRIPTION_ID) ? value : person.personInfo.personDescription
            },
            validations: {
                personImage: (inputID === PERSON_FIRST_NAME_ID) ? isValid : person.validations.isFirstNameValid,
            },
            initValidations: {
                initFirstNameValidation: false
            }
        }
        // const tempPerson
        console.log(tempPerson);
        setPerson(tempPerson);
    }

    const onSubmit = () => {
        if (person.validations.isFirstNameValid) {
            console.log("success");
            const tempPerson = {
                ...person,
                personID: setTimeTicksAsID()
            };
            setPerson(tempPerson);
        }
        else {
            console.log("failed");
            const tempPerson = {
                ...person,
                initValidations: {
                    initFirstNameValidation: true
                }
            };
            setPerson(tempPerson);
        }
    }


    const roundImageView = (id, imageSource) => {
        const uiContent = (
            <View style={{ height: 100, width: 100, borderRadius: 50, borderWidth: 2, overflow: "hidden", margin: 10, alignItems: "center", justifyContent: "center" }}>
                {(id !== DUMMY_ID) ?
                    <Image style={{ height: 100, width: 100 }} source={imageSource}></Image> :
                    <Text style={{ fontSize: 40 }}>+</Text>
                }
                {/* <Text style={{ fontSize: 40 }}>+</Text> */}
            </View>
        )
        return uiContent;
    }


    const roundAddButton = (data) => {
        const carouselView = (
            <TouchableOpacity key={data.imageID} activeOpacity="0.8" onPress={() => { onSelectImage(data.imageID) }}>
                {roundImageView(data.imageID, { uri: data.imageURL })}

                {/* {(id !== DUMMY_ID) ?
                    <Image style={{ height: 100, width: 100 }} source={{ uri: data.imageURL }}>
                    </Image> :
                    roundImageView(data.imageID, { uri: data.imageURL })
                } */}
            </TouchableOpacity>
        )
        return carouselView;
    }

    const mainUIComponent = (

        <View style={styles.mainComponentStyle}>
            <CustomHeader
                headerViewStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                title={PageTitles.NEW_PERSON}
                backButtonIconSource={IMAGE_BACK}
                hideBackButton={false}
                onBackButtonPress={onBackButtonPressHandler} />

            <View style={styles.bodyHolderViewStyle}>

                <CameraView callerID={imageOptionsCallerID} visibility={showCamera} onCameraSnapped={onCameraSnappedHandler} onClosePress={onClosePressHandler} />

                <CustomActionSheet
                    visibility={showImageOptions}
                    id="cameraOptionsAS"
                    title="Select an option"
                    onCancelPress={onCancelPressHandler}
                    options={[
                        { text: "Camera", onPress: onCameraSelectionHandler },
                        { text: "Gallery", onPress: onGallerySelectionHandler },
                    ]} />

                <ScrollView>

                    <CustomHeaderContentCardView style={styles.cardStyle} headerStyle={styles.cardTitleStyle} bodyStyle={{ ...styles.cardBodyStyle, height: 200 }} title={newPersonPageTextConstants.NEW_PERSON_PROFILE_PIC_CARD_TITLE}>
                        {(person.personImage !== "") ? roundAddButton({ imageID: PERSON_IMAGE_ID, imageURL: person.personImage }) : roundAddButton(addImage)}
                    </CustomHeaderContentCardView>

                    <CustomHeaderContentCardView style={styles.cardStyle} headerStyle={styles.cardTitleStyle} bodyStyle={styles.cardBodyStyle} title={newPersonPageTextConstants.NEW_PERSON_PROFILE_INFO_CARD_TITLE}>
                        <CustomTextInput
                            validationOptions={{
                                allowErrorText: true,
                                shallInitValidation: true,//person.initValidations.initFirstNameValidation,//shallInitializeValidation, 
                                isValidInput: false,//person.validations.isFirstNameValid,
                                isRequired: true
                            }}
                            errorHintText="* Plese enter first name"
                            inputID={PERSON_FIRST_NAME_ID} placeholder="Enter First Name"
                            inputTextStyle={styles.inputTextEntryStyle}
                            onInputChanged={onInputChangedHandler} />
                        <CustomTextInput inputID={PERSON_LAST_NAME_ID} placeholder="Enter Last Name" inputTextStyle={styles.inputTextStyle} onInputChanged={onInputChangedHandler} />
                        <CustomTextInput inputID={PERSON_NICK_NAME_ID} placeholder="Enter Nick Name" inputTextStyle={styles.inputTextStyle} onInputChanged={onInputChangedHandler} />
                        <CustomTextInput inputID={PERSON_RELATION_ID} placeholder="Enter Relation" inputTextStyle={styles.inputTextStyle} onInputChanged={onInputChangedHandler} />
                        <CustomTextInput inputID={PERSON_DATE_OF_BIRTH_ID} placeholder="Enter DOB" inputTextStyle={styles.inputTextStyle} onInputChanged={onInputChangedHandler} />
                        <CustomTextInput inputID={PERSON_MOBILE_NO_ID} placeholder="Enter Mobile Number" inputTextStyle={styles.inputTextStyle} onInputChanged={onInputChangedHandler} />
                        <CustomTextInput inputID={PERSON_EMAIL_ID_ID} placeholder="Enter Email id" inputTextStyle={styles.inputTextStyle} onInputChanged={onInputChangedHandler} />
                        <CustomTextInput inputID={PERSON_ADDRESS_ID} placeholder="Enter Address" inputTextStyle={{ ...styles.inputTextEditorStyle, minHeight: 75 }} multiline={true} onInputChanged={onInputChangedHandler} />
                        <CustomTextInput inputID={PERSON_DESCRIPTION_ID} placeholder="Enter Description" inputTextStyle={styles.inputTextEditorStyle} multiline={true} onInputChanged={onInputChangedHandler} />
                    </CustomHeaderContentCardView>

                    <CustomButton style={styles.buttonStyle} title={newPersonPageTextConstants.NEW_PERSON_ADD_PERSON_BUTTON} onPress={onSubmit} />

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
    inputTextEditorStyle: {
        textAlignVertical: "top",
        borderBottomWidth: 0,
        minHeight: 150
    },
    inputTextEntryStyle: {
        textAlignVertical: "top",
        borderBottomWidth: 0,
    },
    inputTextStyle: {
        textAlignVertical: "center",
        borderBottomWidth: 0,
    },
    buttonStyle: {
        backgroundColor: AppStyleConstants.colors.BUTTON_COLOR,
        // color: "yellow",
        marginTop: 10,
    },

    carouselContentMainStyle: {
        flex: 1,
        alignItems: "center"
        // width: "100%"
    },

    cardStyle: {
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
        // marginBottom: 20,
        // paddingBottom: 10
    },
    cardTitleStyle: {
        paddingLeft: 20,
        marginBottom: 10,
        backgroundColor: AppStyleConstants.colors.DATA_CARD_HEADER_COLOR
    },
    cardBodyStyle: {
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default AddNewPersonPage;