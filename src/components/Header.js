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

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
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
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Breadcrumb */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MenuIcon sx={{ color: 'text.secondary', mr: 1, fontSize: '1.2rem' }} />
          <Star sx={{ color: 'text.secondary', mr: 2, fontSize: '1.2rem' }} />
          <Typography variant="body2" color="text.secondary">
            Dashboards
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mx: 1 }}>
            /
          </Typography>
          <Typography variant="body2" color="text.primary" fontWeight={500}>
            Default
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Search */}
          <TextField
            size="small"
            placeholder="Search..."
            sx={{
              width: 250,
              '& .MuiOutlinedInput-root': {
                backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'grey.50',
                borderRadius: 2,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Theme Toggle */}
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>

          {/* Settings */}
          <IconButton color="inherit">
            <Settings />
          </IconButton>

          {/* Notifications */}
          <IconButton color="inherit" onClick={handleNotificationMenuOpen}>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          {/* Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={handleUserMenuOpen}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'grey.300' }}>
              <Person fontSize="small" />
            </Avatar>
            <Typography variant="body2" fontWeight={500}>
              ByeWind
            </Typography>
          </Box>
        </Box>

        {/* Notifications Menu */}
        <Menu
          anchorEl={notifMenuAnchor}
          open={Boolean(notifMenuAnchor)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: { width: 320, mt: 1 },
          }}
        >
          <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight={600}>
              Notifications
            </Typography>
          </Box>
          <List sx={{ p: 0 }}>
            {mockNotifications.map((notif) => (
              <ListItem key={notif.id} sx={{ py: 1.5, px: 2 }}>
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
          PaperProps={{
            sx: { width: 200, mt: 1 },
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;