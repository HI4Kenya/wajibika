import React from 'react'
import { createStackNavigator } from 'react-navigation';

import EuvScreen from './screens/EuvScreen'
import FacilityScreen from './screens/FacilityScreen'
import HomeScreen from './screens/HomeScreen'
import GenericHeader from './widgets/GenericHeader';
import StaffScreen from './screens/StaffScreen';

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
    HR: {
      screen: StaffScreen,
      navigationOptions: {
        headerTitle: 'Pharmacy Human Resources',
        header: props => <GenericHeader {...props} />
      }
    }
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