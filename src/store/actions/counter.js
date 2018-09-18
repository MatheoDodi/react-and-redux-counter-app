import * as actionTypes from './actions';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add = (amount) => {
    return {
        type: actionTypes.ADD,
        value: amount
    }
}

export const sub = (amount) => {
    return {
        type: actionTypes.SUB,
        value: amount
    }
}
