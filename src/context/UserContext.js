import { useState, createContext, useEffect } from "react";

export const UserContext = createContext("");

export function UserContextProvider({ children }) {
   const [userName, setUsername] = useState("Not Logged");
   const [userToken, setUserToken] = useState("");

   useEffect(() => {
      setUsername(sessionStorage.getItem("userLogged"));
   }, []);

   const data = {
      userName,
      userToken,
      setUsername,
      setUserToken,
   };

   return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
