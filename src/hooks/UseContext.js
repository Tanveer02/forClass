import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from '../../App';
const UseContext = () => {
  const getData = useContext(MyContext);
  return (
    <MyContext.Consumer>
      {value => {
        return (
          <View style={styles.mainComp}>
            <Text style={{color: '#fff', fontSize: 23, fontWeight: '900'}}>
              Shiza &
            </Text>
            <Text style={{color: 'red', fontSize: 22}}> {value} </Text>
            {/* ApiContext */}
            <Text style={{color: 'red', fontSize: 22}}> {getData} </Text>
            {/* useContext */}
          </View>
        );
      }}
    </MyContext.Consumer>
  );
};

export default UseContext;

const styles = StyleSheet.create({
  mainComp: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
});
