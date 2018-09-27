import React, { Component } from "react";
import { Container, Content, InputGroup, Text, Button, Input, Icon } from "native-base";
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import HomeScreen from './HomeScreen';
// import { createStackNavigator } from 'react-navigation';

// const App = createStackNavigator({
//   Home: { screen: HomeScreen }
// });

export default class SearchScreen extends Component {


  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
          extraHeight={Platform.select({ android: 200 })}
        >
          <Content style={{marginTop:50}}>
            <InputGroup borderType='rounded'>
              <Icon name='ios-search' style={{ color: '#5C6D70' }} />
              <Input placeholder='Search Facility' />
            </InputGroup>
          </Content>

          <Button rounded style={{ marginTop:30, marginBottom: 200, marginLeft: 100 }} onPress={() =>
            navigate('Home')}>
            <Text>Select Facility</Text>
          </Button>
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}
