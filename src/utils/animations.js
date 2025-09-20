// Animation utilities for consistent microinteractions across the app

export const fadeInUp = (delay = 0) => ({
  animation: `fadeInUp 0.6s ease ${delay}s both`,
  '@keyframes fadeInUp': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  }
});

export const fadeInLeft = (delay = 0) => ({
  animation: `fadeInLeft 0.8s ease ${delay}s both`,
  '@keyframes fadeInLeft': {
    '0%': { opacity: 0, transform: 'translateX(-30px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  }
});

export const fadeInRight = (delay = 0) => ({
  animation: `fadeInRight 0.8s ease ${delay}s both`,
  '@keyframes fadeInRight': {
    '0%': { opacity: 0, transform: 'translateX(30px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  }
});

export const slideInUp = (delay = 0) => ({
  animation: `slideInUp 0.4s ease ${delay}s both`,
  '@keyframes slideInUp': {
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  }
});

export const scaleIn = (delay = 0) => ({
  animation: `scaleIn 0.4s ease ${delay}s both`,
  '@keyframes scaleIn': {
    '0%': { opacity: 0, transform: 'scale(0.9)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  }
});

export const pulse = {
  animation: 'pulse 2s infinite',
  '@keyframes pulse': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    '100%': { transform: 'scale(1)' },
  }
};

export const smoothTransition = {
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
};

export const cardHover = {
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.01)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  }
};

export const buttonHover = {
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'rgba(0,0,0,0.04)',
  }
};