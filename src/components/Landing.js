import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm text-center space-y-4">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate('/create-account')}
          className="w-full bg-[#6C25FF] text-white font-medium py-2 rounded-md"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-[#CEBAFB] text-[#6C25FF] font-medium py-2 rounded-md"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
