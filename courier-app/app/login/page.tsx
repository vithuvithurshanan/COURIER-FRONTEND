'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple auth simulation - store in localStorage
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="glass-strong rounded-2xl shadow-2xl w-full max-w-md relative z-10 animate-slideUp" style={{ padding: '3rem' }}>
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-5 shadow-lg animate-float">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Courier & Logistics</h1>
          <p className="text-gray-600 text-base">Management System</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="admin@courier.com"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm" style={{ marginBottom: '1.5rem' }}>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="btn-primary w-full text-base"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 bg-blue-50 rounded-lg" style={{ marginTop: '1.5rem', padding: '0.75rem 1rem' }}>
          <p className="font-medium">Demo credentials: Any email and password</p>
        </div>
      </div>

    </div>
  );
}
