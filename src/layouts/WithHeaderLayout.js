import Header from "../components/Header";
import UserStatus from "../components/UserStatus";

export default function WithHeaderLayout({ children }) {
   return (
      <>
         <UserStatus/>
         <Header />
         {children}
      </>
   );
}
