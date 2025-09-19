import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '../contexts/ThemeContext';
import worldmap from '../assets/world.svg'

const RevenueChart = () => {
  const { darkMode } = useTheme();
  const currentWeek = [12, 8, 10, 15, 18, 20];
  const previousWeek = [8, 15, 17, 12, 10, 22];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <Card sx={{ 
      height: 350, 
      backgroundColor: darkMode ? '#FFFFFF0D' : '#f8fafc',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      }
    }}>
      <CardContent sx={{ p: 2.5, height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '1rem', color: darkMode ? '#ffffff' : '#374151' }}>
            Revenue
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, fontSize: '0.75rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#000000' }} />
              <Typography variant="body2" sx={{ fontSize: '0.8rem', color: darkMode ? '#ffffff' : '#374151' }}>
                Current Week
              </Typography>
              <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.8rem', color: darkMode ? '#ffffff' : '#374151' }}>
                $58,211
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#a7c7e7' }} />
              <Typography variant="body2" sx={{ fontSize: '0.8rem', color: darkMode ? '#ffffff' : '#374151' }}>
                Previous Week
              </Typography>
              <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.8rem', color: darkMode ? '#ffffff' : '#374151' }}>
                $68,768
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: 220, width: '100%' }}>
          <LineChart
            series={[
              { 
                data: currentWeek, 
                color: '#000000', 
                curve: 'natural',
                connectNulls: true
              },
              { 
                data: previousWeek, 
                color: '#a7c7e7', 
                curve: 'natural',
                connectNulls: true
              },
            ]}
            xAxis={[{ 
              data: xLabels, 
              scaleType: 'band', 
              tickLabelStyle: { fontSize: 12, fill: '#9ca3af' },
              axisLine: false,
              tickLine: false
            }]}
            yAxis={[{
              tickLabelStyle: { fontSize: 12, fill: '#9ca3af' },
              axisLine: false,
              tickLine: false,
              tickFormatter: (value) => `${value}M`
            }]}
            height={220}
            margin={{ left: 40, right: 20, top: 20, bottom: 40 }}
            grid={{ horizontal: true, vertical: false }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};



const LocationChart = () => {
  const { darkMode } = useTheme();
  const locations = [
    { name: 'New York', value: '72K' },
    { name: 'San Francisco', value: '39K' },
    { name: 'Sydney', value: '25K' },
   
  ];

  return (
    <Card
      sx={{
       
        height: 350,
        backgroundColor: darkMode ? '#FFFFFF0D' : '#F8FAFC',
        borderRadius: 3,
 
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Typography
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: '1rem',
            color: darkMode?"white":"#374151",
          }}
        >
          Revenue by Location
        </Typography>

        {/* Mini world map */}
        <Box sx={{ position: 'relative', height: 150, mb: 2 }}>
          <img src={worldmap} alt="World Map" width="100%" height="100%" style={{objectFit:"cover"}} />

           <Box
    sx={{
      position: 'absolute',
      top: '43%', // adjust to match location
      left: '25%',
      width: 8,
      height: 8,
      bgcolor: '#111827',
      border: '1px solid #fff',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  />
  <Box
    sx={{
      position: 'absolute',
      top: '55%', // adjust to match location
      left: '18%',
      width: 8,
      height: 8,
      bgcolor: '#111827',
      border: '1px solid #fff',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  />
  <Box
    sx={{
      position: 'absolute',
      top: '85%',
      left: '82%',
      width: 8,
      height: 8,
      bgcolor: '#111827',
      border: '1px solid #fff',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  />
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '90%',
      width: 8,
      height: 8,
      bgcolor: '#111827',
      border: '1px solid #fff',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  />
        </Box>

        {/* Location list */}
        {locations.map((location, index) => {
          const percent = (parseInt(location.value) / 72) * 100;
          return (
            <Box key={index} sx={{ mb: 1.5 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 0.5,
                }}
              >
                <Typography sx={{ fontSize: '0.8rem', color: darkMode?"white":"#374151", }}>
                  {location.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                   color: darkMode?"white":"#374151",
                  }}
                >
                  {location.value}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: 4,
                  backgroundColor: '#E5E7EB',
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: `${percent}%`,
                    height: '100%',
                    backgroundColor: '#A8C5DA',
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

 


const TopProducts = () => {
  const { darkMode } = useTheme();
  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', sold: 82, revenue: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', sold: 37, revenue: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', sold: 64, revenue: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', sold: 184, revenue: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', sold: 64, revenue: '$1,965.81' },
  ];

  return (
    <Card sx={{ 
      height: 350, 
      backgroundColor: darkMode ? '#FFFFFF0D' : '#F7F9FB',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      }
    }}>
      <CardContent sx={{ p: 2.5, height: '100%' }}>
        <Typography variant="body1" sx={{ mb: 3, fontWeight: 600, fontSize: '1rem', color: darkMode?"white":'#374151' }}>
          Top Selling Products
        </Typography>
        <Box sx={{ height: 'calc(100% - 50px)' }}>
          {/* Header Row */}
          <Box sx={{ display: 'flex', pb: 2, borderBottom: '1px solid #e5e7eb', mb: 2 }}>
            <Typography variant="body2" sx={{ flex: 3, fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500 }}>
              Name
            </Typography>
            <Typography variant="body2" sx={{ flex: 1, fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, textAlign: 'center' }}>
              Price
            </Typography>
            <Typography variant="body2" sx={{ flex: 1, fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, textAlign: 'center' }}>
              Quantity
            </Typography>
            <Typography variant="body2" sx={{ flex: 1, fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, textAlign: 'right' }}>
              Amount
            </Typography>
          </Box>
          
          {/* Data Rows */}
          {products.map((product, index) => (
            <Box key={index} sx={{ 
              display: 'flex', 
              py: 1.5, 
              alignItems: 'center',
              cursor: 'pointer',
              borderRadius: 1,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                transform: 'translateX(4px)',
              }
            }}>
              <Typography variant="body2" sx={{ flex: 3, fontSize: '0.85rem', color: darkMode?"white":'#374151', fontWeight: 400 }}>
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ flex: 1, fontSize: '0.85rem', color: darkMode?"white":'#374151', textAlign: 'center' }}>
                {product.price}
              </Typography>
              <Typography variant="body2" sx={{ flex: 1, fontSize: '0.85rem', color: darkMode?"white":'#374151', textAlign: 'center' }}>
                {product.sold}
              </Typography>
              <Typography variant="body2" sx={{ flex: 1, fontSize: '0.85rem', color: darkMode?"white":'#374151', fontWeight: 500, textAlign: 'right' }}>
                {product.revenue}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const TotalSalesChart = () => {
  const { darkMode } = useTheme();
  const data = [
    { id: 0, value: 38.6, label: 'Direct', color: '#1f2937' },
    { id: 1, value: 22.5, label: 'Affiliate', color: '#10b981' },
    { id: 2, value: 30.8, label: 'Sponsored', color: '#8b5cf6' },
    { id: 3, value: 8.1, label: 'E-mail', color: '#06b6d4' },
  ];

  const salesData = [
    { label: 'Direct', value: '$300.56', color: '#1f2937' },
    { label: 'Affiliate', value: '$135.18', color: '#10b981' },
    { label: 'Sponsored', value: '$154.02', color: '#8b5cf6' },
    { label: 'E-mail', value: '$48.96', color: '#06b6d4' },
  ];

  return (
    <Card sx={{ 
      height: 350, 
      backgroundColor: darkMode ? '#FFFFFF0D' : '#F7F9FB',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      }
    }}>
      <CardContent sx={{ p: 2.5, height: '100%' }}>
        <Typography variant="body1" sx={{ mb: 3, fontWeight: 600, fontSize: '1rem', color: darkMode?"white":"#374151", }}>
          Total Sales
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'calc(100% - 40px)' }}>
          <Box sx={{ width: 140, height: 120, position: 'relative', mb: 2 }}>
               <PieChart
        series={[
          {
            data,
            innerRadius: 35, // makes it a ring
            outerRadius: 60,
            paddingAngle: 3,
    
          },
        ]}
        slotProps={{
          legend: { hidden: true }, // hide built-in legend
        }}
        width={220}
        height={130}
      />
           
          </Box>
          <Box sx={{ width: '100%' }}>
            {salesData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 1.5,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: item.color,
                    }}
                  />
                  <Typography variant="body2" sx={{ fontSize: '0.8rem', color: darkMode?"white":"#374151", }}>
                    {item.label}
                  </Typography>
                </Box>
                <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.8rem', color: darkMode?"white":"#374151", }}>
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const Charts = () => {
  const { darkMode } = useTheme();
  
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={8.4}>
          <RevenueChart />
        </Grid>
        <Grid item xs={12} md={3.6}>
          <LocationChart />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={8.4}>
          <TopProducts />
        </Grid>
        <Grid item xs={12} md={3.6}>
          <TotalSalesChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Charts;