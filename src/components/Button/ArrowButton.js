import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ArrowButton = ({ text }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row',  flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
        <Image source={icons.arrow} style={{ height: SIZES.body3, width: SIZES.body3 }} />
        <Text style={{ ...FONTS.body3, marginLeft: 10 }}>
          Back
        </Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({});
