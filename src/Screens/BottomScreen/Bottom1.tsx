import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../CustomButton'

const Bottom1 = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <CustomButton
      name='Bottom1'
      color='green'
      h={40}
      w={150}
      r={10}
      onClick={()=>{}}
      />
    </View>
  )
}

export default Bottom1