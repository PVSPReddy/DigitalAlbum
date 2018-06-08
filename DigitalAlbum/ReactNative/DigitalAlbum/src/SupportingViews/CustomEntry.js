import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';


export default class CustomEntry extends Component
{
    constructor(props)
    {
        super(props);
        var params = this.props.InputText;
        var customStyle = this.props.CustomStyle;
        if(customStyle !== null && customStyle != undefined)
        {
            this.state = {
                textValue : customStyle.TextTextValue,
                textInputTextValue : customStyle.TextInputTextValue,
                textInputPlaceHolderValue : customStyle.TextInputPlaceholderValue,
                textInputTextColor : customStyle.TextInputTextColor,
                textInputPlaceHolderColor : customStyle.TextInputPlaceHolderColor,
                textTextColor : customStyle.TextTextColor,
                textIsVisible : customStyle.TextIsVisible,
                textOpacity : customStyle.TextOpacity,
                viewBackGroundColor : customStyle.ViewBackGroundColor,
                viewHeight : customStyle.ViewHeight
            }
        }
        else
        {
            this.state = {
                textValue : "Enter Some Text",
                textInputTextValue : this.props.InputText,
                //textInputTextValue : (params != "undefined" || params != "" || params != "UnDefined" || params !== "Undefined") ? params :  "Enter Some Text",
                textInputPlaceHolderValue : "Enter Some Text"
            };
        }
    }

    render()
    {
        return(
            <View style={[styles.textContainerStyle, {backgroundColor:this.state.viewBackGroundColor}, {height:this.state.viewHeight}]} >
                <Text style={[styles.textStyle, {textDecorationColor:this.state.textTextColor}, {opacity:this.state.textOpacity}]} >{this.state.textValue}</Text>
                {/* <TextInput style={[{textDecorationColor:this.state.textInputTextColor}]} placeholder={this.state.textInputPlaceHolderValue} onChangeText={(text) => this.TextChanged(text)} value={this.state.textInputTextValue} /> */}
                {/* <TextInput style={[{textDecorationColor:this.state.textInputTextColor}]} placeholder={this.state.textInputPlaceHolderValue} onChangeText={(text) => this.props.onCreateNew()} value={this.state.textInputTextValue} /> */}
                <TextInput style={[styles.textInputStyle, {textDecorationColor:this.state.textInputTextColor}]} placeholder={this.state.textInputPlaceHolderValue} onChangeText={(text) => this.TextChanged(text)} value={this.state.textInputTextValue} />
            </View>
        );
    }

    TextChanged(textChangedValue)
    {
        if(textChangedValue !== undefined && textChangedValue !== "" && textChangedValue !== null )
        {
            this.setState({textOpacity : 1});
            this.props.onCreateNewTwo("finalValue", textChangedValue)
            // this.setState({textInputTextValue:textChangedValue});
        }
        else
        {
            this.setState({textOpacity : 0});
        }
    }
}
const styles = StyleSheet.create({
    textContainerStyle : {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection:"column",
        backgroundColor:"#00FF00",
        marginTop:5,
        marginBottom:5,
        paddingTop:5,
        paddingBottom:5
    },
    textStyle : {
        flex:1,
        textAlign: 'left',
    },
    textInputStyle : {
        flex:1,
        alignSelf: 'stretch',
        textAlign: 'left',
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
});