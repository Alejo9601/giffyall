import Header from "../components/Header";

export default function WithHeaderLayout({ children }) {
   return (
      <>
         <Header />
         {children}
      </>
   );
}
