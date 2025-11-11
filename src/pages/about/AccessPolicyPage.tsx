import React from 'react';
import { RightSidebar } from '../../components/right-sidebar';

const AccessPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container">
        <div className="bg-white mb-4 dark:bg-gray-800 rounded shadow-sm p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ochiq kirish siyosati
          </h1>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
            Jurnal ochiq kirish (Open Access) siyosatiga amal qiladi. Barcha maqolalar nashr etilgandan yarim yildan soʻng cheksiz va bepul joylashtiriladi. Jurnalning ilmiy maqolalarini real vaqt rejimida jurnalning rasmiy veb-saytidan olish mumkin.
            </p>
          </div>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
};

export default AccessPolicyPage;
