import React, { useState } from "react"
import { Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Alert } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import CustomTextInput from "../CustomComponents/CustomTextInput"
import CustomButton from "../CustomComponents/CustomButton"
import { memoriesImageURL } from "../Assets/CommonImages/MemoriesLogo"
import { StackActions } from "@react-navigation/native"

const LoginPage = (props) => {

    const USER_ID = "userID";
    const PASSWORD = "password";

    const [validations, setValidations] = useState({
        areValidInputs: {
            isValidUserID: true,
            isValidPassword: true
        },
        inputValues: {
            userID: "",
            passwordValue: ""
        },
        isFormValid: true
    })

    const NavigateTo = (pageID) => {
        if (pageID === "MainNavigation") {
            pageID = "MainNavigation"
        }
        props.navigation.dispatch(StackActions.replace(pageID));
    }

    const userNotFoundHandler = () => {
        Alert.alert("Alert", "User is not available in local database, please register or reset your password", [{
            text: "OK",
            onPress: () => {

            }
        }]);
    }

    const onLogin = () => {
        console.log("validating");
        const obtainedInputValues = validations.inputValues;
        console.log(validations.inputValues);
        console.log(obtainedInputValues.mobileNoValue);
        const standardMobileRegex = /^((\+){1}91){1}[1-9]{1}[0-9]{9}$/;
        const standardEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        const mediumPasswordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/

        if (obtainedInputValues.mobileNoValue <= 0 || (!(standardMobileRegex.test(obtainedInputValues.userID)) && !(standardEmailRegex.test(obtainedInputValues.userID)))) {
            const setAreValidInputs = { ...validations.areValidInputs, isValidUserID: false }
            const newValidaions = { ...validations, areValidInputs: setAreValidInputs, isFormValid: false }
            setValidations(newValidaions);
            console.log(validations.inputValues.userID);
            console.log("uname")
        }
        else if (obtainedInputValues.passwordValue <= 0 || !(mediumPasswordRegex.test(obtainedInputValues.passwordValue))) {
            const setAreValidInputs = { ...validations.areValidInputs, isValidPassword: false }
            const newValidaions = { ...validations, areValidInputs: setAreValidInputs, isFormValid: false }
            setValidations(newValidaions);
        }
        else {
            AsyncStorage.getItem("userData").
                then((value) => {
                    try {
                        console.log(value);
                        if (value === null) {
                            console.log("Got is nullable value");
                            userNotFoundHandler();
                        }
                        else {
                            console.log(value);
                            if (value.length > 0) {
                                var userData = JSON.parse(value);
                                if ((userData.mobileNoValue.length > 0 || userData.emailIdValue.length > 0) && (userData.passwordValue.length > 0)) {

                                    console.log("done")
                                    const todayDate = new Date();
                                    var updatedUserDataObject = { ...userData, updatedOn: todayDate }
                                    var updatedUserData = JSON.stringify(updatedUserDataObject);
                                    AsyncStorage.setItem("userData", updatedUserData).
                                        then(() => {
                                            Alert.alert("Alert", "Logged in Successfully", [{
                                                text: "OK",
                                                onPress: () => {
                                                    NavigateTo("MainNavigation");
                                                }
                                            }]);
                                        }).catch((error) => {
                                            console.log(error);
                                        });
                                }
                                else {
                                    userNotFoundHandler();
                                }
                            }
                            else {
                                userNotFoundHandler();
                            }
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                }).
                catch((err) => {
                });
        }
    }

    const onInputChangedHandler = (identifier, text, isValidInput) => {

        console.log(identifier);
        console.log(text);

        let newValidations = {
            ...validations,
            areValidInputs: {
                isValidUserID: (identifier === USER_ID) ? true : validations.areValidInputs.isValidUserID,
                isValidPassword: (identifier === PASSWORD) ? true : validations.areValidInputs.isValidPassword,
            },
            inputValues: {
                userID: (identifier === USER_ID) ? text : validations.inputValues.userID,
                passwordValue: (identifier === PASSWORD) ? text : validations.inputValues.passwordValue
            },
            isFormValid: true
        };
        setValidations(newValidations);
    };

    const mainUIComponent = (
        <ScrollView style={styles.mainContainerStyle}>

            <Image style={{ height: 100, width: 100, alignSelf: "center" }} source={{ uri: memoriesImageURL }} />

            {(!validations.isFormValid) ? <Text style={styles.errorTextStyle}>Invalid UserName/Password</Text> : <></>}

            <CustomTextInput
                style={styles.inputStyles}
                validationOptions={{
                    allowInbuiltValidation: false,
                    allowErrorText: false,
                    isValidInput: validations.areValidInputs.isValidUserID
                }}
                placeholder="Enter your Mobile Number/Email ID "
                // errorHintText="* Plese enter your Mobile Number/Email ID "
                inputID={USER_ID}
                onInputChanged={onInputChangedHandler}//.bind(this, USER_ID, { isRequired: true })
            />

            <CustomTextInput
                style={styles.inputStyles}
                validationOptions={{
                    allowInbuiltValidation: false,
                    allowErrorText: false,
                    isValidInput: validations.areValidInputs.isValidPassword
                }}
                placeholder="Enter your Password"
                // errorHintText="* Plese enter your Password"
                inputID={PASSWORD}
                isPasswordInput={true}
                onInputChanged={onInputChangedHandler}//.bind(this, PASSWORD, { isRequired: true })
            />

            <Text style={styles.registerClickableTextSiblingStyle} >Don't have an account,
                <TouchableWithoutFeedback onPress={() => { props.navigation.navigate("RegistrationPage") }}>
                    <Text style={styles.registerClickableTextStyle}> Register</Text>
                </TouchableWithoutFeedback>
                <Text style={styles.resetClickableTextSiblingStyle} > - forget my password,
                <TouchableWithoutFeedback onPress={() => { props.navigation.navigate("ResetPage") }}>
                        <Text style={styles.resetClickableTextStyle}> Reset</Text>
                    </TouchableWithoutFeedback>
                </Text>
            </Text>

            <CustomButton style={styles.loginButtonStyle} title="Login" onPress={onLogin} />
        </ScrollView>
    )
    return mainUIComponent;
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        paddingTop: 20,
    },
    inputStyles: {
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10
    },
    errorTextStyle: {
        backgroundColor: "transparent",
        color: "maroon",
        marginHorizontal: 25,
        padding: 0
    },
    loginButtonStyle: {
        marginHorizontal: 20,
    },
    resetClickableTextSiblingStyle: {
        color: "black"
    },
    resetClickableTextStyle: {
        color: "maroon"
    },
    registerClickableTextSiblingStyle: {
        color: "black",
        alignSelf: "center",
        marginTop: 40,
    },
    registerClickableTextStyle: {
        color: "maroon"
    }
})

export default LoginPage;