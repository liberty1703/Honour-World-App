import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, icons, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const ArrowButton = () => {
  const navigation = useNavigation();
  return (
    <View>
     <TouchableOpacity onPress={()=> navigation.goBack()} style={{flexDirection: 'row', paddingHorizontal: 10,}}>
     <Image source={icons.arrow} style={{height: SIZES.body3, width: SIZES.body3}}/>
   <Text style={{...FONTS.body3, textAlign: 'center', textAlignVertical: 'center', marginLeft: 10}}>
    Back
   </Text>
     </TouchableOpacity>
    </View>
  )
}

export default ArrowButton

const styles = StyleSheet.create({})