import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ArrowButton1 = ({ text, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row',  }}>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
        <Image source={icons.arrow} style={{ height: SIZES.body3, width: SIZES.body3 }} />
        <Text style={{ ...FONTS.body3, marginLeft: 10 }}>
          Back
        </Text>
      </TouchableOpacity>
      <Text style={{ ...FONTS.h3, color: COLORS.primary, flex: 1, textAlign: 'center' }}>
        {text}
      </Text>
    </View>
  );
};

export default ArrowButton1;

const styles = StyleSheet.create({});
