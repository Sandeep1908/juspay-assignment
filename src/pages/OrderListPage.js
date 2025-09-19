import React from 'react';
import { Box, Typography } from '@mui/material';
import OrderList from '../components/OrderList';

const OrderListPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: 'background.default',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Order List
      </Typography>
      <OrderList />
    </Box>
  );
};

export default OrderListPage;