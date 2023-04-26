import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetch from './useFetch';

const CustomHooks = () => {
  const [data] = useFetch('https://fakestoreapi.com/products');
  console.log('my data' + JSON.stringify(data));

  return (
    <View>
      {/* {data.map(item => {
        return (
          <View>
            <Text> {item.title} </Text>
          </View>
        );
      })} */}
    </View>
  );
};

export default CustomHooks;
