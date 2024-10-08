import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'
import ArrowButton1 from '../../../components/Button/ArrowButton1'
import { useNavigation } from '@react-navigation/native'
import ButtonInput from '../../../components/Button/ButtonInput'
import HomeButton from '../../../components/Button/HomeButton'
import Successful from '../Succesful/Successful'


const Confirmation = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <ArrowButton1
                text={'Confirm Airtime'}
                onPress={() => navigation.goBack()}
            />

            {/* VALIDATION */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.h1 * 3, marginHorizontal: SIZES.h1 }}>
                <Image
                    source={icons.validation}
                    style={{ height: SIZES.h3 * 1.5, width: SIZES.h3 * 1.5 }}
                />
                <Text style={{ ...FONTS.h4, textAlignVertical: 'center', marginLeft: SIZES.h5 }}>
                    Transaction Validation
                </Text>
            </View>
            <View style={styles.ctn}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                        Phone
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        08076749945
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                        Network
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        MTN
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                        Amount
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        #2000.00
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                        Vend Type
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        VTU
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                        Commission
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        #5.00
                    </Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                        Date
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        06/05/2023 09:27:07am
                    </Text>
                </View>
            </View>
            <ButtonInput
            text={'Make Payment'}
            onPress={()=> navigation.navigate(Successful)}
            />
            <HomeButton/>
        </View>
    )
}

export default Confirmation

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: SIZES.h1 * 1,
        paddingHorizontal: SIZES.h5,

    },
    ctn: {
        height: SIZES.h1 * 8,
        backgroundColor: COLORS.grey,
        marginTop: SIZES.h3,
        paddingHorizontal: SIZES.h3
    },
    line: {
        height: 0.5,
        backgroundColor: COLORS.primary,
        marginVertical: 10, // Spacing above and below the line
    },

})