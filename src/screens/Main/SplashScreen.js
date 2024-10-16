import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = () => {
    const navigation = useNavigation();

    const getAsync = async () =>{
      try {
        const jsonValue = await AsyncStorage.getItem('open')

        if (jsonValue != null){

          let data = JSON.parse(jsonValue)

          if(data.open === true){
              navigation.navigate("Login")
          } else{
              navigation.navigate("IntroSlider")
          }
        } else{
          navigation.navigate("IntroSlider")

        }
      } catch (error) {
        console.log('error from getting saved', error)
      }
    }

    useEffect(()=>{
      getAsync()
    },[])
    
    // useEffect(()=>{
    //   const timer = setTimeout(()=> {
    //     if (isFirstTime) {
    //       navigation.replace('IntroSlider');
    //       setIsFirstTime(false);
    //     } else{
    //       navigation.replace('Login');
    //     }
    //   }, 3000)
    // }, [isFirstTime])

    // SPLASHSCREEN CODE
    // useEffect(()=>{
    //     const timer = setTimeout(()=>{
    //         navigation.replace('IntroSlider')
    //     },3000)
    // },[])


  return (
    <View style={styles.page}>
    <StatusBar
    backgroundColor={COLORS.primary}
    barStyle={'light-content'}
    />
      <Text style={{...FONTS.h1, textAlign: 'center', color: COLORS.white }}>HonourWorld</Text>
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