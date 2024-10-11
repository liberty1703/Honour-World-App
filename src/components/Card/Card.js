import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const Card = ({backgroundcolor,logo}) => {
  return (
    <View style={[styles.card,]}>
      <View>
        <Text>Idowu Emmanuel</Text>
        <Image source={logo}/>
      </View>
      <Text>
        Virtual Account
      </Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    padding: SIZES.h2,
    borderRadius: 10,
    width: '100%',
    marginVertical: SIZES.h1,
    backgroundColor: COLORS.black
  }
})