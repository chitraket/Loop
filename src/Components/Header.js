import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/core'
import { moderateScale } from '../styles/responsiveSize'
import colors from '../styles/colors'
const Header = ({
    leftImg = imagePath.icBack,
    onPress,
    headerStyle
}) => {
    const naigation = useNavigation()
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <TouchableOpacity onPress={!!onPress ? onPress : () => naigation.goBack()}>
                <Image style={{ tintColor: colors.blue }} source={leftImg} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48)
    }
})
