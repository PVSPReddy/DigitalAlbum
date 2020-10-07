import React from "react"
import { TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from "react-native"

const CustomTouch = (props) => {
    let TouchableComponent = TouchableOpacity;

    const {
        isRequiredFeedback,
        onPress,
        onLongPress,
        children,
        childData
    } = props;

    if (!isRequiredFeedback) {
        TouchableComponent = TouchableWithoutFeedback;
    }
    else {
        if (Platform.OS === "android" && Platform.Version > "21") {
            TouchableComponent = TouchableNativeFeedback;
        }
    }

    const onPressHandler = () => {
        if(childData === null || childData === NaN || childData === undefined )
        {
            onPress();
        }
        else
        {
            onPress(childData);
        }
    }

    const onLongPressHandler = () => {

    }

    const mainUIComponent = (
        <TouchableComponent onPress={onPressHandler} onLongPress={onLongPress}>
            {children}
        </TouchableComponent>
    )
    return mainUIComponent;
}

export default CustomTouch;   