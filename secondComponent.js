import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';

class SecondComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return <Text style={styles.txt}>SecondComponent</Text>;
  }
}
export default SecondComponent;

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    color: 'lightgreen',
    marginTop: 30,
  },
});
