import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const LoginButton: React.FC = () => {
  return (
    <Link
      to="/login"
      className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      <LogIn className="h-4 w-4" />
      <span>Tizimga kirish</span>
    </Link>
  );
};

export default LoginButton;

