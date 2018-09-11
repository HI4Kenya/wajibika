import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import { Font, Apploading } from 'expo';

import { AccordionExample, HeaderIconExample, Save } from './src/pages/euv/euv';
// import HeaderIconExample from './src/pages/pharmInv/pharmInv';

export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = { loading: true }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ loading: false })
  }
  render() {
    if (this.state.loading) {
      return (
        null
      );
    }

    return (
      <Container>
        <HeaderIconExample />
        <AccordionExample />
        <Save />
      
        
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
