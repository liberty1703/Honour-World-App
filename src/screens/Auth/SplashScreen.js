import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native-paper'

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
        let kkk = JSON.parse(introCompleted);

        console.log('...............', introCompleted);

        if (kkk?.open === true) {

          //user has completed intro, going to main screen
          console.log('Openend before');
          console.log('Going to main screen');
          navigation.replace('Main', { screen: "Bottom" })
        }
        else {
          // navigate to login
          console.log('Intro not completed');
          navigation.replace('IntroSlider');
        }
      }
    }
    catch (error) {
      console.log('Error saving item', error)
      navigation.replace('SignUp');

    }
    finally {
      setIsLoading(false);
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

  });



  return (
    <View style={styles.page}>
      {isLoading && <ActivityIndicator size="large" color='white' />}
      <StatusBar
        backgroundColor={COLORS.primary2}
        barStyle={'light-content'}
      />

      <Text style={{ ...FONTS.h1, textAlign: 'center', color: COLORS.white }}>HonourWorld</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.primary2,
    flex: 1,
    justifyContent: 'center',
  }
})