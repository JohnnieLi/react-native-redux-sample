import { Navigation } from 'react-native-navigation';
import Login from './login';
import HomeTab from './homeTab';
import HomeTab2 from './homeTab2';
import HomeTab3 from './homeTab3';
import HomeTab4 from './homeTab4';
import SearchTab from './searchTab';
import SideMenu from './BottomTabsSideMenu';
import PushedScreen from './PushedScreen';
import TopTab from './topTab';
import TopTab2 from './topTab2';
import TopTab3 from './topTab3';


export default (store, Provider) =>  {
	Navigation.registerComponent('example.Login', () => Login, store, Provider);
	Navigation.registerComponent('example.HomeTab', () => HomeTab, store, Provider);
    Navigation.registerComponent('example.HomeTab2', () => HomeTab2, store, Provider);
    Navigation.registerComponent('example.HomeTab3', () => HomeTab3, store, Provider);
    Navigation.registerComponent('example.HomeTab4', () => HomeTab4, store, Provider);
    Navigation.registerComponent('example.TopTab', () => TopTab, store, Provider);
    Navigation.registerComponent('example.TopTab2', () => TopTab2, store, Provider);
    Navigation.registerComponent('example.TopTab3', () => TopTab3, store, Provider);
	Navigation.registerComponent('example.SearchTab', () => SearchTab, store, Provider);
    Navigation.registerComponent('example.SideMenu', () => SideMenu, store, Provider);
    Navigation.registerComponent('example.PushedScreen', () => PushedScreen, store, Provider);
	
}