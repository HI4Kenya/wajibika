import React from 'react';
  import AppNavigator from './AppNavigator';

  export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        possibleFriends: [
          'Allie',
          'Gator',
          'Lizzie',
        ],
        currentFriends: [],
      }
    }

    render() {
      return (
        <AppNavigator/>
      );
    }
  }