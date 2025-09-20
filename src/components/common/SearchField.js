import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchField = ({ 
  value, 
  onChange, 
  placeholder = "Search...", 
  darkMode = false,
  animationDelay = 0,
  sx = {},
  ...props 
}) => {
  return (
    <TextField
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={{
        animation: animationDelay > 0 ? `slideInRight 0.4s ease ${animationDelay}s both` : 'none',
        '& .MuiOutlinedInput-root': {
          backgroundColor: darkMode ? '#404040' : '#f9fafb',
          borderRadius: 3,
          border: darkMode ? '1px solid #555' : '1px solid #e5e7eb',
          fontSize: '0.875rem',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: darkMode ? '#666' : '#d1d5db',
            transform: 'scale(1.02)',
          },
          '&.Mui-focused': {
            borderColor: '#3b82f6',
            backgroundColor: darkMode ? '#4a4a4a' : 'white',
            transform: 'scale(1.02)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }
        },
        '& .MuiOutlinedInput-input': {
          py: 1.5,
          px: 2,
          color: darkMode ? '#e5e7eb' : '#6b7280',
          '&::placeholder': {
            color: darkMode ? '#9ca3af' : '#9ca3af',
            opacity: 1
          }
        },
        '@keyframes slideInRight': {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        ...sx
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ ml: 1 }}>
            <Search 
              fontSize="small" 
              sx={{ 
                color: darkMode ? '#9ca3af' : '#9ca3af',
                transition: 'transform 0.2s ease',
                '&:hover': { transform: 'rotate(15deg)' }
              }} 
            />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default SearchField;