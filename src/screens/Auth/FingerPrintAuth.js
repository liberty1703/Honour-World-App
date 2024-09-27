import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES,images,FONTS } from '../../constants'
import ArrowButton from '../../components/Button/ArrowButton'
import ButtonInput from '../../components/Button/ButtonInput'


const FingerPrintAuth = () => {
  return (
    <View style={styles.page}>
     <ArrowButton/>
   <TouchableOpacity style={{alignSelf: 'center'}}>
   <Image
     source={images.fingerid} style={{height: SIZES.h1*9.5, width: SIZES.h1*9.5, marginTop: SIZES.h1*1, marginBottom: SIZES.h1}}
     />
   </TouchableOpacity>

   <Text style={{textAlign: 'center', ...FONTS.h1}}> Use Touch ID to {"\n"}
                          authorise payments</Text>
    
   <Text style={{textAlign: 'center', ...FONTS.body3, marginTop: SIZES.h1}}> Activate touch ID so you don't need to {"\n"}
                          confirm your PIN every time you {"\n"}
                                        want to login
                          </Text>
    <ButtonInput
    text={'Activate Now'}
    />
    <TouchableOpacity style={styles.btn}>
        <Text style={[{...FONTS.body3}, {textAlign: 'center'}, {textAlignVertical: 'center', color: COLORS.black}]}>
            Skip This
        </Text>
    </TouchableOpacity>
    </View>
  )
}

export default FingerPrintAuth

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
       paddingTop: SIZES.h1 * 1,
       paddingHorizontal: SIZES.h5
    },
    btn: {
        height: 50,
        backgroundColor: COLORS.background,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginHorizontal: 15,
        borderColor: COLORS.black,
        borderWidth: 2
        
    }
})