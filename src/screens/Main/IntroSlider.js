import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 1,
    title: "Buy Cheap and Affordable Mobile Data",
    text: 'Get data of all networks to keep surfing the internet',
    image: images.sliderOne, 
  },
  {
    key: 2,
    title: "pay for Utility Bills Seamlessly",
    text: 'Purchase different subscriptions for different cable/TV providers',
    image: images.sliderTwo,
  },
  {
    key: 3,
    title: "Swap Airtime to Cash On-The-Go",
    text: 'Recharged excess? Be calm!You can convert your airtime to cash easily',
    image: images.sliderThree,
  },
];

const IntroSlider = () => {
  const navigation = useNavigation();
  
  const handleNext = async () =>{
    try {
        const asyncData = {open: true}

        const jsonValue = JSON.stringify(asyncData)
        await AsyncStorage.setItem('open', jsonValue)
        console.log('saved')
        navigation.navigate("Login")
    } catch (error) {
        console.log('error while saving', error)
    }
  }
 

  //  const handleNext = async ()=>{
  //   try {
  //     let app = {open: true}
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem('my-key', jsonValue);
  //     navigation.navigate("Login")

  //   } catch (e) {
  //    console.log('error while saving')
  //   }
  //  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.page}>
        <StatusBar
        backgroundColor={COLORS.primary} 
        barStyle={'light-content'}
        />
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => handleNext()} style={styles.button1}>
        <Text style={styles.buttonText1}>Done</Text>
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

  const renderSkipButton = () => {
    return (
      <TouchableOpacity onPress={()=> handleNext()} style={styles.button}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
      
    );
  };


  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      showSkipButton={true}
      showNextButton={true}
      showDoneButton={true}
      activeDotStyle={styles.activeDot}
      dotStyle={styles.dot}
    />
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.h2* 2,
    borderTopLeftRadius:SIZES.h2*2,
    marginTop: SIZES.h1*2
  },
  image: {
    width: SIZES.h1*10 ,
    height: SIZES.h1*10,
    marginBottom: 20,
  },
  title: {
    fontSize: SIZES.h2,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom:SIZES.h4,
   paddingHorizontal: SIZES.h1 *2.5
  },
  text: {
    fontSize: SIZES.body3,
    color: COLORS.black,
    textAlign: 'center',
    paddingHorizontal: SIZES.h1*2.5
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderWidth:1, 
    borderRadius: 10,
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.primary, 
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: SIZES.h4,
  },
  buttonText1: {
    color: COLORS.white,
    fontSize: SIZES.h4,
  },
  activeDot: {
    backgroundColor: COLORS.primary,  // Primary color for the active dot
    height: SIZES.h5 -6,
    width: SIZES.h5*1,
    borderRadius: 5,
    marginBottom: SIZES.h1*2
  },
  dot: {
    backgroundColor: 'gray',
    width: SIZES.h5-8,
    height: SIZES.h5-8,
    borderRadius: 5,
    marginBottom: SIZES.h1*2
  },
});
