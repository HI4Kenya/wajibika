import React, { Component } from 'react'
import { Accordion, Container, Content, Form, Input, Item, Label } from 'native-base'

import GenericPicker from '../widgets/GenericPicker'

class EuvForm extends Component {
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
          <Item stackedLabel style={{paddingTop: 15}}>
            <Label>Items Received?</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>
          
          <Item floatingLabel>
            <Label>Quantity Ordered</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Delivery Note Available?</Label>
            <GenericPicker options={this.state.picker.options} />
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

class EuvScreen extends Component {
  static navigationOptions = {
    title: 'EUV'
  }

  dataArray = [
    { title: 'AL 6' },
    { title: 'AL 24' },
    { title: 'DMPA' },
    { title: 'ORS/Zn Co pack' }
  ];
  
  _renderContent () {
    return (
      <EuvForm />
    )
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <Container style={{paddingBottom: 0}}>
        <Content padder>
          <Accordion dataArray={this.dataArray} expanded={0} renderContent={this._renderContent} />
        </Content>
      </Container>
    )
  }
}

export default EuvScreen