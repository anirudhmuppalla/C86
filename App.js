import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from "./screens/LoadingScreen"
import DashboardScreen from "./screens/DashboardScreen"

import * as firebase from "firebase";
import {firebaseConfig} from "./config"

if(firebase.Apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.App()
}
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}