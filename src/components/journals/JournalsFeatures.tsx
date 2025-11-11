import React from 'react';
import { TrendingUp, Users, FileText } from 'lucide-react';

const JournalsFeatures: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Yuqori Impakt Faktor',
      description: 'Xalqaro standartlar asosidagi yuqori impakt faktorga ega jurnallar',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Ekspertlar Jamoasi',
      description: 'Jahon miqyosidagi mutaxassislardan tashkil topgan muharrirlar kengashi',
      color: 'green',
    },
    {
      icon: FileText,
      title: 'Tez Nashr Qilish',
      description: 'Maqolalarni tez ko\'rib chiqish va nashr qilish jarayoni',
      color: 'purple',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded bg-gray-100 dark:bg-gray-700">
                <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JournalsFeatures;

