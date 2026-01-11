import React, { useState } from 'react';
import { UserPlus, Lock, Mail, User, Building2, ArrowLeft } from 'lucide-react';
import { projectId } from '../utils/supabase/info';

interface RegisterPageProps {
  onRegisterSuccess: () => void;
  onNavigateToLogin: () => void;
}

export function RegisterPage({ onRegisterSuccess, onNavigateToLogin }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-f61d8c0d/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            company: formData.company,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Registration failed:', data);
        throw new Error(data.error || 'Đăng ký thất bại');
      }

      setSuccess(true);
      setTimeout(() => {
        onRegisterSuccess();
      }, 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Có lỗi xảy ra khi đăng ký';
      setError(errorMessage);
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#004488] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white shadow-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Đăng ký thành công!
            </h2>
            <p className="text-gray-600 mb-4">
              Tài khoản của bạn đã được tạo. Đang chuyển đến trang đăng nhập...
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#003366] mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Register Card */}
        <div className="bg-white shadow-2xl overflow-hidden">
          <div className="bg-[#003366] px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <UserPlus size={24} />
              Đăng Ký Tài Khoản
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                Họ và tên
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nguyễn Văn A"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                <Building2 size={16} className="inline mr-2" />
                Công ty
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Tên công ty (không bắt buộc)"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Tối thiểu 6 ký tự"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-2">
                <Lock size={16} className="inline mr-2" />
                Xác nhận mật khẩu
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Nhập lại mật khẩu"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#990000] hover:bg-[#BB0000] text-white font-bold py-3 px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Đang xử lý...
                </>
              ) : (
                <>
                  <UserPlus size={20} />
                  Đăng ký
                </>
              )}
            </button>

            <div className="pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onNavigateToLogin}
                className="w-full text-[#003366] hover:text-[#004488] font-bold transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} />
                Quay lại đăng nhập
              </button>
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