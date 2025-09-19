import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
} from '@mui/material';

// Notification icons
import NotifIcon1 from '../assets/icons/notification/IconSet.png';
import NotifIcon2 from '../assets/icons/notification/IconSet (1).png';
import NotifIcon3 from '../assets/icons/notification/IconSet (2).png';
import NotifIcon4 from '../assets/icons/notification/IconSet (3).png';
// Activities icons
import ActivityIcon1 from '../assets/icons/activity/IconSet.png';
import ActivityIcon2 from '../assets/icons/activity/IconSet (1).png';
import ActivityIcon3 from '../assets/icons/activity/IconSet (2).png';
import ActivityIcon4 from '../assets/icons/activity/IconSet (3).png';
import Male11 from '../assets/icons/activity/Male11.png';
// Contact icons
import ContactIcon1 from '../assets/icons/contacts/IconSet (4).png';
import ContactIcon2 from '../assets/icons/contacts/IconSet (5).png';
import ContactIcon3 from '../assets/icons/contacts/IconSet (6).png';
import ContactIcon4 from '../assets/icons/contacts/IconSet (7).png';
import ContactIcon5 from '../assets/icons/contacts/IconSet (8).png';
import ContactIcon6 from '../assets/icons/contacts/IconSet (9).png';

const RightSidebar = () => {
  const notifications = [
    {
      icon: NotifIcon1,
      text: 'You have a bug that needs...',
      time: 'Just now',
      bgColor: '#e0f7fa'
    },
    {
      icon: NotifIcon2,
      text: 'New user registered',
      time: '59 minutes ago',
      bgColor: '#f3f4f6'
    },
    {
      icon: NotifIcon3,
      text: 'You have a bug that needs...',
      time: '12 hours ago',
      bgColor: '#e0f7fa'
    },
    {
      icon: NotifIcon4,
      text: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      bgColor: '#f3f4f6'
    }
  ];

  const activities = [
    {
      avatar: ActivityIcon1,
      text: 'You have a bug that needs...',
      time: 'Just now'
    },
    {
      avatar: ActivityIcon2,
      text: 'Released a new version',
      time: '59 minutes ago'
    },
    {
      avatar: ActivityIcon3,
      text: 'Submitted a bug',
      time: '12 hours ago'
    },
    {
      avatar: ActivityIcon4,
      text: 'Modified A data in Page X',
      time: 'Today, 11:59 AM'
    },
    {
      avatar: Male11,
      text: 'Deleted a page in Project X',
      time: 'Feb 2, 2023'
    }
  ];

  const contacts = [
    { name: 'Natali Craig', avatar: ContactIcon1 },
    { name: 'Drew Cano', avatar: ContactIcon2 },
    { name: 'Orlando Diggs', avatar: ContactIcon3 },
    { name: 'Andi Lane', avatar: ContactIcon4 },
    { name: 'Kate Morrison', avatar: ContactIcon5 },
    { name: 'Koray Okumus', avatar: ContactIcon6 }
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
                  width: 32,
                  height: 32,
                  borderRadius: 1.5,
                  backgroundColor: notification.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img src={notification.icon} alt="notification" style={{ width: 16, height: 16 }} />
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
                src={activity.avatar}
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
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
                src={contact.avatar}
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
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