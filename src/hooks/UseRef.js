import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';

const UseRef = () => {
  const ref = useRef();
  const ref2 = useRef();
  return (
    <View style={styles.mainCompo}>
      <TextInput ref={ref2} placeholder="write hear" style={styles.input} />
      <TouchableOpacity
        onPress={() => {
          ref2.current.focus();
        }}
        style={styles.buttn}>
        <Text style={styles.butTxt}>Focus</Text>
      </TouchableOpacity>
      <TextInput ref={ref} placeholder="write hear" style={styles.input} />
      <TouchableOpacity
        onPress={() => {
          ref.current.clear();
          console.log(ref);
        }}
        style={styles.buttn}>
        <Text style={styles.butTxt}>Clear</Text>
      </TouchableOpacity>
      <Text
        style={[styles.butTxt, {marginTop: 25}]}
        ref={ref}
        onPress={() => {
          ref.current.clear();
        }}>
        Touch
      </Text>
    </View>
  );
};

export default UseRef;
const styles = StyleSheet.create({
  mainCompo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    alignSelf: 'center',
    width: '85%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    fontSize: 22,
    marginTop: 20,
  },
  buttn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    height: 50,
    width: '30%',
    marginTop: 15,
  },
  butTxt: {
    fontSize: 20,
    color: 'blue',
    alignSelf: 'center',
    fontWeight: '600',
  },
});
