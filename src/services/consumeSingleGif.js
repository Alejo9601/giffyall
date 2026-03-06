const getSingleGif = (gifId) => {
   const baseUrl = process.env.REACT_APP_BASE_URL + "/gifs/";
   const apiKey = process.env.REACT_APP_API_KEY;
   const url = baseUrl + gifId + apiKey;
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

export default getSingleGif;
