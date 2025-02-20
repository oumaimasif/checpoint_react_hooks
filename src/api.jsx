const apiKey = 'b6670721563444cc55bc8e1a6136fa31';


// films populaires
export const fetchPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&page=1&include_adult=false`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

// films par titre
export const searchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=fr-FR&page=1&include_adult=false`
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results)
  return data.results|| [];
};