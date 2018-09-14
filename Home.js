import React, { Component } from 'react';
import {Container, Text, View,Header, Button,Content } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
      <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,padding:40}}>
          <Button block
            onPress={() =>
            this.props.navigation.navigate('Facility')}
            style= {{marginBottom : 5,}}
          >
            <Text>Facility Info</Text>
          </Button>
          <Button block
            onPress={() =>
            this.props.navigation.navigate('HR')}
            style= {{marginBottom : 5,}}
          >
          <Text>Human Resource</Text>
           </Button>
          <Button block
            onPress={() =>
            this.props.navigation.navigate('StorageArea')}
            style= {{marginBottom : 5}}
            >
            <Text>Storage Area</Text>
          </Button>
          <Button block
            onPress={() =>
            this.props.navigation.navigate('MisTools')}
            style= {{marginBottom : 5,}}
            >
            <Text>Miss tools</Text>
          </Button>
          <Button block
           onPress={() =>
            this.props.navigation.navigate('Euv')}
            style= {{marginBottom : 5,}}
            >
            <Text>Euv</Text>
            </Button>
          <Button block
            onPress={() =>
            this.props.navigation.navigate('InvManagement')}
            style= {{marginBottom : 5,}}
            >
            <Text>Inv Management</Text>
            </Button>
          <Button block
             onPress={() =>
            this.props.navigation.navigate('Resources')}
            style= {{marginBottom : 5,}}
            >
            <Text>Resources</Text>
            </Button>
         
          </View>
          </Container>
    );
  }
}
