import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SIZES, COLORS, FONTS, icons, images } from '../../../constants'
import ArrowButton1 from '../../../components/Button/ArrowButton1'
import FormInput from '../../../components/Input/FormInput'
import NetworkSelector from '../../../components/Input/NetworkSelector'
const Data = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <ArrowButton1 text={'Data'} onPress={() => navigation.goBack()} />

            <View style={{ paddingHorizontal: SIZES.h3, backgroundColor: COLORS.grey2 }}>
                <Text style={{ ...FONTS.h4, marginTop: SIZES.h1 }}>
                    Selected Network
                </Text>

                {/*Dropdown text*/}
                {/* <View style={styles.textinputstyl}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <Image
                                source={icons.mtn}
                                style={{ height: SIZES.h1 * 2.4, width: SIZES.h1 * 2.4 }}
                            />
                            <Text style={{ ...FONTS.h4, }}>MTN SME</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: SIZES.h3 }}>

                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <Image
                                    source={icons.droparrow}
                                    style={{ height: SIZES.h3, width: SIZES.h3 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View> */}

                <NetworkSelector/>

                <View>
                    <Text style={{ ...FONTS.h4, marginTop: SIZES.h3 }}>
                        Phone Number
                    </Text>
                    <View style={styles.textinputstyl}>
                        <TextInput
                            placeholder='Enter Phone Number'
                            style={{ ...FONTS.h4, flex: 1, backgroundColor: COLORS.grey }}
                        />
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image
                                source={icons.contacts}
                                style={{ height: SIZES.h3 * 2, width: SIZES.h3 * 2 }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

                


            </View>
        </View >
    )
}

export default Data;

const styles = StyleSheet.create({
    page: {
        backgroundColor: COLORS.grey,
        flex: 1,
        // paddingHorizontal: SIZES.h1,
        paddingTop: SIZES.h1,
    },
    textinputstyl: {
        height: SIZES.h1 * 2,
        backgroundColor: COLORS.grey3,
        borderRadius: 5,
        borderColor: COLORS.black,
        marginTop: SIZES.h3,
        justifyContent: 'center',
        flexDirection: 'row',
    },

});