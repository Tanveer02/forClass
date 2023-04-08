import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React, {Component} from 'react';
import CustomButton from './src/CustomButton';
const App = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <CustomButton
        name="Button"
        color="red"
        h={50}
        w={150}
        r={10}
        txco="black"
        fs={16}
        icon={require('./src/image/0.png')}
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
        txco="pink"
        fs={25}
        onClick={() => {
          Alert.alert('Second Button');
        }}
      />
    </View>
  );
};
export default App;
