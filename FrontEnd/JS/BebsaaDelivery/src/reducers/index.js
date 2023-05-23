// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import countReducer from './countReducer';
// Redux: Root Reducer
const rootReducer = combineReducers(
    { count: countReducer }
);
// Exports
export default rootReducer;