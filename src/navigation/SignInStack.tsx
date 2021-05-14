import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SCREEN_NAMES } from './screenNames'
import { RootStackParamList } from './interfaces'
import Auth from '../screens/Auth/Auth'

const Stack = createStackNavigator<RootStackParamList>()

const SignInStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN_NAMES.Welcome} component={Auth} />
    </Stack.Navigator>
  )
}

export default SignInStack
