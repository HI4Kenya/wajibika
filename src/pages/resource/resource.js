import React, { Component } from "react";
import { Left, Body, Right, Button, Icon, Title, Container, Header, Content, Accordion } from "native-base";
import { FixedLabelExample } from './resourceOpt';

const dataArray = [
  { title: "Current edition of the Kenya Malaria Treatment Guidelines", content: '' },
  { title: "Good Dispensing Practices", content: "" },
  { title: "Good Inventory Management Practice", content: "" },
  { title: "Good Record Keeping Practices", content: ""},
  { title: "Good Storage Practices", content: ""},
  { title: "Medication Use Counselling", content: ""}
  { title: "Medication Use Counselling", content: ""}
  { title: "Medication Use Counselling", content: ""}
  { title: "Medication Use Counselling", content: ""}
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
            <Title>Resources and Reference Materials</Title>
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