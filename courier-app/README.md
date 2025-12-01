# Courier & Logistics Management System

A professional, clean front-end application for managing courier and logistics operations. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### 🔐 Authentication
- Secure login page
- Protected routes (all pages require authentication)

### 📊 Dashboard
- Overview statistics (Total Shipments, Active Drivers, Pending Orders, Total Clients)
- Recent activity feed
- Quick access to all management sections

### 📦 Shipment Control (Main Page)
- View all delivery orders in a clear table
- Track shipments with Tracking ID, Sender/Receiver, Driver, and Status
- Create new shipments with detailed forms
- Status indicators: Picked Up, In Transit, Delivered

### 👥 Office Staff Management
- View all internal employees
- Add new staff members
- Update employee information
- Track roles: Manager, Dispatcher, Warehouse Staff, Customer Service
- Active/Inactive status tracking

### 🏢 Client Management
- Maintain customer database
- Add and update client information
- Track contact and billing details
- Manage business relationships

### 🚚 Driver & Fleet Management
- Track all delivery personnel
- View vehicle assignments
- Monitor driver status (Available/On Delivery)
- Manage driver licenses and contact information

### 🤝 Supplier Management
- Track external partners
- Manage packaging companies and shipping agents
- Store contract details
- Maintain supplier contacts

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Responsive**: Mobile and desktop friendly

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Login with any credentials (authentication is simulated for demo purposes)

## Project Structure

```
courier-app/
├── app/
│   ├── components/
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   └── ProtectedRoute.tsx  # Auth protection
│   ├── dashboard/              # Dashboard page
│   ├── shipments/              # Shipment management
│   ├── staff/                  # Office staff management
│   ├── clients/                # Client management
│   ├── drivers/                # Driver & fleet management
│   ├── suppliers/              # Supplier management
│   ├── login/                  # Login page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home (redirects to login)
│   └── globals.css             # Global styles
└── README.md
```

## Design Features

- **Clean & Professional**: Business-friendly color scheme (blue primary)
- **Responsive Design**: Works seamlessly on phones, tablets, and desktops
- **Easy Navigation**: Side menu with clear icons and labels
- **Data Tables**: Simple, clear tables for viewing all records
- **Modal Forms**: Easy-to-use forms for adding/editing data
- **Status Indicators**: Color-coded badges for quick status recognition

## Color Scheme

- Primary: Blue (#2563EB)
- Success: Green
- Warning: Yellow
- Danger: Red
- Neutral: Gray scale

## Future Enhancements

- Backend API integration
- Real authentication system
- Database connectivity
- Real-time tracking updates
- Advanced filtering and search
- Export functionality
- Print shipping labels
- Analytics and reports

## License

This is a demo application for educational purposes.
