import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS} from '../../constants'
import ArrowButton from '../../components/Button/ArrowButton'
import Verification from '../../components/Button/Verification/Verification'
import FormInput from '../../components/Input/FormInput'
import ButtonInput from '../../components/Button/ButtonInput'
import { useNavigation } from '@react-navigation/native'
import AccountCreated from './AccountCreated'

const Verify = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.page}>
    <ArrowButton/>
    <View style={{textAlign: 'center', textAlignVertical: 'center',alignItems:'center'}}>
        <Text style={{...FONTS.h1,  marginBottom: 15, marginTop: 15}}> Verify Account!</Text>
        <Text style={{textAlign: 'center', ...FONTS.body3b}}> Enter 4-digit Code sent to </Text>
        <Text style={{textAlign: 'center', ...FONTS.h3a, textDecorationLine: 'underline', color: COLORS.primary}}>idowuemmanuel50@gmail.com</Text>
    </View>
    {/* 4 Digits Container */}
    <View style={styles.digitsContainer}>
  <Verification text={7} color={COLORS.primary} textColor={COLORS.primary} />
  <Verification text={1} color={COLORS.black} textColor={COLORS.black} />
  <Verification text={3} color={COLORS.black} textColor={COLORS.black} />
  <Verification text={9} color={COLORS.black} textColor={COLORS.black} />
</View>

<Text style={{marginTop: SIZES.h1*3, textAlign: "center", textAlignVertical: "center", ...FONTS.body2b}}>
    Didn't received the code?
</Text>

<TouchableOpacity>
<Text style={{marginTop: SIZES.h2,marginBottom: SIZES.h1*3, textAlign: "center", textAlignVertical: "center", ...FONTS.h2, textDecorationLine: 'underline', color: COLORS.primary}}>
    Resend Code
</Text>
</TouchableOpacity>

    <ButtonInput 
    onPress={()=> navigation.navigate(AccountCreated)}
    text={'Proceed'}
    />

<View style={{ marginLeft: SIZES.h5, justifyContent: 'center', alignItems: 'center', marginTop: SIZES.h4}}>
    {/* First line with "Privacy Policy" */}
    <Text style={{ textAlignVertical: 'center', ...FONTS.body4 }}>
      By clicking proceed, you agree to our{' '}
      <TouchableOpacity>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: COLORS.primary,
          }}
        >
          Privacy Policy
        </Text>
      </TouchableOpacity>
    </Text>

    {/* Second line with "Terms and Conditions" */}
    <Text style={{ textAlignVertical: 'center', ...FONTS.body4}}>
      and{' '}
      <TouchableOpacity>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: COLORS.primary,
          }}
        >
          Terms and Conditions
        </Text>
      </TouchableOpacity>
    </Text>
  </View>
    </View>
  )
}

export default Verify

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
       paddingTop: SIZES.h1 * 2,
       paddingHorizontal: SIZES.h5
    },
    digitsContainer: {
        flexDirection: 'row', // Aligns the digits side by side
        justifyContent: 'center',
        marginTop: 20,
      },
   
})