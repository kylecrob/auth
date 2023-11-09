import * as actions from "./actionTypes";

export const setUsername = (username: string) => ({
    type: actions.SET_USERNAME,
    payload: username,
});

export const setEmail = (email: string) => ({
    type: actions.SET_EMAIL,
    payload: email,
});

export const setPassword = (password: string) => ({
    type: actions.SET_PASSWORD,
    payload: password,
});
