'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { useData } from '../context/DataContext';

interface Staff {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  status: string;
}

export default function StaffPage() {
  const { staff, setStaff } = useData();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  const [deletingStaff, setDeletingStaff] = useState<Staff | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Manager',
    email: '',
    phone: '',
    status: 'Active'
  });

  const handleAdd = () => {
    setEditingStaff(null);
    setFormData({ name: '', role: 'Manager', email: '', phone: '', status: 'Active' });
    setShowModal(true);
  };

  const handleEdit = (member: Staff) => {
    setEditingStaff(member);
    setFormData({
      name: member.name,
      role: member.role,
      email: member.email,
      phone: member.phone,
      status: member.status
    });
    setShowModal(true);
  };

  const handleDelete = (member: Staff) => {
    setDeletingStaff(member);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deletingStaff) {
      setStaff(staff.filter(s => s.id !== deletingStaff.id));
      setShowDeleteModal(false);
      setDeletingStaff(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStaff) {
      setStaff(staff.map(s => s.id === editingStaff.id ? { ...s, ...formData } : s));
    } else {
      const newId = staff.length > 0 ? Math.max(...staff.map(s => s.id)) + 1 : 1;
      const newStaff = { id: newId, ...formData };
      setStaff([...staff, newStaff]);
    }
    setShowModal(false);
    setFormData({ name: '', role: 'Manager', email: '', phone: '', status: 'Active' });
  };

  return (
    <Layout>
      <div>
        <div className="action-bar">
          <h1 className="text-3xl font-bold text-gray-800">Office Staff Management</h1>
          <button
            onClick={handleAdd}
            className="btn-primary"
          >
            + Add Staff Member
          </button>
        </div>

        <div className="table-container">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="table-header bg-blue-400 ">
              <tr >
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staff.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="text-gray-500 text-lg font-medium mb-2">No staff members found</p>
                      <p className="text-gray-400 text-sm">Click &ldquo;+ Add Staff Member&rdquo; to add your first staff member</p>
                    </div>
                  </td>
                </tr>
              ) : (
                staff.map((member) => (
                  <tr key={member.id} className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={member.status === 'Active' ? 'badge-success' : 'badge-warning'}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="btn-group-tight">
                        <button onClick={() => handleEdit(member)} className="action-btn action-btn-edit" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button onClick={() => handleDelete(member)} className="action-btn action-btn-delete" title="Delete">
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingStaff ? 'Edit Staff Member' : 'Add Staff Member'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="email@courier.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row form-row-2">
                  <div className="form-group">
                    <label className="form-label">Role</label>
                    <select
                      className="select-field"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option>Manager</option>
                      <option>Dispatcher</option>
                      <option>Warehouse Staff</option>
                      <option>Customer Service</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Status</label>
                    <select
                      className="select-field"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option>Active</option>
                      <option>Inactive</option>
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
                    className="btn-success"
                  >
                    {editingStaff ? 'Update Staff' : 'Add Staff'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && deletingStaff && (
          <div className="modal-overlay">
            <div className="modal-content max-w-md w-full" style={{ padding: '2rem' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <strong>{deletingStaff.name}</strong>? This action cannot be undone.
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
