import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import { STATUS_BAR_HEIGHT } from '../constants'

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Wajibika',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      color: 'white'
    },
    headerLeft: <View />
  })

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>

      </View>
    );
  }
}

export default MainScreen