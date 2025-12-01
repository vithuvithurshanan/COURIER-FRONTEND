'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { useData } from '../context/DataContext';

interface Shipment {
  id: string;
  sender: string;
  receiver: string;
  driver: string;
  status: string;
}

export default function ShipmentsPage() {
  const { shipments, setShipments, drivers } = useData();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingShipment, setEditingShipment] = useState<Shipment | null>(null);
  const [deletingShipment, setDeletingShipment] = useState<Shipment | null>(null);
  const [formData, setFormData] = useState({
    sender: '',
    receiver: '',
    driver: '',
    status: 'Pending'
  });

  const handleAdd = () => {
    setEditingShipment(null);
    setFormData({ sender: '', receiver: '', driver: '', status: 'Pending' });
    setShowModal(true);
  };

  const handleEdit = (shipment: Shipment) => {
    setEditingShipment(shipment);
    setFormData({
      sender: shipment.sender,
      receiver: shipment.receiver,
      driver: shipment.driver,
      status: shipment.status
    });
    setShowModal(true);
  };

  const handleDelete = (shipment: Shipment) => {
    setDeletingShipment(shipment);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deletingShipment) {
      setShipments(shipments.filter(s => s.id !== deletingShipment.id));
      setShowDeleteModal(false);
      setDeletingShipment(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingShipment) {
      setShipments(shipments.map(s => s.id === editingShipment.id ? { ...s, ...formData } : s));
    } else {
      // Generate new tracking ID - find the highest number from existing IDs or start from 1
      const existingNumbers = shipments
        .map(s => {
          const match = s.id.match(/TRK-\d{4}-(\d+)/);
          return match ? parseInt(match[1]) : 0;
        })
        .filter(n => n > 0);
      const nextNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1;
      const newId = `TRK-2024-${String(nextNumber).padStart(3, '0')}`;
      const newShipment = { id: newId, ...formData };
      setShipments([...shipments, newShipment]);
    }
    setShowModal(false);
    setFormData({ sender: '', receiver: '', driver: '', status: 'Pending' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Picked Up': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div>
        <div className="action-bar">
          <h1 className="text-3xl font-bold text-gray-800">Shipment Control</h1>
          <button
            onClick={handleAdd}
            className="btn-primary"
          >
            + Create New Shipment
          </button>
        </div>

        <div className="table-container">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="table-header">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tracking ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Sender
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Receiver
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Driver Assigned
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shipments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                      <p className="text-gray-500 text-lg font-medium mb-2">No shipments found</p>
                      <p className="text-gray-400 text-sm">Click "+ Create New Shipment" to add your first shipment</p>
                    </div>
                  </td>
                </tr>
              ) : (
                shipments.map((shipment) => (
                  <tr key={shipment.id} className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {shipment.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {shipment.sender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {shipment.receiver}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {shipment.driver}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`badge ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="btn-group-tight">
                        <button onClick={() => handleEdit(shipment)} className="action-btn action-btn-edit">Edit</button>
                        <button onClick={() => handleDelete(shipment)} className="action-btn action-btn-delete">Delete</button>
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
            <div className="modal-content max-w-2xl w-full" style={{ padding: '2rem' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingShipment ? 'Edit Shipment' : 'Create New Shipment'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Sender Name</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="Enter sender name"
                      value={formData.sender}
                      onChange={(e) => setFormData({...formData, sender: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Receiver Name</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="Enter receiver name"
                      value={formData.receiver}
                      onChange={(e) => setFormData({...formData, receiver: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Assign Driver</label>
                    <select 
                      className="select-field"
                      value={formData.driver}
                      onChange={(e) => setFormData({...formData, driver: e.target.value})}
                      required
                    >
                      <option value="">Select Driver</option>
                      {drivers.map((driver) => (
                        <option key={driver.id} value={driver.name}>
                          {driver.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Status</label>
                    <select 
                      className="select-field"
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                    >
                      <option>Pending</option>
                      <option>Picked Up</option>
                      <option>In Transit</option>
                      <option>Delivered</option>
                    </select>
                  </div>
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
                    className="btn-primary"
                  >
                    {editingShipment ? 'Update Shipment' : 'Create Shipment'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && deletingShipment && (
          <div className="modal-overlay">
            <div className="modal-content max-w-md w-full" style={{ padding: '2rem' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete shipment <strong>{deletingShipment.id}</strong>? This action cannot be undone.
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
