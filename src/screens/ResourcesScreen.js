import React, { Component } from 'react'
import { Accordion, Container, Content, Form, Item, Label } from 'native-base';

import GenericPicker from '../widgets/GenericPicker'

class ResourcesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      picker: {
        options: ['Select Option', 'Yes', 'No']
      },
      input: {
        labels: []
      }
    };
  }

  render() {
    return (
      <Container>
        <Form>

          <Item fixedLabel style={{ padding: 25 }}><Label>For job aids</Label></Item>
          <Item stackedLabel style={{ paddingTop: 15 }}>
            <Label>Available?</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>

          <Item stackedLabel style={{ paddingTop: 15 }}>
            <Label>Displayed?</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>

        </Form>
      </Container>
    );
  }
}

export default class ResourcesScreen extends Component {

  dataArray = [
    { title: "1.Current Malaria Treatment Guidelines" },
    { title: "2.Tiahrt chart" },
    { title: "3.Expiry tracking chart" },
    { title: "4.Good dispensing practices" },
    { title: "5.Good inventory management practices" },
    { title: "6.Good record keeping practices" },
    { title: "7.Good storage practices" },
    { title: "8.Kenya Malaria Treatment Guidelines" },
    { title: "9.National FP Guidelines" },
    { title: "10.Use of ARVs " }
  ]

  _renderContent() {
    return (
      <ResourcesForm />
    );
  }

  render() {

    return (
      <Container style={{paddingTop :50}}>
        <Content padder>
          <Accordion icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            dataArray={this.dataArray} 
            expanded={0} 
            renderContent={this._renderContent}  />
        </Content>
      </Container>
    );
  }
}