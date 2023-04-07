import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React, {Component} from 'react';
import CustomButton from './CustomButton';
const App = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <CustomButton
        name="Button"
        color="red"
        h={50}
        w={150}
        r={10}
        co='black'
        fs={16}
        onClick={() => {
          Alert.alert('Thi is new style');
        }}
      />
      <CustomButton
        name="SecondButton"
        color="blue"
        h={70}
        w={300}
        r={20}
        co='pink'
        fs={25}
        onClick={() => {
          Alert.alert('Second Button');
        }}
      />
    </View>
  );
};
export default App;
