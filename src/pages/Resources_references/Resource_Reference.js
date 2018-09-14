import React, { Component } from "react";
import { Left, Body, Right, Button, Icon, Title, Container, Header, Content, Accordion, Text } from "native-base";
import { FixedLabelExample } from './Resource_ReferenceOpt';

    const dataArray = [
    { title: "1.Current edition of the Kenya Malaria Treatment Guidelines", content: "" },
    { title: "2.Good Dispensing Practices", content: "" },
    { title: "3.Good Inventory Management Practices", content: "" },
    { title: "4.Good Record Keeping Practices", content: "" },
    { title: "5.Good Storage Practices", content: "" },
    { title: "6.Medication Use Counselling", content: "" },
    { title: "7.AL Dosing Schedule", content: "" },
    { title: "8.Guidelines for administration of Artesunate injection", content: "" },
    { title: "9.Malaria RDT Job Aid", content: "" }
    ];
    class AccordionExample extends Component {

        _renderContent (content) {
          return (
            <FixedLabelExample />
          );
        }
      
        render() {
          return (
            <Container style={{paddingTop :50}}>
           <Content padder>
                <Accordion dataArray={dataArray} expanded={0} renderContent={this._renderContent} />

              </Content>
            </Container>
          );
        }
      }
      class HeaderIconExample extends Component {
        render() {
          return (
              <Header style={{paddingTop: 15}}>
                <Left>
                  <Button transparent>
                    <Icon name='arrow-back' />
                  </Button>
                </Left>
                <Body style={{alignItems: "center", justifyContent:"center"}}>
                  <Title>Resource&Reference</Title>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Right>
              </Header> 
          );
        }
      }
      class Save extends Component {
        render() {
          return (
            <Container style={{alignItems: "center", justifyContent:"center"}}>
              <Content>
                <Button rounded light>
                  <Text>Save</Text>
                </Button>
              </Content>
            </Container>
          );
        }
      }
      // module.exports = {
      //   HeaderIconExample, AccordionExample, Save
      // }
export default AccordionExample
    