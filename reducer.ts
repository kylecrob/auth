import * as actions from "./actionTypes";

const initialState = {
    username: '',
    email: '',
    password: '',
};

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.SET_USERNAME:
            return { ...state, username: action.payload };
        case actions.SET_EMAIL:
            return { ...state, email: action.payload };
        case actions.SET_PASSWORD:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};