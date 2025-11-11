import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/innovator-logo.jpg';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src={logo} 
        alt="Innovator Logo" 
        className="w-[250px] h-[50px] object-cover -mb-4" 
      />
    </Link>
  );
};

export default Logo;

