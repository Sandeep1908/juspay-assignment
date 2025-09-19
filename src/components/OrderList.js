import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  TextField,
  InputAdornment,
  Checkbox,
  IconButton,
  Pagination,
} from '@mui/material';
import {
  Search,
  Add,
  FilterList,
  CalendarToday,
  MoreHoriz,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from '@mui/icons-material';


import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useTheme } from '../contexts/ThemeContext';
// Contact icons for user avatars
import ContactIcon1 from '../assets/icons/contacts/IconSet (4).png';
import ContactIcon2 from '../assets/icons/contacts/IconSet (5).png';
import ContactIcon3 from '../assets/icons/contacts/IconSet (6).png';
import ContactIcon4 from '../assets/icons/contacts/IconSet (7).png';
import ContactIcon5 from '../assets/icons/contacts/IconSet (8).png';
import ContactIcon6 from '../assets/icons/contacts/IconSet (9).png';

const ordersData = [
  { id: '#CM9801', customer: 'Natali Craig', avatar: ContactIcon1, project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM9802', customer: 'Kate Morrison', avatar: ContactIcon5, project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM9803', customer: 'Drew Cano', avatar: ContactIcon2, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM9804', customer: 'Orlando Diggs', avatar: ContactIcon3, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM9805', customer: 'Andi Lane', avatar: ContactIcon4, project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  { id: '#CM9801', customer: 'Natali Craig', avatar: ContactIcon1, project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM9802', customer: 'Kate Morrison', avatar: ContactIcon5, project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM9803', customer: 'Drew Cano', avatar: ContactIcon2, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM9804', customer: 'Orlando Diggs', avatar: ContactIcon3, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM9805', customer: 'Andi Lane', avatar: ContactIcon4, project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
];

const getStatusColor = (status) => {
  const colors = {
    'Complete': '#10b981',
    'In Progress': '#3b82f6', 
    'Pending': '#06b6d4',
    'Approved': '#f59e0b',
    'Rejected': '#6b7280',
  };
  return colors[status] || '#6b7280';
};

const OrderList = () => {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState(['#CM9804']);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(filteredOrders.map(order => order.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredOrders = ordersData.filter(order => {
    const searchLower = searchTerm.toLowerCase();
    return (
      order.id.toLowerCase().includes(searchLower) ||
      order.customer.toLowerCase().includes(searchLower) ||
      order.project.toLowerCase().includes(searchLower) ||
      order.address.toLowerCase().includes(searchLower) ||
      order.status.toLowerCase().includes(searchLower)
    );
  });

  return (
    <Box sx={{ p: 3, backgroundColor: darkMode ? '#1a1a1a' : '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 3,
        py: 2,
        px: 3,
        backgroundColor: darkMode ? '#2d2d2d' : 'white',
        borderRadius: 2,
        boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton 
            sx={{ 
              p: 1.5, 
              backgroundColor: darkMode ? '#404040' : '#f9fafb',
              border: darkMode ? '1px solid #555' : '1px solid #e5e7eb', 
              borderRadius: 1.5,
              '&:hover': {
                backgroundColor: darkMode ? '#4a4a4a' : '#f3f4f6'
              }
            }}
          >
            <Add fontSize="small" sx={{ color: darkMode ? '#d1d5db' : '#374151' }} />
          </IconButton>
          <IconButton 
            sx={{ 
              p: 1.5, 
              backgroundColor: darkMode ? '#404040' : '#f9fafb',
              border: darkMode ? '1px solid #555' : '1px solid #e5e7eb', 
              borderRadius: 1.5,
              '&:hover': {
                backgroundColor: darkMode ? '#4a4a4a' : '#f3f4f6'
              }
            }}
          >
            <FilterList fontSize="small" sx={{ color: darkMode ? '#d1d5db' : '#374151' }} />
          </IconButton>
          <IconButton 
            sx={{ 
              p: 1.5, 
              backgroundColor: darkMode ? '#404040' : '#f9fafb',
              border: darkMode ? '1px solid #555' : '1px solid #e5e7eb', 
              borderRadius: 1.5,
              '&:hover': {
                backgroundColor: darkMode ? '#4a4a4a' : '#f3f4f6'
              }
            }}
          >
            <SwapVertIcon fontSize="small" sx={{ color: darkMode ? '#d1d5db' : '#374151' }} />
          </IconButton>
   
        </Box>
        <TextField
          size="small"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ 
            width: 280,
            '& .MuiOutlinedInput-root': {
              backgroundColor: darkMode ? '#404040' : '#f9fafb',
              borderRadius: 3,
              border: darkMode ? '1px solid #555' : '1px solid #e5e7eb',
              fontSize: '0.875rem',
              '&:hover': {
                borderColor: darkMode ? '#666' : '#d1d5db',
              },
              '&.Mui-focused': {
                borderColor: '#3b82f6',
                backgroundColor: darkMode ? '#4a4a4a' : 'white',
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
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ ml: 1 }}>
                <Search fontSize="small" sx={{ color: darkMode ? '#9ca3af' : '#9ca3af' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Table */}
      <Box sx={{ backgroundColor: darkMode ? '#2d2d2d' : 'white', borderRadius: 2, overflow: 'hidden' }}>
        {/* Table Header */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr 1fr 1fr 1fr 1fr', py: 2, px: 3, backgroundColor: darkMode ? '#2d2d2d' : 'white', borderBottom: darkMode ? '1px solid #404040' : '1px solid #f3f4f6', alignItems: 'center' }}>
          <Checkbox
            checked={selectedItems.length === filteredOrders.length && filteredOrders.length > 0}
            indeterminate={selectedItems.length > 0 && selectedItems.length < filteredOrders.length}
            onChange={handleSelectAll}
            size="small"
            sx={{
              color: '#9ca3af',
              '&.Mui-checked': {
                color: darkMode ? '#C6C7F8' : '#000000',
              },
              '&.MuiCheckbox-indeterminate': {
                color: darkMode ? '#C6C7F8' : '#000000',
              }
            }}
          />
          <Typography variant="body2" sx={{ color: darkMode ? '#9ca3af' : '#6b7280', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Order ID</Typography>
          <Typography variant="body2" sx={{ color: darkMode ? '#9ca3af' : '#6b7280', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>User</Typography>
          <Typography variant="body2" sx={{ color: darkMode ? '#9ca3af' : '#6b7280', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Project</Typography>
          <Typography variant="body2" sx={{ color: darkMode ? '#9ca3af' : '#6b7280', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Address</Typography>
          <Typography variant="body2" sx={{ color: darkMode ? '#9ca3af' : '#6b7280', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Date</Typography>
          <Typography variant="body2" sx={{ color: darkMode ? '#9ca3af' : '#6b7280', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>Status</Typography>
        </Box>
        
        {/* Table Rows */}
        {filteredOrders.map((order, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 1fr 1fr 1fr 1fr 1fr',
              py: 2.5,
              px: 3,
              alignItems: 'center',
              borderBottom: index < filteredOrders.length - 1 ? (darkMode ? '1px solid #404040' : '1px solid #f3f4f6') : 'none',
              '&:hover': {
                backgroundColor: darkMode ? '#363636' : '#f9fafb',
              },
            }}
          >
            <Checkbox
              checked={selectedItems.includes(order.id)}
              onChange={() => handleSelectItem(order.id)}
              size="small"
              sx={{
                color: '#9ca3af',
                '&.Mui-checked': {
                  color: darkMode ? '#C6C7F8' : '#000000',
                }
              }}
            />
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: darkMode ? '#e5e7eb' : '#111827', display: 'flex', alignItems: 'center' }}>
              {order.id}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src={order.avatar} sx={{ width: 32, height: 32 }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#e5e7eb' : '#111827', fontWeight: 500 }}>
                {order.customer}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#e5e7eb' : '#111827', display: 'flex', alignItems: 'center' }}>
              {order.project}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>
                {order.address}
              </Typography>
          
              
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <CalendarToday sx={{ fontSize: 16, color: darkMode ? '#9ca3af' : '#6b7280' }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>
                {order.date}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: getStatusColor(order.status),
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: getStatusColor(order.status),
                  fontSize: '0.875rem',
                }}
              >
                {order.status}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Pagination
          count={5}
          page={page}
          onChange={(e, newPage) => setPage(newPage)}
          color="primary"
          size="small"
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '0.875rem',
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default OrderList;