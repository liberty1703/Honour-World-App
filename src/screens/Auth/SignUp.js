import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ArrowButton from '../../components/Button/ArrowButton';
import { COLORS, images, SIZES, FONTS, icons } from '../../constants';
import FormInput from '../../components/Input/FormInput';
import ButtonInput from '../../components/Button/ButtonInput';
import QuestionForm from '../../components/Complaints/QuestionForm';
import Verify from './Verify';

const SignUp = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.page}>

        {/* {BANNER} */}

      <ArrowButton/>
      <Image source={images.logo} style={{height:SIZES.h1 * 2.3, width: SIZES.h1 * 3.2, justifyContent: 'center', alignSelf: "center", marginTop: SIZES.h5 * -0.5}} />
    <View style={{textAlign: 'center', textAlignVertical: 'center',alignItems:'center'}}>
        <Text style={{...FONTS.h1 ,  marginBottom: 15, marginTop: 15}}> Welcome!</Text>
        <Text style={{textAlign: 'center', ...FONTS.body3b}}> Please provide the following details{"\n"}
                          for your new account</Text>
    </View>

    {/* {FORM INPUTS} */}

    <FormInput
    image={icons.name}
    placeholder={'Full Name'}
    /> 
    <FormInput
    image={icons.email}
    placeholder={'E-Maiil'}/>
    <FormInput
    image={icons.phone}
    placeholder={'Phone Number'}
    />
    <FormInput
    image={icons.lock}
    placeholder={'Password'}
    icon={icons.eye}
    />
   
   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  {/* Checkbox */}
  <TouchableOpacity style={{ marginTop: SIZES.h5 }}>
    <Image
      source={icons.box}
      style={{
        height: SIZES.h2 * 1.2,
        width: SIZES.h2 * 1.2,
        borderColor: COLORS.primary,
        borderWidth: 1.5,
        borderRadius: 5,
      }}
    />
  </TouchableOpacity>

  {/* Text and Links */}
  <View style={{ marginLeft: SIZES.h5 }}>
    {/* First line with "Terms" */}
    <Text style={{ textAlignVertical: 'center', textAlign: 'center', color: COLORS.black }}>
      By creating your account you agree to our{' '}
      <TouchableOpacity>
        <Text
          style={{
            textDecorationLine: 'underline',
            textAlignVertical: 'center',
            color: COLORS.primary,
          }}
        >
          Terms
        </Text>
      </TouchableOpacity>
    </Text>

    {/* Second line with "and Conditions" */}
    <Text style={{ textAlignVertical: 'center', color: COLORS.black }}>
      and{' '}
      <TouchableOpacity>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: COLORS.primary,
            textAlign: 'center', textAlignVertical: 'center'
          }}
        >
          Conditions
        </Text>
      </TouchableOpacity>
      {' '}and{' '}
      <TouchableOpacity>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: COLORS.primary,
          }}
        >
          Policies
        </Text>
      </TouchableOpacity>
    </Text>
  </View>
  </View>

{/* {SIGN UP BUTTON} */}
<ButtonInput
  text={'Sign Up'}
  onPress={()=> navigation.navigate(Verify)}
  />

{/* {QUESTION BUTTON} */}
<QuestionForm/>
      </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
       paddingTop: SIZES.h1 * 1,
       paddingHorizontal: SIZES.h5
    },
})