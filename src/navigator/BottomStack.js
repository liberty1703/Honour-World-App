import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Main/Home/HomeScreen';
import ServiceScreen from '../screens/Main/Service/ServiceScreen';
import { COLORS, icons, SIZES } from '../constants';


const BottomStack = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, }}>
        <Tab.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon:  ({COLORS, SIZES,focused}) => {
            return(
              <Image source={icons.home}
              style={{height:20, width: 20}}
              />
            )
          }
        }}
        />
        <Tab.Screen name='Service' component={ServiceScreen}/>
    </Tab.Navigator>
  )
}

export default BottomStack

const styles = StyleSheet.create({})