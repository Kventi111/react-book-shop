import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddelware from 'redux-saga'
import applicationSaga from './application/sagas'

import rootReducers from "./application/combine-reducers"

const sagaMiddelware = createSagaMiddelware();

export default () => {
  const store = createStore(rootReducers,
      composeWithDevTools(
        applyMiddleware(sagaMiddelware, logger)
      )
    )
    sagaMiddelware.run(applicationSaga)
  return store
}

