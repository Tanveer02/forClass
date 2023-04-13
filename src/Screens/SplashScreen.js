import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SplashScreen = ({navigation}) => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <CustomButton
        name="HomE"
        color="red"
        h={50}
        w={200}
        center="center"
        onClick={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default SplashScreen;
