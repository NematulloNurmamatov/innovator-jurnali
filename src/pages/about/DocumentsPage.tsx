import React from 'react';
import { RightSidebar } from '../../components/right-sidebar';

const DocumentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container">
        <div className="bg-white mb-4 dark:bg-gray-800 rounded shadow-sm p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Me'yoriy hujjatlar
          </h1>

          <ol className="list-decimal pl-6 space-y-3 text-blue-600 dark:text-blue-400">
            <li>
              <a
                href="https://lex.uz/docs/4655435"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                O‘zbekiston Respublikasi Vazirlar Mahkamasining qarori. Ommaviy axborot va kommunikatsiyalar
                sohasida davlat xizmatlari ko‘rsatishning ayrim ma’muriy reglamentlarini tasdiqlash to‘g‘risida. 2019 yil 19 dekabr, 1017-son.
              </a>
            </li>
            <li>
              <a
                href="https://lex.uz/docs/1023494"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                O‘zbekiston Respublikasining Qonuni Mualliflik huquqi va turdosh huquqlar to‘g‘risida. 20.07.2006 y. N O‘RQ-42.
              </a>
            </li>
            <li>
              <a
                href="https://lex.uz/docs/1106875"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                O‘zbekiston Respublikasining Qonuni. «Ommaviy axborot vositalari to‘g‘risida»gi O‘zbekiston Respublikasi
                Qonuniga o‘zgartish va qo‘shimchalar kiritish haqida. O‘RQ-78, 15.01.2007 yil.
              </a>
            </li>
            <li>
              <a
                href="https://lex.uz/docs/1659617?ONDATE=23.02.2019"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                Qog‘ozni tejash va undan oqilona foydalanish O‘zbekiston Respublikasi Vazirlar Mahkamasining qarori.
                22.07.2010 y. N 155. Respublikada qog‘ozni tejash va undan oqilona foydalanishga doir qo‘shimcha chora-tadbirlar to‘g‘risida.
              </a>
            </li>
            <li>
              <a
                href="https://lex.uz//uz/docs/3431440"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                O‘zbekiston Respublikasi Innovasion rivojlanish vazirligi faoliyatini tashkil etish to‘g‘risida.
              </a>
            </li>
            <li>
              <a
                href="https://lex.uz//uz/docs/5073447"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                Ilm-fanni 2030 yilgacha rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida.
              </a>
            </li>
            <li>
              <a
                href="https://lex.uz//docs/5607138"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                Ilmiy va innovasion faoliyatni boshqarish tizimini tashkil etish chora-tadbirlari to‘g‘risida.
              </a>
            </li>
            <li>
              <a
                href="https://lex.uz//ru/docs/4759202"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                Ilmiy-tadqiqot va innovasion faoliyatni rivojlantirishning normativ-huquqiy bazasini yanada
                takomillashtirish chora-tadbirlari to‘g‘risida.
              </a>
            </li>
            <li>
              <a
                href="https://lex.uz//uz/docs/7054560"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700 transition-colors"
              >
                O‘zbekiston Respublikasi Oliy ta’lim, fan va innovasiyalar vazirligi faoliyatini tartibga solish
                sohasidagi ayrim normativ-huquqiy hujjatlarni tasdiqlash to‘g‘risida.
              </a>
            </li>
          </ol>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
};

export default DocumentsPage;
