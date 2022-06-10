/* eslint-disable no-undef */
import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducer/index'
import rootSagas from '../saga/index'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeConfiguredStore = (reducers) =>
  createStore(reducers, bindMiddleware([thunkMiddleware]))

const makeStore = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return makeConfiguredStore(reducers)
  } else {
    const persistConfig = {
      key: 'next-js',
      storage: storage,
      timeout: null,
      whitelist: ['auth', 'masterData', 'slugPageData'],
    }

    const sagaMiddleware = createSagaMiddleware()
    const persistedReducer = persistReducer(persistConfig, reducers)
    const store = createStore(
      persistedReducer,
      compose(applyMiddleware(sagaMiddleware)),
    )
    sagaMiddleware.run(rootSagas)

    store.__persistor = persistStore(store) // Nasty hack

    return store
  }
}

export const wrapper = createWrapper(makeStore)
