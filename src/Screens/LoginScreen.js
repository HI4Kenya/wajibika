import React, { Component } from 'react'
import { Platform } from 'react-native'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginContainer from '../Containers/LoginContainer'

export default class LoginScreen extends Component {

  render() {

    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
          extraHeight={Platform.select({ android: 200 })}
        >
          <View style={styles.logoContainer} >
            <Text style={styles.title}>Wajibika </Text>
            <Image
              style={styles.logo}
              source={require('../images/logo.jpg')}
            />
          </View>
          <LoginContainer navigate={navigate} />

        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 10,
    marginLeft: 10
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
    fontWeight: 'bold'
  }
})