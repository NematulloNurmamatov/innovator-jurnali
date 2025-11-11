import React from 'react';
import { RightSidebar } from '../../components/right-sidebar';

const MissionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container">
        <div className="bg-white mb-4 dark:bg-gray-800 rounded shadow-sm p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Umumiy ma'lumotlar
          </h1>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              <strong>Jurnalning rasmiy nomi:</strong> Ilm-fan va innovatsion rivojlanish” – “Наука и инновационное развитие” – “Science and innovative development” xalqaro ilmiy-texnikaviy jurnal.
            </p>

            <p>Jurnal O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi tomonidan 2018-yil 28 mayda ro‘yxatdan o‘tgan</p>
            <p><strong>Guvohnoma raqami:</strong> № 512819</p>
            <p><strong>ISSN (print) </strong> 2181-9637; <strong> ISSN (online) </strong> 2181-4317</p>
            <p><strong>Мuassis:</strong> O‘zbekiston Respublikasi Innovatsion rivojlanish agentligi huzuridagi Ilmiy-texnik axborot markazi</p>
            <p>Jurnal O‘zbekiston Respublikasi Oliy attestatsiya komissiyasining <strong>texnika, qishloq xo‘jaligi va iqtisodiyot fanlari</strong> bo‘yicha chop etishga tavsiya etilgan ilmiy nashrlar ro‘yxatiga kiritilgan.</p>
            <p>Jurnal sonlariga <strong>texnika fanlari </strong> (ixtisoslik shifri – 05.00.00) yoʻnalishlari, maxsus sonlariga esa texnika, qishloq xo‘jaligi va iqtisodiyot fanlari bo‘yicha yozilgan maqolalar qabul qilinadi</p>
            <p><strong>Nashrning turi</strong> – xalqaro jurnal.</p>
            <p><strong>Nashrning chop etiladigan tillari:</strong> oʻzbek, qoraqalpoq, rus va ingliz.</p>
            <p><strong>Jurnal davriyligi:</strong> 2 oyda bir marta, yiliga 6 ta son.</p>
            <p className='mb-4'>Zaruratga koʻra, Jurnalning maxsus sonlari ham nashr etilishi mumkin.</p>
            <p><strong>Jurnal hajmi:</strong> A4 formatda, 96–152 bet.</p>
            <p><strong>Jurnal tahririyati joylashgan manzil (pochta manzili):</strong> Toshkent sh., Universitet koʻchasi, 7-uy. Indeks raqami: 100174.</p>
            <p><strong>Web-sayt:</strong> https://ilm-fan-journal.csti.uz</p>
            <p><strong>Email:</strong> <span className='!text-blue-600 cursor-pointer hover:underline'> ilm-fan@csti.uz </span></p>
          </div>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
};

export default MissionPage;

