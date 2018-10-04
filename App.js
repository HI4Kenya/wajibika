import React, { Component } from 'react'
import { Root } from 'native-base'
import { Font, AppLoading } from 'expo'
import { Provider } from 'react-redux'

/**
 * Routes tag
 * 
 * Defines all screens in the main 'Stack'
 */
import Routes from './src/Routes'
import store from './src/Store'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      
    })
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      )
    }
    return (
      <Root>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Root>
    )
  }
}
