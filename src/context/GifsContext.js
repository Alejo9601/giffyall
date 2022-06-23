import { createContext, useState } from "react";

const GifsContext = createContext();

const GifsContextProvider = ({ children }) => {
  const [allGifs, setAllGifs] = useState([]);

  const addNewGifs = (newGifs) => {
    setAllGifs((currentGifs) => currentGifs.concat(newGifs));
  };

  const cleanGifs = () => {
    setAllGifs([]);
  };

  const data = {
    allGifs,
    addNewGifs,
    cleanGifs,
  };

  return <GifsContext.Provider value={data}>{children}</GifsContext.Provider>;
};

export { GifsContextProvider };
export default GifsContext;
