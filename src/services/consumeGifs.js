const getGifs = (termToSearch = null, osffsetParam) => {
   const baseUrl = process.env.REACT_APP_BASE_URL;
   const searchEndpoint = "/search";
   const trendingEndpoint = "/trending";
   const apiKey = process.env.REACT_APP_API_KEY;
   const toSearch = `&q=${termToSearch}`;
   const limit = "&limit=25";
   const offset = `&offset=${osffsetParam}`;
   const rating = "&rating=g";
   const lang = "&lang=en";

   const url =
      baseUrl +
      `${termToSearch !== null ? searchEndpoint : trendingEndpoint}` +
      apiKey +
      toSearch +
      limit +
      offset +
      rating +
      lang;

   return fetch(url)
      .then((res) => {
         return res.ok
            ? res.json()
            : Promise.reject({
                 err: true,
                 status: res.status || "00",
                 statusText: res.statusText || "Ocurrio un error",
              });
      })
      .catch((err) => err);
};

export default getGifs;
