import React from 'react'
import { createStackNavigator } from 'react-navigation'

import GenericHeader from './widgets/GenericHeader'
import LoginScreen from './Screens/LoginScreen'
import SearchScreen from './Screens/SearchScreen'
import EuvScreen from './Screens/EuvScreen'
import FacilityScreen from './Screens/FacilityScreen'
import HomeScreen from './Screens/HomeScreen'
import StaffScreen from './Screens/StaffScreen'
import InventoryScreen from './Screens/InventoryScreen'
import StorageAreaScreen from './Screens/StorageAreaScreen'
import ResourcesScreen from './Screens/ResourcesScreen'
import MisScreen from './Screens/MisScreen';

/**
 * Routes <Object>
 * 
 * Defines all routes in the Main Stack
 * Defines the main header [styling, title]
 */
const Routes = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: 'Login ',
        header: props => <GenericHeader {...props} />
      }
    },

    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        headerTitle: 'Facility Search ',
        header: props => <GenericHeader {...props} />
      }
    },
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
    MisScreen: {
      screen: MisScreen,
      navigationOptions: {
        headerTitle: 'MIS-Use',
        header: props => <GenericHeader {...props} />
      }
    },
    StorageArea: {
      screen: StorageAreaScreen,
      navigationOptions: {
        headerTitle: 'Storage Area Assessment',
        header: props => <GenericHeader {...props} />
      }
    },
    Resources: {
      screen: ResourcesScreen,
      navigationOptions: {
        headerTitle: 'Resources and References',
        header: props => <GenericHeader {...props} />
      }
    }
  },
  {
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerBackTitleStyle: {
        color: 'black'
      },

      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
      headerTintColor: '#fff'
    }
  }
)

export default Routes