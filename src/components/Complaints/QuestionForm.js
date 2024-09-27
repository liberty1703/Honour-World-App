import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const QuestionForm = () => {
  return (
  <View>
      <TouchableOpacity style={[styles.ctn, { alignSelf: 'flex-end' }]}>
    <Text style={{...FONTS.h2, color: COLORS.background, textAlign: 'center', textAlignVertical: 'center',}}>
        ?
         </Text>
</TouchableOpacity>
  </View>
  )
}

export default QuestionForm

const styles = StyleSheet.create({
    ctn: {
        backgroundColor:COLORS.primary,
        height: SIZES.h1 * 2,
        width: SIZES.h1 * 2,
        borderRadius: SIZES.h1,
        justifyContent: 'center',
         marginTop: SIZES.h2,
         marginRight: SIZES.h5
    }
})