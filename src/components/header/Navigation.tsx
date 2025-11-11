import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const navigationItems = [
  { name: 'Maqolalar', href: '/articles' },
  { name: 'Yangiliklar', href: '/news' },
  { name: 'Aloqalar', href: '/contacts' },
  { name: 'Arxiv', href: '/archive' },
];

const aboutDropdownItems = [
  { name: 'Jurnalning maqsad va vazifalari', href: '/aims-and-purposes' },
  { name: 'Umumiy ma\'lumotlar', href: '/general-information' },
  { name: 'Ochiq kirish siyosati', href: '/open-access-policy' },
  { name: 'Maqolaga qo\'yiladigan talablar', href: '/requirements-to-articles' },
  { name: 'Me\'yoriy hujjatlar', href: '/normativedocuments' },
];

const editorialDropdownItems = [
  { name: 'Bosh muharrir', href: '/editor-in-chief' },
  { name: 'Tahririyat tarkibi', href: '/board' },
];

interface NavigationProps {
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onItemClick }) => {
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEditorialOpen, setIsEditorialOpen] = useState(false);
  
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const editorialDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
      if (editorialDropdownRef.current && !editorialDropdownRef.current.contains(event.target as Node)) {
        setIsEditorialOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isAboutActive = location.pathname.startsWith('/about');
  const isEditorialActive = location.pathname.startsWith('/editorial');

  return (
    <nav className="hidden md:flex items-center space-x-4">
      {/* Jurnal haqida Dropdown */}
      <div className="relative" ref={aboutDropdownRef}>
        <button
          onClick={() => setIsAboutOpen(!isAboutOpen)}
          className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isAboutActive
              ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          Jurnal haqida
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isAboutOpen && (
          <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
            {aboutDropdownItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => {
                  setIsAboutOpen(false);
                  onItemClick?.();
                }}
                className={`block px-4 py-2 text-sm transition-colors ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Tahriryat Dropdown */}
      <div className="relative" ref={editorialDropdownRef}>
        <button
          onClick={() => setIsEditorialOpen(!isEditorialOpen)}
          className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isEditorialActive
              ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          Tahriryat
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${isEditorialOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isEditorialOpen && (
          <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
            {editorialDropdownItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => {
                  setIsEditorialOpen(false);
                  onItemClick?.();
                }}
                className={`block px-4 py-2 text-sm transition-colors ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
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
          onClick={onItemClick}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            location.pathname === item.href
              ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export { navigationItems, aboutDropdownItems, editorialDropdownItems };
export default Navigation;


