import React, { Component } from 'react';
import { BackAndroid } from 'react-native';
import MainNavigator from "./MainNavigator";

//import HomePage from './home';

export default class MainNavigation extends Component {


  constructor(props){
    super(props);
  }

  render() {
    return (
      <MainNavigator />
    );
  }

componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton() {
    return true;
  }
}