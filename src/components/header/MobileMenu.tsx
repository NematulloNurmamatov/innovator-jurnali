import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { navigationItems, aboutDropdownItems, editorialDropdownItems } from './Navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEditorialOpen, setIsEditorialOpen] = useState(false);

  if (!isOpen) return null;

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
        {/* Jurnal haqida Dropdown */}
        <div>
          <button
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Jurnal haqida
            <ChevronDown 
              className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {isAboutOpen && (
            <div className="ml-4 mt-1 space-y-1">
              {aboutDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className={`block px-3 py-2 rounded-md text-sm ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Tahriryat Dropdown */}
        <div>
          <button
            onClick={() => setIsEditorialOpen(!isEditorialOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Tahriryat
            <ChevronDown 
              className={`h-4 w-4 transition-transform ${isEditorialOpen ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {isEditorialOpen && (
            <div className="ml-4 mt-1 space-y-1">
              {editorialDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className={`block px-3 py-2 rounded-md text-sm ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Other navigation items */}
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === item.href
                ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {item.name}
          </Link>
        ))}

        <div className="pt-4 space-y-2">
          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-base font-medium">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                </div>
                <span>Foydalanuvchi</span>
              </div>
              
              <Link
                to="/profile"
                onClick={onClose}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <User className="h-5 w-5" />
                <span>Profil</span>
              </Link>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-red-600 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                <LogOut className="h-5 w-5" />
                <span>Chiqish</span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={onClose}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Kirish
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

