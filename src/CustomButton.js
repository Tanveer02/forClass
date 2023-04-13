import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomButton = ({
  h,
  w,
  r,
  color,
  name,
  onClick,
  fs,
  txco,
  fw,
  icon,
  vector,
  center,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{
        height: h,
        width: w,
        backgroundColor: color,
        borderRadius: r,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: center,
      }}>
      <Text style={{fontSize: fs, color: txco, fontWeight: fw}}> {name} </Text>
      {vector && <Ionicons name={vector} size={40} color="yellow" />}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
