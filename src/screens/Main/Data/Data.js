import { StyleSheet, Text, View } from 'react-native'
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

});