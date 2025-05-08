
export interface ContentItem {
  id: string;
  title: {
    en: string;
    he: string;
  };
  type: 'movie' | 'tv' | 'book' | 'music' | 'theatre' | 'design' | 'event';
  image: string;
  year: number;
  genres: string[];
  isIsraeli: boolean;
  isNew: boolean;
  isFeatured: boolean;
  rating: number;
}

export const content: ContentItem[] = [
  {
    id: '1',
    title: {
      en: 'Portrait of a Lady on Fire',
      he: 'דיוקן של גברת בוערת',
    },
    type: 'movie',
    image: '/placeholder.svg',
    year: 2019,
    genres: ['drama', 'romance'],
    isIsraeli: false,
    isNew: false,
    isFeatured: true,
    rating: 4.9,
  },
  {
    id: '2',
    title: {
      en: 'Disobedience',
      he: 'מרי',
    },
    type: 'movie',
    image: '/placeholder.svg',
    year: 2017,
    genres: ['drama', 'romance'],
    isIsraeli: false,
    isNew: false,
    isFeatured: true,
    rating: 4.5,
  },
  {
    id: '3',
    title: {
      en: 'The Handmaiden',
      he: 'משרתת',
    },
    type: 'movie',
    image: '/placeholder.svg',
    year: 2016,
    genres: ['drama', 'romance', 'crime'],
    isIsraeli: false,
    isNew: false,
    isFeatured: false,
    rating: 4.8,
  },
  {
    id: '4',
    title: {
      en: 'Carol',
      he: 'קרול',
    },
    type: 'movie',
    image: '/placeholder.svg',
    year: 2015,
    genres: ['drama', 'romance'],
    isIsraeli: false,
    isNew: false,
    isFeatured: true,
    rating: 4.7,
  },
  {
    id: '5',
    title: {
      en: 'Gentleman Jack',
      he: 'ג\'נטלמן ג\'ק',
    },
    type: 'tv',
    image: '/placeholder.svg',
    year: 2019,
    genres: ['drama', 'biography'],
    isIsraeli: false,
    isNew: true,
    isFeatured: false,
    rating: 4.6,
  },
  {
    id: '6',
    title: {
      en: 'Fingersmith',
      he: 'אצבעונית',
    },
    type: 'book',
    image: '/placeholder.svg',
    year: 2002,
    genres: ['fiction', 'historical'],
    isIsraeli: false,
    isNew: false,
    isFeatured: false,
    rating: 4.4,
  },
  {
    id: '7',
    title: {
      en: 'TLVFest 2025',
      he: 'פסטיבל הקולנוע הגאה ת״א 2025',
    },
    type: 'event',
    image: '/lovable-uploads/5fd5e0ed-8c09-46da-97b6-7f93af93757d.png',
    year: 2025,
    genres: ['festival', 'film'],
    isIsraeli: true,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
  },
  {
    id: '8',
    title: {
      en: 'Happiest Season',
      he: 'העונה המאושרת',
    },
    type: 'movie',
    image: '/placeholder.svg',
    year: 2020,
    genres: ['comedy', 'romance'],
    isIsraeli: false,
    isNew: false,
    isFeatured: false,
    rating: 4.1,
  }
];
