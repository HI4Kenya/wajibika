import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base'

class EuvScreen extends Component {
  static navigationOptions = {
    title: 'EUV'
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>EUV</Text>
        <Button bordered onPress={() => navigate('Home')} >
          <Text>Get Started</Text>
        </Button>
      </View> 
    )
  }
}

export default EuvScreen