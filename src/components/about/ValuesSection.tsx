import React from 'react';
import { Award, Users, Target } from 'lucide-react';

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconColor: string;
}

const ValuesSection: React.FC = () => {
  const values: ValueItem[] = [
    {
      icon: Award,
      title: "Sifat",
      description: "Barcha nashr etilayotgan materiallar yuqori ilmiy standartlarga javob beradi va peer-review jarayonidan o'tadi",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Users,
      title: "Ochiqlik",
      description: "Ilmiy bilimlarni erkin almashish va ochiq mulokot qilish orqali tadqiqot faoliyatini rivojlantirish",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Target,
      title: "Innovatsiya",
      description: "Yangi g'oyalar va progressiv ilmiy uslublarni qo'llab-quvvatlash hamda tatbiq etish",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            
            Bizning Qadriyatlarimiz
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Ilmiy tadqiqot faoliyatimizni yuritishda asosiy yo'naltiruv bo'luvchi tamoyillar
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors">
                  <value.icon className={`h-7 w-7 ${value.iconColor}`}  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>

              {/* Bottom accent line */}
              {/* <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className={`h-1 w-12 rounded-full ${value.iconColor.replace('text-', 'bg-')}`}></div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
