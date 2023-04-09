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
  icon,
  vector,
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
      }}>
      {vector && <Ionicons name={vector} size={40} color="yellow" />}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
