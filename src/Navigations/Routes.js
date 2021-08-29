import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();
export default function Routes() {
    const isLogin = useSelector((state) => state.auth.isLogin)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLogin ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )

}