import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';

const ProjectionsChart = ({ darkMode }) => {
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const actuals = [18, 20, 18, 22, 14, 19];  
  const projections = [20, 24, 20, 26, 16, 22];  

  return (
    <Card sx={{ 
      height: 250, 
      backgroundColor: darkMode ? '#FFFFFF0D' : '#f8fafc',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      }
    }}>
      <CardContent sx={{ p: 2.5, height: '100%' }}>
        <Typography variant="body1" sx={{ mb: 3, fontWeight: 600, fontSize: '1rem', color: darkMode ? '#ffffff' : '#374151' }}>
          Projections vs Actuals
        </Typography>
       <Box sx={{ height: 250, width: '100%' }}>
      <BarChart
        xAxis={[
          {
            data: months,
            scaleType: 'band',
            tickLabelStyle: { fontSize: 12, fill: '#9ca3af' },
            axisLine: false,
            tickLine: false,
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 12, fill: '#9ca3af' },
            axisLine: false,
            tickLine: false,
            tickFormatter: (value) => `${value}M`,
          },
        ]}
        series={[
          {
            data: actuals,
            label: 'Actuals',
            color: '#a7c7e7', // darker blue
            stack: 'stack1', // 🔹 same stack name to stack bars
          },
          {
            data: projections,
            label: 'Projections',
            color: '#a7c7e7AA', // lighter / semi-transparent blue
            stack: 'stack1',
          },
        ]}
        height={190}
        margin={{ left: 40, right: 20, top: 20, bottom: 40 }}
        grid={{ horizontal: true, vertical: false }}
        /** Make bars thin */
        slotProps={{
          bar: {
            rx:1,
            barThickness: 90, // thinner bars
          },
        }}
       
      />
    </Box>
      </CardContent>
    </Card>
  );
};

const statsData = [
  {
    title: 'Customers',
    value: '3,781',
    change: '+11.01%',
    trend: 'up',
    bgColor: '#E3F5FF',
    darkBgColor: '#E3F5FF',
  },
  {
    title: 'Orders',
    value: '1,219',
    change: '-0.03%',
    trend: 'down',
    bgColor: '#F7F9FB',
    darkBgColor: '#FFFFFF0D',
  },
  {
    title: 'Revenue',
    value: '$695',
    change: '+15.03%',
    trend: 'up',
    bgColor: '#F7F9FB',
    darkBgColor: '#FFFFFF0D',
  },
  {
    title: 'Growth',
    value: '30.1%',
    change: '+6.08%',
    trend: 'up',
    bgColor: '#E5ECF6',
    darkBgColor: '#FFFFFF0D',
  },
];

const StatsCards = ({ darkMode }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          {statsData.map((stat, index) => (
            <Grid item xs={6} key={index}>
          <Card
            sx={{
              backgroundColor: darkMode ? stat.darkBgColor : stat.bgColor,
              border: 'none',
              height: 120,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              },
              '&:active': {
                transform: 'translateY(-2px)',
              }
            }}
          >
            <CardContent sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1, fontWeight: 500 }}
              >
                {stat.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '1.5rem' }}>
                  {stat.value}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: stat.trend === 'up' ? 'success.main' : 'error.main',
                  }}
                >
                  {stat.trend === 'up' ? (
                    <TrendingUp fontSize="small" />
                  ) : (
                    <TrendingDown fontSize="small" />
                  )}
                  <Typography variant="body2" fontWeight={500}>
                    {stat.change}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <ProjectionsChart darkMode={darkMode} />
      </Grid>
    </Grid>
  );
};

export default StatsCards;