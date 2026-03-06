import { createContext, useCallback, useMemo, useState } from "react";

const GifsContext = createContext();

const GifsContextProvider = ({ children }) => {
  const [allGifs, setAllGifs] = useState([]);

  const addNewGifs = useCallback((newGifs) => {
    setAllGifs((currentGifs) => currentGifs.concat(newGifs));
  }, []);

  const cleanGifs = useCallback(() => {
    setAllGifs([]);
  }, []);

  const data = useMemo(
    () => ({
      allGifs,
      addNewGifs,
      cleanGifs,
    }),
    [allGifs, addNewGifs, cleanGifs]
  );

  return <GifsContext.Provider value={data}>{children}</GifsContext.Provider>;
};

export { GifsContextProvider };
export default GifsContext;
