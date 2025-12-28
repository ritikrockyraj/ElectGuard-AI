// src/pages/Login.jsx
import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold text-blue-400">👤 Login Page</h1>
      <button 
        onClick={onLogin} 
        className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Click to Login (Demo)
      </button>
    </div>
  );
};

export default Login;