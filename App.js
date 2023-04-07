import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import SecondComponent from './secondComponent';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('cunstructor');
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
    return (
      <View style={styles.mainComponent}>
        <Text style={styles.txt}> {this.state.counter} </Text>
        <TouchableOpacity
          style={styles.buttn}
          onPress={() => {
            this.setState({counter: this.state.counter + 1});
          }}>
          <Text style={styles.txt}>BUTTON</Text>
        </TouchableOpacity>
        {this.state.counter < 2 ? (
          <SecondComponent />
        ) : (
          <Text style={[styles.txt, {marginTop: 20}]}>is two - 2</Text>
        )}
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  mainComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  buttn: {
    backgroundColor: 'lightblue',
    height: 40,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  txt: {
    color: 'yellow',
    fontSize: 20,
  },
});
