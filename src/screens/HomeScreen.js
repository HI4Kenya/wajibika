import React, { Component } from 'react'
import { Text, View } from 'react-native'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text onPress={() => navigate('')} >
          Hello World
        </Text>
      </View>
    )
  }
}

export default HomeScreen