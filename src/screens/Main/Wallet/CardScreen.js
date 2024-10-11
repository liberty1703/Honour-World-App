import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import ArrowButton2 from '../../../components/Button/ArrowButon2'
import ButtonInput from '../../../components/Button/ButtonInput'

const CardScreen = () => {
  return (
    <View style={styles.page}>
      <ArrowButton2 
      text={'Card'}
      />
      <View style={{paddingHorizontal: SIZES.h2, marginTop: SIZES.h2}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
        <Text style={{...FONTS.h4, color: COLORS.primary}}>
            Amount
        </Text>
        <Text style={{...FONTS.body5}}>
            Balance: N2,500.00
        </Text>
        </View>
        <View style={styles.textinputstyl}>
        <TextInput
              placeholder='Enter Amount to Fund'
              style={{ ...FONTS.body5, flex: 1, backgroundColor: COLORS.grey, marginLeft: SIZES.h4}}
            />
        </View>
        <ButtonInput
        text={'Fund Account'}
        />
      </View>
    </View>
  )
}

export default CardScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: SIZES.h1,
        paddingHorizontal: SIZES.h5,
      },
      textinputstyl: {
        height: SIZES.h1 * 2,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        borderColor: COLORS.black,
        marginTop: SIZES.h2,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: SIZES.h2
      },
})