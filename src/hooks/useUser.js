import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { requestUserValidation } from "../services/userServices";

export function useUser() {
   const { userName, userToken, setUsername, setUserToken } =
      useContext(UserContext);

   async function login(username, password) {
      const user = { username, password };
      const userResponse = await requestUserValidation(user);

      if (userResponse.token === undefined) {
         console.error("User could not be validated");
         return false;
      }

      setUsername(userResponse.username);
      setUserToken(userResponse.token);

      sessionStorage.setItem("userLogged", userResponse.username);

      return true;
   }

   function logout(username, password) {
      //logout logic here
   }

   return { login, logout, userName, userToken };
}
