import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, icons } from '../../../constants';
import ArrowButton1 from '../../../components/Button/ArrowButton1';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';


const networkData = [
  { id: 1, image: icons.airtel },
  { id: 2, image: icons.mtn },
  { id: 3, image: icons.glo },
  { id: 4, image: icons.ninemobile, },
]

const Airtime = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ArrowButton1
        text={'Airtime'}
        onPress={() => navigation.navigate("Main", { screen: "Bottom" })}
      />
      <Text style={{ ...FONTS.h3a, marginTop: SIZES.h1 }}>
        Selected Network
      </Text>
      <View style={{ marginTop: SIZES.h4 }}>
        <FlatList
          data={networkData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.ctn}>
                <Image
                  source={item.image}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* INPUT  */}
      <View>
        <Text style={{ ...FONTS.h3a, marginTop: SIZES.h1 }}>
          Phone Number
        </Text>
        <View style={styles.textinputstyl}>
          <TextInput
            placeholder='Enter Phone Numbersss'
            style={{ ...FONTS.h3, flex: 1, backgroundColor: 'white' }}
          />
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Image
              source={icons.contacts}
              style={{ height: SIZES.h3 * 2, width: SIZES.h3 * 2 }}
            />
          </TouchableOpacity>
        </View>
        <View>
        </View>
        </View>
        <View style={{marginTop: SIZES.h3, flexDirection: 'row'}}>
        <Image source={icons.caution}
        style={{ height: SIZES.h3 * 1.5, width: SIZES.h3 * 1.5 }}/>
        <Text style={{...FONTS.body4, marginHorizontal: SIZES.h5}}>
          HonourWorld cannot be heldd responsible for numbers entered incorrectly.{"\n"}
          Please double check the phone number you've entered before Airtime Top-up.
        </Text>
        </View>
    </View>
  );
};

export default Airtime;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: SIZES.h1 * 1,
    paddingHorizontal: SIZES.h5,

  },

  ctn: {
    height: SIZES.h1 * 2.8,
    width: SIZES.h1 * 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: COLORS.background,
    borderRadius: 10,

  },

  iconStyle: {
    height: SIZES.h1 * 3,
    width: SIZES.h1 * 3,
    marginBottom: 5,
  },
  textinputstyl: {
    height: SIZES.h1 * 2,
    backgroundColor: COLORS.background,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.black,
    // paddingHorizontal: 10,
    marginTop: SIZES.h3,
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
