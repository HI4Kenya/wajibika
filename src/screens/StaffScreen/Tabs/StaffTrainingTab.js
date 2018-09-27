import React, { Component } from "react";
import { Form, Container, Content, Card, CardItem, Text, Body, Item, Label, Input } from "native-base";
import { TextInput } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class StaffNumberTab extends Component {
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
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
          extraHeight={Platform.select({ android: 200 })}
        >
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>How many of the staff below have received basic commodity management training?</Text>
              </Body>
            </CardItem>
          </Card>
          <Form>
            <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Pharmacists</Label>
              <TextInput
                ref="uno"
                keyboardType="numeric"
                onSubmitEditing={event => {
                  this.refs.dos.focus();
                }}
                onChangeText={(text) => this.validate(text, 'number')}
              
                returnKeyType="next"
              />
            </Item>
            <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Pharmaceutical Technologists</Label>
              <TextInput
                ref="dos"
                keyboardType="numeric"
                onSubmitEditing={event => {
                  this.refs.tres.focus();
                }}
                onChangeText={(text) => this.validate(text, 'number')}
          
                returnKeyType="next"
              />
            </Item>
            <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Commodity Nurse</Label>
              <TextInput
                ref="tres"
                keyboardType="numeric"
                onSubmitEditing={event => {
                  this.refs.quatro.focus();
                }}
                onChangeText={(text) => this.validate(text, 'number')}
            
                returnKeyType="next"
              />
            </Item>
            <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Lab technologists</Label>
              <TextInput
                ref="quatro"
                keyboardType="numeric"
                onSubmitEditing={event => {
                  this.refs.cinq.focus();
                }}
                onChangeText={(text) => this.validate(text, 'number')}
            
                returnKeyType="next"
              />
            </Item>
            <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Lab technicians</Label>
              <TextInput
                ref="cinq"
                keyboardType="numeric"
                onSubmitEditing={event => {
                  this.refs.six.focus();
                }}
                onChangeText={(text) => this.validate(text, 'number')}
               
                returnKeyType="next" />
            </Item>
            <Item stackedLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Nutrition Officer</Label>
              <TextInput
                ref="six"
                keyboardType="numeric"
                onChangeText={(text) => this.validate(text, 'number')}
                returnKeyType="done" />
            </Item>

            <Text>Total: {this.state.total}</Text>
          </Form>

        </Content>
        </KeyboardAwareScrollView>
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