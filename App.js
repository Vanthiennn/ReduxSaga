/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import {Provider} from 'react-redux'
import { rootReducer } from './redux/store'
import Counter from './component/Counter'
import {applyMiddleware,createStore} from 'redux'
// Redux saga
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas/counterSagas'


// MiddlewareSaga
const sagaMiddleware = createSagaMiddleWare()
let store = createStore(rootReducer , applyMiddleware(sagaMiddleware))


export default function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}
sagaMiddleware.run(rootSaga)

