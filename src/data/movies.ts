export interface Movie {
  id?: string;
  title: string;
  description?: string;
  poster_path: string;
  release_date?: string;
  release?: string;
  vote_average?: number;
  vote_count?: number;
  genre_ids?: number[];
  overview: string;
  popularity?: number;
  original_language?: string;
  original_title?: string;
  backdrop_path?: string;
  adult?: boolean;
  video?: boolean;
  type?: 'movie' | 'tv';
  year?: number;
  genres?: string[];
  isIsraeli?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  rating?: number;
  language?: string;
  genre?: string[];
  tmdb_id?: number;
}

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Portrait of a Lady on Fire',
    description: 'On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.',
    poster_path: '/2LquGwEhbg3soxSCs9VNyh5VJd9.jpg',
    release_date: '2019-09-18',
    vote_average: 4.8,
    vote_count: 1500,
    genre_ids: [18, 10749],
    overview: 'On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.',
    popularity: 85.5,
    original_language: 'fr',
    original_title: 'Portrait de la jeune fille en feu',
    backdrop_path: '/2LquGwEhbg3soxSCs9VNyh5VJd9.jpg',
    adult: false,
    video: false,
    type: 'movie',
    year: 2019,
    genres: ['drama', 'romance'],
    isIsraeli: false,
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    tmdb_id: 531428,
  },
  {
    id: '2',
    title: 'Disobedience',
    description: 'A woman returns to her Orthodox Jewish community that shunned her for her attraction to a female childhood friend. Once back, their passions reignite as they explore the boundaries of faith and sexuality.',
    poster_path: '/skPT4ffWhlmmDOMNEdxOiP6Emfz.jpg',
    release_date: '2017-09-10',
    vote_average: 4.5,
    vote_count: 1200,
    genre_ids: [18, 10749],
    overview: 'A woman returns to her Orthodox Jewish community that shunned her for her attraction to a female childhood friend. Once back, their passions reignite as they explore the boundaries of faith and sexuality.',
    popularity: 75.2,
    original_language: 'en',
    original_title: 'Disobedience',
    backdrop_path: '/skPT4ffWhlmmDOMNEdxOiP6Emfz.jpg',
    adult: false,
    video: false,
    type: 'movie',
    year: 2017,
    genres: ['drama', 'romance'],
    isIsraeli: false,
    isNew: false,
    isFeatured: false,
    rating: 4.5,
    tmdb_id: 419743,
  },
  {
    id: '3',
    title: 'The Handmaiden',
    description: 'A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.',
    poster_path: '/dLlH4aNHdnmf62umnInL8xPlPzw.jpg',
    release_date: '2016-06-01',
    vote_average: 4.7,
    vote_count: 1800,
    genre_ids: [18, 10749, 80],
    overview: 'A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.',
    popularity: 90.1,
    original_language: 'ko',
    original_title: '아가씨',
    backdrop_path: '/dLlH4aNHdnmf62umnInL8xPlPzw.jpg',
    adult: false,
    video: false,
    type: 'movie',
    year: 2016,
    genres: ['drama', 'romance', 'crime'],
    isIsraeli: false,
    isNew: false,
    isFeatured: false,
    rating: 4.7,
    tmdb_id: 290098,
  },
  {
    id: '4',
    title: 'Carol',
    description: 'An aspiring photographer develops an intimate relationship with an older woman in 1950s New York.',
    poster_path: '/z2epoeGzT4RMhj0G1AaNXNxDzYa.jpg',
    release_date: '2015-11-20',
    vote_average: 4.6,
    vote_count: 2000,
    genre_ids: [18, 10749],
    overview: 'An aspiring photographer develops an intimate relationship with an older woman in 1950s New York.',
    popularity: 88.3,
    original_language: 'en',
    original_title: 'Carol',
    backdrop_path: '/z2epoeGzT4RMhj0G1AaNXNxDzYa.jpg',
    adult: false,
    video: false,
    type: 'movie',
    year: 2015,
    genres: ['drama', 'romance'],
    isIsraeli: false,
    isNew: false,
    isFeatured: true,
    rating: 4.6,
    tmdb_id: 296098,
  },
  {
    id: '5',
    title: 'Blue is the Warmest Color',
    description: 'Adèle\'s life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire and to assert herself as a woman and as an adult.',
    poster_path: '/kgUk1wti2cvrptIgUz0VTAtSF6w.jpg',
    release_date: '2013-10-09',
    vote_average: 4.4,
    vote_count: 1600,
    genre_ids: [18, 10749],
    overview: 'Adèle\'s life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire and to assert herself as a woman and as an adult.',
    popularity: 82.7,
    original_language: 'fr',
    original_title: 'La vie d\'Adèle',
    backdrop_path: '/kgUk1wti2cvrptIgUz0VTAtSF6w.jpg',
    adult: false,
    video: false,
    type: 'movie',
    year: 2013,
    genres: ['drama', 'romance'],
    isIsraeli: false,
    isNew: false,
    isFeatured: false,
    rating: 4.4,
    tmdb_id: 152584,
  },
  {
    "title": "Wentworth: Behind the Bars",
    "release": "2020-07-21",
    "language": "en",
    "genre": [
      "Documentary"
    ],
    "poster_path": "/U8vmf64FLN1nQyiUAtZrA3tKss.jpg",
    "overview": "Before the launch of Wentworth's highly anticipated eighth season on Fox Showcase, let's take a journey back through seven seasons of gripping, unstoppable drama."
  },
  {
    "title": "Nina's Heavenly Delights",
    "release": "2006-09-28",
    "language": "en",
    "genre": [
      "Romance",
      "Comedy",
      "Drama"
    ],
    "poster_path": "/tK6S01DNg0C1ObAXgb7vtwVZ5Tr.jpg",
    "overview": "A feisty young woman returns to Glasgow to run her deceased father's curry house."
  },
  {
    "title": "High Art",
    "release": "1998-06-12",
    "language": "en",
    "genre": [
      "Drama",
      "Romance"
    ],
    "poster_path": "/qTg05RNJIvb9w4Z7XIcAZxuZmTn.jpg",
    "overview": "When Syd, a young editor at an influential art magazine,  becomes involved with her neighbor, a drug-addicted lesbian photographer, both seek to exploit each other for their respective careers while slowly falling in love with each other."
  },
  {
    "title": "Gillery's Little Secret",
    "release": "2006-03-02",
    "language": "en",
    "genre": [],
    "poster_path": "/36JDhitojDdIV0xRjOTrqzOVxDG.jpg",
    "overview": "A female-driven examination of the depth that lies between love and friendship. Gillery Poiencot returns home for her 20th high school reunion. While there, she is confronted by a young girl seeking answers that she believes only Gillery can resolve. However, her journey to answer these questions forces her to confront a past love, uncovering a hidden secret only now forced into the light after eighteen years."
  },
  {
    "title": "A Woman's Love",
    "release": "2001-05-31",
    "language": "fr",
    "genre": [
      "Romance",
      "Drama"
    ],
    "poster_path": "/1CinNLzLrjVg0zkoSg1nfpcQrqy.jpg",
    "overview": "Jeanne attends the birthday party of a friend of her husband. There she meets a dancer named Marie and there is instant chemistry between them. Jeanne falls for Marie and they embark on an extramarital affair."
  },
  {
    "title": "I Can't Think Straight",
    "release": "2008-06-01",
    "language": "en",
    "genre": [
      "Drama",
      "Romance"
    ],
    "poster_path": "/cC33ZIJnoeC8J8C7fDoXpCXkyA3.jpg",
    "overview": "Tala, a London-based Palestinian, is preparing for her elaborate Middle Eastern wedding when she meets Leyla, a young British Indian woman who is dating her best friend. Spirited Christian Tala and shy Muslim Leyla could not be more different from each other, but the attraction is immediate and goes deeper than friendship. But Tala is not ready to accept the implications of the choice her heart has made for her and escapes back to Jordan, while Leyla tries to move on with her new-found life, to the shock of her tradition-loving parents. As Tala's wedding day approaches, simmering tensions come to boiling point and the pressure mounts for Tala to be true to herself."
  },
  {
    "title": "Imagine Me & You",
    "release": "2006-01-27",
    "language": "en",
    "genre": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "poster_path": "/oF0wgVKumU52W7nBR6oHJb5FqSa.jpg",
    "overview": "During her wedding ceremony, Rachel notices Luce in the audience and feels instantly drawn to her. The two women become close friends, and when Rachel learns that Luce is a lesbian, she realizes that despite her happy marriage to Heck, she is falling for Luce. As she questions her sexual orientation, Rachel must decide between her stable relationship with Heck and her exhilarating new romance with Luce."
  },
  {
    "title": "Gia",
    "release": "1998-01-31",
    "language": "en",
    "genre": [
      "Romance",
      "Drama"
    ],
    "poster_path": "/8KxvKGl8lQembejIadDP03qjEYT.jpg",
    "overview": "Gia Carangi meteorically rises to modeling fame in the late 1970s but becomes overconsumed by persistent loneliness and drug addiction."
  },
  {
    "title": "Better Than Chocolate",
    "release": "1999-07-08",
    "language": "en",
    "genre": [
      "Drama",
      "Romance",
      "Comedy"
    ],
    "poster_path": "/7FC2UK7MyEwlmbJGCIIFg4U7VPU.jpg",
    "overview": "Not long after moving into her own place, Maggie finds herself with two unsolicited roommates: her recently divorced mother, Lila, and her young brother. The timing is especially bad, considering Maggie has fallen hard for an attractive woman, Kim, only hours before they move in. What could be a nonissue becomes increasingly complicated -- since Maggie's family is unaware of her sexual orientation, and Maggie is not open to sharing that information."
  },
  {
    "title": "Losing Chase",
    "release": "1996-12-06",
    "language": "en",
    "genre": [
      "Drama",
      "Romance"
    ],
    "poster_path": "/t3RNxs4vHXTiO29Kr1YInrxOGhz.jpg",
    "overview": "An intimate and turbulent relationship develops between Chase, a woman recovering from a nervous breakdown, and Elizabeth, the caretaker employed to look after her."
  },
  {
    "title": "Even Cowgirls Get the Blues",
    "release": "1994-05-13",
    "language": "en",
    "genre": [
      "Comedy",
      "Drama",
      "Romance",
      "Western"
    ],
    "poster_path": "/20x8nm0nPXkYv04COAHFA2AHyAl.jpg",
    "overview": "A girl born with enormous thumbs in the repressive era of the 1950s learns to turn her quirks into assets."
  },
  {
    "title": "Claire of the Moon",
    "release": "1992-09-18",
    "language": "en",
    "genre": [
      "Drama",
      "Romance"
    ],
    "poster_path": "/cCWa7UP4WA53xUSbQgN0A9d78uF.jpg",
    "overview": "Claire of the Moon is set in the 1990s in the Pacific Northwest. Claire Jabrowski, a famous heterosexual author, decides to attend a retreat for all-female writers. Claire's rommate at the retreat is Dr. Noel Benedict, author of a book called The Naked Truth. The movie culminates in a sexual encounter between the two authors."
  },
  {
    "title": "If These Walls Could Talk 2",
    "release": "2000-03-05",
    "language": "en",
    "genre": [
      "Romance",
      "Drama"
    ],
    "poster_path": "/1bwmJfLJVoxmj96qKVuE9oSmEUS.jpg",
    "overview": "The stories of three lesbian couples -- who live in the same house at different periods of time -- who are at a crossroads in their lives. In 1961, Edith loses her lover, Abby, to a stroke. Linda and Amy struggle with feminist issues in 1972. And, in 2000, Kal and Fran try to have a baby with the help of sperm donor."
  }
];

// Process movies to add year from release date
export const processedMovies = movies.map(movie => {
  return {
    ...movie,
    year: movie.release ? parseInt(movie.release.split('-')[0]) : 0
  };
});

// Extract unique genres from all movies
export const uniqueGenres = Array.from(
  new Set(movies.flatMap(movie => movie.genre))
).sort();

// Get movies by decade
export const getMoviesByDecade = (decade: string) => {
  const startYear = parseInt(decade.replace("'s", ''));
  return processedMovies.filter(
    movie => movie.year >= startYear && movie.year < startYear + 10
  );
};

// Get a random movie
export const getRandomMovie = () => {
  return processedMovies[Math.floor(Math.random() * processedMovies.length)];
};

// Helper function to get Israeli movies (placeholder logic)
export const isIsraeliContent = (movie: Movie) => {
  // This is a placeholder. In a real app, you would have proper data
  return movie.language === 'he' || movie.title.includes('Israeli');
};
