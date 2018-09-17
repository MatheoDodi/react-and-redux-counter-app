const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {  ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return {  ...state, counter: state.counter - 1 }
        case 'ADD':
            return {  ...state, counter: state.counter + action.value }
        case 'SUB':
            return {  ...state, counter: state.counter - action.value }
        case 'STORE_RESULT':
            return { ...state, results: state.results.concat({val : state.counter, id: new Date()}) }
        case 'DELETE_RESULT':
            const newResults = state.results.filter(elem => elem.id !== action.elementId);
            return { ...state, results: newResults}
        default:
        return state;
        break;
        }
}

export default reducer;