import React from "react";
import { Navigate } from "react-router-dom";
import { RegistrationContext } from "../Context/RegistrationContextProvider";
import { Link } from "react-router-dom";
import "./reg.css"
export const RegTwo = () => {
    const { dispatch, address, phone_no, handelSubmit } = React.useContext(RegistrationContext);

   
    

    return (
        <div id="box">



            <label>Address</label>
            <input
                placeholder="Address"
                type="text"
                value={address}
                onChange={(e) => dispatch({ type: "CHANGE_ADDRESS", payload: e.target.value })}
            />
            <br />

            <label>PHONE NO</label>
            <input
                placeholder="phone number"
                type="number"
                value={phone_no}
                onChange={(e) => dispatch({ type: "CHANGE_PHONE_NO", payload: e.target.value })}
            />
            <br />
           <Link to={'/registration/one'} ><button >previous</button></Link>
            <button
                disabled={!address || !phone_no}
                onClick={handelSubmit}
            >Submit</button>

        </div>
    )
}