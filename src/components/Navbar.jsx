import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const location = useLocation();
  const { isAdmin, setIsAdmin } = useApp();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-xl font-bold text-gray-800">EventHub</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`transition duration-300 ${
                isActive('/') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/register"
              className={`transition duration-300 ${
                isActive('/register') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Register
            </Link>
            {isAdmin ? (
              <>
                <Link
                  to="/admin"
                  className={`transition duration-300 ${
                    isActive('/admin') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Admin
                </Link>
                <button
                  onClick={() => setIsAdmin(false)}
                  className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin-login"
                className={`transition duration-300 ${
                  isActive('/admin-login') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
