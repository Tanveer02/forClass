import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../CustomButton'

const Bottom2 = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <CustomButton
      name='Bottom1'
      color='red'
      h={40}
      w={150}
      r={10}
      onClick={()=>{}}
      />
    </View>
  )
}

export default Bottom2