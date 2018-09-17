import React, { Component } from "react";
import { Accordion, Container, Content, Card, CardItem, Text, Body } from "native-base";

const dataArray = [
  'Pharmacists',
  'Pharmaceutical Technologists',
  'Commodity Nurses',
  'Lab Technologists',
  'Lab Technicians',
  'Nutrition',
];

export default class StaffNumberTab extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>How many of the staff above have received training in the following areas?</Text>
              </Body>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
    );
  }
}