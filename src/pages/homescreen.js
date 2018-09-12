import React, { Component } from "react";
import { Header, Button, Text, Content, Container, Left, Icon, Title, Right, Body } from "native-base";
import {StyleSheet} from 'react-native';
import homestyle from "./homestyle";
 

class HomeHeader extends Component {
  render() {
    return (
        <Header>     
          <Body style={{alignItems: "center", justifyContent:"center", paddingTop:45, paddingBottom:20}}>
            <Title>Home</Title>
          </Body>
          
        </Header> 
    );
  }
}

class MenuBlocks extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Container style={{ padding:40}}>
            <Button block light style={homestyle.mb15}>
              <Text>Facility Information</Text>
            </Button>
            <Button block style={homestyle.mb15}>
              <Text>Human Resources</Text>
            </Button>
          
            <Button block light style={homestyle.mb15}>
              <Text>Storage Area</Text>
            </Button>
            <Button block style={homestyle.mb15}>
              <Text>MIS Tools</Text>
            </Button>
            <Button block light style={homestyle.mb15}>
              <Text>EUV</Text>
            </Button>
            <Button block style={homestyle.mb15}>
              <Text>Inventory Management</Text>
            </Button>
            <Button block light style={homestyle.mb15}>
              <Text>Resources and References</Text>
            </Button>
            <Container style={homestyle.mbt20}>
            <Button rounded success>
              <Text>Upload</Text>
            </Button>
            </Container>
          </Container>
         
        </Content>
      </Container>
    );
  }
}

module.exports = {
  HomeHeader, MenuBlocks
}