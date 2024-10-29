import { StatusBar, StyleSheet, Text, View, ActivityIndicatorBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isFirstTime, setIsFirstTime] = useState(true);

  const cool = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('open')
      if (!jsonValue) {
        console.log('First time logging in'); //first time opening the app
        navigation.replace('IntroSlider');
      } else {
        await AsyncStorage.setItem('open', jsonValue); //App has opened before
        console.log('Openend before')
        navigation.replace('Login'); //login
      }
    }
    catch (error) {
      console.log('Error saving item', error)
      navigation.replace('Login');
    }
  };

  useEffect(() => {
    cool();
  },)

  // useEffect(() => {
  //   getAsync()
  //   // return () => clearTimeout(timer) // Clear the timer when the component unmounts to prevent memory leaks
  // }, [])

  return (
    <View style={styles.page}>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle={'light-content'}
      />
      <Text style={{ ...FONTS.h1, textAlign: 'center', color: COLORS.white }}>HonourWorld</Text>
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