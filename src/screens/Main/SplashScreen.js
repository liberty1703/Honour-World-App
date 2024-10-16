import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();
    const  [isFirstTime, setIsFirstTime] = useState(true);
    
    useEffect(()=>{
      const timer = setTimeout(()=> {
        if (isFirstTime) {
          navigation.replace('IntroSlider');
          setIsFirstTime(false);
        } else{
          navigation.replace('Login');
        }
      }, 3000)
    }, [isFirstTime])

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