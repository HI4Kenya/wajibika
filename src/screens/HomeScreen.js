import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text, Container, View, Icon } from 'native-base';

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { navigate } = this.props.navigation
    const dataArray = [
      { screen: 'Facility', title: 'Facility Information' },
      { screen: 'HR', title: 'Human Resources' },
      { screen: 'StorageArea', title: 'Storage Area' },
      { screen: 'MisScreen', title: 'MIS - Use' },
      { screen: 'Euv', title: 'EUV' },
      { screen: 'Inventory', title: 'Inventory Management' },
      { screen: 'Resources', title: 'Resources' },
    ]

    return (
      <Container>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 }}>
          {
            dataArray.map((item, index) => {

              return (
                <Button block key={index} onPress={() => navigate(item.screen)} style={styles.mb15}>
                  <Text>{item.title}</Text>
                </Button>

              )
            })
          }
        </View>
        <View >
          <Icon style={ styles.upload } name='ios-cloud-upload' />
          <Text style={ styles.textStyle }>Upload</Text>
        </View>
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
  upload: {
    paddingLeft: 168,
    justifyContent: "center",
  
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
  },
  textStyle: {
    color: '#5C6D70',
    opacity: 0.9,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    paddingLeft: 147,
    paddingBottom: 20
  }
})

export default HomeScreen