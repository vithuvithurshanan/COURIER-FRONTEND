'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { useData } from '../context/DataContext';

interface Driver {
  id: number;
  name: string;
  vehicleId: string;
  license: string;
  phone: string;
  status: string;
}

export default function DriversPage() {
  const { drivers, setDrivers } = useData();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);
  const [deletingDriver, setDeletingDriver] = useState<Driver | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    vehicleId: '',
    license: '',
    phone: '',
    status: 'Available'
  });

  const handleAdd = () => {
    setEditingDriver(null);
    setFormData({ name: '', vehicleId: '', license: '', phone: '', status: 'Available' });
    setShowModal(true);
  };

  const handleEdit = (driver: Driver) => {
    setEditingDriver(driver);
    setFormData({
      name: driver.name,
      vehicleId: driver.vehicleId,
      license: driver.license,
      phone: driver.phone,
      status: driver.status
    });
    setShowModal(true);
  };

  const handleDelete = (driver: Driver) => {
    setDeletingDriver(driver);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deletingDriver) {
      setDrivers(drivers.filter(d => d.id !== deletingDriver.id));
      setShowDeleteModal(false);
      setDeletingDriver(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingDriver) {
      setDrivers(drivers.map(d => d.id === editingDriver.id ? { ...d, ...formData } : d));
    } else {
      const newId = drivers.length > 0 ? Math.max(...drivers.map(d => d.id)) + 1 : 1;
      const newDriver = { id: newId, ...formData };
      setDrivers([...drivers, newDriver]);
    }
    setShowModal(false);
    setFormData({ name: '', vehicleId: '', license: '', phone: '', status: 'Available' });
  };

  return (
    <Layout>
      <div>
        <div className="action-bar">
          <h1 className="text-3xl font-bold text-gray-800">Driver & Fleet Management</h1>
          <button
            onClick={handleAdd}
            className="btn-primary"
          >
            + Add Driver
          </button>
        </div>

        <div className="table-container">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="table-header">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Driver Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vehicle ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">License Number</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {drivers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-gray-500 text-lg font-medium mb-2">No drivers found</p>
                      <p className="text-gray-400 text-sm">Click &ldquo;+ Add Driver&rdquo; to add your first driver</p>
                    </div>
                  </td>
                </tr>
              ) : (
                drivers.map((driver) => (
                  <tr key={driver.id} className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{driver.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{driver.vehicleId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{driver.license}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{driver.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={driver.status === 'Available' ? 'badge-success' : 'badge-warning'}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="btn-group-tight">
                        <button onClick={() => handleEdit(driver)} className="action-btn action-btn-edit">Edit</button>
                        <button onClick={() => handleDelete(driver)} className="action-btn action-btn-delete">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content max-w-lg w-full" style={{ padding: '2rem' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingDriver ? 'Edit Driver' : 'Add Driver'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Driver Name</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="Enter driver name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input 
                      type="tel" 
                      className="input-field" 
                      placeholder="555-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Vehicle ID</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="VEH-000"
                      value={formData.vehicleId}
                      onChange={(e) => setFormData({...formData, vehicleId: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">License Number</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="DL-00000"
                      value={formData.license}
                      onChange={(e) => setFormData({...formData, license: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select 
                    className="select-field"
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  >
                    <option>Available</option>
                    <option>On Delivery</option>
                    <option>Off Duty</option>
                  </select>
                </div>
                <div className="btn-group" style={{ marginTop: '2rem' }}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-success"
                  >
                    {editingDriver ? 'Update Driver' : 'Add Driver'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && deletingDriver && (
          <div className="modal-overlay">
            <div className="modal-content max-w-md w-full" style={{ padding: '2rem' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete driver <strong>{deletingDriver.name}</strong>? This action cannot be undone.
              </p>
              <div className="btn-group">
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  className="btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
