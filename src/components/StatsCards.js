import React, { useMemo } from 'react';
import { Card, CardContent, Typography, Box, Grid, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '../contexts/ThemeContext';

// Chart data for projections vs actuals - TODO: get from API
const chartConfig = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  actualValues: [18, 20, 18, 22, 14, 19],
  projectedValues: [20, 24, 20, 26, 16, 22]
};

const sanitizeText = (text) => {
  if (typeof text !== 'string') return String(text);
  return text.replace(/[<>"'&]/g, (match) => {
    const entities = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '&': '&amp;' };
    return entities[match];
  });
};

// Stats card data - hardcoded for now
const statsCardData = [
  {
    title: 'Customers',
    value: '3,781',
    change: '+11.01%',
    trend: 'up',
    lightBg: '#E3F5FF',
    darkBg: '#E3F5FF', // same for both modes
  },
  {
    title: 'Orders',
    value: '1,219',
    change: '-0.03%',
    trend: 'down',
    lightBg: '#F7F9FB',
    darkBg: '#FFFFFF0D',
  },
  {
    title: 'Revenue',
    value: '$695',
    change: '+15.03%',
    trend: 'up',
    lightBg: '#F7F9FB',
    darkBg: '#FFFFFF0D',
  },
  {
    title: 'Growth',
    value: '30.1%',
    change: '+6.08%',
    trend: 'up',
    lightBg: '#E5ECF6',
    darkBg: '#E3F5FF', // special case
  },
];

const ProjectionsChart = () => {
  const { darkMode } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  
  // Memoize chart series to prevent re-creation
  const barChartSeries = useMemo(() => [
    {
      data: chartConfig.actualValues,
      label: 'Actuals',
      color: '#a7c7e7',
      stack: 'stack1',
    },
    {
      data: chartConfig.projectedValues,
      label: 'Projections', 
      color: '#a7c7e7AA', // with transparency
      stack: 'stack1',
    },
  ], []);
  
  // Debug chart data
  // console.log('Chart data:', chartConfig);  

  return (
    <Card sx={{ 
      height: { xs: 200, sm: 250 }, 
      backgroundColor: darkMode ? '#FFFFFF0D' : '#f8fafc',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      }
    }}>
      <CardContent sx={{ p: { xs: 1.5, sm: 2.5 }, height: '100%' }}>
        <Typography variant="body1" sx={{ mb: { xs: 2, sm: 3 }, fontWeight: 600, fontSize: { xs: '0.9rem', sm: '1rem' }, color: darkMode ? '#ffffff' : '#374151' }}>
          Projections vs Actuals
        </Typography>
       <Box sx={{ height: { xs: 150, sm: 190 }, width: '100%' }}>
      <BarChart
        xAxis={[
          {
            data: chartConfig.months,
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
        series={barChartSeries}
        height={isMobile ? 120 : 190}
        margin={{ left: isMobile ? 30 : 40, right: 20, top: 20, bottom: isMobile ? 30 : 40 }}
        grid={{ horizontal: true, vertical: false }}
        /** Make bars thin */
        slotProps={{
          bar: {
            rx: 1,
          },
        }}
       
      />
    </Box>
      </CardContent>
    </Card>
  );
};



const StatsCards = () => {
  const { darkMode } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  
  return (
    <Grid container spacing={{ xs: 1.5, sm: 2 }} sx={{ mb: { xs: 2, sm: 3 } }}>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={{ xs: 1.5, sm: 2 }}>
          {statsCardData.map((statCard, idx) => (
            <Grid item xs={6} sm={3} lg={6} key={idx}>
          <Card
            sx={{
              backgroundColor: darkMode ? statCard.darkBg : statCard.lightBg,
              border: 'none',
              height: { xs: 100, sm: 120 },
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
            <CardContent sx={{ p: { xs: 1.5, sm: 2.5 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography
                variant="body2"
                color={(statCard.title === 'Customers' || statCard.title === 'Growth') ? 'black' : (darkMode ? "text.secondary" : "black")}
                sx={{ mb: { xs: 0.5, sm: 1 }, fontWeight: 500, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
              >
                {sanitizeText(statCard.title)}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: { xs: 0.5, sm: 1 }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 0.5, sm: 0 } }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: (statCard.title === 'Customers' || statCard.title === 'Growth') ? 'black' : 'text.primary', fontSize: { xs: '1.2rem', sm: '1.1rem' } }}>
                  {sanitizeText(statCard.value)}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: statCard.trend === 'up' ? 'success.main' : 'error.main',
                  }}
                >
                  {statCard.trend === 'up' ? (
                    <TrendingUp fontSize="small" />
                  ) : (
                    <TrendingDown fontSize="small" />
                  )}
                  <Typography variant="body2" fontWeight={500} sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    {sanitizeText(statCard.change)}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <ProjectionsChart />
      </Grid>
    </Grid>
  );
};

export default StatsCards;