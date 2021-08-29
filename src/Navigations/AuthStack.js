import React from 'react'
import { InitialScreen, Login, Signup } from '../Screens'
import navigationStrings from '../constants/navigationStrings';
export default function (Stack) {
    return (
        <>
            <Stack.Screen name={navigationStrings.INITIAL_SCREEN} component={InitialScreen} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} options={{ headerShown: false }} />
        </>
    )
}