import { COUNTER_CHANGE, COUNTER_CHANGE_ASYNC } from '../constants';
const initialState = {
    count: 0
};
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload
            };
        case COUNTER_CHANGE_ASYNC: // Used by redux saga gen *function
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}
export default countReducer;