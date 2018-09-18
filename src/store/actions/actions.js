export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (amount) => {
    return {
        type: ADD,
        value: amount
    }
}

export const sub = (amount) => {
    return {
        type: SUB,
        value: amount
    }
}

export const storeResult = (result) => {
    return {
        type: ADD,
        result: result
    }
}

export const deleteResult = (id) => {
    return {
        type: ADD,
        elementId: id
    }
}