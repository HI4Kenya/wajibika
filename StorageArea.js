import React, { Component } from "react";
import { Content, Card, CardItem, Text,Item,Label,Input, Body } from "native-base";

export default class StorageArea extends Component {
  render() {
    return (
      
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
             1. Check if the store area is clean and tidy.
              </Text>
             <Text>(Score 3 if very clean & tidy; 2 if somewhat clean & tidy; 1 if somewhat dirty & untidy; and 0 if very untidy & dirty)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/1/2/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
          <Body>
              <Text>
              2. Check for evidence of direct sunlight and/ or moisture in the store room.
              </Text>
             <Text>(Score 3 if no evidence; 0 if there is any evidence of moisture and/or direct sunlight)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
          <Body>
              <Text>
              3. Check for any evidence of vermin (pests, insects etc.) in the store room.
              </Text>
             <Text>(Score 3 if no evidence; 0 if there is any evidence of vermin (e.g. rodent droppings, actual sightings))
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
          <Body>
              <Text>
              4.Check if all pharmaceuticals stored on shelves or pallets.
              </Text>
             <Text>(Score 3 if all pharmaceuticals are stored on shelves or pallets; 2 if all available shelves and pallets are full and some pharmaceuticals are placed on the floor; 0 if there is space available on shelves and pallets and there are some pharmaceuticals on the floor OR if there are no pallets or shelves)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/2/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            <Text>
          5.Check if there is sufficient lighting in the store.
              </Text>
             <Text>(Score 3 if there is sufficient natural or artificial lighting in working order covering all areas in the pharmacy store; 0 if the light is not adequate to enable reading of the stock cards and medicine package labels)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            <Text>
              6. Is the store well ventilated?
              </Text>
             <Text>(Score 3 if store has functioning air conditioner; 2 if store has no air conditioner but is well ventilated (temperature less than 25°C); 0 if poorly ventilated)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/2/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            <Text>
              7. Check if there is a functioning thermometer to monitor the temperature of the main store.
              </Text>
             <Text>(Score 3 if thermometer present & functional; 0 if there's no thermometer)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            <Text>
              8. Check if the store temperature chart is filled out until the previous working day.
              </Text>
             <Text>(Score 3 if the chart is filled out until the previous working day; 0 if the chart has not been filled out until the previous working day or if no chart available)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
            <Text>
              9. Check if the fridge temperature chart is filled out until the previous working day.
              </Text>
             <Text>(Score 3 if the chart is filled out until the previous working day; 0 if the chart has not been filled out until the previous working day or if no chart available)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
          
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
          <Body>
              <Text>
              10. Check whether expired items are kept separate from other stock
              </Text>
             <Text>(Score 3 if these are stored separately from other items, 0 if they’re not)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/3)</Label>
              <Input />
            </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
          <Body>
              <Text>
              11.Check whether the expired stock in the pharmacy is recorded in the register.
              </Text>
             <Text>(Score 3 if all the expired items in the pharmacy are recorded in the register and their value computed; 2 if all the items are entered in the register but value not computed; 0 if expired items in the pharmacy are not entered in the register)
             </Text>
              <Item floatingLabel>
              <Label>Give score(0/2/3)</Label>
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
             <Text>

             </Text>
              
            </Body>
          </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
          <CardItem>
          <Body>
              <Text>
            
              </Text>
             <Text>
             </Text>
              
            </Body>
          </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
          <CardItem>
          <Body>
              <Text>
              
              </Text>
             <Text>
             </Text>
              
            </Body>
          </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
          <CardItem>
          <Body>
              <Text>
              
              </Text>
             <Text>
             </Text>
              
            </Body>
          </CardItem>
          </Card>
      </Content>
    );
  }
}
