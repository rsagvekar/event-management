import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { setIsAdmin } = useApp();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  // Demo credentials - In production, use proper authentication
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'admin123';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      navigate('/admin');
    } else {
      setError('चुकीचे वापरकर्ता नाव किंवा पासवर्ड');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border-4 border-orange-200 relative z-10">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white px-8 py-10 rounded-t-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
              }}
            ></div>
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-all duration-300 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1
              className="text-4xl font-black mb-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              प्रशासक लॉगिन
            </h1>
            <p
              className="text-xl text-yellow-100 font-bold"
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              डॅशबोर्डमध्ये प्रवेश करा
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label
              className="block text-base font-bold text-orange-900 mb-2"
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              वापरकर्ता नाव *
            </label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 bg-white transition-all duration-300 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 font-semibold"
              placeholder="वापरकर्ता नाव प्रविष्ट करा"
              style={{ fontFamily: "'Mukta', sans-serif" }}
              required
            />
          </div>

          <div>
            <label
              className="block text-base font-bold text-orange-900 mb-2"
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              पासवर्ड *
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 bg-white transition-all duration-300 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 font-semibold"
              placeholder="पासवर्ड प्रविष्ट करा"
              style={{ fontFamily: "'Mukta', sans-serif" }}
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-xl flex items-center space-x-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="font-bold" style={{ fontFamily: "'Mukta', sans-serif" }}>
                {error}
              </span>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black py-4 px-8 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 hover:-translate-y-1"
            style={{ fontFamily: "'Mukta', sans-serif" }}
          >
            🔐 लॉगिन करा
          </button>
        </form>

        <div className="px-8 pb-8">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">ℹ️</div>
              <div>
                <p
                  className="text-sm font-black text-orange-900 mb-2"
                  style={{ fontFamily: "'Mukta', sans-serif" }}
                >
                  डेमो क्रेडेन्शियल्स:
                </p>
                <div className="space-y-1 text-sm font-bold text-orange-800" style={{ fontFamily: "'Mukta', sans-serif" }}>
                  <p>
                    <span className="text-orange-600">वापरकर्ता नाव:</span> admin
                  </p>
                  <p>
                    <span className="text-orange-600">पासवर्ड:</span> admin123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Mukta:wght@400;600;700;800&display=swap");
      `}</style>
    </div>
  );
};

export default AdminLogin;