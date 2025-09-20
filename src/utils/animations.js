// Animation utilities for consistent microinteractions across the app

// Base keyframes
export const KEYFRAMES = {
  fadeInUp: {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  fadeInLeft: {
    '0%': { opacity: 0, transform: 'translateX(-30px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
  fadeInRight: {
    '0%': { opacity: 0, transform: 'translateX(30px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
  slideInUp: {
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  scaleIn: {
    '0%': { opacity: 0, transform: 'scale(0.9)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  },
  pulse: {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    '100%': { transform: 'scale(1)' },
  }
};

// Animation generators
export const createAnimation = (name, duration = '0.6s', delay = 0, easing = 'ease') => ({
  animation: `${name} ${duration} ${easing} ${delay}s both`,
  [`@keyframes ${name}`]: KEYFRAMES[name]
});

export const fadeInUp = (delay = 0) => createAnimation('fadeInUp', '0.6s', delay);
export const fadeInLeft = (delay = 0) => createAnimation('fadeInLeft', '0.8s', delay);
export const fadeInRight = (delay = 0) => createAnimation('fadeInRight', '0.8s', delay);
export const slideInUp = (delay = 0) => createAnimation('slideInUp', '0.4s', delay);
export const scaleIn = (delay = 0) => createAnimation('scaleIn', '0.4s', delay);

export const pulse = {
  animation: 'pulse 2s infinite',
  '@keyframes pulse': KEYFRAMES.pulse
};

// Transition utilities
export const smoothTransition = {
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
};

export const cardHover = {
  ...smoothTransition,
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.01)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  }
};

export const buttonHover = (transform = 'scale(1.05)', rotation = 0) => ({
  ...smoothTransition,
  '&:hover': {
    transform: `${transform} ${rotation ? `rotate(${rotation}deg)` : ''}`,
    backgroundColor: 'rgba(0,0,0,0.04)',
  }
});

// Staggered animations
export const staggerChildren = (baseDelay = 0, increment = 0.1) => (index) => 
  baseDelay + (index * increment);