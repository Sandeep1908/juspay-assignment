import React, { useState } from 'react';
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

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);

  const notifications = [
    { id: 1, message: 'You have a bug that needs...', time: 'Just now', type: 'bug' },
    { id: 2, message: 'New user registered', time: '59 minutes ago', type: 'user' },
    { id: 3, message: 'You have a bug that needs...', time: '12 hours ago', type: 'bug' },
    { id: 4, message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', type: 'subscription' },
  ];

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setNotificationAnchor(null);
    setProfileAnchor(null);
  };

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
                backgroundColor: darkMode?"black":'grey.50',
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
          <IconButton color="inherit" onClick={handleNotificationClick}>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          {/* Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={handleProfileClick}>
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
          anchorEl={notificationAnchor}
          open={Boolean(notificationAnchor)}
          onClose={handleClose}
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
            {notifications.map((notification) => (
              <ListItem key={notification.id} sx={{ py: 1.5, px: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, width: '100%' }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: notification.type === 'bug' ? 'primary.main' : 'warning.main',
                      mt: 1,
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      {notification.message}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {notification.time}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </Menu>

        {/* Profile Menu */}
        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={handleClose}
          PaperProps={{
            sx: { width: 200, mt: 1 },
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;