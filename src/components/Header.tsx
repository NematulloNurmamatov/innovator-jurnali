import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Logo from './header/Logo';
import Navigation from './header/Navigation';
import ThemeToggle from './header/ThemeToggle';
import UserDropdown from './header/UserDropdown';
import LoginButton from './header/LoginButton';
import MobileMenu from './header/MobileMenu';
import MobileMenuButton from './header/MobileMenuButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white fixed z-50 w-full dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Navigation />
            <ThemeToggle />
            {isAuthenticated ? <UserDropdown /> : <LoginButton />}
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <MobileMenuButton 
              isOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />
          </div>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;
