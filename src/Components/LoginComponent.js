import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'native-base'

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      serverUrl: ''
    }
  }

  onPressLoginButton() {

    if (this.state.email != '' && this.state.password != '' && this.state.serverUrl != '') {
      options.hostname=this.state.serverUrl
      options.port = 80
    }

    console.log(this.state.email + this.state.password)

    return fetch (options.hostname, options)
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <View>
        <TextInput
          ref='txtServeUrl'
          style={styles.textInput}
          placeholder='Server URL'
          placeholderTextColor = '#5C6D70'
          keyboardType='default'
          returnKeyType='next'
          onSubmitEditing={event => {
            this.refs.txtServerUrl.focus()
          }}
          onChangeText={url => this.setState({ serverUrl: url })}
        />
        <TextInput
          ref='txtEmail'
          style={styles.textInput}
          placeholder='Email Address'
          placeholderTextColor = '#5C6D70'
          keyboardType='email-address'
          returnKeyType='next'
          onSubmitEditing={event => {
            this.refs.txtPassword.focus()
          }}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          ref='txtPassword'
          style={styles.textInput}
          placeholder='Password'
          placeholderTextColor = '#5C6D70'
          returnKeyType='done'
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <Button rounded style={{ marginTop: 25, marginLeft: 140 }} onPress={() => this.onPressLoginButton()}>
          <Text>Login</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    textAlign: 'left',
    marginTop: 30
  }
})