import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({val : action.result, id: new Date()})})
        case actionTypes.DELETE_RESULT:
            const newResults = state.results.filter(elem => elem.id !== action.elementId);
            return updateObject(state, {results: newResults});
        default:
            return state;
        }
}

export default reducer;