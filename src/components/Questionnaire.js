import React, { Component } from 'react'
import { Text } from 'react-native'
import { Header, Left, Right } from 'react-native'
import { Container } from 'native-base';

class Questionnaire extends Component {
  constructor(props) {
    super(props)
  }

  dataArray = [
    {
      'question': 'Does this health facility have in-patient facilities?'
    },
    {
      'question': 'What is the designation of the person who normally receives malaria commodities at the facility?'
    },
    {
      'question': 'What is the designation of the person who normally authorises issue of malaria commodities to other health facilities?'
    }
  ]

  render () {

    return (
      <Container style={{flex: 1}}>
        <Content>
          <Text>{this.dataArray[0].question}</Text>
        </Content>
      </Container>
    )
  }
}

export default Questionnaire