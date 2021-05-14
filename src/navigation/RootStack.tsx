import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SCREEN_NAMES } from './screenNames'
import { RootStackParamList } from './interfaces'
import { connect } from 'react-redux'
import { RootState } from '../interfaces'
import SignedInStack from './SignedInStack'
import SignInStack from './SignInStack'

const Stack = createStackNavigator<RootStackParamList>()

interface StateProps {
  accessToken: string | null
}

const RootStack: React.FC<StateProps> = (props: StateProps) => {
  return props.accessToken ? (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN_NAMES.ListOfData} component={SignedInStack} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN_NAMES.Welcome} component={SignInStack} />
    </Stack.Navigator>
  )
}

const mapStateToProps = (state: RootState): StateProps => ({
  accessToken: state.session.accessToken,
})

export default connect(mapStateToProps)(RootStack)
