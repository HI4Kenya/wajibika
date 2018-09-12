import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native'
import { Text, Content, Container } from "native-base";

class HomeScreen extends Component {

  render () {

    const { navigate } = this.props.navigation
    const dataArray = [
      'Facility Information',
      'Human Resources',
      'Storage Area',
      'MIS Tools',
      'EUV',
      'Inventory Management',
      'Resources'
    ]

    return (
      <Container>
        <Content>
          <Container style={{ padding:40}}>

            {
              dataArray.map((item, index) => {
                return (
                  <Button style={styles.mb15}>
                    <Text>{item}</Text>
                  </Button>  
                )
              })
            }

            <Container style={styles.mbt20}>
              <Button rounded success>
                <Text>Upload</Text>
              </Button>
            </Container>
          </Container>
         
        </Content>
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    marginTop: 10
  },
  mb15: {
    marginBottom: 20
  },
  mt15: {
    marginTop: 15
  },
  mbt20: {
   paddingLeft: 100, 
   justifyContent:"center",
   marginTop: 20
  },
  iconButton: {
    color: "#007aff"
  },
  margin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF"
  },
  mf: {
    flexGrow: 1,
    alignSelf: "center",
    alignItems: "center"
  }
})

export default HomeScreen