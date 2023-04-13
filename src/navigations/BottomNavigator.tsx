import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bottom1 from '../Screens/BottomScreen/Bottom1';
import Bottom2 from '../Screens/BottomScreen/Bottom2';

const BottomNavigator = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Bottom1"
        component={Bottom1}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={require('../Image/face.png')}
                style={{
                  height: focused ? 33 : size,
                  width: focused ? 33 : size,
                  // tintColor: focused ? 'orange' : color,
                  backgroundColor: focused ? 'blue' : color,
                }}
              />
            );
          },
          title: 'BottomNew_Title',
        }}
      />
      <Bottom.Screen
        name="Bottom2"
        component={Bottom2}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={require('../Image/face.png')}
                style={{
                  height: focused ? 33 : size,
                  width: focused ? 33 : size,
                  // tintColor: focused ? 'orange' : color,
                  backgroundColor: focused ? 'blue' : color,
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
