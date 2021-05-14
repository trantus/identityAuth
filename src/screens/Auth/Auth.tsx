import React, { Dispatch } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { Action } from 'redux'
import { auth } from '../../actions/actionCreators/sessionActions'

interface DisptachProps {
  authStart: () => void
}

type Props = DisptachProps

const AuthScreen = (props: Props) => {
  const onButtonPress = () => {
    props.authStart()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>Вход</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    flex: 0.6,
    textAlign: 'center',
    color: 'white',
  },
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DisptachProps => ({
  authStart: () => dispatch(auth()),
})

export default connect(null, mapDispatchToProps)(AuthScreen)
