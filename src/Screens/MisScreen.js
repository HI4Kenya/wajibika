import React, { Component } from 'react'
import { Accordion, Container, Content, Form, Input, Item, Label } from 'native-base'

import GenericPicker from '../widgets/GenericPicker'

class MisForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      picker: {
        options: ['Select Option', 'Yes', 'No'],
        scores: ['Select Score', '3','2','0']
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
        <Item fixedLabel style={{padding:25}}><Label>Data Collection Tools</Label></Item>
          <Item stackedLabel style={{paddingTop: 15}}>
            <Label>Available?</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>       
          
          <Item stackedLabel style={{paddingTop: 15}}>
            <Label>Use?</Label>
            <GenericPicker options={this.state.picker.scores} />
          </Item>

        <Item fixedLabel style={{padding:25}}><Label>Data Reporting Tools</Label></Item>
        
           <Item stackedLabel style={{paddingTop: 15}}>
            <Label>Available?</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>   

           <Item stackedLabel style={{paddingTop: 15}}>
            <Label>Last Report Submitted?</Label>
            <GenericPicker options={this.state.picker.options} />
          </Item>   
        </Form>
      </Container>
    );
  }
}

export default class MisScreen extends Component {

  dataArray = [
    { title: "Malaria Commodities" },
    { title: "FP Commodities" },
    { title: "ARV Medicines" },
    { title: "HIV Screening Test" },
    { title: "Essential Medicines" },
    { title: "Medical Supplies" }
  ]
  
  _renderContent () {
    return (
      <MisForm />
    );
  }

  render() {
    return (
      <Container style={{paddingTop :50}}>
        <Content padder>
          <Accordion icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            dataArray={this.dataArray} 
            expanded={0} 
            renderContent={this._renderContent}  />
        </Content>
      </Container>
    );
  }
}
