import React, { Component } from "react";
import { Accordion, Container, Content, Form, Input, Item, Label, Text } from "native-base";

class StaffNumberForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
  }

  render () {
    return (
      <Container>
        <Form>
          <Item stackedLabel>
            <Label>County Employed</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Partner Employed</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Hospital Board Employed</Label>
            <Input />
          </Item>

          <Text>Total: {this.state.total}</Text>
        </Form>
      </Container>
    )
  }
}

export default class StaffNumberTab extends Component {

  dataArray = [
    { title: 'Pharmacists' },
    { title: 'Pharmaceutical Technologists' },
    { title: 'Commodity Nurses' },
    { title: 'Lab Technologists' },
    { title: 'Lab Technicians' },
    { title: 'Nutrition' },
  ];
  
  _renderContent() {
    return (
      <StaffNumberForm />
    )
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Accordion dataArray={this.dataArray} expanded={0} renderContent={this._renderContent} />
        </Content>
      </Container>
    );
  }
}