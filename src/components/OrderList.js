import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Checkbox,
  Pagination,
 
 
} from '@mui/material';
import {
  Add,
  FilterList,
  CalendarToday,
  KeyboardArrowUp,
  KeyboardArrowDown,
  SwapVert as SwapVertIcon,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedButton from './common/AnimatedButton';
import SearchField from './common/SearchField';
import { useStaggeredAnimation } from '../hooks/useAnimatedList';
import { STATUS_COLORS } from '../constants/theme';
// Contact icons for user avatars
import ContactIcon1 from '../assets/icons/contacts/IconSet (4).png';
import ContactIcon2 from '../assets/icons/contacts/IconSet (5).png';
import ContactIcon3 from '../assets/icons/contacts/IconSet (6).png';
import ContactIcon4 from '../assets/icons/contacts/IconSet (7).png';
import ContactIcon5 from '../assets/icons/contacts/IconSet (8).png';


// TODO: Move this to a separate data file later
const mockOrdersData = [
  { id: '#CM9801', customer: 'Natali Craig', avatar: ContactIcon1, project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM9802', customer: 'Kate Morrison', avatar: ContactIcon5, project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM9803', customer: 'Drew Cano', avatar: ContactIcon2, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM9804', customer: 'Orlando Diggs', avatar: ContactIcon3, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM9805', customer: 'Andi Lane', avatar: ContactIcon4, project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  // Adding more entries for pagination testing
  { id: '#CM9806', customer: 'Natali Craig', avatar: ContactIcon1, project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM9807', customer: 'Kate Morrison', avatar: ContactIcon5, project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM9808', customer: 'Drew Cano', avatar: ContactIcon2, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM9809', customer: 'Orlando Diggs', avatar: ContactIcon3, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM9810', customer: 'Andi Lane', avatar: ContactIcon4, project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
];

const getStatusColor = (status) => STATUS_COLORS[status] || STATUS_COLORS.Rejected;

const OrderList = () => {
  const { darkMode } = useTheme();
 

  const [searchQuery, setSearchQuery] = useState('');
  const [checkedItems, setCheckedItems] = useState(['#CM9804']);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const ITEMS_PER_PAGE = 10;

  // Handle individual item selection
  const handleItemSelect = (orderId) => {
    setCheckedItems(prevItems => {
      if (prevItems.includes(orderId)) {
        // Remove if already selected
        return prevItems.filter(item => item !== orderId);
      } else {
        // Add to selection
        return [...prevItems, orderId];
      }
    });
  };

  const handleSortClick = (fieldName) => {
    if (sortBy === fieldName) {
      // Toggle direction if same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, start with ascending
      setSortBy(fieldName);
      setSortOrder('asc');
    }
  };

  // Filter and search logic
  let processedOrders = mockOrdersData;
  
  // Apply search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    // console.log('Filtering with query:', query); // keeping for debugging
    
    processedOrders = processedOrders.filter(order => {
      const searchableFields = [
        order.id,
        order.customer,
        order.project,
        order.address,
        order.status
      ];
      
      return searchableFields.some(field => 
        field.toLowerCase().includes(query)
      );
    });
  }

  // Apply sorting if needed
  if (sortBy) {
    processedOrders = [...processedOrders].sort((orderA, orderB) => {
      let valueA = orderA[sortBy];
      let valueB = orderB[sortBy];
      
      // Handle string comparison
      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }
      
      let comparison = 0;
      if (valueA > valueB) {
        comparison = 1;
      } else if (valueA < valueB) {
        comparison = -1;
      }
      
      return sortOrder === 'desc' ? comparison * -1 : comparison;
    });
  }

  const handleSelectAllToggle = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // Select all visible orders
      const allIds = processedOrders.map(order => order.id);
      setCheckedItems(allIds);
    } else {
      // Clear all selections
      setCheckedItems([]);
    }
  };

  // Pagination calculations
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedOrders = processedOrders.slice(startIdx, endIdx);
  const totalPages = Math.ceil(processedOrders.length / ITEMS_PER_PAGE);
  
  const animationDelays = useStaggeredAnimation(paginatedOrders.length);

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
        boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: darkMode ? '0 8px 25px rgba(0,0,0,0.4)' : '0 8px 25px rgba(0,0,0,0.15)',
          transform: 'translateY(-2px)',
        }
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AnimatedButton
            animationDelay={0.1}
            hoverRotation={90}
            sx={{
              p: 1.5,
              backgroundColor: darkMode ? '#404040' : '#f9fafb',
              border: darkMode ? '1px solid #555' : '1px solid #e5e7eb',
              borderRadius: 1.5,
            }}
          >
            <Add fontSize="small" sx={{ color: darkMode ? '#d1d5db' : '#374151' }} />
          </AnimatedButton>
          
          <AnimatedButton
            animationDelay={0.2}
            sx={{
              p: 1.5,
              backgroundColor: darkMode ? '#404040' : '#f9fafb',
              border: darkMode ? '1px solid #555' : '1px solid #e5e7eb',
              borderRadius: 1.5,
            }}
          >
            <FilterList fontSize="small" sx={{ color: darkMode ? '#d1d5db' : '#374151' }} />
          </AnimatedButton>
          
          <AnimatedButton
            animationDelay={0.3}
            hoverRotation={180}
            sx={{
              p: 1.5,
              backgroundColor: darkMode ? '#404040' : '#f9fafb',
              border: darkMode ? '1px solid #555' : '1px solid #e5e7eb',
              borderRadius: 1.5,
            }}
          >
            <SwapVertIcon fontSize="small" sx={{ color: darkMode ? '#d1d5db' : '#374151' }} />
          </AnimatedButton>
   
        </Box>
        <SearchField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          darkMode={darkMode}
          animationDelay={0.2}
          sx={{ width: { xs: '100%', sm: 280 } }}
          inputProps={{ 'aria-label': 'Search orders' }}
        />
      </Box>

      {/* Table */}
      <Box sx={{ 
        backgroundColor: darkMode ? '#2d2d2d' : 'white', 
        borderRadius: 2, 
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: darkMode ? '0 12px 40px rgba(0,0,0,0.5)' : '0 12px 40px rgba(0,0,0,0.1)',
          transform: 'translateY(-4px)',
        }
      }}>
        <Box sx={{ overflowX: 'auto', minWidth: { xs: '700px', md: 'auto' } }}>
          {/* Table Header */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: '60px 1fr 1fr 1fr 1fr 1fr 1fr', 
            // py: 2, 
            px: { xs: 2, sm: 3 }, 
            backgroundColor: darkMode ? '#2d2d2d' : 'white', 
            borderBottom: darkMode ? '1px solid #404040' : '1px solid #f3f4f6', 
            alignItems: 'center' 
          }}>
          <Checkbox
            checked={checkedItems.length === processedOrders.length && processedOrders.length > 0}
            indeterminate={checkedItems.length > 0 && checkedItems.length < processedOrders.length}
            onChange={handleSelectAllToggle}
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
            onClick={() => handleSortClick('id')}
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
            {sortBy === 'id' && (
              sortOrder === 'asc' ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
            )}
          </Typography>
          <Typography 
            variant="body2" 
            onClick={() => handleSortClick('customer')}
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
            User
            {sortBy === 'customer' && (
              sortOrder === 'asc' ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
            )}
          </Typography>
          <Typography 
            variant="body2" 
            onClick={() => handleSortClick('project')}
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
            {sortBy === 'project' && (
              sortOrder === 'asc' ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
            )}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: darkMode ? '#9ca3af' : '#6b7280', 
              fontSize: '0.75rem', 
              fontWeight: 500, 
              textTransform: 'uppercase', 
              display: 'flex',
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
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Date
          </Typography>
          <Typography 
            variant="body2" 
            onClick={() => handleSortClick('status')}
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
            Status
            {sortBy === 'status' && (
              sortOrder === 'asc' ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
            )}
          </Typography>
        </Box>
        
        {/* Table Rows */}
          {paginatedOrders.map((order, index) => (
            <Box
              key={order.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 1fr 1fr 1fr 1fr 1fr',
                py: 1.5,
                px: { xs: 2, sm: 3 },
                alignItems: 'center',
                borderBottom: index < paginatedOrders.length - 1 ? (darkMode ? '1px solid #404040' : '1px solid #f3f4f6') : 'none',
                animation: `fadeInUp 0.4s ease ${animationDelays[index]}s both`,
                '&:hover': {
                  backgroundColor: darkMode ? '#363636' : '#f9fafb',
                  transform: 'translateX(4px)',
                },
                transition: 'all 0.2s ease',
                '@keyframes fadeInUp': {
                  '0%': { opacity: 0, transform: 'translateY(10px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                }
              }}
            >
            <Checkbox
              checked={checkedItems.includes(order.id)}
              onChange={() => handleItemSelect(order.id)}
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src={order.avatar} sx={{ width: 32, height: 32 }} alt={order.customer} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#e5e7eb' : '#111827', fontWeight: 500 }}>
                {order.customer}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#e5e7eb' : '#111827' }}>
              {order.project}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>
              {order.address}
            </Typography>
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
      </Box>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mt: 3 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, newPage) => setCurrentPage(newPage)}
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