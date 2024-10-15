import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants'

const SplashScreen = () => {
  return (
    <View style={styles.page}>
    <StatusBar
    backgroundColor={COLORS.primary}
    barStyle={'light-content'}
    />
      <Text style={{...FONTS.h1, }}>HonourWorld</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        backgroundColor: COLORS.primary,
        flex: 1,
        justifyContent: 'center',
    }
})