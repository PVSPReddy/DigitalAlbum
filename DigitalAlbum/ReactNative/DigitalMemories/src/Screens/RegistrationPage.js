import React, { useState } from "react"
import { Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, View, Alert } from "react-native"
import CustomTextInput from "../CustomComponents/CustomTextInput"
import CustomButton from "../CustomComponents/CustomButton"
import { memoriesImageURL } from "../Assets/CommonImages/MemoriesLogo"
import AsyncStorage from "@react-native-community/async-storage"


const RegistrationPage = (props) => {

    const [validations, setValidations] = useState({
        areValidInputs: {
            isValidFirstName: false,
            isValidLastName: false,
            isValidMobileNo: false,
            isValidEmailId: false,
            isValidPassword: false,
            isValidConfirmPassword: false
        },
        initializeValidation: {
            initFirstName: false,
            initLastName: false,
            initMobileNo: false,
            initEmailId: false,
            initPassword: false,
            initConfirmPassword: false
        },
        inputValues: {
            firstNameValue: "",
            lastNameValue: "",
            mobileNoValue: 0,
            emailIdValue: "",
            passwordValue: "",
            confirmPasswordValue: ""
        },
        isFormValid: false
    })

    const onRegistration = () => {
        console.log("validating");
        if (validations.isFormValid) {
            AsyncStorage.clear().then(() => {
                var currentDate = new Date();
                console.log(currentDate);
                var userDataObject = {...validations.inputValues, createdOn: currentDate, updatedOn: currentDate};
                var userData = JSON.stringify(userDataObject);
                AsyncStorage.setItem("userData", userData).
                    then(() => {
                        Alert.alert("Alert", "User Id Created Successfully", [{
                            text: "OK",
                            onPress: () => {
                                props.navigation.navigate("UserAuthenticationPage");
                            }
                        }]);
                    }).catch((error) => {
                        console.log(error);
                    });
            }).catch(error => {
                console.log(error);
            });
            // AsyncStorage.setItem("firstName", validations.inputValues.firstNameValue);
            // AsyncStorage.setItem("lastName", validations.inputValues.lastNameValue);
            // AsyncStorage.setItem("mobile", validations.inputValues.mobileNoValue);
            // AsyncStorage.setItem("email", validations.inputValues.isEmailID);
            // AsyncStorage.setItem("password", validations.inputValues.passwordValue);
        }
        else {
            let newValidations = {
                ...validations, initializeValidation: {
                    initFirstName: !validations.areValidInputs.isValidFirstName,
                    initLastName: !validations.areValidInputs.isValidLastName,
                    initMobileNo: !validations.areValidInputs.isValidMobileNo,
                    initEmailId: !validations.areValidInputs.isValidEmailId,
                    initPassword: !validations.areValidInputs.isValidPassword,
                    initConfirmPassword: !validations.areValidInputs.isValidConfirmPassword
                }
            }
            setValidations(newValidations);
        }
    }

    const onInputChangedHandler = (identifier, text, isValidInput) => {

        console.log(identifier);
        console.log(text);

        let newValidations = {
            areValidInputs: {
                isValidFirstName: (identifier === "firstName") ? isValidInput : validations.areValidInputs.isValidFirstName,
                isValidLastName: (identifier === "lastName") ? isValidInput : validations.areValidInputs.isValidLastName,
                isValidMobileNo: (identifier === "mobileNo") ? isValidInput : validations.areValidInputs.isValidMobileNo,
                isValidEmailId: (identifier === "emailID") ? isValidInput : validations.areValidInputs.isValidEmailId,
                isValidPassword: (identifier === "password") ? isValidInput : validations.areValidInputs.isValidPassword,
                isValidConfirmPassword: (identifier === "confirmPassword") ? isValidInput : validations.areValidInputs.isValidConfirmPassword
            },
            initializeValidation: {
                initFirstName: (identifier === "firstName") ? false : validations.initializeValidation.initFirstName,
                initLastName: (identifier === "lastName") ? false : validations.initializeValidation.initLastName,
                initMobileNo: (identifier === "mobileNo") ? false : validations.initializeValidation.initMobileNo,
                initEmailId: (identifier === "emailID") ? false : validations.initializeValidation.initEmailId,
                initPassword: (identifier === "password") ? false : validations.initializeValidation.initPassword,
                initConfirmPassword: (identifier === "confirmPassword") ? false : validations.initializeValidation.initConfirmPassword
            },
            inputValues: {
                firstNameValue: (identifier === "firstName") ? text : validations.inputValues.firstNameValue,
                lastNameValue: (identifier === "lastName") ? text : validations.inputValues.lastNameValue,
                mobileNoValue: (identifier === "mobileNo") ? text : validations.inputValues.mobileNoValue,
                emailIdValue: (identifier === "emailID") ? text : validations.inputValues.emailIdValue,
                passwordValue: (identifier === "password") ? text : validations.inputValues.passwordValue,
                confirmPasswordValue: (identifier === "confirmPassword") ? text : validations.inputValues.confirmPasswordValue
            },
            isFormValid: false
        }

        let allFormValidFields = newValidations.areValidInputs;
        if (allFormValidFields.isValidFirstName
            && allFormValidFields.isValidLastName
            && allFormValidFields.isValidMobileNo
            && allFormValidFields.isValidEmailId
            && allFormValidFields.isValidPassword) {
            if (newValidations.inputValues.passwordValue != newValidations.inputValues.confirmPasswordValue) {
                newValidations.areValidInputs.isValidConfirmPassword = false;
                newValidations.isFormValid = false;
            }
            else {
                newValidations.areValidInputs.isValidConfirmPassword = true;
                newValidations.isFormValid = true;
            }
        }
        else
        {
            //console.log("invalid yet");
        }
        // console.log(`${newValidations.inputValues.passwordValue}    ${newValidations.inputValues.confirmPasswordValue}`)

        setValidations(newValidations);
    };

    const mainUIComponent = (
        <ScrollView style={styles.mainContainerStyle}>

            <Image style={{ height: 100, width: 100, alignSelf: "center" }} source={{ uri: memoriesImageURL }} />

            <CustomTextInput
                style={styles.inputStyles}
                validationOptions={{
                    allowErrorText: true,
                    shallInitValidation: validations.initializeValidation.initFirstName,//shallInitializeValidation, 
                    isValidInput: validations.areValidInputs.isValidFirstName,
                    isRequired: true
                }}
                placeholder="Enter your First Name "
                errorHintText="* This is a mandatory field"
                inputID="firstName"
                onInputChanged={onInputChangedHandler}
            />

            <CustomTextInput
                style={styles.inputStyles}
                validationOptions={{
                    allowErrorText: true,
                    shallInitValidation: validations.initializeValidation.initLastName,//shallInitializeValidation, 
                    isValidInput: validations.areValidInputs.isValidLastName,
                    isRequired: true
                }}
                placeholder="Enter your Last Name"
                errorHintText="* This is a mandatory field"
                inputID="lastName"
                onInputChanged={onInputChangedHandler}
            />

            <CustomTextInput
                style={styles.inputStyles}
                validationOptions={{
                    allowErrorText: true,
                    shallInitValidation: validations.initializeValidation.initMobileNo,//shallInitializeValidation, 
                    isValidInput: validations.areValidInputs.isValidMobileNo,
                    isRequired: true,
                    isMobileNumber: true
                }}
                placeholder="Enter your Mobile Number"
                errorHintText="* This is a mandatory field"
                inputID="mobileNo"
                onInputChanged={onInputChangedHandler}
            />

            <CustomTextInput
                style={styles.inputStyles}
                validationOptions={{
                    allowErrorText: true,
                    shallInitValidation: validations.initializeValidation.initEmailId,//shallInitializeValidation, 
                    isValidInput: validations.areValidInputs.isValidEmailId,
                    isRequired: true,
                    isEmailID: true
                }}
                placeholder="Enter your Email ID"
                errorHintText="* This is a mandatory field"
                inputID="emailID"
                onInputChanged={onInputChangedHandler}
            />

            <CustomTextInput
                style={styles.inputStyles}
                validationOptions={{
                    allowErrorText: true,
                    shallInitValidation: validations.initializeValidation.initPassword,//shallInitializeValidation, 
                    isValidInput: validations.areValidInputs.isValidPassword,
                    isRequired: true
                }}
                placeholder="Enter Password"
                errorHintText="* This is a mandatory field"
                inputID="password"
                isPasswordInput={true}
                onInputChanged={onInputChangedHandler}
            />

            <CustomTextInput
                style={styles.inputStyles}
                validationOptions={{
                    allowErrorText: true,
                    shallInitValidation: validations.initializeValidation.initConfirmPassword,//shallInitializeValidation, 
                    isValidInput: validations.areValidInputs.isValidConfirmPassword,
                    isRequired: true
                }}
                placeholder="Confirm Password"
                errorHintText="* This is a mandatory field"
                inputID="confirmPassword"
                isPasswordInput={true}
                onInputChanged={onInputChangedHandler}
            />

            <Text style={styles.clickableTextSiblingStyle} >I have an account,
                <TouchableWithoutFeedback onPress={() => { props.navigation.navigate("LoginPage") }}>
                    <Text style={styles.clickableTextStyle}> Login</Text>
                </TouchableWithoutFeedback>
            </Text>

            <CustomButton style={styles.registerButtonStyle} title="Register" onPress={onRegistration} />

            <View style={{ height: 50 }} />

        </ScrollView>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        paddingTop: 20
    },
    inputStyles: {
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10
    },
    registerButtonStyle: {
        marginHorizontal: 20,
    },
    clickableTextSiblingStyle: {
        alignSelf: "center"
    },
    clickableTextStyle: {
        color: "maroon"
    }
});

export default RegistrationPage;