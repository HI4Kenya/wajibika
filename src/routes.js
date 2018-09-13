import React from 'react'
import { createStackNavigator } from 'react-navigation';

import EuvScreen from './screens/EuvScreen'
import FacilityScreen from './screens/FacilityScreen'
import HomeScreen from './screens/HomeScreen'
import GenericHeader from './widgets/GenericHeader';

const Routes = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
        header: props => <GenericHeader {...props} />
      }
    },
    Euv: {
      screen: EuvScreen,
      navigationOptions: {
        headerTitle: 'EUV',
        header: props => <GenericHeader {...props} />
      }
    },
    Facility: {
      screen: FacilityScreen,
      navigationOptions: {
        headerTitle: 'Facility Information',
        header: props => <GenericHeader {...props} />
      }
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerBackTitleStyle: {
        color: "black"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "black",
      },
      headerTintColor: "#fff"
    }
  }
)

export default Routes