import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import ArrowButton1 from '../../../components/Button/ArrowButton1';
import { useNavigation } from '@react-navigation/native';

const ServiceData = [
  { id: 1, subtitle: "Airtime", image: icons.phonecall },
  { id: 2, subtitle: "Data", image: icons.data },
  { id: 3, subtitle: "Cable TV", image: icons.cabletv },
  { id: 4, subtitle: "Electricity", image: icons.electricity },
  { id: 5, subtitle: "Education", image: icons.education },
  { id: 6, subtitle: "Auto Buy", image: icons.autobuy },
  { id: 7, subtitle: "CG Wallet", image: icons.cgwallet },
  { id: 8, subtitle: "Airtime to Cash", image: icons.airtime },
  { id: 9, subtitle: "Biz Verification", image: icons.biz },
];

const ServiceScreen = () => {
  const navigation = useNavigation();
  const handlePress = (id) => {
    if (id === 1) {
      navigation.navigate('Airtime'); // Navigate to Airtime screen
    } else if (id === 2) {
      navigation.navigate('Data'); // Navigate to Data screen
    } else if (id === 3) {
      navigation.navigate('CableTV'); // Navigate to Cable TV screen
    } else if (id===4) {
      navigation.navigate('Electricity');
    } else if (id===5) {
      navigation.navigate('Education')
    }
  };
  return (
    <View style={styles.page}>
      <ArrowButton1 
        text={'Services'}
        onPress={() => navigation.goBack()}
      />
      <Text style={{...FONTS.body3a, textAlign: 'center', marginTop: SIZES.h3}}>
        Explore our range of services designed {"\n"} to simplify your life
      </Text>

      {/* FlatList with numColumns */}
      <FlatList
        data={ServiceData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}  
        columnWrapperStyle={styles.row} 
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.ctn} onPress={() => handlePress(item.id)}>
            <Image source={item.image} style={styles.iconStyle} />
            <Text style={FONTS.body4}>{item.subtitle}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    paddingTop: SIZES.h1 * 2,
    paddingHorizontal: SIZES.h5, 
  },
  ctn: {
    height: SIZES.h1 * 3.5,  
    width: SIZES.h1 * 3.8,  
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,  
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  row: {
    marginBottom: 10,  
  },
  iconStyle: {
    height: 40,
    width: 40,
    marginBottom: 5,
  },
});
