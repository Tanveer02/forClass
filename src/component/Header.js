import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const Header = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <CustomButton
          vector="ios-menu"
          onClick={() => {
            Alert.alert('this is Menu');
          }}
        />
        <Text style={styles.txt}>Discover</Text>
        <CustomButton
          vector="search"
          onClick={() => {
            Alert.alert('Search anything');
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2191a6',
    height: 110,
    borderBottomStartRadius: 80,
    borderBottomEndRadius: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  txt: {
    color: '#000',
    fontWeight: '700',
    fontSize: 28,
  },
});
