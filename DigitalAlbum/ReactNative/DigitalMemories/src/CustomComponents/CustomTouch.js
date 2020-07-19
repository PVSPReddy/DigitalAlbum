import React from "react"
import { TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native"

const CustomTouch = (props) => {
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS==="android" && Platform.Version>"21")
    {
        TouchableComponent = TouchableNativeFeedback;
    }

    const mainUIComponent = (
        <TouchableComponent onPress={props.onPress} onLongPress={props.onLongPress}>
            {props.children}
        </TouchableComponent>
    )
    return mainUIComponent;
}

export default CustomTouch;   