import React, { Component } from 'react'
import { Card, CardItem, Container, Content, Input, Item, Label, Text  } from 'native-base';

class FacilityScreen extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const dataArray = [
      'Facility InCharge',
      'Phamarcy Contact Person',
      'Nutrition Contact Person',
      'Commodity Nurse',
      'Laboratory Contact Person'
    ]

    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Facility Name</Text>
            </CardItem>
            <CardItem>
              <Item stackedLabel>
                <Label>Facility Name</Label>
                <Input />
              </Item>
            </CardItem>
          </Card>
          {
            dataArray.map((person, index) => {
              return (
                <Card>
                  <CardItem header>
                    <Text>{person}</Text>
                  </CardItem>
                  <CardItem>
                    <Item stackedLabel>
                      <Label>Name</Label>
                      <Input />
                    </Item>
                  </CardItem>
                  <CardItem>
                    <Item stackedLabel>
                      <Label>Email Address</Label>
                      <Input />
                    </Item>
                  </CardItem>
                  <CardItem>
                    <Item stackedLabel>
                      <Label>Phone Number</Label>
                      <Input />
                    </Item>
                  </CardItem>
                </Card>
              )
            })
          }
        </Content>
      </Container>
    )
  }
}

export default FacilityScreen