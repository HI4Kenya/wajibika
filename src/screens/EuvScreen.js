import React, { Component } from 'react'
import { Accordion, Container, Content, Form, Input, Item, Label  } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Platform } from 'react-native';
import GenericPicker from '../widgets/GenericPicker'

class EuvForm extends Component {
  constructor(props) {
    super(props)
    this.focusNextField = this.focusNextField.bind(this);
    // to store our input refs
    this.inputs = {};
    this.state = {
      number: '',
      numberValidate: true,
      selected: undefined,
      picker: {
        options: ['Select Option', 'Yes', 'No']
      }
    };
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
          <Form>
            <Item stackedLabel style={{ paddingTop: 15 }} >
              <Label>Items Received?</Label>
              <GenericPicker options={this.state.picker.options} />
            </Item>
            <Item stackedLabel last>
              <Label>Delivery Note Available?</Label>
              <GenericPicker options={this.state.picker.options} />
            </Item>
            <Item floatingLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Quantity Ordered</Label>
              <Input onChangeText={(text) => this.validate(text, 'number')}
                keyboardType={'numeric'}
                ref={input => { this.inputs['1'] = input; }}
                onSubmitEditing={() => { this.focusNextField('2'); }}
                blurOnSubmit={false}
                returnKeyType="next"
              />
            </Item>
            <Item floatingLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Quantity Delivered</Label>
              <Input onChangeText={(text) => this.validate(text, 'number')}
                keyboardType={'numeric'}
                ref={input => { this.inputs['2'] = input; }}
                onSubmitEditing={() => { this.focusNextField('3'); }}
                blurOnSubmit={false}
                returnKeyType="next" />
            </Item>
            <Item floatingLabel style={[!this.state.numberValidate ? styles.error : null]}>
              <Label>Quantity Entered on Bin Card</Label>
              <Input onChangeText={(text) => this.validate(text, 'number')}
                keyboardType={'numeric'}
                ref={input => { this.inputs['3'] = input; }}
                blurOnSubmit={false}
                returnKeyType="done"
              />
            </Item>
          </Form>
        </KeyboardAwareScrollView>
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

  _renderContent() {
    return (
      <EuvForm />
    )
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Container style={{ paddingBottom: 0 }}>
        <Content padder>
          <Accordion icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            dataArray={this.dataArray} 
            expanded={0} renderContent={this._renderContent} />
        </Content>
      </Container>
    )
  }
}

var styles = ({
  error: {
    borderWidth: 6,
    borderColor: 'red',
  },
});

export default EuvScreen