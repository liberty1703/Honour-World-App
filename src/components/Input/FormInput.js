import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { COLORS, FONTS, SIZES } from '../../constants'


const FormInput = ({placeholder, image, onPress, icon}) => {
  return (
    <View style={[ styles.textinputstyl, {marginTop: 25},]}>

        <Image
          source={image}
          style={{height: SIZES.h3 *1.5, width: SIZES.h3 * 1.5}}
        />
      <TextInput 
      placeholder={placeholder} 
      style={{...FONTS.h3, flex: 1, backgroundColor:'white'}}
      />
      <TouchableOpacity onPress={onPress}>
      <Image
          source={icon}
          style={{height: SIZES.h3 *1.5, width: SIZES.h3 * 1.5}}
        />
      </TouchableOpacity>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
textinputstyl: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
    marginHorizontal: 5,
    flexDirection: 'row',
    paddingHorizontal: 25
}
})