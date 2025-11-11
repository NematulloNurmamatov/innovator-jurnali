import React from 'react';
import { RightSidebar } from '../../components/right-sidebar';

const EditorInChiefPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container">
                <div className="bg-white mb-4 dark:bg-gray-800 rounded shadow-sm p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Bosh muharrir
                    </h1>
                </div>

                <RightSidebar />
            </div>
        </div>
    );
};

export default EditorInChiefPage;
