import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'
import { moderateScale } from '../styles/responsiveSize'
const BtnComp = ({
    btnText,
    onPress,
    btnStyle,
    textStyle,
    isDisable = false
}) => {
    return (
        <TouchableOpacity style={{ ...styles.btnStyle, ...btnStyle }} onPress={onPress} activeOpacity={0.8} disabled={isDisable}>
            <Text style={{ ...styles.textStyle, ...textStyle }}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default BtnComp

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: colors.red,
        height: moderateScale(62),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        ...commonStyles.fontSize24,
    }
})
