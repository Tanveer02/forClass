import {View, Text} from 'react-native';
import React, {createContext} from 'react';
import UseContext from './src/hooks/UseContext';
import UseRef from './src/hooks/UseRef';
import Routes from './srcNavigation/src/navigations/Routes';
import UseReducer from './src/hooks/UseReducer';
import CustomHooks from './src/hooks/CustomHooks/CustomHooks';

export const MyContext = createContext();
const App = () => {
  let name = 'Fatima';
  return (
    // <MyContext.Provider value={name}>
    <View style={{flex: 1}}>
      {/* <UseRef/> */}
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      {/* <Routes/> */}
      <CustomHooks/>
    </View>
    // </MyContext.Provider>
  );
};

export default App;
