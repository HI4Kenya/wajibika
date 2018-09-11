import React, { Component } from 'react';
import { Item, Picker } from 'native-base';

export default class GenericPicker extends Component {

  constructor (props) {
    super (props);
    this.state = {
      answer: ''
    }
  }

  render () {
    return (
      <Item dropdown>
        <Picker
          selectedValue={this.state.answer}
          style={{ height: 50, width: 50 }}
          onValueChange={(value, index) => this.setState({answer: value})}>

          {
            this.props.options.map((option, index) => {
              return <Picker.Item label={option} value={index} />
            })
          }
        </Picker>
      </Item>
    )
  }
}