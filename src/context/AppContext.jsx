import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [registrations, setRegistrations] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load registrations from localStorage on mount
  useEffect(() => {
    const savedRegistrations = localStorage.getItem('registrations');
    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }
  }, []);

  // Save registrations to localStorage whenever they change
  useEffect(() => {
    if (registrations.length > 0) {
      localStorage.setItem('registrations', JSON.stringify(registrations));
    }
  }, [registrations]);

  const addRegistration = (registration) => {
    const newRegistration = {
      ...registration,
      id: Date.now().toString(),
      registrationDate: new Date().toISOString(),
    };
    setRegistrations(prev => [...prev, newRegistration]);
    return newRegistration.id;
  };

  const updatePaymentStatus = (id, paymentDetails) => {
    setRegistrations(prev =>
      prev.map(reg =>
        reg.id === id
          ? { ...reg, paymentStatus: 'completed', paymentDetails }
          : reg
      )
    );
  };

  const value = {
    registrations,
    addRegistration,
    updatePaymentStatus,
    isAdmin,
    setIsAdmin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
