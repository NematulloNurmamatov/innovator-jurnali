import React from 'react';
import { RightSidebar } from '../../components/right-sidebar';

const RequirementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container">
        <div className="bg-white mb-4 dark:bg-gray-800 rounded shadow-sm p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Maqolaga qo'yiladigan talablar
          </h1>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              <strong>"Innovator" jurnalida</strong> maqola nashr etish uchun quyidagi asosiy talablarga 
              rioya qilish zarur. Talablar xalqaro standartlar va ilmiy etika qoidalariga asoslangan.
            </p>

            <p>
              <strong>Asosiy talablar:</strong>
            </p>

            <ul className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Originallik:</strong> Maqola ilgari boshqa joyda nashr etilmagan, original tadqiqot bo'lishi kerak
              </li>
              <li>
                <strong>Ilmiy Fikrlash:</strong> Maqola ilmiy metodologiya asosida yozilgan va mantiqiy tuzilishga ega bo'lishi kerak
              </li>
              <li>
                <strong>Til va Uslub:</strong> Maqola o'zbek, rus yoki ingliz tilida, rasmiy ilmiy uslubda yozilishi lozim
              </li>
              <li>
                <strong>Formatlash:</strong> Maqola jurnal talablariga mos formatda taqdim etilishi kerak
              </li>
              <li>
                <strong>Adabiyotlar:</strong> Ishlatilgan barcha manbalar to'g'ri iqtibos qilingan va ro'yxatga olingan bo'lishi shart
              </li>
              <li>
                <strong>Plagiatsizlik:</strong> Maqola plagiat tekshiruvidan o'tishi va 85% dan yuqori originallikga ega bo'lishi kerak
              </li>
            </ul>

            <p>
              <strong>Maqola tuzilishi:</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Annotatsiya (o'zbek, rus, ingliz tillarida)</li>
              <li>Kalit so'zlar</li>
              <li>Kirish</li>
              <li>Asosiy qism</li>
              <li>Natijalar</li>
              <li>Xulosa</li>
              <li>Foydalanilgan adabiyotlar ro'yxati</li>
            </ul>

            <p>
              <strong>Texnik talablar:</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Format:</strong> Microsoft Word (.doc, .docx) yoki PDF</li>
              <li><strong>Hajm:</strong> 8-12 sahifa (A4 format)</li>
              <li><strong>Shrift:</strong> Times New Roman, 14pt</li>
              <li><strong>Interval:</strong> 1.5 satr orasi</li>
              <li><strong>Chetlar:</strong> Barcha tomondan 2 sm</li>
            </ul>

            <div className="mt-6 p-5 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">
                Muhim Eslatma
              </p>
              <p>
                Barcha maqolalar ekspert kengashi tomonidan ko'rib chiqiladi. Talablarga 
                mos kelmagan maqolalar qayta ko'rib chiqish uchun qaytarilishi yoki 
                rad etilishi mumkin. Batafsil yo'riqnoma va shablon uchun biz bilan bog'laning.
              </p>
            </div>
          </div>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
};

export default RequirementsPage;
