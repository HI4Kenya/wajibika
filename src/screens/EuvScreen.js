import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base'

const dataArray = [
  { title: 'AL 6', content: '' },
  { title: 'AL 24', content: '' },
  { title: 'DMPA', content: '' },
  { title: 'ORS/Zn Co pack', content: ''}
];


class EuvScreen extends Component {
  static navigationOptions = {
    title: 'EUV'
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      
    )
  }
}

export default EuvScreen