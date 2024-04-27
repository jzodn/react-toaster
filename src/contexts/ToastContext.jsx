import React, { createContext, useReducer } from "react";
import { toastReducer } from "../reducers/ToastReducer";
import ToastContainer from "../components/toaster/ToastContainer";

const initialState = {
    toasts: []
}

export const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, initialState)

    const addToast = (message) => {
        const id = Math.floor(Math.random() * 1000000);
        dispatch({type: "ADD", payload: {id: id, message: message}});
    };

    const removeToast = (id) => {
        dispatch({type: "REMOVE", payload: {id: id}});
    };

    const value = { addToast, removeToast };

    return (
        <ToastContext.Provider value={value}>
            <ToastContainer toasts={state.toasts} />
            {children}
        </ToastContext.Provider>
    );
};