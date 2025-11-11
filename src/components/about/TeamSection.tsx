import React from 'react';
import { Users, Code, FileEdit, Handshake } from 'lucide-react';

interface TeamMember {
  name: string;
  count: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { 
      name: "Ilmiy muharrirlar", 
      count: "15+",
      icon: Users,
      description: "PhD va professor darajasiga ega mutaxassislar"
    },
    { 
      name: "Texnik mutaxassislar", 
      count: "8+",
      icon: Code,
      description: "Platforma rivojlanishi bo'yicha dasturchilar"
    },
    { 
      name: "Tahririyat xodimlari", 
      count: "12+",
      icon: FileEdit,
      description: "Maqolalar tahriri va nazorat xizmati"
    },
    { 
      name: "Hamkorlar", 
      count: "25+",
      icon: Handshake,
      description: "Ilmiy muassasalar va universitetlar"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bizning Jamoa
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Yuqori malakali mutaxassislar jamoasi ilmiy jurnalning professional rivojlanishini ta'minlaydi
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon badge */}
              <div className="absolute -top-4 left-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <member.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                {/* Count */}
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.count}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
