import { useContext , createContext, useState, } from "react";

export const ContextData = createContext();

export default function ContextProvider({children}){

    const [data,setdata] = useState(0);
    return(
        <>
        <ContextData.Provider value={{data,setdata}}>
            {children}
        </ContextData.Provider>
        </>
    )
}
  


