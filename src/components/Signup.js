import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAgencyChange = (value) => {
    setFormData(prev => ({ ...prev, isAgency: value }));
  };

  const handleSubmit = () => {
    if (formData.email && formData.password) {
      setUser(formData);
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Create your PopX account</h2>

        {['name', 'phone', 'email', 'password', 'company'].map((field, i) => (
          <div key={i}>
            <label className="text-sm text-[#6C25FF] font-medium">
              {field === 'email' ? 'Email address' : field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')} *
            </label>
            <input
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
              name={field}
              placeholder={`Enter ${field}`}
              type={field === 'password' ? 'password' : 'text'}
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div>
          <p className="text-sm text-[#6C25FF] font-medium mb-1">Are you an Agency? *</p>
          <div className="flex space-x-4">
            {['Yes', 'No'].map((option, index) => (
              <label key={index} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === option}
                  onChange={() => handleAgencyChange(option)}
                  className="accent-[#6C25FF]"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#6C25FF] text-white font-medium py-2 rounded-md"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
