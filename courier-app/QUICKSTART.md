# Quick Start Guide

## Running the Application

1. Navigate to the project directory:
```bash
cd courier-app
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and go to: **http://localhost:3000**

4. You'll be redirected to the login page. Enter any email and password to access the system.

## Navigation

Once logged in, use the sidebar menu to navigate between:

- **Dashboard** - Overview and statistics
- **Shipments** - Main shipment control center
- **Office Staff** - Employee management
- **Clients** - Customer database
- **Drivers & Fleet** - Driver and vehicle tracking
- **Suppliers** - External partner management

## Key Features to Try

### Create a New Shipment
1. Click "Shipments" in the sidebar
2. Click "+ Create New Shipment" button
3. Fill in sender and receiver details
4. Assign a driver
5. Submit the form

### Add Staff/Clients/Drivers/Suppliers
Each management page has an "Add" button that opens a form modal for easy data entry.

## Notes

- This is a front-end demo with simulated data
- All data is stored in component state (resets on page refresh)
- Authentication is simulated using localStorage
- Ready for backend API integration

## Building for Production

```bash
npm run build
npm start
```

This will create an optimized production build and start the server on port 3000.
