import React, { useState } from 'react';
import { Settings, Bell, Lock, CreditCard, Globe, Mail, Shield, Check } from 'lucide-react';

interface SettingsPageProps {
  onNavigate?: (page: string) => void;
}

export function SettingsPage({ onNavigate }: SettingsPageProps) {
  const [activeTab, setActiveTab] = useState('account');
  const [settings, setSettings] = useState({
    // Account Settings
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    
    // Notification Settings
    emailNotifications: true,
    projectUpdates: true,
    newMessages: true,
    weeklyDigest: false,
    membershipReminders: true,
    
    // Privacy Settings
    showProfile: true,
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    
    // Language & Region
    language: 'vi',
    timezone: 'Asia/Ho_Chi_Minh',
    currency: 'VND',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    alert('Cài đặt đã được lưu!');
  };

  const tabs = [
    { id: 'account', label: 'Tài khoản', icon: Lock },
    { id: 'notifications', label: 'Thông báo', icon: Bell },
    { id: 'privacy', label: 'Quyền riêng tư', icon: Shield },
    { id: 'billing', label: 'Thanh toán', icon: CreditCard },
    { id: 'preferences', label: 'Tùy chọn', icon: Globe },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Settings
          </h1>
          <p className="text-gray-600">Quản lý cài đặt tài khoản và tùy chọn</p>
        </div>
        {saved && (
          <div className="flex items-center gap-2 text-green-600 font-bold">
            <Check size={20} />
            Đã lưu thành công!
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-sm">
            <nav className="flex lg:flex-col">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#003366] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="hidden lg:inline">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white p-6 shadow-sm">
            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">Bảo mật tài khoản</h2>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Mật khẩu hiện tại
                  </label>
                  <input
                    type="password"
                    value={settings.currentPassword}
                    onChange={(e) => setSettings({ ...settings, currentPassword: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    value={settings.newPassword}
                    onChange={(e) => setSettings({ ...settings, newPassword: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="••••••••"
                  />
                  <p className="text-xs text-gray-500 mt-1">Tối thiểu 8 ký tự, bao gồm chữ hoa, chữ thường và số</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Xác nhận mật khẩu mới
                  </label>
                  <input
                    type="password"
                    value={settings.confirmPassword}
                    onChange={(e) => setSettings({ ...settings, confirmPassword: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-bold text-gray-700 mb-3">Xác thực hai yếu tố (2FA)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Tăng cường bảo mật tài khoản bằng cách yêu cầu mã xác thực khi đăng nhập.
                  </p>
                  <button className="bg-[#003366] hover:bg-[#004488] text-white font-bold py-2 px-6 transition-colors">
                    Kích hoạt 2FA
                  </button>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">Cài đặt thông báo</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-bold text-gray-700">Thông báo qua Email</p>
                      <p className="text-sm text-gray-600">Nhận thông báo qua địa chỉ email của bạn</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-bold text-gray-700">Cập nhật dự án</p>
                      <p className="text-sm text-gray-600">Thông báo khi có dự án mới phù hợp</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.projectUpdates}
                        onChange={(e) => setSettings({ ...settings, projectUpdates: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-bold text-gray-700">Tin nhắn mới</p>
                      <p className="text-sm text-gray-600">Thông báo khi có tin nhắn từ thành viên khác</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.newMessages}
                        onChange={(e) => setSettings({ ...settings, newMessages: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-bold text-gray-700">Bản tin hàng tuần</p>
                      <p className="text-sm text-gray-600">Tổng hợp hoạt động trong tuần</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.weeklyDigest}
                        onChange={(e) => setSettings({ ...settings, weeklyDigest: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-bold text-gray-700">Nhắc nhở hội viên</p>
                      <p className="text-sm text-gray-600">Nhắc nhở về phí hội viên và gia hạn</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.membershipReminders}
                        onChange={(e) => setSettings({ ...settings, membershipReminders: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">Quyền riêng tư</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-bold text-gray-700">Hiển thị hồ sơ công khai</p>
                      <p className="text-sm text-gray-600">Cho phép thành viên khác xem hồ sơ của bạn</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.showProfile}
                        onChange={(e) => setSettings({ ...settings, showProfile: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-bold text-gray-700">Hiển thị Email</p>
                      <p className="text-sm text-gray-600">Cho phép thành viên khác xem địa chỉ email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.showEmail}
                        onChange={(e) => setSettings({ ...settings, showEmail: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-bold text-gray-700">Hiển thị số điện thoại</p>
                      <p className="text-sm text-gray-600">Cho phép thành viên khác xem số điện thoại</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.showPhone}
                        onChange={(e) => setSettings({ ...settings, showPhone: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-bold text-gray-700">Cho phép nhận tin nhắn</p>
                      <p className="text-sm text-gray-600">Thành viên khác có thể gửi tin nhắn cho bạn</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.allowMessages}
                        onChange={(e) => setSettings({ ...settings, allowMessages: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Settings */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">Thanh toán & Hóa đơn</h2>
                
                <div className="bg-blue-50 border border-blue-200 p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Gói hiện tại:</strong> Partner (VIP) - 12.000.000 VND/năm
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    <strong>Gia hạn vào:</strong> 15/03/2027
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-700 mb-3">Phương thức thanh toán</h3>
                  <div className="border p-4 mb-2 flex items-center justify-between">
                    <div>
                      <p className="font-bold">Visa •••• 4242</p>
                      <p className="text-sm text-gray-600">Hết hạn 12/2026</p>
                    </div>
                    <button className="text-[#990000] hover:text-[#BB0000] font-bold text-sm">
                      Xóa
                    </button>
                  </div>
                  <button className="text-[#003366] hover:text-[#004488] font-bold text-sm">
                    + Thêm phương thức thanh toán
                  </button>
                </div>

                <div>
                  <h3 className="font-bold text-gray-700 mb-3">Lịch sử thanh toán</h3>
                  <div className="space-y-2">
                    {[
                      { date: '15/03/2026', amount: '12.000.000 VND', status: 'Thành công' },
                      { date: '15/03/2025', amount: '12.000.000 VND', status: 'Thành công' },
                      { date: '15/03/2024', amount: '12.000.000 VND', status: 'Thành công' },
                    ].map((payment, idx) => (
                      <div key={idx} className="border p-3 flex items-center justify-between">
                        <div>
                          <p className="font-bold text-sm">{payment.date}</p>
                          <p className="text-sm text-gray-600">{payment.amount}</p>
                        </div>
                        <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1">
                          {payment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Settings */}
            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">Tùy chọn</h2>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Ngôn ngữ
                  </label>
                  <select
                    value={settings.language}
                    onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  >
                    <option value="vi">Tiếng Việt</option>
                    <option value="ja">日本語 (Japanese)</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Múi giờ
                  </label>
                  <select
                    value={settings.timezone}
                    onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  >
                    <option value="Asia/Ho_Chi_Minh">(GMT+7) Ho Chi Minh</option>
                    <option value="Asia/Tokyo">(GMT+9) Tokyo</option>
                    <option value="Asia/Singapore">(GMT+8) Singapore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Đơn vị tiền tệ
                  </label>
                  <select
                    value={settings.currency}
                    onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  >
                    <option value="VND">VND (đ)</option>
                    <option value="JPY">JPY (¥)</option>
                    <option value="USD">USD ($)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t">
              <button
                onClick={handleSave}
                className="bg-[#990000] hover:bg-[#BB0000] text-white font-bold py-3 px-8 transition-colors"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
