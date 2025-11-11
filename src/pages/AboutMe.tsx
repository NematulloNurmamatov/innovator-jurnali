// BizHaqimizda.tsx
import { CheckCircle2 } from "lucide-react";

const AboutMe = () => {
    return (
        <div className="bg-[#f7f7fb] ">
            <div className="container mx-auto py-16 px-6">
                <div className=" mb-10">
                    <h2 className="text-3xl pb-4 font-bold text-gray-900 dark:text-white">
                        Biz Haqimizda
                    </h2>
                </div>
                <div className="container mt-4 flex items-center justify-between bg-[#eeebff] rounded p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                    {/* Chap tarafdagi rasm */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                            alt="Talaba o‘qimoqda"
                            className="rounded w-full object-cover"
                        />
                    </div>

                    {/* O‘ng tarafdagi matn */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            BIZNING MISSIYAMIZ
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Maqsadimiz — yangi g‘oyalar va innovatsiyalarni qo‘llab-quvvatlaydigan ijodiy muhit yaratish
                            orqali talabalarni tadqiqot, muammolarga yechim topish va texnologik yutuqlarga undagan holda
                            O‘zbekistonni raqamli texnologiyalar markaziga aylantirish.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Raqamli va sun'iy intellekt savodxonligini oshirish",
                                "Amaliy ko‘nikmalarni rivojlantirish",
                                "Barqaror o‘quv va SI ekotizimini shakllantirish",
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                                    <CheckCircle2 className="text-violet-600 w-6 h-6" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
