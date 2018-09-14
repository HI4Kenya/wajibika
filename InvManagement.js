import React, { Component } from "react";
import { Left, Body, Right, Button, Icon, Title, Container, Header, Content, Accordion, Text } from "native-base";
import { FixedLabelExample2 } from './InvOpt';

    const dataArray = [
    { title: "1.AL tabs 20mg/120mg (6s)", content: "" },
    { title: "2.AL tabs 20mg/120mg (12s)", content: "" },
    { title: "3.AL tabs 20mg/120mg (18s)", content: "" },
    { title: "4.AL tabs 20mg/120mg (24s)", content: "" },
    { title: "5.SP tabs 500mg/25mg (tab)", content: "" },
    { title: "6.Artesunate inj (amp)", content: "" },
    { title: "7.Malaria RDTs (test)", content: "" },
    { title: "8.Oxytocin inj", content: "" },
    { title: "9.Depo Medroxy Progesterone Acetate", content: "" },
    { title: "10.Zinc & ORS co-pack (or ORS only)", content: "" },
    { title: "11.Amoxicillin 250mg Capsule / Tablet", content: "" },
    { title: "12.Paracetamol 500mg Tablet ", content: "" },
    { title: "13.Benzylpencillin 600mg (IMU) vial ", content: "" },
    { title: "14.Retinol (Vit A) (as palmitate) Capsules", content: "" },
    { title: "15.Water for injection 10ml ampoule ", content: "" },
    { title: "16.Tetanus toxoid vaccine ", content: "" },
    { title: "17.Measles Vaccine;", content: "" }

    ];
     export default class InvManagement extends Component {

        _renderContent (content) {
          return (
            <FixedLabelExample2 />
          );
        }
      
        render() {
          return (
            <Container style={{paddingTop :50}}>
           <Content padder>
                <Accordion dataArray={dataArray} expanded={0} renderContent={this._renderContent}  />

              </Content>
            </Container>
          );
        }
      }
      
  
