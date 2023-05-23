import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';


// Imports: Redux Root Reducer
import rootReducer from '../reducers/index';


// Imports: Redux Root Saga
import { rootSaga } from '../sagas/index';






const configureStore = () => {
    // Middleware: Redux Saga
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(
        sagaMiddleware,
        createLogger(),
    ));
    // Middleware: Redux Saga
    sagaMiddleware.run(rootSaga);
    return store;
}



export default configureStore;