import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
import FixedLabelExample  from './euvOpt';
const dataArray = [
    { title: "AL 6", content: '' },
    { title: "AL 24", content: "" },
    { title: "DMPA", content: "" },
    { title: "ORS/Zn Co pack", content: ""}
];
export default class EUV extends Component {
    renderContent (content) {
            return (
            <FixedLabelExample />
            );
        }
render() {
    return (
      <Container>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
        </Content>
      </Container>
    );
  }
}