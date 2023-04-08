import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CustomButton = ({h, w, r, color, name, onClick, fs, txco, icon}) => {
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
      {icon && <Image source={icon} style={{height: 25, width: 25}} />}
      <Text style={{color: txco, fontSize: fs}}> {name} </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
