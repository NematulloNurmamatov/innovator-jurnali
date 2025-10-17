export interface Journal {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  articlesCount: number;
  lastIssue: string;
  image: string;
  issn?: string;
  editorialTeam?: string;
  institution?: string;
  indexing?: string[];
  website?: string;
  established?: number;
  topics?: string[];
  highlights?: string[];
}

export const journals: Journal[] = [
  {
    id: 1,
    title: "O'zbekiston Ilmiy Tadqiqotlar Jurnali",
    description: "Turli sohalardagi ilmiy tadqiqotlar va innovatsion yechimlar",
    category: 'Umumiy',
    rating: 4.8,
    articlesCount: 156,
    lastIssue: '2024-01-15',
    image: '/api/placeholder/300/200',
    issn: '2181-2926',
    editorialTeam: 'Innovator Jurnali tahririyati',
    institution: "O'zbekiston Respublikasi Innovatsion rivojlanish vazirligi",
    indexing: ['Google Scholar', 'Crossref', 'Scienceweb'],
    website: 'https://example-journal.uz',
    established: 2019,
    topics: ['Ilmiy tadqiqotlar', 'Innovatsion texnologiyalar', 'Taʼlim'],
    highlights: [
      "2024-yil yanvar sonida 12 ta yangi tadqiqot maqolasi",
      'Ilmiy grant loyihalari uchun maxsus rukn',
      "Innovatsion ekotizim bo'yicha maxsus maqolalar seriyasi"
    ]
  },
  {
    id: 2,
    title: 'Tibbiyot va Salomatlik',
    description: "Tibbiyot sohasidagi eng so'nggi tadqiqotlar va kashfiyotlar",
    category: 'Tibbiyot',
    rating: 4.9,
    articlesCount: 89,
    lastIssue: '2024-01-10',
    image: '/api/placeholder/300/200',
    issn: '2181-3612',
    editorialTeam: 'Oliy tibbiyot muassasalari hamkorligi',
    institution: 'Toshkent Tibbiyot Akademiyasi',
    indexing: ['Google Scholar', 'PubMed', 'Scienceweb'],
    website: 'https://medjournal.uz',
    established: 2015,
    topics: ['Klinik tadqiqotlar', 'Farmatsevtika', 'Jamoat salomatligi'],
    highlights: [
      'Onkologiya bo‘yicha yangi klinik protokollar',
      'Telemeditsina bo‘yicha maxsus son',
      'Tibbiy startaplar bilan hamkorlik dasturi'
    ]
  },
  {
    id: 3,
    title: 'Texnika va Innovatsiya',
    description: 'Zamonaviy texnologiyalar va muhandislik yechimlari',
    category: 'Texnika',
    rating: 4.7,
    articlesCount: 124,
    lastIssue: '2024-01-08',
    image: '/api/placeholder/300/200',
    issn: '2181-4823',
    editorialTeam: 'Texnika va Mu-engineering institutlari konsorsiumi',
    institution: 'Inha Universiteti, Turin Politexnika Universiteti',
    indexing: ['Google Scholar', 'IEEE Xplore', 'Scienceweb'],
    website: 'https://tech-innovation.uz',
    established: 2012,
    topics: ['Sunʼiy intellekt', 'IoT', 'Energiya tizimlari'],
    highlights: [
      'Smart-city yechimlari bo‘yicha maxsus son',
      'Yosh muhandislar uchun yaratilgan grant dasturi',
      'Energiya samaradorligi bo‘yicha yangi tadqiqotlar'
    ]
  }
];

export const getJournalById = (id: number) => journals.find((journal) => journal.id === id);
