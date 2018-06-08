import React, { Component } from 'react';

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import CustomEntry from '../SupportingViews/CustomEntry';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let SetCustomEntryStyle = (textInputValue, textInputPlaceholder, textValue) => {
  var style = {
    TextInputTextValue : textInputValue,
    TextInputPlaceholderValue : textInputPlaceholder,
    TextTextValue : textValue,
    TextInputTextColor : "#000000",
    TextInputPlaceHolderColor : "#C3C3C3",
    TextTextColor : "#000000",
    TextIsVisible : false,
    TextOpacity : 0,
    ViewBackGroundColor : "#00FF00",
    ViewHeight : 60
    //CustomState : this.state
  }
  return style;
};

export default class UserRegister extends Component 
{
  constructor(props){
    super(props);
    var milliseconds = 0;
    this.state = {
      userName:"",
      userPassword:"",
      userEmail:"",
      userMobile:""
    }
  }

  onRegisterClicked()
  {
    
  }
  onLoginCLicked()
  {
    this.props.navigation.goBack(null);
  }

  /*
  GetChangedValue(key, value)
  {
    // console.log(key);
    this.setState({finalValue: value});
    console.log(this.state.finalValue);
    return "";
  };
  */
 GetChangedValue(key, value)
  {
    // console.log(key);
    this.setState({finalValue: value});
    console.log(this.state.finalValue);
    return "";
  };

  renderHeader()
  {
    return(
      <View style={styles.header}>
        <Text style={styles.welcome}>User Login</Text>
      </View>
    );
  }

  renderForm()
  {
    return(
      <View style={{alignSelf:"stretch"}}>
        <CustomEntry CustomStyle={SetCustomEntryStyle("", "Enter User Name", "Enter User Name")} onCreateNewTwo = {(finalValue, text) => this.setState({userName:text})} />
        <CustomEntry CustomStyle={SetCustomEntryStyle("", "Set Password", "Set Password")} onCreateNewTwo = {(finalValue, text) => this.setState({userPassword:text})} />
        <CustomEntry CustomStyle={SetCustomEntryStyle("", "Enter Your Email Id", "Enter Your Email Id")} onCreateNewTwo = {(finalValue, text) => this.setState({userEmail:text})} />
        <CustomEntry CustomStyle={SetCustomEntryStyle("", "Enter Your Mobile Number", "Enter Your Mobile Number")} onCreateNewTwo = {(finalValue, text) => this.setState({userMobile:text})} />
      </View>
    );
  }

  render() {
    //alert('hello Register');
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.welcome}>User Register</Text>
        </View>
        {/* {this.renderHeader()} */}
        {/* {this.renderHeader()} */}
        {/* <CustomEntry CustomStyle={SetCustomEntryStyle("", "Enter User Name", "Enter User Name")} onCreateNewTwo = {(finalValue, text) => this.setState({userName:text})} />
        <CustomEntry CustomStyle={SetCustomEntryStyle("", "Set Password", "Set Password")} onCreateNewTwo = {(finalValue, text) => this.setState({userPassword:text})} />
        <CustomEntry CustomStyle={SetCustomEntryStyle("", "Enter Your Email Id", "Enter Your Email Id")} onCreateNewTwo = {(finalValue, text) => this.setState({userEmail:text})} />
        <CustomEntry CustomStyle={SetCustomEntryStyle("", "Enter Your Mobile Number", "Enter Your Mobile Number")} onCreateNewTwo = {(finalValue, text) => this.setState({userMobile:text})} /> */}
        <View style={styles.body}>
          {/* <TextInput style={{height: 40, borderColor: 'gray', borderBottomColor: '#000000', borderWidth: 1, alignSelf: 'stretch'}} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({uNameText : text})} value={this.state.uNameText} /> * /}
          <TextInput style={{height: 40, borderColor: 'gray', borderBottomColor: '#000000', borderWidth: 1, alignSelf: 'stretch'}} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({uNameText : text})} placeholder="Enter User Name" />
          <TextInput style={{height: 40, borderColor: 'transparent', borderBottomColor: '#00000000', borderWidth: 1, alignSelf: 'stretch'}} underlineColorAndroid={"#00000000"} multiline={false} returnKeyType="done" placeholder={this.state.uPWDPlaceHolder} onChangeText={(text) => this.setState({uPasswordText : text})} />
          {/*
          keyboardType={'numeric'}
              returnKeyType="done"
              maxLength={6}
              underlineColorAndroid='transparent'
              selectionColor={color.darkGray}
          */}
          {this.renderForm()}
          <Button onPress={()=> this.onRegisterClicked()} title="Register" color="#841584" accessibilityLabel="Learn more about this purple button">
          </Button>
        </View>
        <View style={styles.footer}>
          <Button style={styles.welcome} title="Login" onPress={()=> this.onLoginCLicked()}></Button>
        </View>

      </View>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to Sivaprasad!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     lets start the tutorial
      //   </Text>
      //   <Button onPress={this.onPressLogin} title="Login" color="#841584" accessibilityLabel="Learn more about this purple button">
      //   </Button>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    );
  }

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 50,
    // width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //paddingTop: Platform.OS === 'ios' ? 20 : 0,  //this is working and below one also working
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: 0,
      }
    }),
  },
  header:{
    flex:10,
    //width:100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 90,
    // height: 50,
    // width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin:10,
    backgroundColor: '#F5FCFF',
  },
  footer:{
    flex:10,
    //width:100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});