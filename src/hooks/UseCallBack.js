import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';

const UseCallBack = () => {
  const [value, setValue] = useState(0);
  const [naya, setnaya] = useState(0);
  const getData = (useCallback = () => {
    
  },[]);
  return (
    <View style={styles.mainConta}>
      <Text style={[styles.txt, {color: '#fff'}]}>
        {'Addition: ' + value}
      </Text>
      <TouchableOpacity
        style={[styles.buttn, {marginBottom: 20}]}
        onPress={() => {
          setValue(value + 1);
        }}>
        <Text style={styles.txt}>value</Text>
      </TouchableOpacity>
      <Text style={[styles.txt, {color: '#fff'}]}>
        {'Substraction ' + -naya}
      </Text>
      <TouchableOpacity
        style={[styles.buttn, {marginTop: 0}]}
        onPress={() => {
          setnaya(naya - 1);
        }}>
        <Text style={styles.txt}>value</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseCallBack;

const styles = StyleSheet.create({
  mainConta: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttn: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    marginTop: 20,
  },
  txt: {
    fontSize: 20,
    color: 'blue',
    alignSelf: 'center',
    fontWeight: '600',
  },
});
