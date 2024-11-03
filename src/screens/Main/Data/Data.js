import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SIZES, COLORS, icons, images } from '../../../constants'

const Data = () => {
    const navigation = useNavigation();
    return (
        <View styles={styles.page}>

            <Text style={{ fontSize: SIZES.h4 }}>Data</Text>
        </View>
    )
}

export default Data;

const styles = StyleSheet.create({
    page: {
        backgroundColor: COLORS.grey,
        flex: 1,
        padding: SIZES.h2,
    },
});