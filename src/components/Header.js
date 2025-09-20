import React, { useState, useMemo, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  InputAdornment,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  Search,
  Notifications,
  Settings,
  DarkMode,
  LightMode,
  Person,
  Menu as MenuIcon,
  Star,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

// Mock notification data - TODO: replace with API call
const mockNotifications = [
  { id: 1, message: 'You have a bug that needs...', time: 'Just now', type: 'bug' },
  { id: 2, message: 'New user registered', time: '59 minutes ago', type: 'user' },
  { id: 3, message: 'You have a bug that needs...', time: '12 hours ago', type: 'bug' },
  { id: 4, message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', type: 'subscription' },
];

const Header = ({ onMenuClick }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('lg'));
  const [notifMenuAnchor, setNotifMenuAnchor] = useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  
  // const [searchQuery, setSearchQuery] = useState(''); // for future search functionality

  const handleNotificationMenuOpen = useCallback((e) => {
    setNotifMenuAnchor(e.currentTarget);
  }, []);

  const handleUserMenuOpen = useCallback((e) => {
    setUserMenuAnchor(e.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setNotifMenuAnchor(null);
    setUserMenuAnchor(null);
  }, []);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3 } }}>
        {/* Left Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={onMenuClick}
              sx={{ 
                mr: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  backgroundColor: 'rgba(0,0,0,0.04)',
                }
              }}
            >
              <MenuIcon sx={{ transition: 'transform 0.2s ease' }} />
            </IconButton>
          )}
          
          {/* Breadcrumb - hidden on mobile */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <MenuIcon sx={{ 
              color: 'text.secondary', 
              mr: 1, 
              fontSize: '1.2rem',
              transition: 'all 0.2s ease',
              '&:hover': { transform: 'scale(1.1)', color: 'text.primary' }
            }} />
            <Star sx={{ 
              color: 'text.secondary', 
              mr: 2, 
              fontSize: '1.2rem',
              transition: 'all 0.2s ease',
              animation: 'twinkle 3s infinite',
              '&:hover': { transform: 'scale(1.2)', color: '#ffd700' },
              '@keyframes twinkle': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.7 },
              }
            }} />
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                transition: 'color 0.2s ease',
                '&:hover': { color: 'text.primary' }
              }}
            >
              Dashboards
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mx: 1 }}>
              /
            </Typography>
            <Typography 
              variant="body2" 
              color="text.primary" 
              fontWeight={500}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              Default
            </Typography>
          </Box>
          
          {/* Mobile title */}
          {isMobile && (
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                animation: 'fadeInLeft 0.5s ease',
                '@keyframes fadeInLeft': {
                  '0%': { opacity: 0, transform: 'translateX(-20px)' },
                  '100%': { opacity: 1, transform: 'translateX(0)' },
                }
              }}
            >
              ByeWind
            </Typography>
          )}
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          {/* Search - responsive width */}
          {!isMobile && (
            <TextField
              size="small"
              placeholder="Search..."
              sx={{
                width: { sm: 200, md: 250 },
                transition: 'all 0.3s ease',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'grey.50',
                  borderRadius: 2,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.08)' : 'grey.100',
                    transform: 'scale(1.02)',
                  },
                  '&.Mui-focused': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search 
                      fontSize="small" 
                      color="action" 
                      sx={{
                        transition: 'transform 0.2s ease',
                        '&:hover': { transform: 'rotate(15deg)' }
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
          
          {/* Mobile search icon */}
          {isMobile && (
            <IconButton 
              color="inherit"
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.1) rotate(15deg)',
                  backgroundColor: 'rgba(0,0,0,0.04)',
                }
              }}
            >
              <Search />
            </IconButton>
          )}

          {/* Theme Toggle */}
          <IconButton 
            onClick={toggleDarkMode} 
            color="inherit"
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'rotate(180deg) scale(1.1)',
                backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
              }
            }}
          >
            <Box sx={{ 
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center'
            }}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </Box>
          </IconButton>

          {/* Settings - hidden on mobile */}
          {!isMobile && (
            <IconButton 
              color="inherit"
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'rotate(90deg) scale(1.05)',
                  backgroundColor: 'rgba(0,0,0,0.04)',
                }
              }}
            >
              <Settings sx={{ transition: 'transform 0.2s ease' }} />
            </IconButton>
          )}

          {/* Notifications */}
          <IconButton 
            color="inherit" 
            onClick={handleNotificationMenuOpen}
            sx={{
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: 'rgba(0,0,0,0.04)',
              }
            }}
          >
            <Badge 
              badgeContent={4} 
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                  }
                }
              }}
            >
              <Notifications sx={{ 
                transition: 'transform 0.2s ease',
                '&:hover': { transform: 'rotate(15deg)' }
              }} />
            </Badge>
          </IconButton>

          {/* Profile */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1, 
              cursor: 'pointer',
              p: 0.5,
              borderRadius: 2,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
                transform: 'translateY(-1px)',
              }
            }} 
            onClick={handleUserMenuOpen}
          >
            <Avatar 
              sx={{ 
                width: 32, 
                height: 32, 
                bgcolor: 'grey.300',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }
              }}
            >
              <Person fontSize="small" />
            </Avatar>
            {!isMobile && (
              <Typography 
                variant="body2" 
                fontWeight={500}
                sx={{ transition: 'color 0.2s ease' }}
              >
                ByeWind
              </Typography>
            )}
          </Box>
        </Box>

        {/* Notifications Menu */}
        <Menu
          anchorEl={notifMenuAnchor}
          open={Boolean(notifMenuAnchor)}
          onClose={handleMenuClose}
          TransitionProps={{
            timeout: 300,
          }}
          PaperProps={{
            sx: { 
              width: 320, 
              mt: 1,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              animation: Boolean(notifMenuAnchor) ? 'slideIn 0.3s ease' : 'none',
              '@keyframes slideIn': {
                '0%': { opacity: 0, transform: 'translateY(-10px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              }
            },
          }}
        >
          <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight={600}>
              Notifications
            </Typography>
          </Box>
          <List sx={{ p: 0 }}>
            {mockNotifications.map((notif, index) => (
              <ListItem 
                key={notif.id} 
                sx={{ 
                  py: 1.5, 
                  px: 2,
                  transition: 'all 0.2s ease',
                  animation: `fadeInUp 0.3s ease ${index * 0.1}s both`,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.02)',
                    transform: 'translateX(4px)',
                  },
                  '@keyframes fadeInUp': {
                    '0%': { opacity: 0, transform: 'translateY(10px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, width: '100%' }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: notif.type === 'bug' ? 'primary.main' : 'warning.main',
                      mt: 1,
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      {notif.message}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {notif.time}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </Menu>

        {/* Profile Menu */}
        <Menu
          anchorEl={userMenuAnchor}
          open={Boolean(userMenuAnchor)}
          onClose={handleMenuClose}
          TransitionProps={{
            timeout: 300,
          }}
          PaperProps={{
            sx: { 
              width: 200, 
              mt: 1,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            },
          }}
        >
          {['Profile', 'Settings', 'Logout'].map((item, index) => (
            <MenuItem 
              key={item}
              onClick={handleMenuClose}
              sx={{
                transition: 'all 0.2s ease',
                animation: `fadeInUp 0.2s ease ${index * 0.05}s both`,
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                  transform: 'translateX(4px)',
                },
                '@keyframes fadeInUp': {
                  '0%': { opacity: 0, transform: 'translateY(5px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                }
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;