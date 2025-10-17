import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Globe, Star, Award, Calendar, BookOpen, Users } from 'lucide-react';
import { getJournalById } from '../data/journals';

const JournalDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const journalId = Number(id);
  const journal = getJournalById(journalId);

  if (!journal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Jurnal topilmadi
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Siz qidirgan jurnal mavjud emas yoki o'chirilgan bo'lishi mumkin.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Ortga qaytish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Ortga qaytish
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-6 py-10 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="uppercase tracking-widest text-blue-100 text-sm mb-2">
                  {journal.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {journal.title}
                </h1>
                <p className="text-blue-100 max-w-2xl">
                  {journal.description}
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <Star className="h-6 w-6 text-yellow-300" />
                <div>
                  <p className="text-sm text-blue-100">Reyting</p>
                  <p className="text-2xl font-semibold">{journal.rating.toFixed(1)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Asosiy ma'lumotlar
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {journal.issn && (
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      <span>ISSN: {journal.issn}</span>
                    </li>
                  )}
                  {journal.institution && (
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>{journal.institution}</span>
                    </li>
                  )}
                  {journal.editorialTeam && (
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      <span>{journal.editorialTeam}</span>
                    </li>
                  )}
                  {journal.established && (
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>Tashkil etilgan yil: {journal.established}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Faollik ko'rsatkichlari
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Maqolalar</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {journal.articlesCount}
                    </p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Oxirgi son</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {new Date(journal.lastIssue).toLocaleDateString('uz-UZ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {journal.topics && journal.topics.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Asosiy yo'nalishlar
                </h2>
                <div className="flex flex-wrap gap-2">
                  {journal.topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {journal.highlights && journal.highlights.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  So'nggi yangiliklar va yutuqlar
                </h2>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {journal.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {journal.indexing && journal.indexing.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Indekslash
                </h2>
                <div className="flex flex-wrap gap-2">
                  {journal.indexing.map((item) => (
                    <span
                      key={item}
                      className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-200 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {journal.website && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Rasmiy veb-sayt
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Jurnalning barcha sonlari va maqolalari rasmiy platformada jamlangan.
                  </p>
                </div>
                <a
                  href={journal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Saytga o'tish
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetailPage;