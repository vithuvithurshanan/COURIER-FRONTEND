'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  HomeIcon, 
  UsersIcon, 
  UserGroupIcon, 
  TruckIcon, 
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: HomeIcon },
    { name: 'Shipments', path: '/shipments', icon: ClipboardDocumentListIcon },
    { name: 'Office Staff', path: '/staff', icon: UsersIcon },
    { name: 'Clients', path: '/clients', icon: UserGroupIcon },
    { name: 'Drivers & Fleet', path: '/drivers', icon: TruckIcon },
    { name: 'Suppliers', path: '/suppliers', icon: BuildingOfficeIcon },
  ];

  return (
    <div className="sidebar-gradient text-white flex flex-col shadow-2xl w-full lg:w-64 lg:min-h-screen lg:sticky lg:top-0 flex-shrink-0">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold">Courier System</h2>
            <p className="text-xs text-gray-400">v1.0.0</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={isActive ? 'sidebar-link-active' : 'sidebar-link-inactive'}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <p className="text-xs text-gray-400 mb-1">Logged in as</p>
          <p className="text-sm font-medium text-white">Admin User</p>
          <p className="text-xs text-gray-400">admin@courier.com</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white w-full transition-all duration-200 font-medium"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
