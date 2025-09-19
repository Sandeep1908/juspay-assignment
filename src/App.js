import React, { useState, useCallback, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { ThemeContextProvider, useTheme } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RightSidebar from './components/RightSidebar';
import StatsCards from './components/StatsCards';
import Charts from './components/Charts';
import OrderListPage from './pages/OrderListPage';

// TODO: Add routing with React Router later


// Main app content wrapper
const AppContent = () => {
  const { darkMode } = useTheme();
  const [activePage, setActivePage] = useState('eCommerce'); // default page
  
  // Debug current page
  // console.log('Current active page:', activePage);

  const handleSidebarNavigation = useCallback((selectedMenuItem) => {
    // Simple page switching logic - will replace with proper routing
    if (selectedMenuItem === 'Orders') {
      setActivePage('Orders');
    } else {
      setActivePage('eCommerce'); // fallback to dashboard
    }
  }, []);

  const currentTheme = useMemo(() => {
    return darkMode ? darkTheme : lightTheme;
  }, [darkMode]);

  const renderPageContent = useMemo(() => {
    const pageComponents = {
      eCommerce: (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: 'background.default',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            eCommerce
          </Typography>
          <StatsCards />
          <Charts />
        </Box>
      ),
      Orders: <OrderListPage />
    };
    return pageComponents[activePage] || pageComponents.eCommerce;
  }, [activePage]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        backgroundColor: 'background.default'
      }}>
        <Sidebar onMenuClick={handleSidebarNavigation} />
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {renderPageContent}
            {activePage === 'eCommerce' && <RightSidebar />}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

// Root App component
function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;