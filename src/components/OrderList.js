import React, { useState, useMemo, useCallback } from 'react';
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
  SwapVert as SwapVertIcon,
} from '@mui/icons-material';
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
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [statusFilter, setStatusFilter] = useState('');
  const itemsPerPage = 10;

  const handleSelectAll = useCallback((event) => {
    if (event.target.checked) {
      setSelectedItems(filteredAndSortedOrders.map(order => order.id));
    } else {
      setSelectedItems([]);
    }
  }, []);

  const handleSelectItem = useCallback((id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  }, []);

  const handleSort = useCallback((field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  }, [sortField, sortDirection]);

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = ordersData.filter(order => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = (
        order.id.toLowerCase().includes(searchLower) ||
        order.customer.toLowerCase().includes(searchLower) ||
        order.project.toLowerCase().includes(searchLower) ||
        order.address.toLowerCase().includes(searchLower) ||
        order.status.toLowerCase().includes(searchLower)
      );
      const matchesStatus = !statusFilter || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    if (sortField) {
      filtered.sort((a, b) => {
        let aVal = a[sortField];
        let bVal = b[sortField];
        if (typeof aVal === 'string') {
          aVal = aVal.toLowerCase();
          bVal = bVal.toLowerCase();
        }
        if (sortDirection === 'asc') {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });
    }

    return filtered;
  }, [searchTerm, statusFilter, sortField, sortDirection]);

  const paginatedOrders = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredAndSortedOrders.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedOrders, page, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);

  return (
    <Box sx={{ 
      p: { xs: 1, sm: 2, md: 3 }, 
      backgroundColor: darkMode ? '#1a1a1a' : '#f8fafc', 
      minHeight: '100vh' 
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between', 
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: { xs: 2, sm: 0 },
        mb: 3,
        py: 2,
        px: { xs: 2, sm: 3 },
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
          inputProps={{ 'aria-label': 'Search orders' }}
          sx={{ 
            width: { xs: '100%', sm: 280 },
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
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '40px 1fr 1fr', 
            sm: '50px 1fr 1fr 1fr', 
            md: '60px 1fr 1fr 1fr 1fr 1fr 1fr' 
          }, 
          py: 2, 
          px: { xs: 2, sm: 3 }, 
          backgroundColor: darkMode ? '#2d2d2d' : 'white', 
          borderBottom: darkMode ? '1px solid #404040' : '1px solid #f3f4f6', 
          alignItems: 'center' 
        }}>
          <Checkbox
            checked={selectedItems.length === filteredAndSortedOrders.length && filteredAndSortedOrders.length > 0}
            indeterminate={selectedItems.length > 0 && selectedItems.length < filteredAndSortedOrders.length}
            onChange={handleSelectAll}
            size="small"
            inputProps={{ 'aria-label': 'Select all orders' }}
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
          <Typography 
            variant="body2" 
            onClick={() => handleSort('id')}
            sx={{ 
              color: darkMode ? '#9ca3af' : '#6b7280', 
              fontSize: '0.75rem', 
              fontWeight: 500, 
              textTransform: 'uppercase', 
              display: 'flex', 
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { color: darkMode ? '#d1d5db' : '#374151' }
            }}
          >
            Order ID
            {sortField === 'id' && (
              sortDirection === 'asc' ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
            )}
          </Typography>
          <Typography 
            variant="body2" 
            onClick={() => handleSort('customer')}
            sx={{ 
              color: darkMode ? '#9ca3af' : '#6b7280', 
              fontSize: '0.75rem', 
              fontWeight: 500, 
              textTransform: 'uppercase', 
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { color: darkMode ? '#d1d5db' : '#374151' }
            }}
          >
            User
            {sortField === 'customer' && (
              sortDirection === 'asc' ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
            )}
          </Typography>
          <Typography 
            variant="body2" 
            onClick={() => handleSort('project')}
            sx={{ 
              color: darkMode ? '#9ca3af' : '#6b7280', 
              fontSize: '0.75rem', 
              fontWeight: 500, 
              textTransform: 'uppercase', 
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { color: darkMode ? '#d1d5db' : '#374151' }
            }}
          >
            Project
            {sortField === 'project' && (
              sortDirection === 'asc' ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
            )}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: darkMode ? '#9ca3af' : '#6b7280', 
              fontSize: '0.75rem', 
              fontWeight: 500, 
              textTransform: 'uppercase', 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}
          >
            Address
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: darkMode ? '#9ca3af' : '#6b7280', 
              fontSize: '0.75rem', 
              fontWeight: 500, 
              textTransform: 'uppercase', 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}
          >
            Date
          </Typography>
          <Typography 
            variant="body2" 
            onClick={() => handleSort('status')}
            sx={{ 
              color: darkMode ? '#9ca3af' : '#6b7280', 
              fontSize: '0.75rem', 
              fontWeight: 500, 
              textTransform: 'uppercase', 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { color: darkMode ? '#d1d5db' : '#374151' }
            }}
          >
            Status
            {sortField === 'status' && (
              sortDirection === 'asc' ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
            )}
          </Typography>
        </Box>
        
        {/* Table Rows */}
        {paginatedOrders.map((order, index) => (
          <Box
            key={order.id}
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '40px 1fr 1fr', 
                sm: '50px 1fr 1fr 1fr', 
                md: '60px 1fr 1fr 1fr 1fr 1fr 1fr' 
              },
              py: 2.5,
              px: { xs: 2, sm: 3 },
              alignItems: 'center',
              borderBottom: index < paginatedOrders.length - 1 ? (darkMode ? '1px solid #404040' : '1px solid #f3f4f6') : 'none',
              '&:hover': {
                backgroundColor: darkMode ? '#363636' : '#f9fafb',
              },
              transition: 'background-color 0.2s ease'
            }}
          >
            <Checkbox
              checked={selectedItems.includes(order.id)}
              onChange={() => handleSelectItem(order.id)}
              size="small"
              inputProps={{ 'aria-label': `Select order ${order.id}` }}
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
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 2 }}>
              <Avatar src={order.avatar} sx={{ width: 32, height: 32 }} alt={order.customer} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#e5e7eb' : '#111827', fontWeight: 500 }}>
                {order.customer}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#e5e7eb' : '#111827', display: 'flex', alignItems: 'center' }}>
              {order.project}
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>
                {order.address}
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
              <CalendarToday sx={{ fontSize: 16, color: darkMode ? '#9ca3af' : '#6b7280' }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>
                {order.date}
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
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
      <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mt: 3 }}>
        <Pagination
          count={totalPages}
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