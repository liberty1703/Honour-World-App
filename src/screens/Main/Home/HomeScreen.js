import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import TransferBalance from '../Transfer/TransferBalance';

const ActionsData = [
  { id: 1, subtitle: "Airtime", image: icons.phonecall },
  { id: 2, subtitle: "Data", image: icons.data },
  { id: 3, subtitle: "Cable TV", image: icons.cabletv },
  { id: 4, subtitle: "More", image: icons.more },
]
const transactionsData = [
  {
    id: '1',
    title: 'Airtime/8076749945',
    amount: '-N2,100.00',
    date: 'April 2, 06:56',
    status: 'Successful',
  },
  {
    id: '2',
    title: 'Airtime/8076749945',
    amount: '-N2,100.00',
    date: 'April 2, 06:56',
    status: 'Successful',
  },
]




const HomeScreen = () => {

  const navigation = useNavigation();
  const handlePress = (id) => {
    if (id === 1) {
      navigation.navigate('Airtime'); // Navigate to Airtime screen
    } else if (id === 2) {
      navigation.navigate('Data'); // Navigate to Data screen
    } else if (id === 3) {
      navigation.navigate('CableTV'); // Navigate to Cable TV screen
    } else if (id === 4) {
      navigation.navigate('More'); // Navigate to More screen
    }
  };


  const RenderHeader = () => {

    return (

      <View style={styles.page}>


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Image */}
          <TouchableOpacity>
            <Image style={styles.imagectn} source={images.men}

            />
          </TouchableOpacity>

          {/* Text Container */}
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Text style={{ ...FONTS.h2 }}>
              Hi, Spring
            </Text>
            <Text style={{ ...FONTS.body4 }}>
              What bill would you like to pay today?
            </Text>
          </View>

          {/* Notification Icon */}
          <TouchableOpacity style={{ marginLeft: 'auto' }}>
            <Image
              source={icons.notification}
              style={{ height: SIZES.h1, width: SIZES.h1 }}
            />
          </TouchableOpacity>
        </View>

        {/* {BALANCE BANNER} */}
        <View style={styles.Balancectn}>
          <View style={{ paddingVertical: SIZES.h1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              {/* Wallet Balance */}
              <Text style={{ ...FONTS.body2a - 2, color: COLORS.background }}>
                Wallet Balance
              </Text>

              {/* ID and Copy Icon */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ ...FONTS.body4, color: COLORS.background, marginRight: 5 }}>
                  ID: 7679945
                </Text>
                <TouchableOpacity>
                  <Image
                    source={icons.copy}
                    style={{ height: SIZES.h4, width: SIZES.h4, tintColor: COLORS.background }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ ...FONTS.body2, color: COLORS.background }}>
                N5,400.00
              </Text>
              <TouchableOpacity>
                <Image source={icons.eyeOpen} style={{ height: SIZES.h2 * 0.9, width: SIZES.h2 * 1, tintColor: COLORS.background, marginLeft: SIZES.h5 * 0.8 }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-between' }}>

            <TouchableOpacity style={[styles.smallctn, { paddingHorizontal: 10 }, { alignItems: 'center' }]}>
              <Image source={icons.cash} style={{ height: SIZES.h1, width: SIZES.h1 }} />
              <Text style={{ textAlign: 'center', textAlignVertical: 'center', ...FONTS.body3, marginLeft: 5 }}> Fund Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.lgctn, { paddingHorizontal: 10 }, { alignItems: 'center' }, { marginLeft: 5 }]} onPress={() => navigation.navigate(TransferBalance)}>
              <Image source={icons.transfer} style={{ height: SIZES.h1, width: SIZES.h1}} />
              <Text style={{ textAlign: 'center', textAlignVertical: 'center', ...FONTS.body4 }}> Transfer Balance</Text>
            </TouchableOpacity>
          </View>
        </View>

      {/*QUICK ACTIONS*/}

        <Text style={{ ...FONTS.h3, marginTop: SIZES.h4 }}>
          Quick Actions
        </Text>

        <View>
          <FlatList
            data={ActionsData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.ctn} onPress={() => handlePress(item.id)}>
                  <Image source={item.image}
                    style={styles.iconStyle}
                  />
                  <Text style={{ ...FONTS.body5 }}>
                    {item.subtitle}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <Image source={images.buydata}
          style={styles.imagectn1} />


{/*TRANSACTIONS*/}
        <View style={{ flexDirection: 'row', marginTop: SIZES.h3, textAlign: 'center', textAlignVertical: 'center', justifyContent: 'space-between' }}>
          <Text style={{ ...FONTS.body4, }}>
            Recent Transcation
          </Text>
          <TouchableOpacity>
            <Text style={{ ...FONTS.body4, textDecorationLine: 'underline', color: COLORS.green }}>
              Sell all
            </Text>
          </TouchableOpacity>
        </View>

        <View>

       
        <FlatList
          data={transactionsData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                {/* Image */}
                <View>
                  <Image style={styles.imagectn2} source={icons.mtn} />
                </View>

                {/* Text Container */}
                <View style={{ flexDirection: 'column', flex: 1 }}>
                  {/* Title and Amount Row */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.h4 }}>{item.amount}</Text>
                  </View>

                  {/* Date and Status Row */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{ ...FONTS.body4 }}>{item.date}</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.green }}>{item.status}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

</View>
      </View>
    )
  }

  return (
    <View>
      <FlatList renderItem={RenderHeader}
        data={['']} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    paddingTop: SIZES.h1 * 1,
    paddingHorizontal: SIZES.h5
  },
  imagectn: {
    height: SIZES.h1 * 2, width: SIZES.h1 * 2,
    borderRadius: 50,
    borderColor: COLORS.grey,
    borderWidth: 0.3
  },
  Balancectn: {
    height: SIZES.h1 * 6.5,
    width: SIZES.h1 * 12.5,
    backgroundColor: COLORS.primary2,
    borderRadius: 25,
    marginTop: SIZES.h1 - 15,
    paddingHorizontal: 15
  },

  smallctn: {
    height: SIZES.h1 * 2,
    width: SIZES.h1 * 5.5,
    backgroundColor: COLORS.linear,
    borderRadius: 10,
    flexDirection: 'row'
  },
  lgctn: {
    height: SIZES.h1 * 2,
    width: SIZES.h1 * 6,
    backgroundColor: COLORS.linear,
    borderRadius: 10,
    flexDirection: 'row'

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
    height: 40,
    width: 40,
    marginBottom: 5,
  },
  imagectn1: {
    height: SIZES.h1 * 5,
    width: SIZES.h1*12,
    borderRadius: 25,
    marginTop: SIZES.h5 - 8,

  },
  imagectn2: {
    height: SIZES.h1 * 2, width: SIZES.h1 * 3,
    borderRadius: 50,
    borderColor: COLORS.grey,
    borderWidth: 0.3
  },

})