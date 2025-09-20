import React, { useState, useMemo, useCallback } from 'react';
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
  useMediaQuery,
  useTheme as useMuiTheme,
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

const FAVORITE_ITEMS = [
  { lightIcon: SidebarIcon1, darkIcon: DarkSidebarIcon1, label: 'Overview' },
  { lightIcon: SidebarIcon2, darkIcon: DarkSidebarIcon2, label: 'Projects' },
];

const DASHBOARD_ITEMS = [
  { lightIcon: SidebarIcon3, darkIcon: DarkSidebarIcon3, label: 'Default' },
  { lightIcon: ShoppingIcon, darkIcon: DarkShoppingIcon, label: 'eCommerce' },
  { lightIcon: SidebarIcon2, darkIcon: DarkSidebarIcon2, label: 'Projects' },
  { lightIcon: SidebarIcon4, darkIcon: DarkNotebook, label: 'Online Courses' },
  { lightIcon: ChatsIcon, darkIcon: DarkSidebarIcon6, label: 'Orders' },
];

const PAGE_ITEMS = [
  { 
    lightIcon: SidebarIcon5, 
    darkIcon: DarkIdentificationCard, 
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
  { lightIcon: SidebarIcon6, darkIcon: DarkSidebarIcon4, label: 'Account' },
  { lightIcon: SidebarIcon7, darkIcon: DarkSidebarIcon5, label: 'Corporate' },
  { lightIcon: ChatsIcon, darkIcon: DarkSidebarIcon6, label: 'Blog' },
  { lightIcon: SidebarIcon1, darkIcon: DarkSidebarIcon1, label: 'Social' },
];

const Sidebar = ({ onMenuClick, mobileOpen, onMobileClose }) => {
  const { darkMode } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [activeItem, setActiveItem] = useState('Default');
  const [expandedItems, setExpandedItems] = useState({});

  const handleMenuClick = useCallback((item) => {
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
      // Close mobile drawer when item is clicked
      if (isMobile && onMobileClose) {
        onMobileClose();
      }
    }
  }, [onMenuClick, isMobile, onMobileClose]);

  const favoriteItems = useMemo(() => 
    FAVORITE_ITEMS.map(item => ({
      ...item,
      icon: darkMode ? item.darkIcon : item.lightIcon
    })), [darkMode]
  );

  const dashboardItems = useMemo(() => 
    DASHBOARD_ITEMS.map(item => ({
      ...item,
      icon: darkMode ? item.darkIcon : item.lightIcon
    })), [darkMode]
  );

  const pageItems = useMemo(() => 
    PAGE_ITEMS.map(item => ({
      ...item,
      icon: darkMode ? item.darkIcon : item.lightIcon
    })), [darkMode]);

  const renderMenuItems = (items, showIcon = true) => (
    items.map((item, index) => (
      <Box key={index}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleMenuClick(item)}
            
            sx={{
              py: 0.25,
              px: 1,
              borderRadius: 3,
              mb: 0.25,
              minHeight: 32,
              position: 'relative',
              backgroundColor: activeItem === item.label ? (darkMode ? 'rgba(255,255,255,0.08)' : '#f3f4f6') : 'transparent',
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
              },
              '&::before': activeItem === item.label ? {
                content: '""',
                position: 'absolute',
                left: 2,
                top: '20%',
                bottom: '20%',
                width: '3px',
                backgroundColor: darkMode ? '#C6C7F8' : '#000',
                borderRadius: '0 2px 2px 0',
              } : {},
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
              <ListItemIcon sx={{ minWidth: 24, mr: 1 }}>
                <img src={item.icon} alt={item.label} style={{ width: 16, height: 16 }} />
              </ListItemIcon>
            )}
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '0.8rem',
                fontWeight: activeItem === item.label ? 500 : 400,
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
                      if (isMobile && onMobileClose) {
                        onMobileClose();
                      }
                    }}
                    sx={{
                      py: 0.125,
                      px: 0.5,
                      borderRadius: 1,
                      mb: 0.125,
                      minHeight: 28,
                      position: 'relative',
                      backgroundColor: activeItem === child.label ? (darkMode ? 'rgba(255,255,255,0.08)' : '#f3f4f6') : 'transparent',
                      '&:hover': {
                        backgroundColor: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                      },
                      '&::before': activeItem === child.label ? {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '20%',
                        bottom: '20%',
                        width: '3px',
                        backgroundColor: darkMode ? '#C6C7F8' : '#000',
                        borderRadius: '0 2px 2px 0',
                      } : {},
                    }}
                  >
                    <ListItemText
                      primary={child.label}
                      primaryTypographyProps={{
                        fontSize: '0.75rem',
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

  const drawer = (
    <Box sx={{ p: { xs: 2, md: 2 } }}>
      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, px: 1 }}>
        <Avatar
          sx={{
            width: { xs: 28, md: 24 },
            height: { xs: 28, md: 24 },
            bgcolor: 'text.primary',
            mr: 2,
            fontSize: '0.75rem',
            fontWeight: 700,
          }}
        >
          B
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1rem' } }}>
          ByeWind
        </Typography>
      </Box>

        {/* Favorites Section */}
        <Box sx={{ mb: 2 }}>
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
            {renderMenuItems(favoriteItems, false)}
          </List>
        </Box>

        {/* Dashboards Section */}
        <Box sx={{ mb: 2 }}>
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
            {renderMenuItems(dashboardItems)}
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
            {renderMenuItems(pageItems)}
          </List>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: '1px solid',
            borderColor: 'divider',
            transition: 'background-color 0.3s ease, border-color 0.3s ease',
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: '1px solid',
            borderColor: 'divider',
            transition: 'background-color 0.3s ease, border-color 0.3s ease',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;