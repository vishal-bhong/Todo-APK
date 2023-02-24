import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import About from '../screens/about';
import Home from '../screens/home';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
     initialRouteName="Welcome"
     screenOptions={{
      drawerPosition: 'left',
      drawerType: 'front',
      headerShown: false,
     }}
     >
      <Drawer.Screen
        name="Home Stack"
        component={HomeStack}
        options={{ drawerLabel: 'Home' }}
      />

      <Drawer.Screen
        name="About Stack"
        component={AboutStack}
        options={{ drawerLabel: 'About' }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}