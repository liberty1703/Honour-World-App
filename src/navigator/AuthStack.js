import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import Verify from '../screens/Auth/Verify';
import AccountCreated from '../screens/Auth/AccountCreated';
import FingerPrintAuth from '../screens/Auth/FingerPrintAuth';
import Airtime from '../screens/Main/Airtime/Airtime';
import Confirmation from '../screens/Main/Confirmation/Confirmation';
import Successful from '../screens/Main/Succesful/Successful';
import HonourScreen from '../screens/Main/Wallet/HonourScreen';
import CreditScreen from '../screens/Main/Wallet/CreditScreen';
import CardScreen from '../screens/Main/Wallet/CardScreen';
import TransferBalance from '../screens/Main/Transfer/TransferBalance';
import SplashScreen from '../screens/Main/SplashScreen';
import IntroSlider from '../screens/Main/IntroSlider';
import Education from '../screens/Main/Education/Education';
import Electricity from '../screens/Main/Electricity/Electricity';


const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='IntroSlider' component={IntroSlider} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Verify' component={Verify} />
      <Stack.Screen name='AccountCreated' component={AccountCreated} />
      <Stack.Screen name='FingerPrintAuth' component={FingerPrintAuth} />
      <Stack.Screen name='Airtime' component={Airtime} />
      <Stack.Screen name='Confirmation' component={Confirmation} />
      <Stack.Screen name='Successful' component={Successful} />
      <Stack.Screen name='HonourScreen' component={HonourScreen} />
      <Stack.Screen name='CreditScreen' component={CreditScreen} />
      <Stack.Screen name='CardScreen' component={CardScreen} />
      <Stack.Screen name='TransferBalance' component={TransferBalance} />
      <Stack.Screen name='Education' component={Education} />
      <Stack.Screen name='Electricity' component={Electricity} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})