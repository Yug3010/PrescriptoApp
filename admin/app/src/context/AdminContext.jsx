import { createContext, useState } from "react";

export const AdminContext=createContext();



const AdminContextProvider=(props)=>{


    const [token,setToken]=useState(localStorage.getItem('token'));
    
    const logout=()=>{
        if(localStorage.getItem('token'))
        {
            localStorage.removeItem('token');
            setToken(null);
        }
    }

    const contextvalue={
        token,setToken,logout
    }

    return (
        <AdminContext.Provider value={contextvalue}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider;


