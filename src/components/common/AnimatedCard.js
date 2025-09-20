import React from 'react';
import { Card } from '@mui/material';
import { cardHover } from '../../utils/animations';

const AnimatedCard = ({ 
  children, 
  animationType = 'fadeInUp',
  animationDelay = 0,
  sx = {},
  ...props 
}) => {
  const getAnimation = () => {
    const animations = {
      fadeInUp: `fadeInUp 0.6s ease ${animationDelay}s both`,
      fadeInLeft: `fadeInLeft 0.8s ease ${animationDelay}s both`,
      fadeInRight: `fadeInRight 0.8s ease ${animationDelay}s both`,
      scaleIn: `scaleIn 0.4s ease ${animationDelay}s both`,
    };
    return animations[animationType] || animations.fadeInUp;
  };

  return (
    <Card
      sx={{
        ...cardHover,
        animation: getAnimation(),
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes fadeInLeft': {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        '@keyframes fadeInRight': {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        '@keyframes scaleIn': {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        ...sx
      }}
      {...props}
    >
      {children}
    </Card>
  );
};

export default AnimatedCard;