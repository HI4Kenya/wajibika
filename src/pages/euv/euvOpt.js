import React, { Component } from 'react';
import { Container, Header, Content, Form, Icon, Item, Input, Label, Picker } from 'native-base';

class FixedLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }

  render() {
    return (
      <Container>
          <Form>
            <Item fixedLabel style={{paddingTop: 15}}>
              <Label>Items Received?</Label>
            </Item>
              <Item dropdown>
              <Picker
                  selectedValue={this.state.answerno}
                  style={{ height: 50, width: 50 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({answerno: itemValue})}>
                  <Picker.Item label="No" value="key0" />
                  <Picker.Item label="Yes" value="key1" />
                </Picker>
              </Item>
            <Item floatingLabel>
              <Label>Quantity Ordered</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Delivery Note Available?</Label>
              <Input />
            </Item>
            <Item dropdown>
                <Picker
                   selectedValue={this.state.answeryes}
                   style={{ height: 50, width: 50 }}
                   onValueChange={(itemValue, itemIndex) => this.setState({answeryes: itemValue})}>
                   <Picker.Item label="No" value="key0" />
                   <Picker.Item label="Yes" value="key1" />
                </Picker>
              </Item>
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

module.exports = {
  FixedLabelExample
}