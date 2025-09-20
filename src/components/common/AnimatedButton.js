import React from 'react';
import { IconButton } from '@mui/material';
import { smoothTransition } from '../../utils/animations';

const AnimatedButton = ({ 
  children, 
  onClick, 
  hoverTransform = 'scale(1.05)', 
  hoverRotation = 0,
  animationDelay = 0,
  sx = {},
  ...props 
}) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        ...smoothTransition,
        animation: animationDelay > 0 ? `slideInLeft 0.4s ease ${animationDelay}s both` : 'none',
        '&:hover': {
          transform: `${hoverTransform} ${hoverRotation ? `rotate(${hoverRotation}deg)` : ''}`,
          backgroundColor: 'rgba(0,0,0,0.04)',
        },
        '@keyframes slideInLeft': {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        ...sx
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default AnimatedButton;