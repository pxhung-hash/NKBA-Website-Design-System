import React, { useState } from 'react';
import { UserPlus, Mail, Lock, User, Building2, Phone, Briefcase } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';

interface RegisterPageProps {
  onNavigate: (page: string) => void;
}

export function RegisterPage({ onNavigate }: RegisterPageProps) {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    company: '',
    phone: '',
    position: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    setIsLoading(true);

    try {
      await register(
        formData.email,
        formData.password,
        formData.name,
        formData.company,
        formData.phone,
        formData.position
      );
      // Redirect to dashboard on successful registration
      onNavigate('dashboard');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
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
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                <Phone size={16} className="inline mr-2" />
                Số điện thoại
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại (không bắt buộc)"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-bold text-gray-700 mb-2">
                <Briefcase size={16} className="inline mr-2" />
                Chức vụ
              </label>
              <input
                id="position"
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Chức vụ (không bắt buộc)"
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
              disabled={isLoading}
              className="w-full bg-[#990000] hover:bg-[#BB0000] text-white font-bold py-3 px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
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
          </form>
        </div>

        <div className="mt-8 text-center text-gray-200 text-xs">
          <button
            onClick={() => onNavigate('home')}
            className="text-gray-300 hover:text-white transition-colors mb-2 text-sm"
          >
            ← Back to Homepage
          </button>
          <p>&copy; 2026 NKBA Corp. All rights reserved.</p>
          <p className="mt-1">Internal Use Only</p>
        </div>
      </div>
    </div>
  );
}