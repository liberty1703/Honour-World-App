import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const ButtonInput = ({text, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}
       onPress={onPress}>
        <Text style={[{...FONTS.h4}, {textAlign: 'center'}, {textAlignVertical: 'center', color: COLORS.background}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonInput

const styles = StyleSheet.create({
    btn: {
        height: SIZES.h1*1.5,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.h1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.h3,
        marginHorizontal: SIZES.h1*0.5
    }
})