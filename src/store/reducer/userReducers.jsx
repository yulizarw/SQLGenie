const initialState = {
    userLogin: {},
    dropDownState:{}
}

export const userReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DROPDOWN_STATE" :
            return {...state, dropDownState:payload}
        default:
            return state
    }
}