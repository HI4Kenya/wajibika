import React, { Component } from "react";
import { Accordion, Container, Content, Form, Input, Item, Label, Text } from "native-base";

class StaffNumberForm extends Component {
  constructor(props) {
    super(props)
    this.focusNextField = this.focusNextField.bind(this);
    // to store our input refs
    this.inputs = {};
    this.state = {
      number: '',
      numberValidate: true,
      total: 0
    }
  }

  focusNextField = (id) => {
    this.inputs[id]._root.focus();
  }

  validate(text, type) {
    num = /^[0-9]+$/

    if (type == 'number') {
      if (num.test(text)) {
        this.setState({
          numberValidate: true,
        })
      }
      else {
        this.setState({
          numberValidate: false,
        })
      }
    }
  }
  render() {
    return (
      <Container>
        <Form>
          <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
            <Label>County Employed</Label>
            <Input keyboardType={'numeric'}
              onChangeText={(text) => this.validate(text, 'number')}
              ref={input => { this.inputs['one'] = input; }}
              onSubmitEditing={() => { this.focusNextField('two'); }}
              blurOnSubmit={false}
              returnKeyType="next"
            />
          </Item>
          <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
            <Label>Partner Employed</Label>
            <Input keyboardType={'numeric'}
              onChangeText={(text) => this.validate(text, 'number')}
              ref={input => { this.inputs['two'] = input; }}
              onSubmitEditing={() => { this.focusNextField('three'); }}
              blurOnSubmit={false}
              returnKeyType="next"
            />
          </Item>
          <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
            <Label>Hospital Board Employed</Label>
            <Input keyboardType={'numeric'}
              onChangeText={(text) => this.validate(text, 'number')}
              ref={input => { this.inputs['three'] = input; }}
              blurOnSubmit={false}
              returnKeyType="done"
            />
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
          <Accordion icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            dataArray={this.dataArray} expanded={0} 
            renderContent={this._renderContent} />
        </Content>
      </Container>
    );
  }
}

var styles = ({
  error: {
    borderWidth: 6,
    borderColor: 'red',
  },
});