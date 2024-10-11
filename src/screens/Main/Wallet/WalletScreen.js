import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import ArrowButton2 from '../../../components/Button/ArrowButon2';
import { useNavigation } from '@react-navigation/native';

const WalletData = [
  { id: 1, text: 'Honour World Wema Account', image: icons.wema },
  { id: 2, text: 'Premium Trust Bank Limited Account', image: icons.boxarrrow },
  { id: 3, text: 'Wema Linked Account', image: icons.wema },
  { id: 4, text: 'Sterling Linked Account', image: icons.circlered },
  { id: 5, text: 'Moniepoint Linked Account', image: icons.monniepoint },
  { id: 6, text: 'Credit/Debit Card', image: icons.card },
];

const WalletScreen = () => {
  const navigation = useNavigation();

  const handlePress = (id) => {
    if (id===1){
        navigation.navigate('HonourScreen')
    }
    else if (id===6) {
      navigation.navigate('CreditScreen')
    }
  };
  return (
    <View style={styles.page}>
      <ArrowButton2 text={'Home'} />
      <Image 
        source={icons.cash} 
        style={{
          height: SIZES.h1 * 2.8, 
          width: SIZES.h1 * 2.8, 
          justifyContent: 'center', 
          alignSelf: 'center'
        }} 
      />
      <Text style={{ ...FONTS.h3a, color: COLORS.primary, textAlign: 'center', marginTop: SIZES.h3 }}>
        Fund Wallet
      </Text>
      <Text style={{ ...FONTS.body3a, textAlign: 'center', marginTop: SIZES.h3 }}>
        Add Money to your wallet using {"\n"} any of these methods
      </Text>
      
      {/* FlatList for WalletData */}
      <FlatList
        data={WalletData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.ctn}>
              <View style={styles.imageTextContainer}>
                <Image source={item.image} style={styles.iconImage} />
                <Text style={styles.itemText}>{item.text}</Text>
              </View>
              <TouchableOpacity style={styles.arrowCircle} onPress={()=> handlePress(item.id)}>
                <Image source={icons.arrowright} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    paddingTop: SIZES.h1,
    paddingHorizontal: SIZES.h5,
  },
  ctn: {
    height: SIZES.h1 * 2, 
    backgroundColor: COLORS.background,
    borderWidth: 0.5, 
    borderColor: COLORS.primary,  
    borderRadius: 10,  
    flexDirection: 'row',  
    alignItems: 'center',  
    justifyContent: 'space-between',  
    paddingHorizontal: SIZES.h5,  
    marginVertical: 8, 
  },
  imageTextContainer: {
    flexDirection: 'row',  
    alignItems: 'center',  // Vertically align image and text
  },
  iconImage: {
    width: SIZES.h5 * 1.8, // Smaller image size
    height: SIZES.h5 * 1.8, 
    resizeMode: 'contain',  
  },
  itemText: {
    ...FONTS.h5,  
    marginLeft: SIZES.base * 0.5, // Reduced the gap between the image and text
  },
  arrowCircle: {
    width: SIZES.h1,  
    height: SIZES.h1,  
    borderRadius: SIZES.h1 / 2,  
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',  
    alignItems: 'center',
  },
  arrowIcon: {
    width: SIZES.h5 * 1,  
    height: SIZES.h5 * 1.5,
    tintColor: COLORS.primary,  
  },
});
