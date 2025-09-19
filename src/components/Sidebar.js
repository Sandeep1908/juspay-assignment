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
  Divider,
  Collapse,
} from '@mui/material';
import {
  Dashboard,
  FolderOpen,
  People,
  ShoppingCart,
  MenuBook,
  Person,
  Campaign,
  Description,
  Group,
  AccountBalance,
  Business,
  Article,
  Public,
  ChevronRight,
  ExpandMore,
} from '@mui/icons-material';

const drawerWidth = 200;

const favoriteItems = [
  { icon: Dashboard, label: 'Overview', active: false },
  { icon: FolderOpen, label: 'Projects', active: false },
  { icon: People, label: 'Customers', active: false },
  { icon: ShoppingCart, label: 'Orders', active: false },
  { icon: MenuBook, label: 'Online Courses', active: false },
];

const defaultItems = [
  { 
    icon: Person, 
    label: 'User Profile', 
    hasDropdown: true,
    children: [
      { icon: Dashboard, label: 'Overview' },
      { icon: FolderOpen, label: 'Projects' },
      { icon: Campaign, label: 'Campaigns' },
      { icon: Description, label: 'Documents' },
    ]
  },
  { icon: Group, label: 'Followers', hasDropdown: false },
  { icon: AccountBalance, label: 'Account', hasDropdown: false },
  { icon: Business, label: 'Corporate', hasDropdown: false },
  { icon: Article, label: 'Blog', hasDropdown: false },
  { icon: Public, label: 'Social', hasDropdown: false },
];

const Sidebar = ({ onMenuClick }) => {
  const [activeItem, setActiveItem] = useState('Default');
  const [expandedSection, setExpandedSection] = useState('default');
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

  const toggleSection = () => {
    setExpandedSection(expandedSection === 'default' ? '' : 'default');
  };

  const renderMenuItems = (items, section) => (
    items.map((item, index) => (
      <Box key={`${section}-${index}`}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleMenuClick(item)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              backgroundColor: activeItem === item.label ? 'primary.50' : 'transparent',
              color: activeItem === item.label ? 'primary.main' : 'text.primary',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: activeItem === item.label ? 'primary.100' : 'action.hover',
                transform: 'translateX(4px)',
              },
            }}
          >
            {expandedItems[item.label] ? 
              <ExpandMore fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} /> : 
              <ChevronRight fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} />
            }
            <ListItemIcon
              sx={{
                color: activeItem === item.label ? 'primary.main' : 'text.secondary',
                minWidth: 32,
              }}
            >
              <item.icon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '0.7rem',
                fontWeight: activeItem === item.label ? 600 : 400,
              }}
            />
          </ListItemButton>
        </ListItem>
        {item.hasDropdown && (
          <Collapse in={expandedItems[item.label]}>
            <List sx={{ pl: 2 }}>
              {item.children?.map((child, childIndex) => (
                <ListItem key={`${section}-${index}-${childIndex}`} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      setActiveItem(child.label);
                      if (onMenuClick) onMenuClick(child.label);
                    }}
                    sx={{
                      borderRadius: 2,
                      mx: 1,
                      mb: 0.5,
                      backgroundColor: activeItem === child.label ? 'primary.50' : 'transparent',
                      color: activeItem === child.label ? 'primary.main' : 'text.primary',
                      '&:hover': {
                        backgroundColor: activeItem === child.label ? 'primary.100' : 'action.hover',
                      },
                    }}
                  >
                    <ChevronRight fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} />
                    <ListItemIcon
                      sx={{
                        color: activeItem === child.label ? 'primary.main' : 'text.secondary',
                        minWidth: 32,
                      }}
                    >
                      <child.icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={child.label}
                      primaryTypographyProps={{
                        fontSize: '0.6rem',
                        fontWeight: activeItem === child.label ? 600 : 400,
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
      <Box sx={{ p: 3 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: 'text.primary',
              mr: 1,
              fontSize: '0.875rem',
              fontWeight: 700,
            }}
          >
            B
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            ByeWind
          </Typography>
        </Box>

        {/* Favorites Section */}
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontWeight: 500,
            mb: 1,
            display: 'block',
          }}
        >
          Favorites
        </Typography>
        <List sx={{ mb: 1 }}>
          {renderMenuItems(favoriteItems, 'favorites')}
        </List>

        {/* Default Section */}
        <ListItemButton
          onClick={toggleSection}
          sx={{
            borderRadius: 2,
            mx: 1,
            mb: 1,
            px: 1,
          }}
        >
          <Avatar
            sx={{
              width: 16,
              height: 16,
              bgcolor: 'primary.main',
              mr: 1,
              fontSize: '0.625rem',
              fontWeight: 700,
            }}
          >
            D
          </Avatar>
          <Typography variant="body2" sx={{ fontWeight: 500, flex: 1 }}>
            Default
          </Typography>
          {expandedSection === 'default' ? <ExpandMore fontSize="small" /> : <ChevronRight fontSize="small" />}
        </ListItemButton>
        <Collapse in={expandedSection === 'default'}>
          <List>
            {renderMenuItems(defaultItems, 'default')}
          </List>
        </Collapse>
      </Box>
    </Drawer>
  );
};

export default Sidebar;