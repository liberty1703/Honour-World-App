import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const ButtonInput = ({text, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}
       onPress={onPress}>
        <Text style={[{...FONTS.body2a}, {textAlign: 'center'}, {textAlignVertical: 'center', color: COLORS.background}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonInput

const styles = StyleSheet.create({
    btn: {
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginHorizontal: 15
    }
})