# Innovator-App API Documentation

Bu papka Innovator-App API uchun to'liq TypeScript implementatsiyasini o'z ichiga oladi. OpenAPI 3.0.3 spesifikatsiyasidan avtomatik ravishda yaratilgan.

## Fayl Strukturasi

```
src/api/
├── index.ts              # Asosiy export fayli
├── types.ts              # TypeScript types va interfaces
├── config.ts             # API konfiguratsiyasi
├── utils.ts              # Utility funksiyalar
├── hooks.ts              # React hooks
├── auth.ts               # Authentication API
├── articles.ts           # Articles API
├── authors.ts            # Authors API
├── news.ts               # News API
├── studyFields.ts        # Study Fields API
├── coverPages.ts         # Cover Pages API
├── users.ts              # Users API
└── README.md             # Bu fayl
```

## Foydalanish

### Asosiy Import

```typescript
import { 
  authAPI, 
  articlesAPI, 
  authorsAPI, 
  newsAPI,
  studyFieldsAPI,
  coverPagesAPI,
  usersAPI 
} from './api';
```

### Authentication

```typescript
// Anonymous token olish
await authAPI.getAnonymousToken();

// Token refresh
const newTokens = await authAPI.refreshToken({
  refresh: 'your-refresh-token'
});

// Access tekshirish
const access = await authAPI.checkAccess({
  access_token: 'your-access-token'
});
```

### Articles

```typescript
// Barcha maqolalarni olish
const articles = await articlesAPI.getArticles();

// Ma'lum maqolani olish
const article = await articlesAPI.getArticle('article-id');

// Public maqolalar
const publicArticles = await articlesAPI.getPublicArticles();

// Qidiruv
const searchResults = await articlesAPI.searchArticles('search query');

// Til bo'yicha filtrlash
const englishArticles = await articlesAPI.getArticlesByLanguage('en');
```

### Authors

```typescript
// Barcha mualliflarni olish
const authors = await authorsAPI.getAuthors();

// Ma'lum muallifni olish
const author = await authorsAPI.getAuthor('author-id');

// Qidiruv
const searchResults = await authorsAPI.searchAuthors('author name');
```

### News

```typescript
// Barcha yangiliklarni olish
const news = await newsAPI.getNews();

// Ma'lum yangilikni olish
const newsItem = await newsAPI.getNewsItem('news-id');

// Bugungi yangiliklar
const todayNews = await newsAPI.getTodayNews();

// Bu hafta yangiliklari
const thisWeekNews = await newsAPI.getThisWeekNews();
```

### Study Fields

```typescript
// Barcha soha ma'lumotlarini olish
const studyFields = await studyFieldsAPI.getStudyFields();

// Ma'lum sohani olish
const studyField = await studyFieldsAPI.getStudyField('field-id');
```

### Cover Pages

```typescript
// Cover page ma'lumotlarini olish
const coverPage = await coverPagesAPI.getCoverPage();
```

### Users

```typescript
// Foydalanuvchi profilini olish
const profile = await usersAPI.getUserProfile('access-token');
```

## React Hooks

### useApiCall

```typescript
import { useApiCall } from './api/hooks';

function MyComponent() {
  const { data, loading, error, refetch } = useApiCall(
    () => articlesAPI.getArticles()
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {data?.results.map(article => (
        <div key={article.id}>{article.name}</div>
      ))}
    </div>
  );
}
```

### usePaginatedApiCall

```typescript
import { usePaginatedApiCall } from './api/hooks';

function PaginatedArticles() {
  const {
    data,
    loading,
    error,
    page,
    hasNext,
    hasPrevious,
    nextPage,
    previousPage
  } = usePaginatedApiCall(
    (page, perPage) => articlesAPI.getArticles({ page, per_page: perPage })
  );

  return (
    <div>
      {data?.results.map(article => (
        <div key={article.id}>{article.name}</div>
      ))}
      
      <button onClick={previousPage} disabled={!hasPrevious}>
        Previous
      </button>
      <button onClick={nextPage} disabled={!hasNext}>
        Next
      </button>
    </div>
  );
}
```

### useSearch

```typescript
import { useSearch } from './api/hooks';

function SearchComponent() {
  const { query, data, loading, handleSearch } = useSearch(
    (searchQuery) => articlesAPI.searchArticles(searchQuery)
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search articles..."
      />
      
      {loading && <div>Searching...</div>}
      {data?.results.map(article => (
        <div key={article.id}>{article.name}</div>
      ))}
    </div>
  );
}
```

## Utility Functions

### Error Handling

```typescript
import { APIError, handleApiResponse } from './api/utils';

try {
  const data = await articlesAPI.getArticles();
} catch (error) {
  if (error instanceof APIError) {
    console.log('Status:', error.status);
    console.log('Message:', error.message);
  }
}
```

### Retry Logic

```typescript
import { retryApiCall } from './api/utils';

const data = await retryApiCall(
  () => articlesAPI.getArticles(),
  3, // max retries
  1000 // delay in ms
);
```

## Konfiguratsiya

API konfiguratsiyasini o'zgartirish uchun `config.ts` faylini tahrirlang:

```typescript
export const API_CONFIG = {
  BASE_URL: 'http://your-api-url.com',
  // ... boshqa sozlamalar
};
```

## Xavfsizlik

Barcha API chaqiruvlari JWT token bilan himoyalangan. Token olish uchun authentication API dan foydalaning.

## Qo'shimcha Ma'lumot

- Barcha API chaqiruvlari TypeScript bilan to'liq typed
- Error handling va retry logic qo'shilgan
- React hooks bilan oson integratsiya
- Pagination va search funksiyalari
- Debounce va throttle optimizatsiyalari
