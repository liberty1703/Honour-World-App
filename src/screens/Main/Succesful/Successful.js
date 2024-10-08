import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'
import ArrowButton from '../../../components/Button/ArrowButton'
import ArrowButton1 from '../../../components/Button/ArrowButton1'
import SuccessButton from '../../../components/Button/SuccessButton'

const Successful = () => {
  return (
    <View style={styles.page}>
    <ArrowButton1/>
    <View style={{justifyContent: 'center',alignItems: 'center', marginTop: SIZES.h1}}>
    <Image source={icons.check}
      style={{ height: SIZES.h3 * 2.5, width: SIZES.h3 * 2.5}}
      />
      <Text style={{ ...FONTS.h4, textAlignVertical: 'center', marginTop: SIZES.h5}}>
        Transaction Successful
      </Text>
    </View>
     
    <View style={styles.ctn}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                       Sender
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
                       9Mobile
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
                     Calculated Amount
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                        #1,400.00
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                        Receiver
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                       08188404625
                    </Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                       Bank
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                       Access Bank Plc
                    </Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                        Transaction Status
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                      Successful
                    </Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h5, }}>
                      Transaction ID
                    </Text>
                    <Text style={{ ...FONTS.h5, }}>
                       087665442622
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
            <SuccessButton/>
    </View>
  )
}

export default Successful

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: SIZES.h1 * 1,
        paddingHorizontal: SIZES.h5,

    },
    ctn: {
        height: SIZES.h1 * 12,
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