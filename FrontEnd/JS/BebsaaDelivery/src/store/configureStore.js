import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';


// Imports: Redux Root Reducer
import persistedReducer from '../reducers/index';


// Imports: Redux Root Saga
import { rootSaga } from '../sagas/index';



import { persistStore } from 'redux-persist';



const configureStore = () => {
    // Middleware: Redux Saga
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        applyMiddleware(
            sagaMiddleware,
            createLogger(),
        )
    );
    // Middleware: Redux Saga
    sagaMiddleware.run(rootSaga);
    return store;
}



// export default persistStore(configureStore);

export default () => {
    let store = configureStore()
    let persistor = persistStore(store)
    return { store, persistor }
}