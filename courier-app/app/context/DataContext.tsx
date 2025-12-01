'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Client {
  id: number;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
}

interface Driver {
  id: number;
  name: string;
  vehicleId: string;
  license: string;
  phone: string;
  status: string;
}

interface Shipment {
  id: string;
  sender: string;
  receiver: string;
  driver: string;
  status: string;
}

interface Staff {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  status: string;
}

interface Supplier {
  id: number;
  name: string;
  type: string;
  contact: string;
  email: string;
  phone: string;
}

interface DataContextType {
  clients: Client[];
  drivers: Driver[];
  shipments: Shipment[];
  staff: Staff[];
  suppliers: Supplier[];
  setClients: (clients: Client[]) => void;
  setDrivers: (drivers: Driver[]) => void;
  setShipments: (shipments: Shipment[]) => void;
  setStaff: (staff: Staff[]) => void;
  setSuppliers: (suppliers: Supplier[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  const defaultClients: Client[] = [
    { id: 1, name: 'ABC Corporation', contact: 'John Manager', email: 'john@abc.com', phone: '555-1001', address: '123 Business St' },
    { id: 2, name: 'Tech Solutions Ltd', contact: 'Sarah Tech', email: 'sarah@tech.com', phone: '555-1002', address: '456 Innovation Ave' },
    { id: 3, name: 'Retail Store Inc', contact: 'Mike Retail', email: 'mike@retail.com', phone: '555-1003', address: '789 Commerce Blvd' },
    { id: 4, name: 'Global Imports', contact: 'Lisa Global', email: 'lisa@global.com', phone: '555-1004', address: '321 Trade Center' },
  ];

  const defaultDrivers: Driver[] = [
    { id: 1, name: 'John Doe', vehicleId: 'VEH-001', license: 'DL-12345', phone: '555-2001', status: 'Available' },
    { id: 2, name: 'Jane Smith', vehicleId: 'VEH-002', license: 'DL-12346', phone: '555-2002', status: 'On Delivery' },
    { id: 3, name: 'Mike Johnson', vehicleId: 'VEH-003', license: 'DL-12347', phone: '555-2003', status: 'Available' },
    { id: 4, name: 'Sarah Williams', vehicleId: 'VEH-004', license: 'DL-12348', phone: '555-2004', status: 'On Delivery' },
  ];

  const defaultShipments: Shipment[] = [
    { id: 'TRK-2024-001', sender: 'ABC Corp', receiver: 'XYZ Ltd', driver: 'John Doe', status: 'In Transit' },
    { id: 'TRK-2024-002', sender: 'Tech Solutions', receiver: 'Global Inc', driver: 'Jane Smith', status: 'Picked Up' },
    { id: 'TRK-2024-003', sender: 'Retail Store', receiver: 'Customer A', driver: 'Mike Johnson', status: 'Delivered' },
    { id: 'TRK-2024-004', sender: 'Warehouse B', receiver: 'Shop C', driver: 'Sarah Williams', status: 'In Transit' },
  ];

  const defaultStaff: Staff[] = [
    { id: 1, name: 'Alice Johnson', role: 'Manager', email: 'alice@courier.com', phone: '555-0101', status: 'Active' },
    { id: 2, name: 'Bob Smith', role: 'Dispatcher', email: 'bob@courier.com', phone: '555-0102', status: 'Active' },
    { id: 3, name: 'Carol White', role: 'Warehouse Staff', email: 'carol@courier.com', phone: '555-0103', status: 'Active' },
    { id: 4, name: 'David Brown', role: 'Customer Service', email: 'david@courier.com', phone: '555-0104', status: 'Inactive' },
  ];

  const defaultSuppliers: Supplier[] = [
    { id: 1, name: 'Packaging Solutions Inc', type: 'Packaging', contact: 'Tom Pack', email: 'tom@packaging.com', phone: '555-3001' },
    { id: 2, name: 'Regional Shipping Co', type: 'Shipping Agent', contact: 'Emma Ship', email: 'emma@regional.com', phone: '555-3002' },
    { id: 3, name: 'Warehouse Supplies Ltd', type: 'Supplies', contact: 'Jack Store', email: 'jack@warehouse.com', phone: '555-3003' },
    { id: 4, name: 'Fleet Maintenance Pro', type: 'Maintenance', contact: 'Lisa Fix', email: 'lisa@fleet.com', phone: '555-3004' },
  ];

  // Initialize state - try to load from localStorage first, fallback to defaults
  const getInitialData = <T,>(key: string, defaults: T[]): T[] => {
    if (typeof window === 'undefined') return defaults;
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
        // If empty array, clear it and use defaults
        if (Array.isArray(parsed) && parsed.length === 0) {
          localStorage.removeItem(key);
        }
      }
    } catch (e) {
      // Invalid data, use defaults
    }
    return defaults;
  };

  const [clients, setClientsState] = useState<Client[]>(() => getInitialData('clients', defaultClients));
  const [drivers, setDriversState] = useState<Driver[]>(() => getInitialData('drivers', defaultDrivers));
  const [shipments, setShipmentsState] = useState<Shipment[]>(() => getInitialData('shipments', defaultShipments));
  const [staff, setStaffState] = useState<Staff[]>(() => getInitialData('staff', defaultStaff));
  const [suppliers, setSuppliersState] = useState<Supplier[]>(() => getInitialData('suppliers', defaultSuppliers));

  // Mark as mounted for localStorage saves
  useEffect(() => {
    setMounted(true);
  }, []);

  const setClients = (newClients: Client[]) => {
    setClientsState(newClients);
    if (mounted) {
      try {
        // Only save if array has items, otherwise remove from localStorage
        if (newClients.length > 0) {
          localStorage.setItem('clients', JSON.stringify(newClients));
        } else {
          localStorage.removeItem('clients');
        }
      } catch (error) {
        console.error('Error saving clients:', error);
      }
    }
  };

  const setDrivers = (newDrivers: Driver[]) => {
    setDriversState(newDrivers);
    if (mounted) {
      try {
        if (newDrivers.length > 0) {
          localStorage.setItem('drivers', JSON.stringify(newDrivers));
        } else {
          localStorage.removeItem('drivers');
        }
      } catch (error) {
        console.error('Error saving drivers:', error);
      }
    }
  };

  const setShipments = (newShipments: Shipment[]) => {
    setShipmentsState(newShipments);
    if (mounted) {
      try {
        if (newShipments.length > 0) {
          localStorage.setItem('shipments', JSON.stringify(newShipments));
        } else {
          localStorage.removeItem('shipments');
        }
      } catch (error) {
        console.error('Error saving shipments:', error);
      }
    }
  };

  const setStaff = (newStaff: Staff[]) => {
    setStaffState(newStaff);
    if (mounted) {
      try {
        if (newStaff.length > 0) {
          localStorage.setItem('staff', JSON.stringify(newStaff));
        } else {
          localStorage.removeItem('staff');
        }
      } catch (error) {
        console.error('Error saving staff:', error);
      }
    }
  };

  const setSuppliers = (newSuppliers: Supplier[]) => {
    setSuppliersState(newSuppliers);
    if (mounted) {
      try {
        if (newSuppliers.length > 0) {
          localStorage.setItem('suppliers', JSON.stringify(newSuppliers));
        } else {
          localStorage.removeItem('suppliers');
        }
      } catch (error) {
        console.error('Error saving suppliers:', error);
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        clients,
        drivers,
        shipments,
        staff,
        suppliers,
        setClients,
        setDrivers,
        setShipments,
        setStaff,
        setSuppliers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
