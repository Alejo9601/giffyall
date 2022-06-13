import { Children, Context, createContext, useState } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState();

  const data = { searchTerm, setSearchTerm };

  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
};

export { SearchContextProvider };
export default SearchContext;
