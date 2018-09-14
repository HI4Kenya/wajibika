import { createStackNavigator } from 'react-navigation';
  import Home from './Home';
  import Facility from './Facility';
  import HR from './HR';
  import StorageArea from './StorageArea';
  import Resources from './Resources';
  import MisTools from './MisTools';
  import Euv from './Euv';
  import InvManagement from './InvManagement';

  const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Resources: { screen: Resources},
    Facility: { screen: Facility},
    HR: { screen: HR},
    StorageArea: { screen: StorageArea},
    MisTools: { screen: MisTools},
    Euv: { screen: Euv},
    InvManagement: { screen: InvManagement},
  });
  

  export default AppNavigator;