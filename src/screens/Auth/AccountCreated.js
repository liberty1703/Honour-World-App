import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { COLORS, images, SIZES,FONTS } from '../../constants'
import ButtonInput from '../../components/Button/ButtonInput'
import { useNavigation } from '@react-navigation/native'
import FingerPrintAuth from './FingerPrintAuth'


const AccountCreated = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.page}>
     <Image
     source={images.thumps} style={{height: SIZES.h1 *6, width: SIZES.h1*6, alignSelf: "center"}}/>
    
    <Text style={{...FONTS.h1,  marginBottom: 15, marginTop: 15, textAlign: 'center'}}> Account Created!</Text>
        <Text style={{textAlign: 'center', ...FONTS.body2a}}> Your acccount has been created {"\n"}
                          successfully</Text>
                          <Text style={{textAlign: 'center', ...FONTS.body2a, marginTop: SIZES.h1, marginBottom: SIZES.h1*3}}> Press continue to start using app. </Text>
   <ButtonInput
   onPress={()=> navigation.navigate(FingerPrintAuth) }
   text={'Continue'}
   />

    </View>
  )
}

export default AccountCreated

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
       paddingTop:SIZES.h1 * 5,
       paddingHorizontal: SIZES.h5
    },
   
})