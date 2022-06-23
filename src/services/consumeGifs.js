const getGifs = (termToSearch = null, osffsetParam) => {
  const baseUrl = "https://api.giphy.com/v1/gifs";
  const searchEndpoint = "/search";
  const trendingEndpoint = "/trending";
  const apiKey = "?api_key=FlQhEsM9VzKUZb1Zx4XT2IRUTygAEOs2";
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
