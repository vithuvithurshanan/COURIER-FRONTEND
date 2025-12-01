'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { useData } from '../context/DataContext';

interface Client {
  id: number;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
}

export default function ClientsPage() {
  const { clients, setClients } = useData();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [deletingClient, setDeletingClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleAdd = () => {
    setEditingClient(null);
    setFormData({ name: '', contact: '', email: '', phone: '', address: '' });
    setShowModal(true);
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      contact: client.contact,
      email: client.email,
      phone: client.phone,
      address: client.address
    });
    setShowModal(true);
  };

  const handleDelete = (client: Client) => {
    setDeletingClient(client);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deletingClient) {
      setClients(clients.filter(c => c.id !== deletingClient.id));
      setShowDeleteModal(false);
      setDeletingClient(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingClient) {
      setClients(clients.map(c => c.id === editingClient.id ? { ...c, ...formData } : c));
    } else {
      const newId = clients.length > 0 ? Math.max(...clients.map(c => c.id)) + 1 : 1;
      const newClient = { id: newId, ...formData };
      setClients([...clients, newClient]);
    }
    setShowModal(false);
    setFormData({ name: '', contact: '', email: '', phone: '', address: '' });
  };

  return (
    <Layout>
      <div>
        <div className="action-bar">
          <h1 className="text-3xl font-bold text-gray-800">Client Management</h1>
          <button
            onClick={handleAdd}
            className="btn-primary"
          >
            + Add New Client
          </button>
        </div>

        <div className="table-container">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="table-header">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact Person</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Address</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-gray-500 text-lg font-medium mb-2">No clients found</p>
                      <p className="text-gray-400 text-sm">Click "+ Add New Client" to add your first client</p>
                    </div>
                  </td>
                </tr>
              ) : (
                clients.map((client) => (
                  <tr key={client.id} className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{client.contact}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{client.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{client.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{client.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="btn-group-tight">
                        <button onClick={() => handleEdit(client)} className="action-btn action-btn-edit">Edit</button>
                        <button onClick={() => handleDelete(client)} className="action-btn action-btn-delete">Delete</button>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingClient ? 'Edit Client' : 'Add New Client'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="Enter company name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Contact Person</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="Enter contact name"
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
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
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="input-field" 
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Billing Address</label>
                  <textarea 
                    className="input-field" 
                    rows={3} 
                    placeholder="Enter billing address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    required
                  ></textarea>
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
                    {editingClient ? 'Update Client' : 'Add Client'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && deletingClient && (
          <div className="modal-overlay">
            <div className="modal-content max-w-md w-full" style={{ padding: '2rem' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <strong>{deletingClient.name}</strong>? This action cannot be undone.
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
