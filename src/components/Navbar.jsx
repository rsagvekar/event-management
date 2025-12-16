import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const location = useLocation();
  const { isAdmin, setIsAdmin } = useApp();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span className="text-brown-900 font-black text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>म</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white" style={{ 
                fontFamily: "'Mukta', sans-serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '0.5px',
              }}>
                मुंबई डायलॉग्ज
              </span>
              <span className="text-xs text-yellow-200 font-semibold -mt-1" style={{ fontFamily: "'Mukta', sans-serif" }}>
                स्वप्नवत मुंबईचा
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-white text-orange-600 shadow-lg transform scale-105' 
                  : 'text-white hover:bg-white/20 hover:backdrop-blur-sm'
              }`}
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              मुख्यपृष्ठ
            </Link>
            <Link
              to="/register"
              className={`px-4 py-2 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
                isActive('/register') 
                  ? 'bg-white text-orange-600 shadow-lg transform scale-105' 
                  : 'text-white hover:bg-white/20 hover:backdrop-blur-sm'
              }`}
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              नोंदणी
            </Link>
            {isAdmin ? (
              <>
                <Link
                  to="/admin"
                  className={`px-4 py-2 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
                    isActive('/admin') 
                      ? 'bg-white text-orange-600 shadow-lg transform scale-105' 
                      : 'text-white hover:bg-white/20 hover:backdrop-blur-sm'
                  }`}
                  style={{ fontFamily: "'Mukta', sans-serif" }}
                >
                  प्रशासक
                </Link>
                <button
                  onClick={() => setIsAdmin(false)}
                  className="text-sm sm:text-base bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ fontFamily: "'Mukta', sans-serif" }}
                >
                  बाहेर पडा
                </button>
              </>
            ) : (
              <Link
                to="/admin-login"
                className={`px-4 py-2 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 border-2 ${
                  isActive('/admin-login') 
                    ? 'bg-white text-orange-600 border-white shadow-lg transform scale-105' 
                    : 'text-white border-yellow-300 hover:bg-yellow-300 hover:text-orange-700 hover:border-yellow-400'
                }`}
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                प्रशासक लॉगिन
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Border Effect */}
      <div className="h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Mukta:wght@400;600;700;800&display=swap');
      `}</style>
    </nav>
  );
};

export default Navbar;