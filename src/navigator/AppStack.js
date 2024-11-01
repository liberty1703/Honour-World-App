import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import HonourScreen from '../screens/Main/Wallet/HonourScreen';
import TransferBalance from '../screens/Main/Transfer/TransferBalance';
import WalletScreen from '../screens/Main/Wallet/WalletScreen';
import HomeScreen from '../screens/Main/Home/HomeScreen';
import CreditScreen from '../screens/Main/Wallet/CreditScreen';
import CardScreen from '../screens/Main/Wallet/CardScreen';
import Airtime from '../screens/Main/Airtime/Airtime';
import Data from '../screens/Main/Data';


const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Bottom" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bottom" component={BottomStack} />

      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HonourScreen" component={HonourScreen} />
      <Stack.Screen name="CreditScreen" component={CreditScreen} />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="CardScreen" component={CardScreen} />
      <Stack.Screen name="TransferBalance" component={TransferBalance} />


      <Stack.Screen name="Airtime" component={Airtime} />
      <Stack.Screen name="Data" component={Data} />



    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
