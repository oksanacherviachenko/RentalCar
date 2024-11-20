import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'your_api_key_here';

const fetchTrendingMovies = async () => {
  const response = await axios.get(`${API_URL}/trending/movie/day`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return response.data.results;
};

const searchMovies = async (query) => {
  const response = await axios.get(`${API_URL}/search/movie`, {
    params: { query },
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return response.data.results;
};



export { fetchTrendingMovies, searchMovies };
