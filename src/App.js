import Home from "./pages/Home";
import Login from "./pages/Login";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import GifDetail from "./pages/GifDetail";
import { GifsContextProvider } from "./context/GifsContext";
import SignUpForm from "./pages/SignUpForm";
import { UserContextProvider } from "./context/UserContext";

const GifApp = styled.div`
   min-width: 100vw;
   display: flex;
   flex-direction: column;
`;

function App() {
   return (
      <UserContextProvider>
         <BrowserRouter>
            <GifsContextProvider>
               <GifApp>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/home" element={<Home />} />
                     <Route path="/login" element={<Login />} />
                     <Route path="/signup" element={<SignUpForm />} />
                     <Route path="/search/:term" element={<SearchResults />} />
                     <Route path="/detail/:gifId" element={<GifDetail />} />
                  </Routes>
               </GifApp>
            </GifsContextProvider>
         </BrowserRouter>
      </UserContextProvider>
   );
}

export default App;
