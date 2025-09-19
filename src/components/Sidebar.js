import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Avatar,
  Collapse,
} from '@mui/material';
import {
  ChevronRight,
  ExpandMore,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
// Light theme sidebar icons
import SidebarIcon1 from '../assets/icons/sidebar/IconSet (10).png';
import SidebarIcon2 from '../assets/icons/sidebar/IconSet (11).png';
import SidebarIcon3 from '../assets/icons/sidebar/IconSet (12).png';
import SidebarIcon4 from '../assets/icons/sidebar/IconSet (13).png';
import SidebarIcon5 from '../assets/icons/sidebar/IconSet (14).png';
import SidebarIcon6 from '../assets/icons/sidebar/IconSet (15).png';
import SidebarIcon7 from '../assets/icons/sidebar/IconSet (16).png';
import ChatsIcon from '../assets/icons/sidebar/ChatsTeardrop.png';
import ShoppingIcon from '../assets/icons/sidebar/ShoppingBagOpen.png';
// Dark theme sidebar icons
import DarkSidebarIcon1 from '../assets/icons/sidebar/dark/IconSet (17).png';
import DarkSidebarIcon2 from '../assets/icons/sidebar/dark/IconSet (18).png';
import DarkSidebarIcon3 from '../assets/icons/sidebar/dark/IconSet (19).png';
import DarkSidebarIcon4 from '../assets/icons/sidebar/dark/IconSet (20).png';
import DarkSidebarIcon5 from '../assets/icons/sidebar/dark/IconSet (21).png';
import DarkSidebarIcon6 from '../assets/icons/sidebar/dark/IconSet (22).png';
import DarkIdentificationCard from '../assets/icons/sidebar/dark/IdentificationCard.png';
import DarkNotebook from '../assets/icons/sidebar/dark/Notebook.png';
import DarkShoppingIcon from '../assets/icons/sidebar/dark/ShoppingBagOpen (1).png';

const drawerWidth = 240;

const getFavoriteItems = (darkMode) => [
  { icon: darkMode ? DarkSidebarIcon1 : SidebarIcon1, label: 'Overview' },
  { icon: darkMode ? DarkSidebarIcon2 : SidebarIcon2, label: 'Projects' },
];

const getDashboardItems = (darkMode) => [
  { icon: darkMode ? DarkSidebarIcon3 : SidebarIcon3, label: 'Default', active: true },
  { icon: darkMode ? DarkShoppingIcon : ShoppingIcon, label: 'eCommerce' },
  { icon: darkMode ? DarkSidebarIcon2 : SidebarIcon2, label: 'Projects' },
  { icon: darkMode ? DarkNotebook : SidebarIcon4, label: 'Online Courses' },
  { icon: darkMode ? DarkSidebarIcon6 : ChatsIcon, label: 'Orders' },
];

const getPageItems = (darkMode) => [
  { 
    icon: darkMode ? DarkIdentificationCard : SidebarIcon5, 
    label: 'User Profile', 
    hasDropdown: true,
    children: [
      { label: 'Overview' },
      { label: 'Projects' },
      { label: 'Campaigns' },
      { label: 'Documents' },
      { label: 'Followers' },
    ]
  },
  { icon: darkMode ? DarkSidebarIcon4 : SidebarIcon6, label: 'Account' },
  { icon: darkMode ? DarkSidebarIcon5 : SidebarIcon7, label: 'Corporate' },
  { icon: darkMode ? DarkSidebarIcon6 : ChatsIcon, label: 'Blog' },
  { icon: darkMode ? DarkSidebarIcon1 : SidebarIcon1, label: 'Social' },
];

const Sidebar = ({ onMenuClick }) => {
  const { darkMode } = useTheme();
  const [activeItem, setActiveItem] = useState('Default');
  const [expandedItems, setExpandedItems] = useState({});

  const handleMenuClick = (item) => {
    if (item.hasDropdown) {
      setExpandedItems(prev => ({
        ...prev,
        [item.label]: !prev[item.label]
      }));
    } else {
      setActiveItem(item.label);
      if (onMenuClick) {
        onMenuClick(item.label);
      }
    }
  };

  const renderMenuItems = (items, showIcon = true) => (
    items.map((item, index) => (
      <Box key={index}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleMenuClick(item)}
            sx={{
              py: 1,
              px: 2,
              borderRadius: 1,
              mb: 0.5,
              backgroundColor: (activeItem === item.label || item.active) ? 'rgba(0,0,0,0.08)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
              },
            }}
          >
            {item.hasDropdown && (
              <Box sx={{ mr: 1 }}>
                {expandedItems[item.label] ? 
                  <ExpandMore fontSize="small" sx={{ color: 'text.secondary' }} /> : 
                  <ChevronRight fontSize="small" sx={{ color: 'text.secondary' }} />
                }
              </Box>
            )}
            {showIcon && item.icon && (
              <ListItemIcon sx={{ minWidth: 32 }}>
                <img src={item.icon} alt={item.label} style={{ width: 16, height: 16 }} />
              </ListItemIcon>
            )}
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '0.875rem',
                fontWeight: (activeItem === item.label || item.active) ? 500 : 400,
                color: 'text.primary',
              }}
            />
          </ListItemButton>
        </ListItem>
        {item.hasDropdown && (
          <Collapse in={expandedItems[item.label]}>
            <List sx={{ pl: 4 }}>
              {item.children?.map((child, childIndex) => (
                <ListItem key={childIndex} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      setActiveItem(child.label);
                      if (onMenuClick) onMenuClick(child.label);
                    }}
                    sx={{
                      py: 0.5,
                      borderRadius: 1,
                      mb: 0.5,
                      backgroundColor: activeItem === child.label ? 'rgba(0,0,0,0.08)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.04)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={child.label}
                      primaryTypographyProps={{
                        fontSize: '0.8rem',
                        fontWeight: activeItem === child.label ? 500 : 400,
                        color: 'text.secondary',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </Box>
    ))
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, px: 1 }}>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              bgcolor: 'text.primary',
              mr: 2,
              fontSize: '0.75rem',
              fontWeight: 700,
            }}
          >
            B
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
            ByeWind
          </Typography>
        </Box>

        {/* Favorites Section */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2, px: 1 }}>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              Favorites
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontSize: '0.75rem',
                fontWeight: 400,
              }}
            >
              Recently
            </Typography>
          </Box>
          <List sx={{ py: 0 }}>
            {renderMenuItems(getFavoriteItems(darkMode), false)}
          </List>
        </Box>

        {/* Dashboards Section */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontSize: '0.75rem',
              fontWeight: 500,
              mb: 1,
              display: 'block',
              px: 1,
            }}
          >
            Dashboards
          </Typography>
          <List sx={{ py: 0 }}>
            {renderMenuItems(getDashboardItems(darkMode))}
          </List>
        </Box>

        {/* Pages Section */}
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontSize: '0.75rem',
              fontWeight: 500,
              mb: 1,
              display: 'block',
              px: 1,
            }}
          >
            Pages
          </Typography>
          <List sx={{ py: 0 }}>
            {renderMenuItems(getPageItems(darkMode))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;