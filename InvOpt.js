import React, { Component } from 'react';
import { Container, Header, Content, Form, Icon, Item, Input, Label, Picker } from 'native-base';

import GenericPicker from './components/GenericPicker';

class FixedLabelExample2 extends Component {
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
              <Label>Is the Stock Card Available?</Label>
            </Item>
            
           {/* Reusing this component */}
           <GenericPicker options={this.state.picker.options} />
             
            
            <Item floatingLabel style={{paddingTop: 15}}>
              <Label>stock counts recorded in the 3-month period</Label>
              <Input />
            </Item>

            <Item floatingLabel style={{paddingTop: 15}}>
              <Label>days o/s in 3-month period</Label>
              <Input />
            </Item>

            <Item floatingLabel style={{paddingTop: 15}}>
              <Label>Stock Card Balance</Label>
              <Input />
            </Item>

            <Item floatingLabel style={{paddingTop: 15}}>
              <Label>AMC (calculate from stock card issues)</Label>
              <Input />
            </Item>
            
            <Item fixedLabel style={{paddingTop: 15}}>
              <Label>Any expired stock in the facility?
(Yes/ No) Expired in the last 3 months.</Label>
            </Item>
           <GenericPicker options={this.state.picker.options} />

           <Item floatingLabel style={{paddingTop: 15}}>
              <Label>Actual physical stock</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{paddingTop: 15}}>
              <Label>Current MO</Label>
              <Input />
            </Item>
            </Form>
      </Container>
    );
  }
}



module.exports = {
  FixedLabelExample2
}