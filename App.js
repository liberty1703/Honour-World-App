import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES , FONTS} from './src/constants'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './src/navigator/AppStack';
import AuthStack from './src/navigator/AuthStack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Auth' component={AuthStack}/>
      <Stack.Screen name= 'Main' component={AppStack}/>
    </Stack.Navigator>
   </NavigationContainer>
  
  )
}

export default App

const styles = StyleSheet.create({})