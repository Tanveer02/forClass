import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BottomSheet = () => {
  const Ref = useRef();
  return (
    <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          Ref.current.open();
        }}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <RBSheet
        ref={Ref}
        height={responsiveHeight(50)} //BottomShett Height
        openDuration={250} //open timing
        closeOnDragDown={true} // close BottomShett
        closeOnPressMask={false} //
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <View style={{height: '100%', width: '100%'}}>
          <View style={styles.fView}>
            <Text style={styles.payout}>Payout</Text>
            <Text style={styles.scd}>Pay out your balance now</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./Image/credit.png')}
                style={styles.img}
              />
              <View>
                <Text style={styles.credit}>Sparkasse</Text>
                <Text style={[styles.credit, {color: 'gray'}]}>Credit</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.arrowView}>
                <Image
                  source={require('./Image/arrow.png')}
                  style={{
                    height: responsiveHeight(2.5),
                    width: responsiveWidth(6.5),
                  }}
                />
              </View>
              <Image
                source={require('./Image/account.png')}
                style={styles.img}
              />
              <View>
                <Text style={styles.credit}>Sparkasse</Text>
                <Text style={[styles.credit, {color: 'gray'}]}>Credit</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(4),
              alignItems: 'center',
            }}>
            <Text style={styles.amount}>12,50 </Text>
            <Image
              source={require('./Image/euro.png')}
              style={{
                height: responsiveHeight(2.5),
                width: responsiveWidth(4.5),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(0.3),
              alignItems: 'center',
            }}>
            <Text style={styles.account}>Will be paid to your account</Text>
            <Text style={styles.accountNo}> ****4355</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.bttun,
              {
                marginBottom: responsiveHeight(1.8),
                marginTop: responsiveHeight(4.5),
              },
            ]}>
            <Text style={{color: 'white'}}>Withdraw to Bank Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bttun, {backgroundColor: '#ccaaa7'}]}>
            <Text style={{color: 'black'}}>Never mind</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bttn: {
    backgroundColor: 'lightgreen',
    height: 50,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  fView: {
    marginTop: responsiveHeight(0.7),
    marginLeft: responsiveWidth(8),
    marginBottom: responsiveHeight(4),
  },
  payout: {
    color: 'black',
    fontSize: responsiveFontSize(3.5),
    fontWeight: '500',
  },
  scd: {
    color: 'gray',
  },
  img: {
    height: responsiveHeight(4),
    width: responsiveWidth(8.4),
  },
  credit: {
    color: 'black',
    fontSize: responsiveFontSize(1.6),
  },
  arrowView: {
    marginRight: responsiveWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(4.7),
    width: responsiveWidth(10),
    backgroundColor: '#e4e3fc',
    borderRadius: responsiveWidth(50),
  },
  amount: {
    marginLeft: responsiveWidth(8),
    color: 'black',
    fontSize: responsiveFontSize(3.5),
    fontWeight: '500',
  },
  account: {
    marginLeft: responsiveWidth(8.5),
    color: 'gray',
  },
  accountNo: {
    color: 'black',
    fontWeight: '500',
  },
  bttun: {
    height: responsiveHeight(5.3),
    width: responsiveWidth(90),
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
