import { Button, Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import FormInput from '../../components/Input/FormInput';
import ButtonInput from '../../components/Button/ButtonInput';
import QuestionForm from '../../components/Complaints/QuestionForm';
import SignUp from './SignUp';
import LogoButton from '../../components/Button/LogoButton';
import { Screen } from 'react-native-screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        try {
            const userData = await AsyncStorage.getItem('user');
            if (userData) {
                const userData = JSON.parse(userData);
                if (userData.email === email && userData.password === password) {
                    Alert.alert('Success', 'Login Succesful');
                    navigation.navigate('Main', { screen: "Bottom" });
                }
            }
            else {
                Alert.alert('Error', 'Invalid error or password');
            }
        } catch (error) {
            console.log('error fetching data', error)
        }
    }
    return (
        <View style={styles.page}>

            {/* <LogoButton images={images.logo}/> */}

            <Image source={images.logo} style={{ height: SIZES.h1 * 2.3, width: SIZES.h1 * 3.2, justifyContent: 'center', alignSelf: "center" }} />
            <View style={{ textAlign: 'center', textAlignVertical: 'center', alignItems: 'center' }}>
                <Text style={{ ...FONTS.h1, marginBottom: 15, marginTop: 15 }}> Welcome Back!</Text>
                <Text style={{ textAlign: 'center', ...FONTS.body3b }}> Please sign in to continue with {"\n"} your account</Text>
            </View>
            <FormInput
                image={icons.email}
                placeholder={'Email Address'}
                value={email}
                onChangeText={text => setEmail(text)}

            />

            <FormInput
                image={icons.lock}
                placeholder={'Password'}
                icon={icons.eye}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry

            />


            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginTop: 15, alignItems: 'center' }}>
                <TouchableOpacity style={{ marginRight: 5 }}>
                    <Image source={icons.box} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                </TouchableOpacity>
                <Text style={{ ...FONTS.body3a }}> Remember Password</Text>
                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                    <Text style={{ ...FONTS.h4, color: COLORS.primary }}> Forgot Password?</Text>
                </TouchableOpacity>
            </View>




            <ButtonInput text={'Sign in'}
                onPress={handleLogin}
            />

            <Text style={{ ...FONTS.body3, marginTop: 20, textAlign: 'center', textAlignVertical: 'center' }}> Login with fingerprint</Text>
            <TouchableOpacity>
                <Image source={icons.fingerprint} style={{ height: SIZES.h1 * 2.5, width: SIZES.h1 * 2.5, alignSelf: 'center', marginTop: 15 }} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ ...FONTS.body3, textAlign: 'center', textAlignVertical: 'center' }}>
                    Don't have an account? -
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate(SignUp)}>
                    <Text style={{ textDecorationLine: 'underline', ...FONTS.h3, color: COLORS.primary, textAlign: 'center', textAlignVertical: 'center' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            <QuestionForm />
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: SIZES.h1 * 2,
        paddingHorizontal: SIZES.h5
    },

})






{/* <Text>Login</Text>
        <Image source={icons.arrow} style={{height: SIZES.h3, width: SIZES.h3}} />
        <Text style={{...FONTS.h1,  color: COLORS.primary }}>Log In</Text><Text>Login</Text>
        <Image source={icons.arrow} style={{height: SIZES.h3, width: SIZES.h3}} />
        <Text style={{...FONTS.h1,  color: COLORS.primary }}>Log In</Text> */}