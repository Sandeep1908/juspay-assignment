import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { ThemeContextProvider, useTheme } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RightSidebar from './components/RightSidebar';
import StatsCards from './components/StatsCards';
import Charts from './components/Charts';
import OrderListPage from './pages/OrderListPage';


const AppContent = () => {
  const { darkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState('eCommerce');

  const handleMenuClick = (menuItem) => {
    if (menuItem === 'Orders') {
      setCurrentPage('Orders');
    } else {
      setCurrentPage('eCommerce');
    }
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        backgroundColor: 'background.default'
      }}>
        <Sidebar onMenuClick={handleMenuClick} />
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {currentPage === 'eCommerce' ? (
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
            ) : (
              <OrderListPage />
            )}
            {currentPage === 'eCommerce' && <RightSidebar />}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;