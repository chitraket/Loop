import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import colors from '../styles/colors'
import { moderateScale } from '../styles/responsiveSize'
import Loader from './Loader'
const WrapperContainer = ({
    barStyle = 'dark-content',
    statusBarColor = colors.white,
    children,
    isLoading,
    style = {},
}) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
            <Loader isLoading={isLoading} />
        </View>
    )
}

export default WrapperContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
        padding: moderateScale(24)
    }
})
