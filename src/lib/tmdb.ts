const TMDB_API_KEY = '92035acd075bd76b6c958a93476c4426';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const searchMovie = async (title: string) => {
  try {
    console.log('Searching TMDB for:', title);
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`
    );
    const data = await response.json();
    console.log('TMDB search results:', data.results?.[0]);
    return data.results[0]; // Return the first match
  } catch (error) {
    console.error('Error fetching movie from TMDB:', error);
    return null;
  }
};

export const getMovieById = async (tmdbId: number) => {
  try {
    console.log('Fetching movie by ID:', tmdbId);
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}`
    );
    const data = await response.json();
    console.log('TMDB movie data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching movie by ID from TMDB:', error);
    return null;
  }
};

export const getMoviePoster = async (title: string, tmdbId?: number) => {
  console.log('Getting poster for:', title, tmdbId ? `(ID: ${tmdbId})` : '');
  
  // If we have a TMDB ID, use it directly
  if (tmdbId) {
    const movie = await getMovieById(tmdbId);
    if (movie && movie.poster_path) {
      const url = `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`;
      console.log('Found poster URL by ID:', url);
      return url;
    }
  }
  
  // Fallback to title search if no ID or no poster found
  const movie = await searchMovie(title);
  if (movie && movie.poster_path) {
    const url = `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`;
    console.log('Found poster URL by title:', url);
    return url;
  }
  
  console.log('No poster found, using placeholder');
  return '/placeholder.svg'; // Fallback to placeholder if no poster found
}; 