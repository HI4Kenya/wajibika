"use strict";

import React, { Component } from "react";
import {
     StyleSheet,
     View,
     TextInput,
     Button,
} from "react-native";

export default class App extends Component {
  constructor(props) {
  super(props);

 this.state = {
     emailAddress: "",
     passWord: ""
    };
  }

  async onFetchLoginRecords() {
    var data = {
     email: this.state.emailAddress,
     password: this.state.passWord
    };
    try {
     let response = await fetch(
      "http://yourdomain.com",
      {
        method: "POST",
        headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
        },
       body: JSON.stringify(data)
     }
    );
     if (response.status >= 200 && response.status < 300) {
        alert("authenticated successfully!!!");
     }
   } catch (errors) {

     alert(errors);
    } 
}

  onPressSubmitButton() {
    this.onFetchLoginRecords();
    }

  render() {
    return (
      <View style={loginStyles.container}>
       <TextInput
        ref="txtEmail"
        style={loginStyles.textInput}
        placeholder="Email Address"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={event => {
        this.refs.txtPassword.focus();
        }}
        onChangeText={text => this.setState({ emailAddress: text })}
      />
      <TextInput
        ref="txtPassword"
        style={loginStyles.textInput}
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry={true}
        onChangeText={text => this.setState({ passWord: text })}
      />
       <Button
        title="Submit"
        color="#841584"
        onPress={this.onPressSubmitButton.bind(this)}
      />
     </View>
    );
 }
}

const loginStyles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
   flexDirection: "column",
   backgroundColor: "#F5FCFF"
  },
  textInput: {
   height: 40,
   textAlign: "center",
   borderWidth: 1,
   width: "80%"
   },
   buttonSubmit: {
   color: "#841584"
  }
});