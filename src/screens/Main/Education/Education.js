import { FlatList, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, images, SIZES, icons } from '../../../constants'
import ArrowButton1 from '../../../components/Button/ArrowButton1'

const educationData = [
  { 
    id:1,
    image: '',
    text: 'WAEC'
  },
  { 
    id:2,
    image: '',
    text: 'NECO'
  },
  { 
    id:3,
    image: '',
    text: 'JAMB'
  },
]
const Education = () => {
  return (
    <View style={styles.page}>
      <StatusBar
      backgroundColor={COLORS.white}
      barStyle={'dark-content'}
      />
      <ArrowButton1 
      text={'Education'}/>
      <Text style={{...FONTS.body4, textAlign: 'center',textAlignVertical: 'center', marginTop: SIZES.h4}}>
        Select education body
      </Text>
      {/* EDUCATION DATA */}
      <FlatList
      data={educationData}
      renderItem={({item}) => {
        return(
          <View style={styles.ctn}>
              <View style={styles.imageTextContainer}>
                <Image source={item.image} style={styles.iconImage} />
                <Text style={styles.itemText}>{item.text}</Text>
              </View>
              <TouchableOpacity style={styles.arrowCircle}>
                <Image source={icons.arrowright} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
        )
      }}
      />
    </View>
  )
}

export default Education

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: SIZES.h1 * 1,
    paddingHorizontal: SIZES.h5,
  },
  ctn: {
    height: SIZES.h1 * 2, 
    backgroundColor: COLORS.background,
    borderWidth: 0.5, 
    borderColor: COLORS.primary,  
    borderRadius: 10,  
    flexDirection: 'row',  
    alignItems: 'center',  
    justifyContent: 'space-between',  
    paddingHorizontal: SIZES.h5,  
    marginVertical: 8, 
  },
  imageTextContainer: {
    flexDirection: 'row',  
    alignItems: 'center',  // Vertically align image and text
  },
  iconImage: {
    width: SIZES.h5 * 1.8, // Smaller image size
    height: SIZES.h5 * 1.8, 
    resizeMode: 'contain',  
  },
  itemText: {
    ...FONTS.h5,  
    marginLeft: SIZES.base * 0.5, // Reduced the gap between the image and text
  },
  arrowCircle: {
    width: SIZES.h1,  
    height: SIZES.h1,  
    borderRadius: SIZES.h1 / 2,  
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',  
    alignItems: 'center',
  },
  arrowIcon: {
    width: SIZES.h5 * 1,  
    height: SIZES.h5 * 1.5,
    tintColor: COLORS.primary,  
  },
})