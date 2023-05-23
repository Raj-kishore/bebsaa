// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';




// Worker: Change Counter Async (Delayed By 4 Seconds)
function* changeCounterAsync(action) {
    try {
        // Delay 4 Seconds
        yield delay(4000);

        let count = action.payload; // get the payload from COUNTER_CHANGE action
        count++;

        // Dispatch Action To Redux Store
        yield put({
            type: 'COUNTER_CHANGE_ASYNC',
            // value: action.payload,
            payload: count,
        });
    }
    catch (error) {
        console.log(error);
    }
};




// Watcher: Change Counter Async
export function* watchchangeCounter() {
    // Take Last Action Only
    yield takeLatest('COUNTER_CHANGE', changeCounterAsync);
    // yield takeEvery('COUNTER_CHANGE', changeCounterAsync);


    // high level view ::: 
    // takeLatest will take the last updated state from 
    // a rapid action calls. i.e. calling action multiple times
    // rapidly. 

    // while takeEvery will remember every state updates from 
    // rapid action calls and update them individually asynchruosly. 



};
