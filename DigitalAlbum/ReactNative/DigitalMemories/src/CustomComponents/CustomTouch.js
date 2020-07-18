import React from "react"
import {} from "react-native"
import { TouchableOpacity, TouchableNativeFeedback } from "react-native-gesture-handler"

const CustomTouch = (props) => {
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS==="android" && Platform.Version>"21")
    {
        TouchableComponent = TouchableNativeFeedback;
    }

    const mainUIComponent = (
        <TouchableComponent>
            {props.children}
        </TouchableComponent>
    )
    return mainUIComponent;
}

export default CustomTouch;   