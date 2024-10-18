import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'
import ArrowButton2 from '../../../components/Button/ArrowButon2'
import { Card } from 'react-native-paper'


const HonourScreen = () => {
  return (
    <View style={styles.page}>
      <ArrowButton2
        text={'Fund Wallet'}
      />
      <Text style={{ ...FONTS.h4, color: COLORS.primary, marginTop: SIZES.h2, marginLeft: SIZES.h3 }}>
        Honour World Wema Account
      </Text>
      <Text style={{ ...FONTS.body4, marginTop: SIZES.h3, marginLeft: SIZES.h3 }}>
        New Wema Bank Acount linked to Honour World {"\n"} Wallet ID. pay to get instant wallet funding.
      </Text>
      <View style={styles.card}>

      </View>
    </View>
  )
}

export default HonourScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: SIZES.h1 * 1,
    paddingHorizontal: SIZES.h5,
  },
  card: {
    padding: SIZES.h2,
    borderRadius: 10,
    width: '100%',
    height: SIZES.h1 * 6,
    marginVertical: SIZES.h1,
    backgroundColor: COLORS.black
  }
});