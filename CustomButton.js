import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({h, w, r, color,name,onClick,fs,co}) => {
  return (
    <TouchableOpacity onPress={()=>{
      onClick()
    }}
      style={{
        height: h,
        width: w,
        backgroundColor: color,
        borderRadius: r,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* {icon} */}
      <Text style={{color:co,fontSize:fs,}}> {name} </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
