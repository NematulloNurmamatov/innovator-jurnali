import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Target, Globe } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  gradientFrom: string;
  gradientTo: string;
  bgLight: string;
  bgDark: string;
}

const AboutStatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      icon: Users,
      value: "1000+",
      label: "Foydalanuvchilar",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
      bgLight: "bg-blue-50",
      bgDark: "dark:bg-blue-900/20"
    },
    {
      icon: Award,
      value: "500+",
      label: "Maqolalar",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
      bgLight: "bg-green-50",
      bgDark: "dark:bg-green-900/20"
    },
    {
      icon: Target,
      value: "50+",
      label: "Mualliflar",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      bgLight: "bg-purple-50",
      bgDark: "dark:bg-purple-900/20"
    },
    {
      icon: Globe,
      value: "10+",
      label: "Tashkilotlar",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      bgLight: "bg-orange-50",
      bgDark: "dark:bg-orange-900/20"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 pt-10 pb-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Bizning Yutuqlarimiz
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Raqamlarda ko'rinadigan muvaffaqiyatlarimiz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className={`relative ${stat.bgLight} ${stat.bgDark} backdrop-blur-sm rounded p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden group-hover:-translate-y-2`}>
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon container with gradient background */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>

                {/* Value */}
                <div className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  {stat.label}
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>

              {/* Animated border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutStatsSection;
