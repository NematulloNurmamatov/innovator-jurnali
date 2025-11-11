import React from 'react';
import { Sparkles, TrendingUp, Award, Zap } from 'lucide-react';

const PromoPage: React.FC = () => {
    const features = [
        {
            icon: Sparkles,
            title: "Innovatsion yondashuv",
            description: "Eng zamonaviy ilmiy tadqiqot usullari"
        },
        {
            icon: TrendingUp,
            title: "Tezkor nashr",
            description: "Maqolalaringiz tez ko'rib chiqiladi"
        },
        {
            icon: Award,
            title: "Yuqori sifat",
            description: "Xalqaro standartlarga muvofiq"
        },
        {
            icon: Zap,
            title: "Oson jarayon",
            description: "Oddiy va tushunarli platforma"
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Features Section */}
            <section className="pt-10 pb-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Nima uchun bizni tanlash kerak?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Ilmiy jurnalimiz sizga qulaylik va yuqori sifatni taqdim etadi
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded opacity-0 group-hover:opacity-10 transition-opacity"></div>

                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PromoPage;
