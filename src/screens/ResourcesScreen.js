import React, { Component } from 'react'
import { Accordion, Container, Content, Form, Item, Label } from 'native-base';

import GenericPicker from '../widgets/GenericPicker'

class ResourcesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      picker: {
        options: ['Select Option', 'Yes', 'No'],
        scores: ['Select Score','3', '0']
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
          <Item fixedLabel style={{paddingTop: 15}}>
            <Label>Available?</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>            
          
          <Item fixedLabel style={{paddingTop: 15}}>
            <Label>Displayed Appropriately</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>

          <Item fixedLabel style={{paddingTop: 15}}>
            <Label>Score?</Label>
            <GenericPicker options={this.state.picker.scores} />            
          </Item>
        </Form>
      </Container>
    );
  }
}

export default class ResourcesScreen extends Component {
  constructor(props) {
    super(props)
  }

  dataArray = [
    { title: "1.Current edition of the Kenya Malaria Treatment Guidelines" },
    { title: "2.Good Dispensing Practices" },
    { title: "3.Good Inventory Management Practices" },
    { title: "4.Good Record Keeping Practices" },
    { title: "5.Good Storage Practices" },
    { title: "6.Medication Use Counselling" },
    { title: "7.AL Dosing Schedule" },
    { title: "8.Guidelines for administration of Artesunate injection" },
    { title: "9.Malaria RDT Job Aid" }
  ]

  _renderContent () {
    return (
      <ResourcesForm />
    );
  }

  render () {

    return (
      <Container style={{paddingTop :50}}>
        <Content padder>
          <Accordion dataArray={this.dataArray} expanded={0} renderContent={this._renderContent} />
        </Content>
      </Container>
    )
  }
}