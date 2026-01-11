import React, { useState } from 'react';
import { LogIn, UserPlus, Lock, Mail, User, Building2 } from 'lucide-react';
import { projectId } from '../utils/supabase/info';

interface LoginPageProps {
  onLogin: (user: { id: string; email: string; name: string }) => void;
  onNavigateToRegister: () => void;
}

export function LoginPage({ onLogin, onNavigateToRegister }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-f61d8c0d/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Login failed:', data);
        throw new Error(data.error || 'Đăng nhập thất bại');
      }

      // Store access token
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Call onLogin with user data
      onLogin(data.user);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Có lỗi xảy ra khi đăng nhập';
      setError(errorMessage);
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#004488] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white mx-auto flex items-center justify-center text-[#003366] text-3xl font-bold shadow-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            VJ
          </div>
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            NKBA Portal
          </h1>
          <p className="text-gray-200 text-sm">Nichietsu Kensetsu Business Alliance</p>
        </div>

        {/* Login Card */}
        <div className="bg-white shadow-2xl overflow-hidden">
          <div className="bg-[#003366] px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <LogIn size={24} />
              Đăng Nhập
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                <Lock size={16} className="inline mr-2" />
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#003366] hover:bg-[#004488] text-white font-bold py-3 px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Đang xử lý...
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  Đăng nhập
                </>
              )}
            </button>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                Chưa có tài khoản?{' '}
                <button
                  type="button"
                  onClick={onNavigateToRegister}
                  className="text-[#990000] hover:text-[#BB0000] font-bold transition-colors"
                >
                  Đăng ký ngay
                </button>
              </p>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-200 text-xs">
          <p>&copy; 2026 NKBA Corp. All rights reserved.</p>
          <p className="mt-1">Internal Use Only</p>
        </div>
      </div>
    </div>
  );
}