import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  Divider,
} from '@mui/material';
import {
  BugReport,
  Person,
  Radio,
} from '@mui/icons-material';

const RightSidebar = () => {
  const notifications = [
    {
      icon: <BugReport sx={{ color: '#06b6d4', fontSize: 20 }} />,
      text: 'You have a bug that needs...',
      time: 'Just now',
      bgColor: '#e0f7fa'
    },
    {
      icon: <Person sx={{ color: '#9ca3af', fontSize: 20 }} />,
      text: 'New user registered',
      time: '59 minutes ago',
      bgColor: '#f5f5f5'
    },
    {
      icon: <BugReport sx={{ color: '#06b6d4', fontSize: 20 }} />,
      text: 'You have a bug that needs...',
      time: '12 hours ago',
      bgColor: '#e0f7fa'
    },
    {
      icon: <Radio sx={{ color: '#9ca3af', fontSize: 20 }} />,
      text: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      bgColor: '#f5f5f5'
    }
  ];

  const activities = [
    {
      avatar: '/api/placeholder/32/32',
      text: 'You have a bug that needs...',
      time: 'Just now',
      color: '#10b981'
    },
    {
      avatar: '/api/placeholder/32/32',
      text: 'Released a new version',
      time: '59 minutes ago',
      color: '#8b5cf6'
    },
    {
      avatar: '/api/placeholder/32/32',
      text: 'Submitted a bug',
      time: '12 hours ago',
      color: '#06b6d4'
    },
    {
      avatar: '/api/placeholder/32/32',
      text: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      color: '#374151'
    },
    {
      avatar: '/api/placeholder/32/32',
      text: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      color: '#6b7280'
    }
  ];

  const contacts = [
    { name: 'Natali Craig', avatar: '/api/placeholder/32/32', color: '#6b7280' },
    { name: 'Drew Cano', avatar: '/api/placeholder/32/32', color: '#dc2626' },
    { name: 'Orlando Diggs', avatar: '/api/placeholder/32/32', color: '#d97706' },
    { name: 'Andi Lane', avatar: '/api/placeholder/32/32', color: '#8b5cf6' },
    { name: 'Kate Morrison', avatar: '/api/placeholder/32/32', color: '#ec4899' },
    { name: 'Koray Okumus', avatar: '/api/placeholder/32/32', color: '#06b6d4' }
  ];

  return (
    <Box
      sx={{
        width: 320,
        height: '100vh',
        backgroundColor: 'background.paper',
        borderLeft: '1px solid',
        borderColor: 'divider',
        overflowY: 'auto',
        p: 3,
      }}
    >
      {/* Notifications Section */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
        Notifications
      </Typography>
      
      <List sx={{ p: 0, mb: 4 }}>
        {notifications.map((notification, index) => (
          <ListItem key={index} sx={{ p: 0, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, width: '100%' }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: notification.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {notification.icon}
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    color: 'text.primary',
                    mb: 0.5,
                    lineHeight: 1.4,
                  }}
                >
                  {notification.text}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                  }}
                >
                  {notification.time}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Activities Section */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
        Activities
      </Typography>
      
      <List sx={{ p: 0, mb: 4 }}>
        {activities.map((activity, index) => (
          <ListItem key={index} sx={{ p: 0, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, width: '100%' }}>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: activity.color,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                {activity.text.charAt(0)}
              </Avatar>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    color: 'text.primary',
                    mb: 0.5,
                    lineHeight: 1.4,
                  }}
                >
                  {activity.text}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                  }}
                >
                  {activity.time}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Contacts Section */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
        Contacts
      </Typography>
      
      <List sx={{ p: 0 }}>
        {contacts.map((contact, index) => (
          <ListItem key={index} sx={{ p: 0, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%' }}>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: contact.color,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                {contact.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  color: 'text.primary',
                }}
              >
                {contact.name}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RightSidebar;