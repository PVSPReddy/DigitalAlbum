import React, { useState } from "react"
import { View, Text, StyleSheet, Button, Alert, ScrollView } from "react-native"
import CustomTextInput from "../CustomComponents/CustomTextInput"
import CustomButton from "../CustomComponents/CustomButton"

const IntroPage = (props) => {
    const [testText, setTestText] = useState("Hello")
    const onPressTest = () => {
        setTestText("Button CLicked");
        Alert.alert("Alert", "Hello", [{
            text: "OK",
            onPress: () => {
                console.log("Okay Clicked");
            }
        }]);
    }
    const onNavigation = () => {
        props.navigation.navigate("LoginPage");
    }
    const mainUIComponent = (
        <ScrollView>
            <View>
                <View style={styles.fieldSet}>
                    <Text style={styles.legend}>Heading</Text>
                    <Text>Some Text or control</Text>
                </View>
                <Text>This is an Intro Page</Text>
                <Text>{testText}</Text>
                <CustomTextInput
                    validationOptions={{ allowErrorText: false, shallInitValidation: false, isValidInput: false }}
                    placeholder="Enter your name"
                    errorHintText="* This is a mandatory field" />
                <CustomTextInput
                    validationOptions={{ allowErrorText: true, shallInitValidation: false, isValidInput: false }}
                    placeholder="Enter your name"
                    errorHintText="* This is a mandatory field" />
                <CustomTextInput
                    validationOptions={{ allowErrorText: true, shallInitValidation: true, isValidInput: false }}
                    placeholder="Enter your name"
                    errorHintText="* This is a mandatory field" />
                <CustomTextInput
                    validationOptions={{ allowErrorText: true, shallInitValidation: true, isValidInput: true }}
                    placeholder="Enter your name"
                    errorHintText="* This is a mandatory field" />
                {/* <Button style={styles.generalButtonStyle} title="Click Me" onPress={onPressTest}/>
            <Button style={styles.generalButtonStyle} title="Navigate to Next Page" onPress={onNavigation}/>
            <Button style={styles.generalButtonStyle} title="Go To Carousel" onPress={() => {props.navigation.navigate("CarouselPage")}} /> */}

                <CustomButton style={styles.generalButtonStyle} title="Click Me" onPress={onPressTest} />
                <CustomButton style={styles.generalButtonStyle} title="Navigate to Next Page" onPress={onNavigation} />
                <CustomButton style={styles.generalButtonStyle} title="Go To Carousel" onPress={() => { props.navigation.navigate("CarouselPage") }} />
            </View>
        </ScrollView>
    )
    return mainUIComponent;
}

var styles = StyleSheet.create({
    generalButtonStyle: {
        marginTop: 10,
        paddingTop: 10,
        backgroundColor: "green",
        color: 'maroon'
    },
    fieldSet: {
        margin: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#000'
    },
    legend: {
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    }
});

export default IntroPage;