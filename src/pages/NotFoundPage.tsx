import React from 'react';
// import { AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Animation */}
                <div className="relative mb-8">
                    <div className="text-9xl font-bold text-blue-600 dark:text-blue-400 opacity-20">
                        404
                    </div>
                    {/* <div className='flex mx-auto relative'>
                        <div className="absolute -inset-0 flex items-center justify-center">
                            <AlertCircle className="h-24 w-24 text-blue-600 dark:text-blue-400 animate-pulse" />
                        </div>
                    </div> */}
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Sahifa topilmadi
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                        Kechirasiz, siz qidirgan sahifa mavjud emas
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                        Sahifa o'chirilgan, ko'chirilgan yoki noto'g'ri manzil kiritilgan bo'lishi mumkin
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
