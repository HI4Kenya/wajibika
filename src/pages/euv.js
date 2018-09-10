import React, { Component } from "react";
import { Left, Body, Right, Button, Icon, Title, Container, Header, Content, Accordion } from "native-base";
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
      <Container>
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
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
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


module.exports = {
  HeaderIconExample, AccordionExample 
}