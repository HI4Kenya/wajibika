import React, { Component } from "react";
import { Body, Content, Card, CardItem, Item, Picker, Text } from "native-base";

import GenericPicker from './GenericPicker'

export default class StaffAssessmentTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: ['Select Option', 'Yes', 'No']
    }
  }

  dataArray = [
    'Is there a computer in the HF that can be used for commodity reporting?',
    'Is the facility using an electronic dispensing tool for anti-malarial medicines?',
    'Does the facility use electronic commodity management tools for managing malaria commodities (e.g. the Inventory Tracking Tool [ITT])?',
    'Does the facility have Internet access for transmission of commodity reports?',

  ]

  render() {
    return (     
      <Content padder style={{ marginTop: 0 }}>

      {
        this.dataArray.map((question, index) => {
          return (
            <Card key={index} style={{ flex: 0 }}>
              <CardItem bordered>
                <Body>
                  <Text>{ `${index+1}. ${question}` }</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <GenericPicker options={this.state.options} />
                </Body>
              </CardItem>
            </Card>
          )
        })
      }

      </Content>
    );
  }
}
