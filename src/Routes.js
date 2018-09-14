import React from 'react'
import { createStackNavigator } from 'react-navigation'

import GenericHeader from './widgets/GenericHeader'

import EuvScreen from './screens/EuvScreen'
import FacilityScreen from './screens/FacilityScreen'
import HomeScreen from './screens/HomeScreen'
import StaffScreen from './screens/StaffScreen'
import InventoryScreen from './screens/InventoryScreen'
import StorageAreaScreen from './screens/StorageAreaScreen'

/**
 * Routes <Object>
 * 
 * Defines all routes in the Main Stack
 * Defines the main header [styling, title]
 */
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
    },
    Inventory: {
      screen: InventoryScreen,
      navigationOptions: {
        headerTitle: 'Inventory Management',
        header: props => <GenericHeader {...props} />
      }
    },
    StorageArea: {
      screen: StorageAreaScreen,
      navigationOptions: {
        headerTitle: 'Storage Area Assessment',
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