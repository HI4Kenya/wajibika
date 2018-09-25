import React, { Component } from "react";
import { Platform } from 'react-native';
import { StyleSheet, View, TextInput, Image } from "react-native";
import { Button, Text } from 'native-base';
import HomeScreen from './HomeScreen'
import { createStackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const App = createStackNavigator({
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
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
          extraHeight={Platform.select({ android: 200 })}
        >
          <View style={loginStyles.logoContainer} >
            <Text style={loginStyles.title}>Login </Text>
            <Image
              style={loginStyles.logo}
              source={require('../images/logo.jpg')}
            />

          </View>

          <View>
            <TextInput
              ref="txtEmail"
              style={loginStyles.textInput}
              placeholder="Email Address"
              placeholderTextColor = '#5C6D70'
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
              placeholderTextColor = '#5C6D70'
              returnKeyType="done"
              secureTextEntry={true}
              onChangeText={text => this.setState({ passWord: text })}
            />
            <Button rounded style={{ marginTop: 25, marginLeft: 140 }} onPress={() =>
              navigate('Home')}>
              <Text>Submit</Text>
            </Button>
          </View>

        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  textArea: {
    padding: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  textInput: {
    height: 40,
    textAlign: "center",
    marginTop: 30
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 400,
    height: 250
  },
  title: {
    color: '#5C6D70',
    marginTop: 10,
    marginBottom: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.7,
    fontSize: 20,
    fontWeight: "bold"
  }
});