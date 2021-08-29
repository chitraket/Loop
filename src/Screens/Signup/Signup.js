import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import BtnComp from '../../Components/BtnComp'
import Header from '../../Components/Header'
import TextinputWithLable from '../../Components/TextinputWithLable'
import WrapperContainer from '../../Components/WrapperContainer'
import strings from '../../constants/lang'
import styles from './styles'

const Signup = () => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        isSecure: true
    })
    const { isLoading, email, password, isSecure, firstName, lastName, userName } = state
    const onSingup = () => {
        alert('Singup')
    }
    const updateState = (data) => setState((state) => ({ ...state, ...data }))
    return (
        <WrapperContainer isLoading={isLoading}>
            <Header />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.headingText}>{strings.CREATE_YOUR_ACCOUNT}</Text>
                    <TextinputWithLable placeholder={strings.ENTER_YOUR_FIRST_NAME} value={firstName} label={strings.FIRST_NAME} onChangeText={(firstName) => updateState({ firstName })} />
                    <TextinputWithLable placeholder={strings.ENTER_YOUR_LAST_NAME} value={lastName} label={strings.LAST_NAME} onChangeText={(lastName) => updateState({ lastName })} />
                    <TextinputWithLable placeholder={strings.ENTER_YOUR_USER_NAME} value={userName} label={strings.USER_NAME} onChangeText={(userName) => updateState({ userName })} />
                    <TextinputWithLable placeholder={strings.PLEASE_ENTER_YOUR_EMAIL} value={email} label={strings.USERNAME_OR_EMAIL} onChangeText={(email) => updateState({ email })} />
                    <TextinputWithLable placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD} value={password} label={strings.PASSWORD} onChangeText={(password) => updateState({ password })} secureTextEntry={isSecure} isSecure={isSecure} onPressSecure={() => updateState({ isSecure: !isSecure })} />
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Text style={styles.forgotTextStyle}>{strings.FORGOT_YOUR_PASSWORD}</Text>
                    </TouchableOpacity>
                </View>
                <BtnComp
                    btnStyle={styles.btnStyle}
                    btnText={strings.SIGNUP_AND_ACCEPT}
                    textStyle={styles.textStyle}
                    onPress={onSingup}
                />
            </View>
        </WrapperContainer>
    )
}

export default Signup

