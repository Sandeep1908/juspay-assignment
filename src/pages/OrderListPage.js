import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import OrderList from '../components/OrderList';

const OrderListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 3 },
        backgroundColor: 'background.default',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        sx={{ mb: { xs: 2, sm: 3 }, fontWeight: 700 }}
      >
        Order List
      </Typography>
      <OrderList />
    </Box>
  );
};

export default OrderListPage;