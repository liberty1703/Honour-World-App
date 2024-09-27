import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomStack from './BottomStack';

const AppStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
    <Stack.Screen name='Bottom' component={BottomStack}  />

    
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})