import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const MissionSection: React.FC = () => {
  const missionPoints = [
    "Yuqori sifatli ilmiy maqolalarni nashr etish",
    "Yosh tadqiqotchilarni qo'llab-quvvatlash",
    "Xalqaro ilmiy hamkorlikni rivojlantirish",
    "Innovatsion g'oyalarni rag'batlantirish"
  ];

  return (
    <div className="container mx-auto !py-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Ilmiy jamoaviy ish"
            className="rounded-[2px] shadow-lg w-full"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bizning Missiyamiz</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Maqsadimiz - O'zbekiston ilmiy hamjamiyatiga yuqori sifatli tadqiqotlarni
            nashr etish va tarqatish platformasini taqdim etish. Biz yangi g'oyalar,
            innovatsiyalar va ilmiy kashfiyotlarni qo'llab-quvvatlaymiz.
          </p>

          <div className="space-y-4">
            {missionPoints.map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                {text}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
