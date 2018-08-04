// action-creators.js

export const incrementBy = payload => ({
    type: "INCREMENT_BY",
    payload
});

export const incrementByAsync = payload => {
    return async dispatch => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(incrementBy(payload));
    };
};
