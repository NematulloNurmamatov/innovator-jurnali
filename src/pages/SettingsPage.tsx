import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, User, Bell, Shield, Palette, Globe, Save, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const SettingsPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      articles: true,
      news: true,
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false,
    },
    language: 'uz',
    timezone: 'Asia/Tashkent',
  });

  const handleSave = () => {
    // In a real implementation, you would save settings to the backend
    console.log('Saving settings:', settings);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (section: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Bosh sahifaga qaytish
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sozlamalar
          </h1>
        </div>

        <div className="space-y-6">
          {/* Theme Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Palette className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mavzu
                </h2>
              </div>
              <button
                onClick={toggleTheme}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isDark ? 'Kunduzgi rejim' : 'Tungi rejim'}
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Hozirgi mavzu: {isDark ? 'Tungi' : 'Kunduzgi'}
            </p>
          </div>

          {/* Notification Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Bell className="h-6 w-6 text-green-600" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bildirishnomalar
                </h2>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Tahrirlash
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Email bildirishnomalari
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Yangi maqolalar va yangiliklar haqida email orqali xabar oling
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.email}
                    onChange={(e) => handleInputChange('notifications', 'email', e.target.checked)}
                    disabled={!isEditing}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Push bildirishnomalari
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Brauzer push bildirishnomalari
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.push}
                    onChange={(e) => handleInputChange('notifications', 'push', e.target.checked)}
                    disabled={!isEditing}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            {isEditing && (
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>Saqlash</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>Bekor qilish</span>
                </button>
              </div>
            )}
          </div>

          {/* Privacy Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Maxfiylik
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Profil ko'rinishi
                </label>
                <select
                  value={settings.privacy.profileVisibility}
                  onChange={(e) => handleInputChange('privacy', 'profileVisibility', e.target.value)}
                  className="block w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="public">Ommaviy</option>
                  <option value="private">Shaxsiy</option>
                  <option value="friends">Do'stlar</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Email ko'rsatish
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Boshqa foydalanuvchilar emailingizni ko'rishlari mumkin
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.showEmail}
                    onChange={(e) => handleInputChange('privacy', 'showEmail', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="h-6 w-6 text-orange-600" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Til va vaqt
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Til
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => handleInputChange('language', 'language', e.target.value)}
                  className="block w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="uz">O'zbekcha</option>
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Vaqt zonasi
                </label>
                <select
                  value={settings.timezone}
                  onChange={(e) => handleInputChange('timezone', 'timezone', e.target.value)}
                  className="block w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="Asia/Tashkent">Toshkent (UTC+5)</option>
                  <option value="UTC">UTC (UTC+0)</option>
                  <option value="America/New_York">New York (UTC-5)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <User className="h-6 w-6 text-red-600" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Hisob
              </h2>
            </div>

            <div className="space-y-4">
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Tizimdan chiqish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
