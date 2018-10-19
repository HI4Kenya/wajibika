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

    const { navigateTo, options } = this.props 
    const LOGIN_URL = `${options.hostname}/api/me`

    return fetch (LOGIN_URL, options)
      .then(response => {
        if (response.ok) {
          let contentType = response.headers.get('content-type')
          if(contentType && contentType.includes('application/json')) {
            return response.json()
          }
          throw new TypeError(`Oops, we haven't got JSON!`)
        }
        switch (response.status) {
          case 401:
            throw new Error('Could not be authorized')
          case 404:
            throw new Error('Server could not be found. Check URL')
          default:
            throw new Error('There has been an identified problem')
        }
      })
      .then(json => {
        console.log(json)
        navigateTo('SearchScreen')
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
