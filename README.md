# Dashboard Application

A modern, responsive dashboard application built with React and Material-UI.

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