import React, { Component } from 'react'
import { Card, CardItem, Container, Input, Item, Label, Text } from 'native-base'
import { Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { validate } from 'jsonschema'

class FacilityScreen extends Component {
  constructor(props) {
    super(props)

    this.focusNextField = this.focusNextField.bind(this)
    // to store our input refs
    this.inputs = {}

    this.state = {
      name: '',
      nameValidate: true,
      alphnum: '',
      alphnumValidate: true,
      phonenumber: '',
      phonenumberValidate: true,
      email: '',
      emailValidate: true
    }
  }


  focusNextField = (id) => {
    this.inputs[id]._root.focus();
  }
  



  validate(text, type) {
    alph = /^[a-zA-Z]+$/
    alphnum = /^[0-9a-zA-Z]+$/
    phonenum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (type == 'name') {
      if (alph.test(text)) {
        this.setState({
          nameValidate: true,
        })
      }
      else {
        this.setState({
          nameValidate: false,
        })
      }
    }
    else if (type == 'alphnum') {
      if (alphnum.test(text)) {
        this.setState({
          alphnumValidate: true,
        })
      }
      else {
        this.setState({
          alphnumValidate: false,
        })
      }
    }
    else if (type == 'phonenumber') {
      if (phonenum.test(text)) {
        this.setState({
          phonenumberValidate: true,
        })
      }
      else {
        this.setState({
          phonenumberValidate: false,
        })
      }
    }
    else if (type == 'email') {
      if (email.test(text)) {
        this.setState({
          emailValidate: true,
        })
      }
      else {
        this.setState({
          emailValidate: false,
        })
      }
    }
  }

  render() {

    const dataArray = [
      'Facility InCharge',
      'Phamarcy Contact Person',
      'Nutrition Contact Person',
      'Commodity Nurse',
      'Laboratory Contact Person'
    ]




    return (

      <Container>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
          extraHeight={Platform.select({ android: 200 })}
        >
          
          {
            dataArray.map((person, index) => {
              return (
                <Card key={index}>
                  <CardItem header>
                    <Text>{person}</Text>
                  </CardItem>
                  <CardItem>
                    <Item stackedLabel style={[!this.state.nameValidate ? styles.error : null]}>
                      <Label>Name</Label>
                      <Input onChangeText={(text) => this.validate(text, 'name')}
                        placeholder='Enter Facility in-Charge'
                        blurOnSubmit={false}
                        onSubmitEditing={() => { this.focusNextField('three') }}
                        ref={input => { this.inputs['two'] = input }}
                        returnKeyType='next' />
                    </Item>
                  </CardItem>
                  <CardItem>
                    <Item stackedLabel style={[!this.state.emailValidate ? styles.error : null]}>
                      <Label>Email Address</Label>
                      <Input onChangeText={(text) => this.validate(text, 'email')}
                        keyboardType={'email-address'}
                        placeholder='Enter Email Address'
                        blurOnSubmit={false}
                        onSubmitEditing={() => {
                          this.focusNextField('four')
                        }}
                        
                        ref={input => {
                          this.inputs['three'] = input
                        }}
                        returnKeyType='next' />
                    </Item>
                  </CardItem>
                  <CardItem>
                    <Item stackedLabel style={[!this.state.phonenumberValidate ? styles.error : null]}>
                      <Label>Phone Number</Label>
                      <Input keyboardType={'numeric'} onChangeText={(text) => this.validate(text, 'phonenumber')} 
                        placeholder='Enter Phone Number'
                        blurOnSubmit={ true }
                        returnKeyType={ 'done' }
                        style={styles.textInput}
                        ref={ input => {
                          this.inputs['four'] = input
                        }} />

                    </Item>
                  </CardItem>
                </Card>
              )
            })
          }
        </KeyboardAwareScrollView>

      </Container>

    )
  }
}


var styles = ({
  error: {
    borderWidth: 6,
    borderColor: 'red',
  },
})

export default FacilityScreen

