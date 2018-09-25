import React, { Component } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Button,
} from "react-native";
import HomeScreen from './HomeScreen'
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class Logscreen extends Component {
 constructor(props) {
 super(props);

this.state = {
    emailAddress: "",
    passWord: ""
   };
 }

 onPressSubmitButton() {
   // this.onFetchLoginRecords();
   }

 render() {
  const { navigate } = this.props.navigation
  
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
       onPress={() =>
        navigate('Home')}
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