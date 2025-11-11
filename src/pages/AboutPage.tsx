import React from 'react';
import { RightSidebar } from "../components/right-sidebar";

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container">
                <div className="bg-white mb-4 dark:bg-gray-800 rounded shadow-sm p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Jurnalning maqsad va vazifalari
                    </h1>

                    <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            <strong>Jurnalning asosiy maqsadi</strong> – respublikamiz hamda xorijda fan va
                            texnologiyalar sohasida olib borilayotgan islohot va innovatsiyalarning
                            mazmun-mohiyatini targ‘ib qilish, jahonda texnika fanlari yo‘nalishlariga doir amalga
                            oshirilayotgan ilmiy-tadqiqot ishlari hamda davlat ilmiy dasturlari doirasida barcha
                            fan sohalari bo‘yicha bajarilayotgan loyihalar natijalarini yoritish.
                        </p>

                        <p>
                            <strong>Jurnalning asosiy vazifalari:</strong>
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Jurnal tahririyatiga kelib tushgan ilmiy-nazariy, ilmiy-amaliy, ilmiy-metodik
                                maqolalar va adabiyotlar sharhlarini nashrga tayyorlash;
                            </li>
                            <li>
                                Jurnalning sifatli, o‘z vaqtida va xalqaro darajada nashr etilishini ta’minlash;
                            </li>
                            <li>
                                Jurnalda nashr etilgan ilmiy maqolalarni ilmiy-texnik elektron ma’lumotlar
                                bazalarida indeksatsiyalash;
                            </li>
                            <li>
                                Xalqaro ilmiy hamjamiyatning professional doiralarida, shuningdek, yosh olimlar
                                o‘rtasida Jurnalga bo‘lgan doimiy qiziqishni shakllantirish, nashrga bo‘lgan talabni
                                oshirish.
                            </li>
                        </ul>
                    </div>
                </div>

                <RightSidebar />
            </div>
        </div>
    );
};

export default AboutPage;
