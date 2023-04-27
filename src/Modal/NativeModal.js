import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const NativeModal = () => {
    const [modalVisible, setmodalVisible] = useState(false);
    return (
      <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.bttn}
          onPress={() => {
            setmodalVisible(true);
          }}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <View style={styles.modal1}>
            <View style={styles.modal2}>
              <TouchableOpacity
                style={styles.bttn}
                onPress={() => {
                  setmodalVisible(false);
                }}>
                <Text>Open Modal</Text>
              </TouchableOpacity>
              <ActivityIndicator />
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default NativeModal;
  
  const styles = StyleSheet.create({
    modal1: {
      flex: 1,
      borderRadius: 10,
      backgroundColor: 'rgba(0,0,0,.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal2: {
      height: 100,
      width: 100,
      backgroundColor: 'white',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bttn: {
      backgroundColor: 'lightgreen',
      height: 50,
      width: 200,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
  });
  