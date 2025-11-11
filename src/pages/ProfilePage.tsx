import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Building, } from 'lucide-react';
import { Card, Avatar, Descriptions, Tag} from 'antd';
import { useProfile } from '../hooks/useProfile';

const ProfilePage: React.FC = () => {
  const { profile, isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <div className="min-h-screen dark:!bg-gray-900 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 dark:!border-white border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 dark:!text-white text-gray-900">Profil yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen dark:!bg-gray-900 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-xl">⚠️</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:!text-white mb-2">Xatolik</h2>
          <p className="text-red-600 mb-6">Profil yuklanmadi</p>
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-gray-50">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Bosh sahifaga qaytish
          </Link>
        </div>

        <div className="grid grid-cols-1 dark:!bg-gray-900 bg-gray-50 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="text-center dark:!bg-gray-800 bg-gray-50">
              <Avatar 
                size={120} 
                src={profile.avatar || profile.science_image}
                className="mb-4 border-4 border-blue-100 dark:!border-gray-700"
              >
                {profile.fullname?.charAt(0) || 'U'}
              </Avatar>
              
              <h2 className="text-xl mt-4 font-bold text-gray-900 dark:text-white mb-2">
                {profile.fullname}
              </h2>
              
              {profile.science_id && (
                <Tag color="blue" className="mb-4">
                  ID: {profile.science_id}
                </Tag>
              )}

              <Tag color="green">
                Faol
              </Tag>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6 dark:!bg-gray-900 bg-gray-50">
            {/* Contact Information */}
            <Card title="Aloqa ma'lumotlari" className='dark:!bg-gray-800 dark:!text-white text-gray-900 bg-gray-50'>
              <Descriptions column={1} bordered className='dark:!text-white text-gray-900'>
                <Descriptions.Item label={
                  <span className="flex dark:text-white text-gray-900 items-center gap-2">
                    <Mail size={16} />
                    Email
                  </span>
                }>
                  <span className="dark:!text-white text-gray-900">{profile.email || 'Kiritilmagan'}</span>  
                </Descriptions.Item>

                <Descriptions.Item label={
                  <span className="flex dark:text-white text-gray-900 items-center gap-2">
                    <Phone size={16} />
                    Telefon
                  </span>
                }>
                  <span className="dark:!text-white text-gray-900">{profile.phone || profile.phone_number || 'Kiritilmagan'}</span>
                </Descriptions.Item>

                <Descriptions.Item label={
                  <span className="flex dark:text-white text-gray-900 items-center gap-2">
                    <Building size={16} />
                    Muassasa
                  </span>
                }>
                  <span className="dark:!text-white text-gray-900">{profile.academic_info?.institution || 'Kiritilmagan'}</span>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;