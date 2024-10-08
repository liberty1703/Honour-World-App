import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const SuccessButton = () => {
  return (
    <View style= {{flexDirection: 'row', marginTop: SIZES.h4}}>
      <TouchableOpacity style={styles.ctn} >
        <Image source={icons.share}
        style={{height: SIZES.h3 * 1, width: SIZES.h3 * 1, tintColor: 'black'}}/>
        <Text style={{ ...FONTS.h5, textAlignVertical: 'center', marginLeft: SIZES.h5}}> Share Receipt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ctn1} >
        <Text style={{ ...FONTS.h5, textAlignVertical: 'center', marginLeft: SIZES.h5, color: COLORS.background}}>Done</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SuccessButton

const styles = StyleSheet.create({
    ctn: {
        height: SIZES.h1*1.3,
        width: SIZES.h1* 5.3,
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor:'black',
        borderRadius: SIZES.h1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.h4,
        marginHorizontal: SIZES.h1*0.5,
        flexDirection: 'row'
    },
    ctn1: {
        height: SIZES.h1*1.3,
        width: SIZES.h1* 5,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.h1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.h4,
        marginHorizontal: SIZES.h1*0.5,
    }
})