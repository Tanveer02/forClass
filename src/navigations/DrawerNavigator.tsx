import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../Screens/AuthScreen/Main';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
