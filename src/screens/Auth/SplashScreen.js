import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const checkStatus = async () => {
    try {

      const completedIntro = await AsyncStorage.getItem('hasCompletedIntro')
      if (!completedIntro) {
        console.log('First time logging in'); //first time opening the app

        // set that it has now been opened

        await AsyncStorage.setItem('hasCompletedIntro', 'false'); //App has opened before

        //navigate to intro slider for first time setup

        navigation.replace('IntroSlider');

      } else {

        // app has been opened before, check if intro was completed
        const introCompleted = await AsyncStorage.getItem('hasCompletedIntro');
        if (introCompleted === 'true') {

          //user has completed intro, going to main screen
          console.log('Going to main screen');
          navigation.replace('HomeScreen')
        }

        console.log('Openend before');
        // navigate to login

        navigation.replace('Login');
      }
    }
    catch (error) {
      console.log('Error saving item', error)
      navigation.replace('Login');

    }
    finally {

    }

    const finishIntro = async () => {
      try {
        await AsyncStorage.setItem('hasCompletedIntro', 'true');
        navigation.replace('MainScreen');
      } catch (error) {
        console.error('Error saving intro status:', error);
      }
    };
  };

  useEffect(() => {
    checkStatus();
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
      {/* {isFirstTime && <ActivityIndicator size="large" color={COLORS.white} />} */}
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
  }
})