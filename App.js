import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/navigations/Routes';

const App = () => {
  return <Routes />;
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#7e9e81',
  },
});
