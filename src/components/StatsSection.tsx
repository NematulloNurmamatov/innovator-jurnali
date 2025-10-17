import React from 'react';
import { BookOpen, Users, Award, Globe } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: BookOpen,
      number: '500+',
      label: 'Ilmiy maqolalar',
      description: 'Turli sohalardagi tadqiqotlar'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Foydalanuvchilar',
      description: 'Olimlar va tadqiqotchilar'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Jurnallar',
      description: 'Xalqaro standartdagi nashrlar'
    },
    {
      icon: Globe,
      number: '15+',
      label: 'Mamlakatlar',
      description: 'Dunyo bo\'ylab hamkorlik'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Bizning raqamlarimiz
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Innovator Jurnali platformasining muvaffaqiyat ko'rsatkichlari
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
