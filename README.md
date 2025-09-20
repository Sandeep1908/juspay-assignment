# Dashboard Application

A modern, responsive dashboard application built with React and Material-UI.

## 🚀 Live Demo

**Deployed Application:** [https://juspay-assignment-pi.vercel.app/](https://juspay-assignment-pi.vercel.app/)

## 📋 Deliverables

### 1. GitHub Repository
**Repository Link:** [https://github.com/Sandeep1908/juspay-assignment](https://github.com/Sandeep1908/juspay-assignment)
- Clean and organized code structure
- Proper commit history
- Complete documentation

### 2. Deployed Application
**Live Demo:** [https://juspay-assignment-pi.vercel.app/](https://juspay-assignment-pi.vercel.app/)
- Hosted on Vercel
- Production-ready build
- Cross-browser compatible

### 3. Video Walkthrough
**Demo Video:** [https://www.loom.com/share/17be28b36af84184b66f27c519e43f18?sid=4353c3df-d152-449e-9cd9-d9b9e99acac2](https://www.loom.com/share/17be28b36af84184b66f27c519e43f18?sid=4353c3df-d152-449e-9cd9-d9b9e99acac2)
- Functionality demonstration
- Code approach explanation
- Feature walkthrough

## ✨ Features Implemented

### Core Functionality
- ✅ **Responsive Dashboard** - Works on desktop, tablet, and mobile
- ✅ **Dark/Light Theme Toggle** - Persistent theme switching
- ✅ **Real-time Search** - Instant search across all order fields
- ✅ **Multi-column Sorting** - Sort by ID, Customer, Project, Status
- ✅ **Advanced Filtering** - Filter and search functionality
- ✅ **Pagination** - Efficient data pagination with page controls
- ✅ **Interactive Charts** - Dynamic data visualization
- ✅ **Statistics Cards** - Real-time metrics display

### Technical Features
- ✅ **Modern React** - Hooks, Context API, ES6+
- ✅ **Material-UI Integration** - Complete theming system
- ✅ **Performance Optimized** - useMemo, useCallback optimizations
- ✅ **Cross-browser Compatible** - Chrome, Firefox, Safari, Edge
- ✅ **Pixel-perfect Design** - Exact implementation of provided designs
- ✅ **Smooth Animations** - Hover effects and transitions

## How to Run This Project

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sandeep1908/juspay-assignment.git
   cd juspay-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run serve
```

That's it! The application should now be running locally.

## Project Structure

```
├── public/                  # Static assets and HTML template
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Sidebar.js       # Left navigation sidebar
│   │   ├── Header.js        # Top header with search and theme toggle
│   │   ├── RightSidebar.js  # Right panel with notifications
│   │   ├── Charts.js        # Dashboard charts and graphs
│   │   ├── StatsCards.js    # Statistics cards component
│   │   └── OrderList.js     # Orders table with search/sort/filter
│   ├── contexts/            # React Context providers
│   │   └── ThemeContext.js  # Dark/Light theme state management
│   ├── pages/               # Page components
│   │   └── OrderListPage.js # Orders page wrapper
│   ├── assets/              # Images, icons, and static files
│   │   └── icons/           # Custom SVG icons
│   ├── theme.js             # Material-UI theme configuration
│   ├── App.js               # Main application component
│   └── index.js             # Application entry point
├── package.json             # Dependencies and npm scripts
└── README.md                # Project documentation
```

## What Each Folder Does

- **`src/components/`** - Contains all reusable UI components like sidebar, header, charts, and tables
- **`src/contexts/`** - Houses React Context providers for global state management (theme, etc.)
- **`src/pages/`** - Page-level components that combine multiple components
- **`src/assets/`** - Static files like images, icons, and other media
- **`public/`** - Static files served directly by the web server
- **`src/theme.js`** - Defines the visual styling and colors for light/dark modes