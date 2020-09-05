const apiKey = "2acf10dcaf0e3925d36ee3ee018b8a49";

const request = {
  //this were just only the ends of the main url
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${apiKey}&with_genres=9648`,
  ferchSciFi: `/discover/movie?api_key=${apiKey}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${apiKey}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${apiKey}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${apiKey}&with_genres=10770`,
};
export default request;
