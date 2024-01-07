import axios from 'axios';

const API_KEY = 'API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

// Function to fetch the first page of top-rated movies
export const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });

    // Extract the required fields (id, title, poster_path, vote_average) from each movie item
    const topRatedMovies = response.data.results.map(async (movie) => {
      const { id, title, poster_path, vote_average, overview, release_date,backdrop_path } = movie;
      const movieDetailsResponse = await axios.get(`${BASE_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
      });
      const { genres, runtime } = movieDetailsResponse.data;

      // Extract genre names and convert to a comma-separated string
      const genreNames = genres.map((genre) => genre.name).join(', ');

      return {
        id,
        title,
        poster_path,
        vote_average,
        overview,
        release_date,
        genre: genreNames,
        duration: runtime,
        backdrop_path :backdrop_path,
      };
    });

    return Promise.all(topRatedMovies); // Wait for all movie details to be fetched and return the array
  } catch (error) {
    throw new Error('Failed to fetch top-rated movies');
  }
};
