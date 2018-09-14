import React, { Component } from 'react'
import { Accordion, Container, Content, Form, Input, Item, Label } from 'native-base'

import GenericPicker from '../widgets/GenericPicker'

class InventoryForm extends Component {
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
          <Item stackedLabel style={{paddingTop: 15}}>
            <Label>Is the Stock Card Available?</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>       
          
          <Item floatingLabel style={{paddingTop: 15}}>
            <Label>Stock counts recorded in the 3-month period</Label>
            <Input />
          </Item>

          <Item floatingLabel style={{paddingTop: 15}}>
            <Label>days o/s in 3-month period</Label>
            <Input />
          </Item>

          <Item floatingLabel style={{paddingTop: 15}}>
            <Label>Stock Card Balance</Label>
            <Input />
          </Item>

          <Item floatingLabel style={{paddingTop: 15}}>
            <Label>AMC (calculate from stock card issues)</Label>
            <Input />
          </Item>
          
          <Item stackedLabel style={{paddingTop: 15}}>
            <Label>Any expired stock in the facility? (Yes/ No) Expired in the last 3 months.</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>

          <Item floatingLabel style={{paddingTop: 15}}>
            <Label>Actual physical stock</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{paddingTop: 15}}>
            <Label>Current MO</Label>
            <Input />
          </Item>
        </Form>
      </Container>
    );
  }
}

export default class InventoryScreen extends Component {

  dataArray = [
    { title: "1.AL tabs 20mg/120mg (6s)" },
    { title: "2.AL tabs 20mg/120mg (12s)" },
    { title: "3.AL tabs 20mg/120mg (18s)" },
    { title: "4.AL tabs 20mg/120mg (24s)" },
    { title: "5.SP tabs 500mg/25mg (tab)" },
    { title: "6.Artesunate inj (amp)" },
    { title: "7.Malaria RDTs (test)" },
    { title: "8.Oxytocin inj" },
    { title: "9.Depo Medroxy Progesterone Acetate" },
    { title: "10.Zinc & ORS co-pack (or ORS only)" },
    { title: "11.Amoxicillin 250mg Capsule / Tablet" },
    { title: "12.Paracetamol 500mg Tablet " },
    { title: "13.Benzylpencillin 600mg (IMU) vial " },
    { title: "14.Retinol (Vit A) (as palmitate) Capsules" },
    { title: "15.Water for injection 10ml ampoule " },
    { title: "16.Tetanus toxoid vaccine " },
    { title: "17.Measles Vaccine;" }
  ]
  
  _renderContent () {
    return (
      <InventoryForm />
    );
  }

  render() {
    return (
      <Container style={{paddingTop :50}}>
        <Content padder>
          <Accordion dataArray={this.dataArray} expanded={0} renderContent={this._renderContent}  />
        </Content>
      </Container>
    );
  }
}
