import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const HomeButton = ({onPress}) => {
  return (
    <View>
     <TouchableOpacity style={styles.btn}  onPress={onPress}>
     <Text style={[{...FONTS.h4}, {textAlign: 'center'}, {textAlignVertical: 'center', color: 'black'}]}>Go Home</Text>
     </TouchableOpacity>
    </View>
  )
}

export default HomeButton

const styles = StyleSheet.create({
      btn: {
        height: SIZES.h1*1.5,
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor:'black',
        borderRadius: SIZES.h1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.h4,
        marginHorizontal: SIZES.h1*0.5
    }
})