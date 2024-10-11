import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS, FONTS, images, SIZES, icons } from '../../../constants'
import ArrowButton2 from '../../../components/Button/ArrowButon2'
import { useNavigation } from '@react-navigation/native'


const CreditData=[
    {id:1, text: 'BudPay', images: icons.wema },
    {id:2, text: 'flutterwave', images: icons.wema },
    {id:3, text: 'paystack', images: icons.wema }
]

const CreditScreen = () => {
    const navigation = useNavigation();

    const handlenavigation = () =>{
        navigation.navigate('CardScreen');
    }
  return (
    <View style ={styles.page}>
    <ArrowButton2 
    text={'Fund Wallet'}
    />
    <View style={{paddingHorizontal: SIZES.h3}}>
    <Text style={{...FONTS.h4, color: COLORS.primary, marginTop: SIZES.h1}}>
        Credit/Debit Card
    </Text>
    <Text style={{...FONTS.body4, marginTop: SIZES.h3, lineHeight: SIZES.h3}}>
        All types of cards are accepted. Please select any {"\n"} of the payemnt gateways listed below: 
    </Text>
    <FlatList
    data={CreditData}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) =>{
        return(
            <View style={styles.ctn}>
                <View style={styles.imageTextContainer}> 
                    <Image source={item.images} style={styles.iconImage}/>
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>
                <TouchableOpacity style={styles.arrowCircle} onPress={handlenavigation}>
                <Image source={icons.arrowright} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
        )
    }}
    />
    </View>
    </View>
  )
}

export default CreditScreen

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
        borderWidth: 0.3, 
        borderColor: COLORS.primary,  
        borderRadius: 10,  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        paddingHorizontal: SIZES.h5,  
        marginVertical: 8, 
        marginTop: SIZES.h4
      },
      iconImage: {
        width: SIZES.h5 * 1.8, // Smaller image size
        height: SIZES.h5 * 1.8, 
        resizeMode: 'contain',  
      },
      imageTextContainer: {
        flexDirection: 'row',  
        alignItems: 'center',  // Vertically align image and text
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
})