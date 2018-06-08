import { AppRegistry } from 'react-native';
import App from './App';
import MainNavigation from "./src/Navigation/MainNavigation"
import UserLogin from "./src/ParentViews/UserLogin"
import UserRegister from "./src/ParentViews/UserRegister"
import UserHome from "./src/ParentViews/UserHome"

//AppRegistry.registerComponent('DigitalAlbum', () => App);
AppRegistry.registerComponent('DigitalAlbum', () => MainNavigation);
//AppRegistry.registerComponent('DigitalAlbum', () => UserLogin);
//AppRegistry.registerComponent('DigitalAlbum', () => UserRegister);
//AppRegistry.registerComponent('DigitalAlbum', () => UserHome);
