import React from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import BtnComp from '../../Components/BtnComp'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import navigationStrings from '../../constants/navigationStrings'
import strings from '../../constants/lang'
const InitialScreen = ({ navigation }) => {
    const moveToScreen = (screen) => () => {
        navigation.navigate(screen)
    }
    return (
        <ImageBackground
            style={{ flex: 1, justifyContent: 'flex-end' }}
            source={imagePath.bgImage}
        >
            <BtnComp btnText={strings.LOGIN} onPress={moveToScreen(navigationStrings.LOGIN)} />
            <BtnComp btnText={strings.SIGNUP} btnStyle={{ backgroundColor: colors.blue }} onPress={moveToScreen(navigationStrings.SIGNUP)} />
        </ImageBackground>
    )
}

export default InitialScreen

