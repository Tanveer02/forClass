import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';

const LibraryModal = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          setmodalVisible(true);
        }}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <ReactNativeModal
        isVisible={modalVisible}
        animationIn={'slideInUp'}
        animationOut={'bounceOutUp'}>
        <View style={{height: '100%', backgroundColor: 'red'}}>
          <View style={styles.Modal}>
            <TouchableOpacity
              style={styles.bttn}
              onPress={() => {
                setmodalVisible(false);
              }}>
              <Text>Open Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default LibraryModal;

const styles = StyleSheet.create({
  bttn: {
    backgroundColor: 'lightgreen',
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  Modal: {
    height: '50%',
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
