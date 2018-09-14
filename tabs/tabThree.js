import React, { Component } from "react";
import { Content, Card, CardItem, Text,Item,Label,Input, Body } from "native-base";
import Header from "react-native"

export default class Tab3 extends Component {
  render() {
    return (
      
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
             1. Is there a computer in the HF that can be used for commodity reporting?
              </Text>
              <Item floatingLabel>
              <Label>Yes/No</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
              2.Is the facility using an electronic dispensing tool for anti-malarial medicines?
              </Text>
              <Item floatingLabel>
              <Label>Yes/No</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>If YES above, what is the name of the tool?</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
              3.Does the facility use electronic commodity management tools for managing malaria commodities (e.g. the Inventory Tracking Tool [ITT])?
              </Text>
              <Item floatingLabel>
              <Label>Yes/No</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>If YES above, what is the name of the tool?</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
             4.Does the facility have Internet access for transmission of commodity reports?

              </Text>
              <Item floatingLabel>
              <Label>Yes/No</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                                                                            
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
