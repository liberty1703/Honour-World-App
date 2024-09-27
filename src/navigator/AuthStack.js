import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import Verify from '../screens/Auth/Verify';
import AccountCreated from '../screens/Auth/AccountCreated';
import FingerPrintAuth from '../screens/Auth/FingerPrintAuth';

const  AuthStack = () => {
    const Stack = createNativeStackNavigator();
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='SignUp' component={SignUp}/>
    <Stack.Screen name= 'Verify' component={Verify}/>
    <Stack.Screen name='AccountCreated' component={AccountCreated}/>
    <Stack.Screen name='FingerPrintAuth' component={FingerPrintAuth}/>
  </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})