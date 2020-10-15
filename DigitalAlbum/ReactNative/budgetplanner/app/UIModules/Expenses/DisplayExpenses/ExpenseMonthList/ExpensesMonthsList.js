import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import CustomHeader from '../../../../CustomComponents/CustomHeader';
import {IMAGE_BACK} from '../../../../Assets/ImageHelper';
import {EACH_MONTH_EXPENSES_LIST} from '../../../../Constants/PageNameConstants';
import CustomTouch from '../../../../CustomComponents/CustomTouch';
import AppStyleConstants from '../../../../Constants/AppStyleConstants';

const ExpensesMonthsList = (props) => {
  const {route, navigation} = props;

  const yearItemData = route.params.monthsListData;

  const moveBack = () => {
    navigation.pop();
  };

  const onItemSelectionhandler = (data) => {
    props.navigation.navigate(EACH_MONTH_EXPENSES_LIST, {
      monthsExpensesParams: data,
    });
  };
  const getParentListViews = (data) => {
    const _year = yearItemData.name.split('_')[1];
    const eachMonthItem = {year: _year, ...data};
    const inputFiledView = (
      <CustomTouch
        isRequiredFeedback={true}
        childData={eachMonthItem}
        onPress={(item) => {
          onItemSelectionhandler(item);
        }}>
        <View style={styles.listTextContainerStyle}>
          <Text style={styles.listTextStyle}>{data.sheetName}</Text>
        </View>
      </CustomTouch>
    );
    return inputFiledView;
  };

  const mainUIComponent = (
    <SafeAreaView>
      <>
        <CustomHeader
          title={yearItemData.name}
          backButtonIconSource={IMAGE_BACK}
          hideBackButton={false}
          onBackButtonPress={() => {
            moveBack();
          }}
        />
        <ScrollView>
          <View style={styles.bottomSpaceStyle}>
            {yearItemData.sheetsList.map((item) => getParentListViews(item))}
          </View>
        </ScrollView>
        <View />
      </>
    </SafeAreaView>
  );
  return mainUIComponent;
};

const styles = StyleSheet.create({
  listTextContainerStyle: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: AppStyleConstants.colors.BORDER_COLOR,
    borderBottomWidth: 2,
  },
  listTextStyle: {
    marginHorizontal: 30,
  },
  bottomSpaceStyle: {
    paddingBottom: Platform.OS === 'ios' ? 40 : 0,
  },
});

export default ExpensesMonthsList;
