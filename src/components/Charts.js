import React, { useMemo } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '../contexts/ThemeContext';
import worldmap from '../assets/world.svg'

const REVENUE_DATA = {
  currentWeek: [12, 8, 10, 15, 18, 20],
  previousWeek: [8, 15, 17, 12, 10, 22],
  xLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
};

const LOCATION_DATA = [
  { name: 'New York', value: '72K' },
  { name: 'San Francisco', value: '39K' },
  { name: 'Sydney', value: '25K' },
];

const PRODUCTS_DATA = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', sold: 82, revenue: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', sold: 37, revenue: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', sold: 64, revenue: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', sold: 184, revenue: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', sold: 64, revenue: '$1,965.81' },
];

const SALES_DATA = [
  { id: 0, value: 38.6, label: 'Direct', color: '#1f2937', salesValue: '$300.56' },
  { id: 1, value: 22.5, label: 'Affiliate', color: '#a7c7e7', salesValue: '$135.18' },
  { id: 2, value: 30.8, label: 'Sponsored', color: '#90ee90', salesValue: '$154.02' },
  { id: 3, value: 8.1, label: 'E-mail', color: '#dda0dd', salesValue: '$48.96' },
];

const MAP_MARKERS = [
  { top: '43%', left: '25%' },
  { top: '55%', left: '18%' },
  { top: '85%', left: '82%' },
  { top: '50%', left: '90%' }
];

const RevenueChart = () => {
  const { darkMode } = useTheme();

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
                data: REVENUE_DATA.currentWeek, 
                color: '#000000', 
                curve: 'natural',
                connectNulls: true
              },
              { 
                data: REVENUE_DATA.previousWeek, 
                color: '#a7c7e7', 
                curve: 'natural',
                connectNulls: true
              },
            ]}
            xAxis={[{ 
              data: REVENUE_DATA.xLabels, 
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
  
  const locationPercentages = useMemo(() => 
    LOCATION_DATA.map(location => ({
      ...location,
      percent: (parseInt(location.value) / 72) * 100
    })), []
  );

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

          {MAP_MARKERS.map((marker, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: marker.top,
                left: marker.left,
                width: 8,
                height: 8,
                bgcolor: '#111827',
                border: '1px solid #fff',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </Box>

        {/* Location list */}
        {locationPercentages.map((location, index) => (
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
                    width: `${location.percent}%`,
                    height: '100%',
                    backgroundColor: '#A8C5DA',
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Box>
          ))}
      </CardContent>
    </Card>
  );
};

 


const TopProducts = () => {
  const { darkMode } = useTheme();

  return (
    <Card sx={{ 
      height: 360, 
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
          {PRODUCTS_DATA.map((product, index) => (
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

  return (
    <Card sx={{ 
      height: 360, 
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
          <Box sx={{ width: 300, margin:"auto",  position: 'relative', mb: 2, display: 'flex', justifyContent: 'center' }}>
            <PieChart
              series={[
                {
                  data: SALES_DATA,
                  innerRadius: 45,
                  outerRadius: 75,
                  paddingAngle: 2,
                  cornerRadius: 10,
                },
              ]}
              slotProps={{
                legend: { hidden: true },
              }}
              width={120}
              height={150}
            />
           
          </Box>
          <Box sx={{ width: '100%' }}>
            {SALES_DATA.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 1.2,
                  p: 1,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: item.color,
                    }}
                  />
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', color: darkMode?"white":"#374151", fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.75rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>
                    {item.value}%
                  </Typography>
                </Box>
                <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem', color: darkMode?"white":"#374151", }}>
                  {item.salesValue}
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