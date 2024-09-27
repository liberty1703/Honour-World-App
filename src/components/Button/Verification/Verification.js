import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, icons } from '../../../constants';

const Verification = ({ text, color, textColor }) => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.box}
        style={[styles.box, { borderColor: color }]} // Dynamic borderColor
      />
            <Text style={[styles.text, { color: textColor }]}>
        {text.toString()} 
      </Text>

    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    marginHorizontal: 5, 
  },
  box: {
    height: SIZES.h1 * 2.2,
    width: SIZES.h1 * 2.2,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: COLORS.background,
    marginTop: 20
  },
  text: {
    ...FONTS.h1,
    textAlign: 'center',
    position: 'absolute', // places the text inside the box
    top: '35%', // positions the text slightly down inside the box
  },
});
