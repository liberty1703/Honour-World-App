import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, } from '../../constants';

const Inputdata = ({ text, placeholder, balance, icon }) => {
  return (
    <View style={styles.page}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ ...FONTS.h4 }}>{text}</Text>
        <Text style={{ ...FONTS.body4 }}>{balance}</Text>
      </View>
      <View style={styles.textinputContainer}>
        <TextInput
          placeholder={placeholder}
          style={{ ...FONTS.body5, flex: 1, paddingRight: 40 }} // Extra padding for the icon
        />
        <TouchableOpacity>
          {
            icon &&
            <Image source={icon} style={styles.iconStyle} />
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Inputdata;

const styles = StyleSheet.create({
  page: {
    marginTop: SIZES.h3,
    marginHorizontal: SIZES.h2,
  },
  textinputContainer: {
    height: SIZES.h1 * 2,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    borderColor: COLORS.black,
    marginTop: SIZES.h3,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Needed for icon absolute positioning
  },
  iconStyle: {
    position: 'absolute',
    right: 10,
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});
