import React, { Component } from 'react';
import { Container, Header, Content, Form, Icon, Item, Input, Label, Picker } from 'native-base';

import GenericPicker from './components/GenericPicker';

export default class FixedLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
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
            <Item fixedLabel style={{paddingTop: 15}}>
              <Label>Items Received?</Label>
            </Item>
            
            {/* Reusing this component */}
            <GenericPicker options={this.state.picker.options} />
            
            
            <Item floatingLabel>
              <Label>Quantity Ordered</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Delivery Note Available?</Label>
              <Input />
            </Item>

            {/* Using Generic Picker */}
            <GenericPicker options={this.state.picker.options} />

            <Item floatingLabel>
              <Label>Quantity Delivered</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Quantity Entered on Bin Card</Label>
              <Input />
            </Item>
          </Form>
      </Container>
    );
  }
}

