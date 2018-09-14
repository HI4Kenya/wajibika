import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text, Content, Container } from "native-base";

class HomeScreen extends Component {

  render () {

    const { navigate } = this.props.navigation
    const dataArray = [
      { screen: '', title: 'Facility Information' },
      { screen: '', title: 'Human Resources' },
      { screen: '', title: 'Storage Area' },
      { screen: '', title: 'MIS Tools' },
      { screen: '', title: 'EUV' },
      { screen: '', title: 'Inventory Management' },
      { screen: 'Resources', title: 'Resources' }
    ]

    return (
      <Container>
        <Content>
          <Container style={{ padding:40}}>

            {
              dataArray.map((item, index) => {
                return (
                  <Button key={index} onPress={() => navigate(item.screen)} style={styles.mb15}>
                    <Text>{item.titler}</Text>
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