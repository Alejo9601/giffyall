const consumeTrendingSearches = () => {
  const baseUrl = "https://api.giphy.com/v1/trending/searches";
  const apiKey = "?api_key=FlQhEsM9VzKUZb1Zx4XT2IRUTygAEOs2";
  const url = baseUrl + apiKey;
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

export default consumeTrendingSearches;
