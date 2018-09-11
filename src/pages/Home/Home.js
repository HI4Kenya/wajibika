import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
        />
      </View>
    );
  }
}

export default Home;