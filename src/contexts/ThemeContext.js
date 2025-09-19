import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const value = useMemo(() => ({ darkMode, toggleDarkMode }), [darkMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};