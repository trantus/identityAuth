import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListOfData from '../screens/ListOfData/ListOfData'
import { SCREEN_NAMES } from './screenNames'
import { RootStackParamList } from './interfaces'

const Stack = createStackNavigator<RootStackParamList>()

const SignedInStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN_NAMES.ListOfData} component={ListOfData} />
    </Stack.Navigator>
  )
}

export default SignedInStack
