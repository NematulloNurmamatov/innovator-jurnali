import React from 'react';
import { Award, Flame, TrendingUp } from 'lucide-react';

const DailyActiveUsers: React.FC = () => {
  const users = [
    {
      name: 'Prof. Gulchehra Raximova',
      role: 'Biotexnologiyalar bo\'limi rahbari',
      institution: 'Toshkent Davlat Texnika Universiteti',
      contributions: '3 ta maqola, 2 ta sharh',
      highlight: 'Qishloq xo\'jaligida innovatsion biotexnologiyalar'
    },
    {
      name: 'Dr. Javlonbek Usmonov',
      role: 'Sun\'iy intellekt mutaxassisi',
      institution: 'Inha Universiteti',
      contributions: '2 ta maqola, 4 ta loyiha yangilanishi',
      highlight: 'Tibbiyotdagi AI qo\'llanmalari bo\'yicha tadqiqot'
    },
    {
      name: 'Prof. Malika Sodiqova',
      role: 'Energetika bo\'yicha yetakchi tadqiqotchi',
      institution: 'O\'zbekiston Milliy Universiteti',
      contributions: '1 ta maqola, 3 ta ma\'ruza',
      highlight: 'Qayta tiklanuvchi energiya manbalarining samaradorligi'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Kunning faol foydalanuvchilari
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Bugungi kunda eng katta hissa qo\'shgan olim va tadqiqotchilar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user) => (
            <article
              key={user.name}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-300 text-xl font-semibold">
                  {user.name
                    .split(' ')
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">
                    {user.role}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>{user.institution}</p>
                <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <Award className="h-4 w-4 text-blue-500" />
                  {user.contributions}
                </p>
                <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <Flame className="h-4 w-4 text-orange-500" />
                  {user.highlight}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-300 font-medium">
                <TrendingUp className="h-4 w-4" />
                24 soatlik faollik reytingida yuqori o\'rin
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyActiveUsers;
