# Styling Guide

## Overview
This application uses a comprehensive styling system with Tailwind CSS and custom CSS classes for a professional, modern look.

## Color Palette

### Primary Colors
- **Blue**: `#3b82f6` - Primary actions, links, active states
- **Indigo**: `#4f46e5` - Accents and gradients
- **Gray**: `#1f2937` to `#f9fafb` - Text, backgrounds, borders

### Status Colors
- **Success/Green**: `#10b981` - Completed, active, positive states
- **Warning/Yellow**: `#f59e0b` - Pending, in-progress states
- **Danger/Red**: `#ef4444` - Errors, delete actions
- **Info/Blue**: `#3b82f6` - Information, neutral actions

## Custom CSS Classes

### Buttons
```css
.btn-primary     - Blue primary button with hover effects
.btn-secondary   - Gray secondary button
.btn-success     - Green success button
.btn-danger      - Red danger button
```

### Cards
```css
.card            - White card with shadow and hover effect
.card-header     - Card header with bottom border
.stat-card       - Dashboard statistics card
.card-hover      - Card with lift animation on hover
```

### Forms
```css
.input-field     - Standard input with focus states
.select-field    - Dropdown select styling
.form-label      - Form label styling
```

### Tables
```css
.table-container - Table wrapper with shadow
.table-header    - Table header with gradient
.table-row       - Table row with hover effect
```

### Badges
```css
.badge-success   - Green status badge
.badge-warning   - Yellow status badge
.badge-info      - Blue status badge
.badge-danger    - Red status badge
.badge-gray      - Gray neutral badge
```

### Sidebar
```css
.sidebar-gradient      - Dark gradient background
.sidebar-link-active   - Active navigation link
.sidebar-link-inactive - Inactive navigation link
```

### Utilities
```css
.hover-lift      - Lift animation on hover
.page-header     - Page title with gradient text
.modal-overlay   - Modal backdrop with blur
.modal-content   - Modal container with animation
```

## Animations

### Available Animations
- `animate-fadeIn` - Fade in effect
- `animate-slideUp` - Slide up from bottom
- `animate-slideDown` - Slide down from top
- `animate-blob` - Floating blob animation (login page)

### Custom Keyframes
```css
@keyframes fadeIn
@keyframes slideUp
@keyframes slideDown
@keyframes pulse
@keyframes loading
@keyframes blob
```

## Component Styling Examples

### Dashboard Stats Card
```tsx
<div className="stat-card hover-lift">
  <div className="stat-icon bg-blue-500">
    {/* Icon */}
  </div>
  <h3 className="text-gray-600 text-sm font-medium">Label</h3>
  <p className="text-3xl font-bold text-gray-800">Value</p>
</div>
```

### Form Input
```tsx
<div>
  <label className="form-label">Field Name</label>
  <input type="text" className="input-field" />
</div>
```

### Action Buttons
```tsx
<button className="btn-primary">Primary Action</button>
<button className="btn-secondary">Cancel</button>
```

### Status Badge
```tsx
<span className="badge-success">Active</span>
<span className="badge-warning">Pending</span>
<span className="badge-danger">Inactive</span>
```

### Table
```tsx
<div className="table-container">
  <table className="min-w-full">
    <thead className="table-header">
      <tr>{/* Headers */}</tr>
    </thead>
    <tbody>
      <tr className="table-row">{/* Data */}</tr>
    </tbody>
  </table>
</div>
```

## Responsive Design

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Grid Layouts
```tsx
// 1 column on mobile, 2 on tablet, 4 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

## Hover & Focus States

All interactive elements include:
- Smooth transitions (200-300ms)
- Focus rings for accessibility
- Hover state color changes
- Active state feedback

## Accessibility

- Focus visible outlines on all interactive elements
- Proper color contrast ratios
- Semantic HTML structure
- ARIA labels where needed

## Dark Mode Support

Currently using light mode. To add dark mode:
1. Add `dark:` prefix to Tailwind classes
2. Update custom CSS with dark mode variants
3. Implement theme toggle in layout

## Performance

- CSS is optimized and minified in production
- Animations use GPU-accelerated properties
- Minimal repaints and reflows
- Efficient selector usage

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips

1. Use utility classes from `globals.css` for consistency
2. Combine Tailwind utilities with custom classes
3. Keep animations subtle and purposeful
4. Test responsive layouts on multiple devices
5. Maintain color consistency across components
