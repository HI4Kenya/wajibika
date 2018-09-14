import React, { Component } from 'react';
import { Container, Header, Content, Form, Icon, Item, Input, Label, Picker } from 'native-base';

import GenericPicker from '../components/GenericPicker';

class FixedLabelExample extends Component {
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
            </Item>
            
           {/* Reusing this component */}
           <GenericPicker options={this.state.picker.options} />
             
            
            <Item fixedLabel style={{paddingTop: 15}}>
              <Label>Displayed Appropriately</Label>
              <Input />
            </Item>
            {/* Reusing this component */}
            <GenericPicker options={this.state.picker.options} />

            <Item fixedLabel style={{paddingTop: 15}}>
              <Label>Score?</Label>
              <Input />
            </Item>

            {/* Reusing this component */}
            <GenericPicker options={this.state.picker.scores} />
            </Form>
      </Container>
    );
  }
}



module.exports = {
  FixedLabelExample
}