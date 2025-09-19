import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

// Theme context for managing dark/light mode across the app
const ThemeContext = createContext();

// Custom hook to access theme context
export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme hook must be used within a ThemeProvider');
  }
  return themeContext;
};

export const ThemeContextProvider = ({ children }) => {
  // Initialize theme from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('app-dark-mode');
      if (savedTheme !== null) {
        return JSON.parse(savedTheme);
      }
      return false; // default to light mode
    } catch (err) {
      console.warn('Error reading theme from localStorage:', err);
      return false;
    }
  });

  // Persist theme changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('app-dark-mode', JSON.stringify(isDarkMode));
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => {
    return {
      darkMode: isDarkMode, // keeping original name for backward compatibility
      toggleDarkMode: handleToggleTheme
    };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the context itself for advanced usage
export default ThemeContext;
