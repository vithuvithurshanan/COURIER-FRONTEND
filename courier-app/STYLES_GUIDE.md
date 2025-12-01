# Styles Guide - Glass Effects & Flying Animations

## Glass Effects

### Basic Glass Card
```jsx
<div className="card glass">
  <h2>Glass Effect Card</h2>
  <p>Content with blur backdrop</p>
</div>
```

### Glass Variants
- `glass` - Standard glass effect (90% opacity, 10px blur)
- `glass-light` - Lighter glass (70% opacity, 8px blur)
- `glass-strong` - Stronger glass (95% opacity, 16px blur)
- `glass-dark` - Dark glass for dark backgrounds
- `glass-panel` - Full glass panel with padding
- `frosted` - Frosted glass with saturation

### Glass Components
```jsx
// Stat Card with Glass
<div className="stat-card">
  <div className="stat-icon gradient-blue">📊</div>
  <h3>Total Shipments</h3>
  <p className="text-3xl font-bold">1,234</p>
</div>

// Table with Glass
<div className="table-container">
  <table>...</table>
</div>

// Modal with Glass
<div className="modal-overlay">
  <div className="modal-content">
    <h2>Modal Title</h2>
    <p>Content</p>
  </div>
</div>
```

## Flying Animations

### Fly-in Animations
```jsx
// From Left
<div className="fly-in-left">Content flies in from left</div>

// From Right
<div className="fly-in-right">Content flies in from right</div>

// From Top
<div className="fly-in-top">Content flies in from top</div>

// From Bottom
<div className="fly-in-bottom">Content flies in from bottom</div>
```

### Continuous Animations
```jsx
// Floating effect
<div className="animate-float">Floats up and down</div>

// Slow floating with horizontal movement
<div className="animate-floatSlow">Floats slowly</div>

// Soaring effect
<div className="soar">Soars like a bird</div>

// Bouncing
<div className="animate-bounce">Bounces continuously</div>
```

### Staggered Animations
```jsx
<div className="fly-in-left delay-100">Item 1</div>
<div className="fly-in-left delay-200">Item 2</div>
<div className="fly-in-left delay-300">Item 3</div>
<div className="fly-in-left delay-400">Item 4</div>
```

## Button Styles (Updated Padding)

### Button Variants
```jsx
// Primary Button - padding: 0.75rem 2rem
<button className="btn-primary">Primary Action</button>

// Secondary Button - padding: 0.75rem 2rem
<button className="btn-secondary">Secondary Action</button>

// Success Button - padding: 0.75rem 2rem
<button className="btn-success">Success Action</button>

// Danger Button - padding: 0.75rem 1.75rem
<button className="btn-danger">Delete</button>
```

### Button Groups
```jsx
// Standard spacing (1rem gap)
<div className="btn-group">
  <button className="btn-primary">Save</button>
  <button className="btn-secondary">Cancel</button>
</div>

// Tight spacing (0.5rem gap)
<div className="btn-group-tight">
  <button className="btn-primary">Edit</button>
  <button className="btn-danger">Delete</button>
</div>
```

### Action Buttons (Updated)
```jsx
// Edit button - padding: 8px 16px
<button className="action-btn action-btn-edit">Edit</button>

// Delete button - padding: 8px 16px
<button className="action-btn action-btn-delete">Delete</button>

// View button - padding: 8px 16px
<button className="action-btn action-btn-view">View</button>
```

## Form Styles (Updated Padding)

### Input Fields
```jsx
// Input field - padding: 0.75rem 1.25rem
<input 
  type="text" 
  className="input-field" 
  placeholder="Enter text"
/>

// Select field - padding: 0.75rem 1.25rem
<select className="select-field">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Form Rows
```jsx
// 2-column form row
<div className="form-row form-row-2">
  <div className="form-group">
    <label className="form-label">First Name</label>
    <input type="text" className="input-field" />
  </div>
  <div className="form-group">
    <label className="form-label">Last Name</label>
    <input type="text" className="input-field" />
  </div>
</div>

// 3-column form row
<div className="form-row form-row-3">
  <div className="form-group">
    <label className="form-label">City</label>
    <input type="text" className="input-field" />
  </div>
  <div className="form-group">
    <label className="form-label">State</label>
    <select className="select-field">...</select>
  </div>
  <div className="form-group">
    <label className="form-label">ZIP</label>
    <input type="text" className="input-field" />
  </div>
</div>

// 4-column form row
<div className="form-row form-row-4">
  <!-- 4 form groups -->
</div>
```

### Form Groups
```jsx
// Standard form group with 1.5rem bottom margin
<div className="form-group">
  <label className="form-label">Email Address</label>
  <input type="email" className="input-field" />
</div>
```

## Special Effects

### Glow Effects
```jsx
<div className="card glow">Blue glow on hover</div>
<div className="card glow-green">Green glow on hover</div>
<div className="card glow-red">Red glow on hover</div>
```

### Shimmer Effect
```jsx
<div className="card shimmer">Shimmering card</div>
```

### Hover Effects
```jsx
// Lift on hover
<div className="hover-lift">Lifts up on hover</div>

// Glass lift on hover
<div className="hover-glass-lift">Glass effect + lift</div>

// Card hover
<div className="card card-hover">Enhanced card hover</div>
```

## Action Bar
```jsx
<div className="action-bar">
  <div>
    <h2>Page Title</h2>
  </div>
  <div className="btn-group">
    <button className="btn-primary">Add New</button>
    <button className="btn-secondary">Export</button>
  </div>
</div>
```

## Complete Example

```jsx
<div className="action-bar fly-in-top">
  <h2>Shipments</h2>
  <div className="btn-group">
    <button className="btn-primary">Add Shipment</button>
    <button className="btn-secondary">Export</button>
  </div>
</div>

<div className="form-row form-row-2 fly-in-left delay-100">
  <div className="form-group">
    <label className="form-label">Tracking Number</label>
    <input type="text" className="input-field" placeholder="Enter tracking number" />
  </div>
  <div className="form-group">
    <label className="form-label">Status</label>
    <select className="select-field">
      <option>Pending</option>
      <option>In Transit</option>
      <option>Delivered</option>
    </select>
  </div>
</div>

<div className="stat-card fly-in-bottom delay-200 animate-float">
  <div className="stat-icon gradient-blue">📦</div>
  <h3>Active Shipments</h3>
  <p className="text-3xl font-bold">156</p>
</div>
```

## Responsive Behavior

All form rows automatically stack on mobile (max-width: 768px):
- `form-row-2`, `form-row-3`, `form-row-4` become single column
- Action bar stacks vertically on mobile
- Button groups wrap when needed
