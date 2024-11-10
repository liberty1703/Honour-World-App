import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SIZES, COLORS, icons, images } from '../../../constants'
import ArrowButton1 from '../../../components/Button/ArrowButton1'
const Data = () => {
    const navigation = useNavigation();
    return (
        <View styles={{ paddingHorizontal: SIZES.h3, paddingTop: SIZES.h3 }}>
            <ArrowButton1 text={'Data'} onPress={() => navigation.goBack()} />
            <View>
                <Text style={{ fontSize: SIZES.h4 }}>This</Text>
            </View>
        </View>
    )
}

export default Data;

const styles = StyleSheet.create({
    page: {
        backgroundColor: COLORS.grey,
        flex: 1,
        paddingHorizontal: SIZES.h3, paddingTop: SIZES.h3
    },

});