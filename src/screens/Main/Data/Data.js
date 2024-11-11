import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SIZES, COLORS, FONTS, icons, images } from '../../../constants'
import ArrowButton1 from '../../../components/Button/ArrowButton1'
const Data = () => {
    const navigation = useNavigation();
    return (
        <View styles={styles.page}>
            <ArrowButton1 text={'Data'} onPress={() => navigation.goBack()} />
            <View>
                <Text style={{ ...FONTS.h4, marginTop: SIZES.h1 }}>
                    Selected Network
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
    )
}

export default Data;

const styles = StyleSheet.create({
    page: {
        backgroundColor: COLORS.grey,
        // flex: 1,
        paddingHorizontal: SIZES.h3,
        paddingTop: SIZES.h1,
    },
    textinputstyl: {
        height: SIZES.h1 * 2,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        borderColor: COLORS.black,
        marginTop: SIZES.h3,
        justifyContent: 'center',
        flexDirection: 'row'
    },

});