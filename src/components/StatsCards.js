import React, { useMemo } from 'react';
import { CardContent, Typography, Box, Grid, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
// Import custom card icons
import TrendUpIcon from '../assets/icons/cards/IconSet.png';
import TrendDownIcon from '../assets/icons/cards/IconSet (1).png';
// Import white icons for dark cards
import WhiteTrendUpIcon from '../assets/icons/cards/white/ArrowRise.png';
import WhiteTrendDownIcon from '../assets/icons/cards/white/ArrowFall.png';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedCard from './common/AnimatedCard';
import { useAnimatedList } from '../hooks/useAnimatedList';

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


const statsCardData = [
  {
    title: 'Customers',
    value: '3,781',
    change: '+11.01%',
    trend: 'up',
    lightBg: '#E3F5FF',
    darkBg: '#E3F5FF', 
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
    darkBg: '#E3F5FF', 
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
    <AnimatedCard
      animationType="fadeInUp"
      animationDelay={0.4}
      sx={{
        height: { xs: 200, sm: 250 },
        backgroundColor: darkMode ? '#FFFFFF0D' : '#f8fafc',
      }}
    >
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
    </AnimatedCard>
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
          <AnimatedCard
            animationType="fadeInUp"
            animationDelay={idx * 0.1}
            sx={{
              backgroundColor: darkMode ? statCard.darkBg : statCard.lightBg,
              border: 'none',
              height: { xs: 100, sm: 120 },
              '&:hover': {
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
              },
              '&:active': {
                transform: 'translateY(-2px) scale(0.98)',
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
                    color: 'text.secondary',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                >

                         <Typography variant="body2" fontWeight={500} sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    {sanitizeText(statCard.change)}
                  </Typography>
                  <Box sx={{
                    animation: statCard.trend === 'up' ? 'bounceUp 2s infinite' : 'bounceDown 2s infinite',
                    '@keyframes bounceUp': {
                      '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                      '40%': { transform: 'translateY(-3px)' },
                      '60%': { transform: 'translateY(-1px)' },
                    },
                    '@keyframes bounceDown': {
                      '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                      '40%': { transform: 'translateY(3px)' },
                      '60%': { transform: 'translateY(1px)' },
                    }
                  }}>
                    <img 
                      src={
                        (darkMode && statCard.darkBg === '#FFFFFF0D') 
                          ? (statCard.trend === 'up' ? WhiteTrendUpIcon : WhiteTrendDownIcon)
                          : (statCard.trend === 'up' ? TrendUpIcon : TrendDownIcon)
                      } 
                      alt={statCard.trend === 'up' ? 'trending up' : 'trending down'}
                      style={{ width: 16, height: 16 }}
                    />
                  </Box>
           
                </Box>
              </Box>
            </CardContent>
          </AnimatedCard>
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