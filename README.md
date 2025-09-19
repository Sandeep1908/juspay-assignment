# Dashboard Application

A modern, responsive dashboard application built with Next.js, React, and Tailwind CSS. Features pixel-perfect design implementation with comprehensive functionality including filtering, searching, sorting, pagination, and dark/light theme support.

## Features

### 🎨 Design & UI
- **Pixel-perfect implementation** matching Figma designs
- **Responsive design** for desktop, tablet, and mobile devices
- **Dark/Light theme** toggle with smooth transitions
- **Modern UI components** with consistent styling
- **Smooth animations** and microinteractions

### 📊 Dashboard Components
- **Statistics Cards** with trend indicators
- **Interactive Charts** (Bar, Line, Pie charts using Recharts)
- **Revenue Analytics** with current vs previous comparisons
- **Location-based Revenue** breakdown
- **Top Selling Products** table
- **Order Management** with full CRUD operations

### 🔍 Advanced Functionality
- **Real-time Search** across all data tables
- **Advanced Filtering** by status, date, and categories
- **Multi-column Sorting** capabilities
- **Pagination** with customizable page sizes
- **Data Export** functionality
- **Responsive Tables** with horizontal scrolling

### 🚀 Performance & Accessibility
- **Optimized rendering** with minimal re-renders
- **Lazy loading** for improved performance
- **ARIA compliance** for accessibility
- **Keyboard navigation** support
- **Focus management** for better UX

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: React Hooks

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── ui/
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   └── Header.tsx       # Top header with search and notifications
│   └── dashboard/
│       ├── StatsCards.tsx   # Key metrics cards
│       ├── ProjectionsChart.tsx  # Bar chart component
│       ├── RevenueChart.tsx      # Line chart component
│       ├── LocationChart.tsx     # Pie chart component
│       ├── TopProducts.tsx       # Products table
│       └── OrderList.tsx         # Orders table with full functionality
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Key Features Implementation

### 🎯 Responsive Design
- **Mobile-first approach** with Tailwind's responsive utilities
- **Flexible grid layouts** that adapt to screen sizes
- **Collapsible sidebar** for mobile devices
- **Touch-friendly interactions** on mobile

### 🌙 Dark Mode
- **System preference detection**
- **Manual toggle** with persistent state
- **Smooth transitions** between themes
- **Consistent styling** across all components

### 📱 Interactive Components
- **Hover effects** on buttons and cards
- **Loading states** for async operations
- **Form validation** with real-time feedback
- **Modal dialogs** for detailed views

### 🔧 Data Management
- **Client-side filtering** for instant results
- **Debounced search** to optimize performance
- **Sortable columns** with visual indicators
- **Pagination controls** with page size options

## Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',
        600: '#2563eb',
      }
    }
  }
}
```

### Components
All components are modular and can be easily customized:

- **Sidebar**: Modify navigation items in `components/ui/Sidebar.tsx`
- **Charts**: Update data and styling in respective chart components
- **Tables**: Customize columns and data in table components

## Performance Optimizations

- **Code splitting** with Next.js automatic optimization
- **Image optimization** with Next.js Image component
- **Bundle analysis** available with `npm run analyze`
- **Minimal re-renders** using React.memo and useMemo
- **Efficient state management** with local component state

## Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions# juspay-assignment
