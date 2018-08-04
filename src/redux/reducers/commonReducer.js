const initialstate = {
    no: 0
}

// reducers.js
const commonReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "INCREMENT_BY":
            return { no: state.no + action.payload};
        default:
            return state;
    }
};

export default commonReducer;
