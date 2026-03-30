import React, { createContext, useContext } from "react";

// 1. Context बनाएं
export const UserContext = createContext();

// 2 step 
export const InfoProvider = ({children}) => {


    const myName = "Maulik";
    const age = "24";

    console.log(children);

    return <UserContext.Provider value={{myName,age}}>
         {children}
    </UserContext.Provider>
}


