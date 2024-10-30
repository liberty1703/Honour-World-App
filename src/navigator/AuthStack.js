import { StyleSheet } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import Verify from '../screens/Auth/Verify';
import AccountCreated from '../screens/Auth/AccountCreated';
import FingerPrintAuth from '../screens/Auth/FingerPrintAuth';
import Confirmation from '../screens/Main/Confirmation/Confirmation';
import Successful from '../screens/Main/Succesful/Successful';
import SplashScreen from '../screens/Auth/SplashScreen';
import IntroSlider from '../screens/Auth/IntroSlider';



const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>

      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='IntroSlider' component={IntroSlider} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Verify' component={Verify} />
      <Stack.Screen name='AccountCreated' component={AccountCreated} />
      <Stack.Screen name='FingerPrintAuth' component={FingerPrintAuth} />
      <Stack.Screen name='Confirmation' component={Confirmation} />
      <Stack.Screen name='Successful' component={Successful} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});