import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'
import ArrowButton2 from '../../../components/Button/ArrowButon2'
import Inputdata from '../../../components/Button/Inputdata'
import ButtonInput from '../../../components/Button/ButtonInput'

const TransferBalance = () => {
    return (
        <View style={styles.page}>
            <ArrowButton2
                text={'Home'}
            />
            <View style={{ marginTop: SIZES.h2 }}>
                <Image
                    source={icons.transfer}
                    style={{
                        height: SIZES.h1 * 2.8,
                        width: SIZES.h1 * 2.8,
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}
                />
                <Text style={{ ...FONTS.h4, color: COLORS.primary, textAlign: 'center', textAlignVertical: 'center', marginTop: SIZES.h3 }}> Transfer Balance</Text>
                <Text style={{ ...FONTS.body4, textAlign: 'center', textAlignVertical: 'center', marginTop: SIZES.h3 }}> Transfer Money from yor wallet</Text>
            </View>

{/* WALLET BALANCE */}

            <View style={styles.ctn}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body5, }}>
                        Wallet Balance:
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        #4,250.00
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ ...FONTS.body5, }}>
                        Commission:
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        #2,250.00
                    </Text>
                </View>
                <View style={styles.line} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ ...FONTS.body5, }}>
                        Bonus:
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        #250.00
                    </Text>
                </View>
            </View>

{/* INPUT DATA BUTTON */}
            <Inputdata
                text={'Transfer Type'}
                placeholder={'Select a Transfer Type'}
                icon={icons.droparrow}
            />
            <Inputdata
                text={'Amount'}
                balance={'N2,500.00'}
                placeholder={'Insert Amount'}
            />
{/* CONTINUE BUTTON */}
            <View style={{ marginTop: SIZES.h3 }}>
                <ButtonInput
                    text={'Continue'}
                />
            </View>
        </View>
    )
}

export default TransferBalance

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: SIZES.h1,
        paddingHorizontal: SIZES.h5,
    },
    ctn: {
        height: SIZES.h1 * 3.3,
        // backgroundColor: COLORS.grey,
        marginTop: SIZES.h3,
        paddingHorizontal: SIZES.h3,
        borderColor: COLORS.black,
        borderWidth: 0.3,
        marginHorizontal: SIZES.h3,
        borderRadius: SIZES.h5 - 6
    },
    line: {
        height: 0.5,
        backgroundColor: COLORS.black,
        marginVertical: 5, // Spacing above and below the line
    },

})