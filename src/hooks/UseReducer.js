import {View, Text, StyleSheet} from 'react-native';
import React, {createContext, useReducer, useState} from 'react';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
export const MyContext = createContext();
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer);
  return (
    <View style={styles.mainComp}>
      <Text
        style={styles.txt}
        onPress={() => {
          dispatch({type: INCREASE});
          console.log(INCREASE);
        }}>
        INCREASE
      </Text>
      <Text style={[styles.txt, {color: 'lightblue'}]}> {count} </Text>
      <Text
        style={styles.txt}
        onPress={() => {
          dispatch({type: DECREASE});
          console.log(DECREASE);
        }}>
        DECREASE
      </Text>
    </View>
  );
};

export default UseReducer;

const styles = StyleSheet.create({
  mainComp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
});
