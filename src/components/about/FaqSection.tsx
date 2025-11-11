import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "“Innovator” qanday jurnal?",
    answer: "“Innovator” jurnali o’quvchi-yoshlarga mo’ljallangan ilmiy-texnikaviy, tahliliy va ommabop nashr."
  },
  {
    question: "“Innovator” jurnali qachondan chiqa boshlagan?",
    answer: "“Innovator” jurnali 2022-yildan buyon chop etiladi."
  },
  {
    question: "“Innovator”ga qanday obuna bo’lish mumkin?",
    answer: "“Innovator” jurnaliga 2 xil usulda obuna bo’lish mumkin.1-usul telegram orqali bog’lanib, 2-usul saytdagi “Obuna bo’lish” bo’limi orqali."
  },
  {
    question: "Jurnalda maqola chop etish yoki o’z faoliyatini yoritish uchun kimga murojaat qilinadi?",
    answer: "Jurnalda maqola chop etish yoki o’z faoliyatini yoritish uchun “Bizga xabar yo’llang” bo’limi orqali bog’lanish mumkin."
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container  px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Ko'p So'raladigan Savollar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Jurnalimiz haqida eng ko'p beriladigan savollarga javoblar
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Javob topolmadingizmi?
          </p>
          <a
            href="mailto:info@innovator.uz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors font-medium"
          >
            Bizga murojaat qiling
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

