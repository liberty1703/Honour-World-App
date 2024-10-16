import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: 1,
    title: "Welcome to HonourWorld",
    text: 'Slide 1 description',
    image: images.sliderOne, 
  },
  {
    key: 2,
    title: "Explore the Features",
    text: 'Slide 2 description',
    image: images.sliderTwo,
  },
  {
    key: 3,
    title: "Get Started Now",
    text: 'Slide 3 description',
    image: images.sliderThree,
  },
];

const IntroSlider = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  const renderNextButton = () => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      activeDotStyle={styles.activeDot}
      dotStyle={styles.dot}
    />
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  image: {
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: SIZES.h2,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: SIZES.body3,
    color: COLORS.white,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.primary, 
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.h4,
  },
  activeDot: {
    backgroundColor: COLORS.primary,  // Primary color for the active dot
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dot: {
    backgroundColor: COLORS.lightGray,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
