import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";
import Tab1 from "./tabs/tabOne";
import Tab2 from "./tabs/tabTwo";
import Tab3 from "./tabs/tabThree";

class BasicTab extends Component {
  render() {
    return (
      <Container>
        

        <Tabs>
          <Tab heading="Staff No">
            <Tab1 />
          </Tab>
          <Tab heading="Staff Training">
            <Tab2 />
          </Tab>
          <Tab heading="Others">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default BasicTab;
