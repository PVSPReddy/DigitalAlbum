import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import AppStyleConstants from '../../Constants/AppStyleConstants';
import {
  ADD_EXPENSE_PAGE,
  EXPENSES_YEARS_LIST,
} from '../../Constants/PageNameConstants';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomHeader from '../../CustomComponents/CustomHeader';

class HomePage extends React.Component {
  // const [isVisibleModal, setIsVisibleModal] = useSta
  constructor(props) {
    super(props);
    this.state = {
      isVisibleModal: false,
    };
  }

  render() {
    const mainUIComponent = (
      <>
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <View style={styles.mainContainerStyle}>
            <CustomHeader title="Home" hideBackButton={true} />
            <View style={styles.buttonContainerStyle}>
              <CustomButton
                title="Add Expense"
                style={styles.buttonStyle}
                fontStyle={styles.buttonFontStyle}
                onPress={() => {
                  this.props.navigation.navigate(ADD_EXPENSE_PAGE);
                }}
              />
              <CustomButton
                title="Display Expenses"
                style={styles.buttonStyle}
                fontStyle={styles.buttonFontStyle}
                onPress={() => {
                  this.props.navigation.navigate(EXPENSES_YEARS_LIST);
                }}
              />
              {/* <CustomButton title="Show Modal Button" style={styles.buttonStyle} fontStyle={styles.buttonFontStyle} onPress={() => { this.setState({ isVisibleModal: true }) }} /> */}
            </View>
          </View>
        </SafeAreaView>
      </>
    );
    return mainUIComponent;
  }
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    padding: 20,
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: 'center',
  },
  buttonStyle: {
    marginBottom: 20,
    backgroundColor: AppStyleConstants.colors.BUTTON_COLOR,
  },
  buttonFontStyle: {
    color: AppStyleConstants.colors.BUTTON_FONT_COLOR,
  },
  mainContainerStyle: {
    flex: 1,
  },
  safeAreaViewStyle: {
    flex: 1,
  },
});

export default HomePage;
