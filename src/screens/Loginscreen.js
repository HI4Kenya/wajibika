import { request } from 'http'

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { Button, Text } from 'native-base';
// import { createStackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Loginscreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onPressLoginButton() {
    const { navigate } = this.props.navigation

    console.log(this.state.email + this.state.password)

    

    navigate('SearchScreen')
  }

  render() {

    return (
      <View style={loginStyles.container}>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
          extraHeight={Platform.select({ android: 200 })}
        >
          <View style={loginStyles.logoContainer} >
            <Text style={loginStyles.title}>Wajibika </Text>
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
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              ref="txtPassword"
              style={loginStyles.textInput}
              placeholder="Password"
              placeholderTextColor = '#5C6D70'
              returnKeyType="done"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
            <Button rounded style={{ marginTop: 25, marginLeft: 140 }} onPress={() => this.onPressLoginButton()}>
              <Text>Login</Text>
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