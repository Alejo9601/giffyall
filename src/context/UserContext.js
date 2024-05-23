import { useState, createContext } from "react";

export const UserContext = createContext("");

export function UserContextProvider() {
   const [userName, setUsername] = useState("");
   const [userToken, setUserToken] = useState("");

   const data = {
      userName,
      userToken,
      setUsername,
      setUserToken,
   };

   return <UserContext.Provider value={data}></UserContext.Provider>;
}
