import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setUser({ email });
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Signin to your PopX account</h2>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div>
          <label className="text-sm text-[#6C25FF] font-medium">Email Address</label>
          <input
            className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-[#6C25FF] font-medium">Password</label>
          <input
            className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#CBCBCB] text-white font-semibold py-2 rounded-md mt-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
