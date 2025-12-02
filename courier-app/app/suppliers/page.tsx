'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { useData } from '../context/DataContext';

interface Supplier {
  id: number;
  name: string;
  type: string;
  contact: string;
  email: string;
  phone: string;
}

export default function SuppliersPage() {
  const { suppliers, setSuppliers } = useData();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);
  const [deletingSupplier, setDeletingSupplier] = useState<Supplier | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Packaging',
    contact: '',
    email: '',
    phone: ''
  });

  const handleAdd = () => {
    setEditingSupplier(null);
    setFormData({ name: '', type: 'Packaging', contact: '', email: '', phone: '' });
    setShowModal(true);
  };

  const handleEdit = (supplier: Supplier) => {
    setEditingSupplier(supplier);
    setFormData({
      name: supplier.name,
      type: supplier.type,
      contact: supplier.contact,
      email: supplier.email,
      phone: supplier.phone
    });
    setShowModal(true);
  };

  const handleDelete = (supplier: Supplier) => {
    setDeletingSupplier(supplier);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deletingSupplier) {
      setSuppliers(suppliers.filter(s => s.id !== deletingSupplier.id));
      setShowDeleteModal(false);
      setDeletingSupplier(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSupplier) {
      setSuppliers(suppliers.map(s => s.id === editingSupplier.id ? { ...s, ...formData } : s));
    } else {
      const newId = suppliers.length > 0 ? Math.max(...suppliers.map(s => s.id)) + 1 : 1;
      const newSupplier = { id: newId, ...formData };
      setSuppliers([...suppliers, newSupplier]);
    }
    setShowModal(false);
    setFormData({ name: '', type: 'Packaging', contact: '', email: '', phone: '' });
  };

  return (
    <Layout>
      <div>
        <div className="action-bar">
          <h1 className="text-3xl font-bold text-gray-800">Supplier Management</h1>
          <button
            onClick={handleAdd}
            className="btn-primary"
          >
            + Add Supplier
          </button>
        </div>

        <div className="table-container">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="table-header">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact Person</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {suppliers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-gray-500 text-lg font-medium mb-2">No suppliers found</p>
                      <p className="text-gray-400 text-sm">Click &ldquo;+ Add Supplier&rdquo; to add your first supplier</p>
                    </div>
                  </td>
                </tr>
              ) : (
                suppliers.map((supplier) => (
                  <tr key={supplier.id} className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{supplier.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplier.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplier.contact}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplier.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplier.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="btn-group-tight">
                        <button onClick={() => handleEdit(supplier)} className="action-btn action-btn-edit" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button onClick={() => handleDelete(supplier)} className="action-btn action-btn-delete" title="Delete">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingSupplier ? 'Edit Supplier' : 'Add Supplier'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Enter company name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Supplier Type</label>
                    <select
                      className="select-field"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      <option>Packaging</option>
                      <option>Shipping Agent</option>
                      <option>Supplies</option>
                      <option>Maintenance</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Contact Person</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter contact name"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="email@supplier.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
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
                    className="btn-success"
                  >
                    {editingSupplier ? 'Update Supplier' : 'Add Supplier'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && deletingSupplier && (
          <div className="modal-overlay">
            <div className="modal-content max-w-md w-full" style={{ padding: '2rem' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <strong>{deletingSupplier.name}</strong>? This action cannot be undone.
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
