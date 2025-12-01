'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';
import { useData } from '../context/DataContext';

export default function DashboardPage() {
  const router = useRouter();
  const { clients, drivers, shipments, staff, suppliers } = useData();
  
  const activeDrivers = drivers.filter(d => d.status === 'Available' || d.status === 'On Delivery').length;
  const pendingShipments = shipments.filter(s => s.status === 'Pending' || s.status === 'Picked Up').length;

  // Generate recent activities from actual data
  const recentActivities = useMemo(() => {
    const activities: Array<{
      type: 'created' | 'assigned' | 'delivered' | 'in_transit' | 'picked_up';
      message: string;
      details: string;
      icon: 'blue' | 'green' | 'purple' | 'yellow';
      time: string;
    }> = [];

    // Get recent shipments (last 3)
    const recentShipments = [...shipments]
      .sort((a, b) => {
        // Sort by tracking ID number (newer IDs come first)
        const aNum = parseInt(a.id.match(/\d+$/)?.[0] || '0');
        const bNum = parseInt(b.id.match(/\d+$/)?.[0] || '0');
        return bNum - aNum;
      })
      .slice(0, 3);

    recentShipments.forEach((shipment, index) => {
      if (shipment.status === 'Delivered') {
        activities.push({
          type: 'delivered',
          message: 'Shipment delivered successfully',
          details: `Tracking ID: ${shipment.id}`,
          icon: 'purple',
          time: index === 0 ? '1 hour ago' : index === 1 ? '2 hours ago' : '3 hours ago',
        });
      } else if (shipment.status === 'In Transit') {
        activities.push({
          type: 'in_transit',
          message: 'Shipment in transit',
          details: `${shipment.id} - ${shipment.receiver}`,
          icon: 'blue',
          time: index === 0 ? '30 mins ago' : index === 1 ? '1 hour ago' : '2 hours ago',
        });
      } else if (shipment.status === 'Picked Up') {
        activities.push({
          type: 'picked_up',
          message: 'Shipment picked up',
          details: `Tracking ID: ${shipment.id}`,
          icon: 'yellow',
          time: index === 0 ? '15 mins ago' : index === 1 ? '45 mins ago' : '1 hour ago',
        });
      } else {
        activities.push({
          type: 'created',
          message: 'New shipment created',
          details: `Tracking ID: ${shipment.id}`,
          icon: 'blue',
          time: index === 0 ? '2 mins ago' : index === 1 ? '20 mins ago' : '1 hour ago',
        });
      }

      if (shipment.driver) {
        const driver = drivers.find(d => d.name === shipment.driver);
        if (driver) {
          activities.push({
            type: 'assigned',
            message: 'Driver assigned to delivery',
            details: `${driver.name} - ${driver.vehicleId}`,
            icon: 'green',
            time: index === 0 ? '10 mins ago' : index === 1 ? '25 mins ago' : '1 hour ago',
          });
        }
      }
    });

    // Sort activities by time (most recent first)
    return activities.slice(0, 5);
  }, [shipments, drivers]);
  
  const stats = [
    { label: 'Total Shipments', value: shipments.length.toString(), color: 'bg-blue-500' },
    { label: 'Active Drivers', value: activeDrivers.toString(), color: 'bg-green-500' },
    { label: 'Pending Orders', value: pendingShipments.toString(), color: 'bg-yellow-500' },
    { label: 'Total Clients', value: clients.length.toString(), color: 'bg-purple-500' },
  ];

  return (
    <Layout>
      <div>
        <div className="mb-8">
          <h1 className="page-header">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-card">
              <div className={`stat-icon ${stat.color}`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />}
                  {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                  {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                </svg>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <div className="mt-3 flex items-center text-sm">
                <span className="text-green-600 font-medium">↑ 12%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="card-header">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.length > 0 ? (
                recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-10 h-10 ${
                      activity.icon === 'blue' ? 'bg-blue-100' :
                      activity.icon === 'green' ? 'bg-green-100' :
                      activity.icon === 'purple' ? 'bg-purple-100' :
                      'bg-yellow-100'
                    } rounded-full flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-5 h-5 ${
                        activity.icon === 'blue' ? 'text-blue-600' :
                        activity.icon === 'green' ? 'text-green-600' :
                        activity.icon === 'purple' ? 'text-purple-600' :
                        'text-yellow-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {activity.type === 'created' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        )}
                        {activity.type === 'assigned' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        )}
                        {activity.type === 'delivered' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                        {activity.type === 'in_transit' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                        {activity.type === 'picked_up' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{activity.message}</p>
                      <p className="text-sm text-gray-600">{activity.details}</p>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No recent activity</p>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => router.push('/shipments')}
                className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group cursor-pointer"
              >
                <svg className="w-8 h-8 text-gray-400 group-hover:text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">New Shipment</p>
              </button>
              <button 
                onClick={() => router.push('/clients')}
                className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200 group cursor-pointer"
              >
                <svg className="w-8 h-8 text-gray-400 group-hover:text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <p className="text-sm font-medium text-gray-700 group-hover:text-green-600">Add Client</p>
              </button>
              <button 
                onClick={() => {
                  // For now, show an alert. Can be replaced with navigation to reports page later
                  alert('Reports feature coming soon!');
                }}
                className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-200 group cursor-pointer"
              >
                <svg className="w-8 h-8 text-gray-400 group-hover:text-yellow-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm font-medium text-gray-700 group-hover:text-yellow-600">View Reports</p>
              </button>
              <button 
                onClick={() => {
                  // For now, show an alert. Can be replaced with navigation to settings page later
                  alert('Settings feature coming soon!');
                }}
                className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 group cursor-pointer"
              >
                <svg className="w-8 h-8 text-gray-400 group-hover:text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm font-medium text-gray-700 group-hover:text-purple-600">Settings</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
