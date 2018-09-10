import React, { Component } from 'react';
import { Container, Header, Content, Form, Icon, Item, Input, Label, Picker } from 'native-base';

class FixedLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Container>
          <Form>
            <Item fixedLabel>
              <Label>Items Received?</Label>
            </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Yes" value="key1" />
                  <Picker.Item label="No" value="key0" />
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
            <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Yes" value="key1" />
                  <Picker.Item label="No" value="key0" />
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