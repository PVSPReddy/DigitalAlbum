import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

//import HomePage from './home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class UserHome extends Component {


  constructor(props){
    super(props);
    var milliseconds = 0;
    this.state = { 
      uNameText: 'Enter User Name',
      uPasswordText: "Enter User Password",
      uPWDPlaceHolder : "Enter User Password"
    };
  }
  onLoginClicked()
  {
    //alert('Welcome to login page! click button');
    //this.props.navigation.navigate('RegisterScreen');
    this.props.navigation.navigate('HomeScreen',{
      uName: this.state.uNameText,
      uPWD : this.state.uPasswordText
    });
    //AppRegistry.registerComponent('ReactTestOne', () => HomePage);
  }

  onRegisterCLicked()
  {
    this.props.navigation.navigate('RegisterScreen');
  }

  renderHeader()
  {
    return(
      <View style={styles.header}>
        <Text style={styles.welcome}>User Login</Text>
      </View>
    );
  }

  renderBody()
  {
    return(
      <View style={styles.body}>
        <TextInput style={{height: 40, borderColor: 'gray', borderBottomColor: '#000000', borderWidth: 1}} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({uNameText : text})} value={this.state.uNameText} />
        <TextInput style={{height: 40, borderColor: 'transparent', borderBottomColor: '#00000000', borderWidth: 1}} underlineColorAndroid={"#00000000"} multiline={false} returnKeyType="done" placeholder={this.state.uPWDPlaceHolder} onChangeText={(text) => this.setState({uPasswordText : text})} />
        {/*
        keyboardType={'numeric'}
              returnKeyType="done"
              maxLength={6}
              underlineColorAndroid='transparent'
              selectionColor={color.darkGray}
        */}
        <Button onPress={()=> this.onLoginClicked()} title="login" color="#841584" accessibilityLabel="Learn more about this purple button">
        </Button>
      </View>
    );
  }

  render() {
    //alert('hello login');
    return (
      <View style={styles.container} flexDirection="column">
      {/* {this.renderHeader} */}
      {/* {this.renderBody} */}
      {/*
        <TextInput style={{height: 40, borderColor: 'gray', borderBottomColor: '#000000', borderWidth: 1}} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({uNameText : text})} value={this.state.uNameText} />
        <TextInput style={{height: 40, borderColor: 'transparent', borderBottomColor: '#00000000', borderWidth: 1}} underlineColorAndroid={"#00000000"} multiline={false} returnKeyType="done" placeholder={this.state.uPWDPlaceHolder} onChangeText={(text) => this.setState({uPasswordText : text})} />
        {/*
        keyboardType={'numeric'}
              returnKeyType="done"
              maxLength={6}
              underlineColorAndroid='transparent'
              selectionColor={color.darkGray}
        * /}
        <Button onPress={()=> this.onPressregister()} title="login" color="#841584" accessibilityLabel="Learn more about this purple button">
        </Button>
        */}




        <View style={styles.header}>
          <Text style={styles.welcome}>User Login</Text>
        </View>
        <View style={styles.body}>
          {/* <TextInput style={{height: 40, borderColor: 'gray', borderBottomColor: '#000000', borderWidth: 1, alignSelf: 'stretch'}} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({uNameText : text})} value={this.state.uNameText} /> */}
          <TextInput style={{height: 40, borderColor: 'gray', borderBottomColor: '#000000', borderWidth: 1, alignSelf: 'stretch'}} multiline={true} numberOfLines={3} onChangeText={(text) => this.setState({uNameText : text})} placeholder="Enter User Name" />
          <TextInput style={{height: 40, borderColor: 'transparent', borderBottomColor: '#00000000', borderWidth: 1, alignSelf: 'stretch'}} underlineColorAndroid={"#00000000"} multiline={false} returnKeyType="done" placeholder={this.state.uPWDPlaceHolder} onChangeText={(text) => this.setState({uPasswordText : text})} />
          {/*
          keyboardType={'numeric'}
              returnKeyType="done"
              maxLength={6}
              underlineColorAndroid='transparent'
              selectionColor={color.darkGray}
          */}
          <Button onPress={()=> this.onLoginClicked()} title="login" color="#841584" accessibilityLabel="Learn more about this purple button">
          </Button>
        </View>
        <View style={styles.footer}>
          <Button style={styles.welcome} title="Register" onPress={()=> this.onRegisterCLicked()}></Button>
        </View>
      </View>
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
    flex: 80,
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