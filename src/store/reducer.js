import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {  ...state, counter: state.counter + 1 }
        case actionTypes.DECREMENT:
            return {  ...state, counter: state.counter - 1 }
        case actionTypes.ADD:
            return {  ...state, counter: state.counter + action.value }
        case actionTypes.SUB:
            return {  ...state, counter: state.counter - action.value }
        case actionTypes.STORE_RESULT:
            return { ...state, results: state.results.concat({val : state.counter, id: new Date()}) }
        case actionTypes.DELETE_RESULT:
            const newResults = state.results.filter(elem => elem.id !== action.elementId);
            return { ...state, results: newResults}
        default:
        return state;
        break;
        }
}

export default reducer;