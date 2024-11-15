import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons, FONTS, SIZES, COLORS, image } from '../../constants';

const NetworkSelector = () => {
  return (
    <View style={styles.page}>
        <Text style={styles.sectionTitle}>Selected Network</Text>

        <View style={styles.textinputstyl}>
            
            <TouchableOpacity>
                <View style={styles.networkRow}>
                    <Image
                    source={icons.mtn}
                    style={styles.networkIcon}
                    />
                    <Text style={styles.networkText}>MTN SME</Text>
                </View>

                <View style={styles.dropdownRow}>
                    <TouchableOpacity style={styles.dropdownButton}>
                    <Image
                        source={icons.droparrow}
                        style={styles.dropdownIcon}
                    />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

      </View>

    </View>
  );
}

export default NetworkSelector;

const styles = StyleSheet.create({

    page: {
        backgroundColor: COLORS.grey,
        flex: 1,
        paddingTop: SIZES.h1,
      },
      container: {
        paddingHorizontal: SIZES.h3,
        backgroundColor: COLORS.grey2,
      },
      sectionTitle: {
        ...FONTS.h4,
        marginTop: SIZES.h3,
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
      networkRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
      networkIcon: {
        height: SIZES.h1 * 2.4,
        width: SIZES.h1 * 2.4,
      },
      networkText: {
        ...FONTS.h4,
      },
      dropdownRow: {
        flexDirection: 'row',
        marginTop: SIZES.h3,
      },
      dropdownButton: {
        alignItems: 'center',
      },
      dropdownIcon: {
        height: SIZES.h3,
        width: SIZES.h3,
      },
});