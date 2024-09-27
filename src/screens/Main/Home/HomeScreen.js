import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, images, SIZES } from '../../../constants'


const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <View style={{flexDirection:'row' }}>
     <TouchableOpacity>
      <Image style={styles.imagectn}
      source={images.men}  />
      </TouchableOpacity>
      <Text style={{...FONTS.h2}}>
        Hi, Spring
      </Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.background,
   paddingTop: SIZES.h1 * 1,
   paddingHorizontal: SIZES.h5
},
imagectn: {
  height: SIZES.h1*2, width: SIZES.h1*2,
  borderRadius: 50,
  borderColor: COLORS.grey,
  borderWidth: 0.3
}

})