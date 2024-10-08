import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, icons } from '../../../constants';
import ArrowButton1 from '../../../components/Button/ArrowButton1';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import ButtonInput from '../../../components/Button/ButtonInput';
import Confirmation from '../Confirmation/Confirmation';


const networkData = [
  { id: 1, image: icons.airtel },
  { id: 2, image: icons.mtn },
  { id: 3, image: icons.glo },
  { id: 4, image: icons.ninemobile, },
]
const AmountData = [
  { id: 1, text: 'N50.00' },
  { id: 2, text: 'N100.00' },
  { id: 3, text: 'N200.00' },
  { id: 4, text: 'N500.00' },
  { id: 5, text: 'N1000.00' },
  { id: 6, text: 'N2000.00' },
]

const Airtime = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ArrowButton1
        text={'Airtime'}
        onPress={() => navigation.navigate("Main", { screen: "Bottom" })}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ ...FONTS.h4, marginTop: SIZES.h1 }}>
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
          <Text style={{ ...FONTS.h4, marginTop: SIZES.h3 }}>
            Phone Number
          </Text>
          <View style={styles.textinputstyl}>
            <TextInput
              placeholder='Enter Phone Number'
              style={{ ...FONTS.h4, flex: 1, backgroundColor: COLORS.grey }}
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
        <View style={{ marginTop: SIZES.h3, flexDirection: 'row' }}>
          <Image source={icons.caution}
            style={{ height: SIZES.h3 * 1.5, width: SIZES.h3 * 1.5 }} />
          <Text style={{ ...FONTS.body4, marginHorizontal: SIZES.h5 }}>
            HonourWorld cannot be heldd responsible for numbers entered incorrectly.{"\n"}
            Please double check the phone number you've entered before Airtime Top-up.
          </Text>
        </View>
        <View style={{ marginTop: SIZES.h4, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ ...FONTS.h4 }}>
            Enter Recharge Amount
          </Text>
          <Text style={{ ...FONTS.body5 }}>
            Balance: N2,500.00
          </Text>
        </View>
        <View>
          <FlatList
            data={AmountData}
            // horizontal={true}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.ctnn}>
                  <Text style={{ ...FONTS.h4 }} >
                    {item.text}
                  </Text>
                </TouchableOpacity>
              )

            }}
          />
        </View>
        <View style={styles.textinputstyl1}>
          <TextInput
            placeholder='Enter Recharge Amount'
            style={{ ...FONTS.h4, flex: 1, backgroundColor: COLORS.grey }}
          />
        </View>
        < View style={styles.benctn}>
          <Text style={{ ...FONTS.h4, textAlignVertical: 'center' }}>Save as beneficiary</Text>
        </View>
        <View style={{ marginBottom: SIZES.h3 }}>
        
{/* PAYMENT BUTTON */}
           <ButtonInput
            text={'Make Payment'}
            onPress={()=>navigation.navigate(Confirmation)} />
        </View>

      </ScrollView>
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
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    borderColor: COLORS.black,
    marginTop: SIZES.h3,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  ctnn: {
    height: SIZES.h1 * 1.6,
    width: SIZES.h1 * 3.5,
    backgroundColor: COLORS.background,
    borderColor: COLORS.primary,
    borderWidth: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  textinputstyl1: {
    height: SIZES.h1 * 1.8,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    borderColor: COLORS.black,
    marginTop: SIZES.h3,
  },
  benctn: {
    height: SIZES.h1 * 1.8,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    borderColor: COLORS.black,
    marginTop: SIZES.h3,
    justifyContent: 'center',
    paddingHorizontal: SIZES.h4,
    borderRadius: SIZES.h1
  }
});
