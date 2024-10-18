import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ArrowButton1 = ({ text, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
      {/* Back button */}
      <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={icons.arrow} style={{ height: SIZES.body4, width: SIZES.body4 }} />
        <Text style={{ ...FONTS.body3, marginLeft: 10 }}>
          Back
        </Text>
      </TouchableOpacity>

      {/* Centered text */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ ...FONTS.h4, color: COLORS.primary }}>
          {text}
        </Text>
      </View>
      
      {/* Placeholder for spacing */}
      <View style={{ width: SIZES.body4 + 10 }} />
    </View>
  );
};

export default ArrowButton1;

const styles = StyleSheet.create({});
