import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'
import BtnComp from '../../Components/BtnComp'
import Header from '../../Components/Header'
import TextinputWithLable from '../../Components/TextinputWithLable'
import WrapperContainer from '../../Components/WrapperContainer'
import strings from '../../constants/lang'
import actions from '../../redux/actions'
import colors from '../../styles/colors'
import styles from './styles'

const Login = () => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true,
        isEnabled: false
    })
    const { isLoading, email, password, isSecure, isEnabled } = state
    const updateState = (data) => setState((state) => ({ ...state, ...data }))
    useEffect(() => {
        if (email !== '' && password !== '') {
            updateState({ isEnabled: true })
            return;
        }
        updateState({ isEnabled: false })
    }, [email, password])
    const onLogin = () => {
        actions.login(true)
        alert("Login Success")
    }
    return (
        <WrapperContainer isLoading={isLoading}>
            <Header />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.headingText}>{strings.LOGIN}</Text>
                    <TextinputWithLable placeholder={strings.PLEASE_ENTER_YOUR_EMAIL} value={email} label={strings.USERNAME_OR_EMAIL} onChangeText={(email) => updateState({ email })} />
                    <TextinputWithLable placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD} value={password} label={strings.PASSWORD} onChangeText={(password) => updateState({ password })} secureTextEntry={isSecure} isSecure={isSecure} onPressSecure={() => updateState({ isSecure: !isSecure })} />
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Text style={styles.forgotTextStyle}>{strings.FORGOT_YOUR_PASSWORD}</Text>
                    </TouchableOpacity>
                </View>
                <BtnComp
                    btnStyle={{ ...styles.btnStyle, backgroundColor: isEnabled ? colors.blue : colors.blackOpacity20 }}
                    btnText={strings.LOGIN}
                    textStyle={styles.textStyle}
                    isDisable={!isEnabled}
                    onPress={onLogin}
                />
            </View>
        </WrapperContainer>
    )
}

export default Login

