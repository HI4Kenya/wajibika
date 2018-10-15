import React, { Component } from 'react'
import { Container, Content, InputGroup, Text, Button, Input, Icon, DatePicker } from 'native-base'
import { Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import HomeScreen from './HomeScreen'
// import { createStackNavigator } from 'react-navigation'

// const App = createStackNavigator({
//   Home: { screen: HomeScreen }
// })

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { chosenDate: new Date() }
    this.setDate = this.setDate.bind(this)
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate })
  }

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
          <Content style={{ marginTop: 50 }}>
            <InputGroup borderType='rounded'>
              <Icon name='ios-search' style={{ color: '#5C6D70' }} />
              <Input placeholder='Search Facility' />
            </InputGroup>
          </Content>

          <Button rounded style={{ marginTop: 30, marginBottom: 200, marginLeft: 100 }} onPress={() =>
            navigate('Home')}>
            <Text>Select Facility</Text>
          </Button>

          <Content style={{ marginBottom: 50 ,padding: 99 }} >
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText='Select date'
              textStyle={{ color: '#5C6D70' }}
              placeHolderTextStyle={{ color: '#5C6D70' }}
              onDateChange={this.setDate}
            />


            <Text>
              Selected Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>

          </Content>
        </KeyboardAwareScrollView>
      </Container>
    )
  }
}
