import React, { useEffect } from 'react'
import rootSaga from './src/sagas'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { configureStore, sagaMiddleware } from './src/reducers'
import 'react-native-gesture-handler'
import { navigationRef } from './src/NavigationService'
import RootStack from './src/navigation/RootStack'

const App = () => {
  const store = configureStore()

  useEffect(() => {
    sagaMiddleware.run(rootSaga)
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App
