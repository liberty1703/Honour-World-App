import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, images, SIZES } from '../../constants';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { useNavigation } from '@react-navigation/native';

const slides =[
    {
        key: 1,
        title: "First One",
        text: 'one',
        Image: images.sliderOne
    },
    {
        key: 2,
        title: "First One",
        text: 'one',
        Image: images.sliderTwo
    },
    {
        key: 3,
        title: "First One",
        text: 'one',
        Image: images.sliderThree
    },
    
]

const IntroSlider = () => {
    const navigation= useNavigation();
  return (
    <View style={styles.page}>
         <View style={styles.container}>
      <Text>IntroSlider</Text>
      </View>

      <AppIntroSlider
        data={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderItem={renderitem}
        />
        </View>
    );
  }
  

const renderitem = ({item})=>{
    return(
        <View>
            <Image source={item.Image} style={{height: SIZES.h3, width:SIZES.h3}}/>
       <Text> {item.title}</Text>
       <Text> {item.text}</Text>
        </View>
    )
}

export default IntroSlider

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: SIZES. h2,
        borderTopRightRadius: SIZES.h2,
        paddingTop: SIZES.h1,
        paddingHorizontal: SIZES.h1
    }
})