import React, { Component } from "react";
import { Left, Body, Right, Button, Icon, Title, Container, Header, Content, Accordion, Text } from "native-base";
import { FixedLabelExample } from './euvOpt';

const dataArray = [
  { title: "AL 6", content: '' },
  { title: "AL 24", content: "" },
  { title: "DMPA", content: "" },
  { title: "ORS/Zn Co pack", content: ""}
];

class AccordionExample extends Component {

  _renderContent (content) {
    return (
      <FixedLabelExample />
    );
  }

  render() {
    return (
      <Container style={{paddingBottom: 0}}>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} renderContent={this._renderContent} />
        </Content>
      </Container>
    );
  }
}

class HeaderIconExample extends Component {
  render() {
    return (
        <Header style={{paddingTop: 15}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{alignItems: "center", justifyContent:"center"}}>
            <Title>EUV</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header> 
    );
  }
}

class Save extends Component {
  render() {
    return (
      <Container style={{alignItems: "center", justifyContent:"center"}}>
        <Content>
          <Button rounded light>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


module.exports = {
  HeaderIconExample, AccordionExample, Save
}