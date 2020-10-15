import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

const CustomTouch = (props) => {
  let TouchableComponent = TouchableOpacity;

  const {isRequiredFeedback, onPress, onLongPress, children, childData} = props;

  if (!isRequiredFeedback) {
    TouchableComponent = TouchableWithoutFeedback;
  } else {
    if (Platform.OS === 'android' && Platform.Version > '21') {
      TouchableComponent = TouchableNativeFeedback;
    }
  }

  const onPressHandler = () => {
    if (childData === null || isNaN(childData) || childData === undefined) {
      onPress();
    } else {
      onPress(childData);
    }
  };

  const onLongPressHandler = () => {
    if (childData === null || isNaN(childData) || childData === undefined) {
      onLongPress();
    } else {
      onLongPress(childData);
    }
  };

  const mainUIComponent = (
    <TouchableComponent
      onPress={onPressHandler}
      onLongPress={onLongPressHandler}>
      {children}
    </TouchableComponent>
  );
  return mainUIComponent;
};

export default CustomTouch;
