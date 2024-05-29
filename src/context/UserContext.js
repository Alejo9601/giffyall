import { useState, createContext } from "react";

export const UserContext = createContext("");

export function UserContextProvider({ children }) {
   const [userName, setUsername] = useState("Not Logged");
   const [userToken, setUserToken] = useState("");

   const data = {
      userName,
      userToken,
      setUsername,
      setUserToken,
   };

   return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
