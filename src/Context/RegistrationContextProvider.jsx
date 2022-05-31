import axios from 'axios';
import React from 'react';
import { Navigate } from 'react-router-dom';


export const RegistrationContext = React.createContext();

const intialState = {
    name: "",
    email: "",

    address: "",
    phone_no: "",
}

const reducer =  (state, action) => {
    switch(action.type){
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "CHANGE_EMAIL":
            return {
                ...state,
                email: action.payload
            }
       
        case "CHANGE_ADDRESS":
            return {
                ...state,
                address: action.payload
            }
        case "CHANGE_PHONE_NO":
            return {
                ...state,
                phone_no: action.payload
            }
        default:
            return state;
    }
}


export function RegistrationContextProvider({children}) {
    const [state, dispatch] = React.useReducer(reducer, intialState);

    const handelSubmit = () => {
        axios.post("http://localhost:5000/users", state).then(() => {
            alert("User Added");
            Navigate ( "/registration/one") 
        }).catch(err => {
            console.log(err);
        })
    }
    const {name, email,  address, phone_no} = state; 

    return (
        <RegistrationContext.Provider value={{
            name,
            email,
          
            address,
            phone_no,
            dispatch,
            handelSubmit
        }}>
            {children}
        </RegistrationContext.Provider>
    )
}

