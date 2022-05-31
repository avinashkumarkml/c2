import React from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../Context/RegistrationContextProvider";
import "./reg.css"
export const RegOne = () => {
   const {name,email,dispatch} = React.useContext(RegistrationContext);
   const navigate = useNavigate();
   

    return (
        <div id="box">
            <label>NAME</label>
            <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => dispatch({type: "CHANGE_NAME", payload: e.target.value})}
            />
            
            <br/>
            
            <label>EMAIL</label>
            <input
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => dispatch({type: "CHANGE_EMAIL", payload: e.target.value})}
            />

            <br/>
            
           

            <button
            disabled={!name && !email}
            onClick={() => navigate("/registration/two")}>Next</button>

        </div>
    )
}