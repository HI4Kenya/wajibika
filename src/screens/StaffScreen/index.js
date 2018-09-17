import React, { Component } from 'react'
import { Container, Tab, Tabs } from 'native-base';

import StaffNumberTab from './Tabs/StaffNumberTab';
import StaffTrainingTab from './Tabs/StaffTrainingTab';
import StaffAssessmentTab from './Tabs/StaffAssessmentTab';

export default class StaffScreen extends Component {

  render () {

    return (
      <Container style={{paddingTop: 10}}>
        <Tabs>
          <Tab heading="Staff Number">
            <StaffNumberTab />
          </Tab>
          <Tab heading="Staff Training">
            <StaffTrainingTab />
          </Tab>
          <Tab heading="Others">
            <StaffAssessmentTab />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}