import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Main/Home/HomeScreen';
import ServiceScreen from '../screens/Main/Service/ServiceScreen';
import { COLORS, icons, SIZES } from '../constants';
import WalletScreen from '../screens/Main/Wallet/WalletScreen';
import UserScreen from '../screens/Main/User/UserScreen';


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
        <Tab.Screen name='Service' component={ServiceScreen}
        options={{
          tabBarIcon: ({COLORS, SIZES,focused})=> {
            return (
              <Image source ={icons.service}
              style={{height:20, width: 20}}
              />
            )
          }
        }}
        />
         <Tab.Screen name='Wallet' component={WalletScreen}
        options={{
          tabBarIcon: ({COLORS, SIZES,focused})=> {
            return (
              <Image source ={icons.wallet}
              style={{height:20, width: 20}}
              />
            )
          }
        }}
        />
           <Tab.Screen name='user' component={UserScreen}
        options={{
          tabBarIcon: ({COLORS, SIZES,focused})=> {
            return (
              <Image source ={icons.user}
              style={{height:20, width: 20}}
              />
            )
          }
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomStack

const styles = StyleSheet.create({})