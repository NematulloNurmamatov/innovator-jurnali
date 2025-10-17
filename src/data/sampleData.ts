export interface Journal {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  publishedDate: string;
  author: string;
  category: string;
  content: string;
  tags: string[];
  views: number;
  likes: number;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  coverImage: string;
  category: string;
  tags: string[];
  views: number;
  likes: number;
  readTime: number;
}

export const sampleJournals: Journal[] = [
  {
    id: 1,
    title: "Innovatsiya va Texnologiya",
    description: "Zamonaviy texnologiyalar va innovatsiya sohasidagi eng so'nggi tadqiqotlar va kashfiyotlar haqida maqolalar to'plami.",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
    publishedDate: "2024-01-15",
    author: "Dr. Ahmad Karimov",
    category: "Texnologiya",
    content: `
# Innovatsiya va Texnologiya

Bu jurnal zamonaviy texnologiyalar va innovatsiya sohasidagi eng so'nggi tadqiqotlar, kashfiyotlar va rivojlanishlar haqida maqolalar to'plamini o'z ichiga oladi.

## Asosiy mavzular:
- Sun'iy intellekt va mashina o'rganishi
- Kiberxavfsizlik va ma'lumotlar himoyasi
- Bulut texnologiyalari
- IoT va smart shaharlar
- Blockchain va kriptovalyutalar

Bu jurnal o'quvchilarga zamonaviy texnologiyalar dunyosiga chuqur kirib borish imkonini beradi.
    `,
    tags: ["texnologiya", "innovatsiya", "AI", "texnologiya"],
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: "Biznes va Iqtisodiyot",
    description: "Zamonaviy biznes strategiyalari, iqtisodiy tahlil va global iqtisodiyot tendensiyalari haqida maqolalar.",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    publishedDate: "2024-01-10",
    author: "Prof. Malika Toshmatova",
    category: "Biznes",
    content: `
# Biznes va Iqtisodiyot

Bu jurnal zamonaviy biznes strategiyalari, iqtisodiy tahlil va global iqtisodiyot tendensiyalari haqida chuqur ma'lumot beradi.

## Asosiy mavzular:
- Startap ekosistemi va investitsiyalar
- Digital marketing va e-commerce
- Global iqtisodiyot tendensiyalari
- Sog'liqni saqlash iqtisodiyoti
- Barqaror rivojlanish

Bu jurnal tadbirkorlar va iqtisodchilar uchun qimmatli ma'lumotlar manbai hisoblanadi.
    `,
    tags: ["biznes", "iqtisodiyot", "startap", "marketing"],
    views: 980,
    likes: 67
  },
  {
    id: 3,
    title: "Fan va Ta'lim",
    description: "Ilmiy tadqiqotlar, ta'lim metodlari va akademik rivojlanish haqida maqolalar to'plami.",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    publishedDate: "2024-01-05",
    author: "Dr. Olim Karimov",
    category: "Ta'lim",
    content: `
# Fan va Ta'lim

Bu jurnal ilmiy tadqiqotlar, ta'lim metodlari va akademik rivojlanish haqida keng qamrovli maqolalar to'plamini o'z ichiga oladi.

## Asosiy mavzular:
- Zamonaviy ta'lim texnologiyalari
- Ilmiy tadqiqot metodlari
- Akademik yozuvchilik
- Ta'lim siyosati va islohotlar
- Xalqaro ta'lim tizimlari

Bu jurnal o'qituvchilar, talabalar va tadqiqotchilar uchun foydali manba hisoblanadi.
    `,
    tags: ["ta'lim", "fan", "tadqiqot", "akademiya"],
    views: 1100,
    likes: 78
  }
];

export const sampleArticles: Article[] = [
  {
    id: 1,
    title: "Sun'iy Intellekt: Kelajakning Kuchi",
    excerpt: "Sun'iy intellekt texnologiyalari qanday qilib bizning hayotimizni o'zgartirmoqda va kelajakda nimalar kutmoqda?",
    content: `
# Sun'iy Intellekt: Kelajakning Kuchi

Sun'iy intellekt (AI) texnologiyalari bugungi kunda bizning hayotimizning deyarli barcha sohalariga kirib bormoqda. Ushbu maqolada AI texnologiyalarining rivojlanishi, hozirgi holati va kelajakdagi imkoniyatlari haqida so'z yuritamiz.

## AI Texnologiyalarining Rivojlanishi

Sun'iy intellekt texnologiyalari 1950-yillardan beri rivojlanib kelmoqda. Dastlabki AI tizimlari oddiy algoritmlar asosida ishlagan bo'lsa, bugungi kunda chuqur o'rganish (deep learning) va neyron tarmoqlar yordamida murakkab vazifalarni bajarish imkoniyati mavjud.

## Hozirgi Holat

Bugungi kunda AI texnologiyalari quyidagi sohalarda keng qo'llanilmoqda:
- Tibbiyot va sog'liqni saqlash
- Transport va logistika
- Moliya va bank xizmatlari
- Ta'lim va o'qitish
- Savdo va marketing

## Kelajakdagi Imkoniyatlar

AI texnologiyalarining kelajakdagi rivojlanishi insoniyat uchun yangi imkoniyatlar va shu bilan birga yangi muammolarni ham keltirib chiqarishi mumkin.
    `,
    author: "Dr. Ahmad Karimov",
    publishedDate: "2024-01-20",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    category: "Texnologiya",
    tags: ["AI", "texnologiya", "kelajak", "innovatsiya"],
    views: 2150,
    likes: 156,
    readTime: 8
  },
  {
    id: 2,
    title: "Startap Ekosistemi: Muvaffaqiyat Kalitlari",
    excerpt: "Startap ekosistemida muvaffaqiyatga erishish uchun kerak bo'lgan asosiy omillar va strategiyalar.",
    content: `
# Startap Ekosistemi: Muvaffaqiyat Kalitlari

Startap ekosistemi bugungi kunda iqtisodiy rivojlanishning asosiy omillaridan biriga aylangan. Ushbu maqolada startap ekosistemida muvaffaqiyatga erishish uchun kerak bo'lgan asosiy omillar haqida so'z yuritamiz.

## Startap Ekosistemining Tarkibiy Qismlari

Muvaffaqiyatli startap ekosistemi quyidagi elementlardan iborat:
- Tadbirkorlar va startapchilar
- Investitsiya fondlari va biznes-maliklar
- Hukumat va qonun chiqaruvchi organlar
- Ta'lim va tadqiqot institutlari
- Texnologik kompaniyalar

## Muvaffaqiyat Kalitlari

Startap muvaffaqiyatiga erishish uchun quyidagi omillar muhim:
1. **Idea va Innovatsiya** - Yangi va qiziqarli g'oya
2. **Jamoaviy Ish** - Tajribali va motivatsiyalangan jamoa
3. **Moliyalashtirish** - Yetarli moliyaviy resurslar
4. **Marketing** - Mahsulotni to'g'ri pozitsiyalash
5. **Barqaror Rivojlanish** - Uzoq muddatli strategiya

## Global Tajriba

Dunyoning turli mamlakatlarida startap ekosistemlari turli darajada rivojlangan. AQSh, Xitoy, Isroil kabi mamlakatlarda startap ekosistemlari yuqori darajada rivojlangan.
    `,
    author: "Malika Toshmatova",
    publishedDate: "2024-01-18",
    coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    category: "Biznes",
    tags: ["startap", "biznes", "muvaffaqiyat", "ekosistema"],
    views: 1890,
    likes: 134,
    readTime: 12
  }
];

export const getJournalById = (id: number): Journal | undefined => {
  return sampleJournals.find(journal => journal.id === id);
};

export const getArticleById = (id: number): Article | undefined => {
  return sampleArticles.find(article => article.id === id);
};
