import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import AppStyleConstants from "../Constants/AppStyleConstants";
import { CANCEL_BUTTON_TEXT } from "../Constants/TextConstants";
import CustomButton from "./CustomButton";
import CustomFieldFrame from "./CustomFieldsFrame";
import CustomModal from "./CustomModal";
import CustomTextField from "./CustomTextFiled";
import CustomTouch from "./CustomTouch";

class CustomTextInputPickerField extends React.Component {

    constructor(props) {
        super(props);

        const {
            fontStyle,
            placeHolder,
            placeHolderStyle,
            value,

        } = this.props;

        let text_Style = styles.textDisplayStyle;
        let init_Text = "";
        if ((value) && (value !== "")) {
            text_Style = fontStyle;
            init_Text = value;
        }
        else {
            text_Style = (placeHolderStyle) ? placeHolderStyle : styles.placeHolderStyle;
            init_Text = (placeHolder && placeHolder !== "") ? placeHolder : "Select from picker";
        }

        this.state = {
            popupVisible: false,
            text: init_Text,
            textStyle: text_Style
        };
    }

    onItemSelection = (value) => {
        const {
            fontStyle,
            onItemSelected,
            inputID
        } = this.props;

        this.setState({ popupVisible: false, text: value, textStyle: fontStyle });
        onItemSelected(value, inputID);
    }

    getPickerOptionView = (data) => {
        const inputFiledView = (
            <CustomTouch childData={data} isRequiredFeedback={false} onPress={this.onItemSelection}>
                <View style={{ height: 20, }}>
                    <Text>{data}</Text>
                </View>
            </CustomTouch>
        )
        return inputFiledView;
    };

    render() {

        const {
            numberOfLines,
            value,

            style,
            legendTitle,
            legendTextStyle,
            hintText,
            hintTextStyle,
            isError,

            pickerData,

            onPress

        } = this.props;

        const picker_Data = (pickerData && pickerData != undefined && pickerData != null) ? pickerData : [];

        const uiMainComponent = (
            <CustomFieldFrame
                style={style}
                legendTextStyle={legendTextStyle}
                legendTitle={legendTitle}
                hintText={hintText}
                hintTextStyle={hintTextStyle}
                isError={isError}
            >
                <CustomModal visible={this.state.popupVisible}>
                    <View style={styles.popupContainerStyle}>
                        {picker_Data.map(item => this.getPickerOptionView(item))}
                        <CustomButton title={CANCEL_BUTTON_TEXT} style={styles.buttonStyle} fontStyle={styles.buttonFontStyle} onPress={() => { this.setState({ popupVisible: false }) }} />
                    </View>
                </CustomModal>
                <CustomTouch isRequiredFeedback={false} onPress={() => { this.setState({ popupVisible: true }) }}>
                    <View>
                        <Text
                            style={{ ...styles.textDisplayStyle, ...this.state.textStyle }}
                            numberOfLines={numberOfLines}
                        >
                            {this.state.text}
                        </Text>
                    </View>
                </CustomTouch>
            </CustomFieldFrame>
        )

        return uiMainComponent;
    }
}

const styles = StyleSheet.create({
    textDisplayStyle: {
        fontSize: 20,
        color: "#000000",
        margin: 10
    },
    placeHolderStyle: {
        fontSize: 20,
        fontStyle: "italic",
        color: "#999",//#636c72
        margin: 10
    },
    popupContainerStyle: {
        backgroundColor: AppStyleConstants.colors.POPUP_BACKGROUND_COLOR,
        overflow: "hidden",
        // height: 100,
        // flex: 1,
        borderRadius: 10
    },
    buttonStyle: {
        marginBottom: 20,
        backgroundColor: AppStyleConstants.colors.BUTTON_COLOR
    },
    buttonFontStyle: {
        color: AppStyleConstants.colors.BUTTON_FONT_COLOR
    },
});

export default CustomTextInputPickerField;