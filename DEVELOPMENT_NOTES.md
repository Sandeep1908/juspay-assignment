# Development Notes

## Personal Setup & Thoughts

### Initial Setup Issues
- Had some trouble with Material-UI theme switching initially
- Decided to use Context API instead of prop drilling for theme management
- Font loading was tricky - ended up using Inter from Google Fonts

### Component Architecture Decisions
- Kept components in separate files for better organization
- Used custom icons from assets folder instead of Material-UI icons for brand consistency
- OrderList component was the most complex - had to handle search, sorting, and pagination

### Performance Optimizations
- Added useMemo and useCallback in several places to prevent unnecessary re-renders
- Moved static data outside components to avoid recreation on each render
- Used proper dependency arrays for hooks

### Known Issues & TODOs
- [ ] Search functionality could be improved with debouncing
- [ ] Add proper error boundaries
- [ ] Implement proper routing with React Router
- [ ] Add unit tests
- [ ] Optimize bundle size
- [ ] Add loading states for better UX

### Color Scheme Notes
- Dark mode colors: Background #1a1a1a, Cards #2d2d2d
- Light mode: Background #f8fafc, Cards white
- Status colors: Complete #10b981, In Progress #3b82f6, etc.

### Development Environment
- Using VS Code with ES7+ React snippets
- Node.js version 18.x
- npm for package management

### Debugging Tips
- Console logs left in for development (should remove for production)
- React DevTools helpful for component state inspection
- Chrome DevTools for performance profiling