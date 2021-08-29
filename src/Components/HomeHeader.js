import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/core'
import { moderateScale } from '../styles/responsiveSize'
import commonStyles from '../styles/commonStyles'
import fontFamily from '../styles/fontFamily'
import RoundImg from './RoundImg'
const HomeHeader = ({
    leftImg = imagePath.icBack,
    onPress,
    headerStyle,
    centerText,
    lastImg = imagePath.icMore,
    setting
}) => {
    const naigation = useNavigation()
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RoundImg image='https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg' />
                <Image style={{ marginLeft: moderateScale(16) }} source={imagePath.icSearch} />
            </View>
            <Text style={styles.textStyle}>{centerText}</Text>
            {!!setting ?
                <TouchableOpacity>
                    <Image source={imagePath.icSetting} />
                </TouchableOpacity>
                :
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginRight: moderateScale(16) }} source={imagePath.icAdd} />
                    <Image source={lastImg} />
                </View>
            }
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgStyle: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(20)
    },
    textStyle: {
        ...commonStyles.fontSize20,
        fontFamily: fontFamily.bold,
        flex: 1,
    }
})
