import React, { Component } from 'react'
import { Content, Card, CardItem, Text,Item,Label,Input, Body } from 'native-base';
import GenericPicker from '../widgets/GenericPicker';

export default class StorageAreaScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picker: {
        options: ['Select Option', '0', '1', '2', '3']
      }
    }
  }

  dataArray = [
    'Check if the store area is clean and tidy',
    'Check for evidence of direct sunlight and/ or moisture in the store room',
    'Check for any evidence of vermin (pests, insects etc.) in the store room',
    'Check if all pharmaceuticals stored on shelves or pallets',
    'Check if there is sufficient lighting in the store',
    'Is the store well ventilated',
    'Check if there is a functioning thermometer to monitor the temperature of the main store',
    'Check if the store temperature chart is filled out until the previous working day',
    'Check if the fridge temperature chart is filled out until the previous working day',
    'Check whether expired items are kept separate from other stock',
    'Check whether the expired stock in the pharmacy is recorded in the register'
  ]

  render () {

    return (
      <Content>
        
        {
          this.dataArray.map((parameter, index) => {
            return (
              <Card key={index} style={{ flex: 0 }}>
                <CardItem>
                  <Body>
                    <Text>{parameter}</Text>
                    <Item stackedLabel>
                      <Label>Give score(0/1/2/3)</Label>
                      <GenericPicker options={this.state.picker.options} />
                    </Item>
                  </Body>
                </CardItem>
              </Card>
            )
          })
        }

      </Content>
    )
  }
}
