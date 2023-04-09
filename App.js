import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './src/component/Header';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#7e9e81',
  },
});
