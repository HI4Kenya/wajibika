import React, {Component} from 'react';
import { Left, Body, Right, Button, Icon, Title, Container, Header, Content, Accordion, Text, Subtitle  } from "native-base";



class HeaderIconExample extends Component {
    render() {
      return (
        <Header style={{paddingTop: 60, paddingBottom: 40}}>
           <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{alignItems: 'flex-start'}}>
            <Title>Pharmacy</Title>
            <Subtitle>Inventory</Subtitle>
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

export default HeaderIconExample