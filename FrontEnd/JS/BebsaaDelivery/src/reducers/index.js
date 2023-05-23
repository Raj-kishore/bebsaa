// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import countReducer from './countReducer';


//persist with asyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['count'] // only Reducer with name "count" will be persisted. Comment it to persist all the reducers. 
};


// Redux: Root Reducer
const rootReducer = combineReducers(
    {
        count: countReducer
    }
);

const persistedReducer = persistReducer(persistConfig, rootReducer)


// Exports
export default persistedReducer;