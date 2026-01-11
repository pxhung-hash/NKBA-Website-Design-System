import React, { useState } from 'react';
import { User, Mail, Phone, Building2, MapPin, Briefcase, Award, Edit2, Save, X, Languages, Globe } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';

interface MyProfilePageProps {
  onNavigate?: (page: string) => void;
}

export function MyProfilePage({ onNavigate }: MyProfilePageProps) {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Hiroshi Sato',
    email: user?.email || 'hiroshi.sato@example.com',
    phone: '+81 90 1234 5678',
    company: 'Sato Construction Co., Ltd.',
    position: 'Giám đốc Điều hành',
    location: 'Tokyo, Japan',
    bio: 'Chuyên gia xây dựng với 20 năm kinh nghiệm trong lĩnh vực phát triển bất động sản và quản lý dự án quy mô lớn. Đã hoàn thành hơn 50 dự án tại Nhật Bản và Việt Nam.',
    specialization: 'Quản lý dự án, Phát triển bất động sản',
    languages: ['Tiếng Nhật', 'Tiếng Anh', 'Tiếng Việt (Cơ bản)'],
    website: 'www.satoconstruction.jp',
    linkedIn: 'linkedin.com/in/hiroshi-sato',
  });

  const [membershipInfo] = useState({
    type: 'Partner (VIP)',
    joinDate: '2024-03-15',
    expiryDate: '2027-03-15',
    status: 'Active',
    memberID: 'NKBA-VIP-0042',
  });

  const [achievements] = useState([
    { title: 'Top Contributor 2025', date: '2025-12-20' },
    { title: '10 Successful Projects', date: '2025-10-15' },
    { title: 'Community Leader', date: '2025-06-01' },
  ]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to the backend
    alert('Thông tin đã được cập nhật!');
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            My Profile
          </h1>
          <p className="text-gray-600">Quản lý thông tin cá nhân và hồ sơ thành viên</p>
        </div>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-[#003366] hover:bg-[#004488] text-white font-bold py-3 px-6 transition-colors flex items-center gap-2"
          >
            <Edit2 size={20} />
            Chỉnh sửa
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 transition-colors flex items-center gap-2"
            >
              <Save size={20} />
              Lưu
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 transition-colors flex items-center gap-2"
            >
              <X size={20} />
              Hủy
            </button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Picture */}
          <div className="bg-white p-6 shadow-sm">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#003366] to-[#004488] text-white flex items-center justify-center text-4xl font-bold mx-auto mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h2 className="text-xl font-bold text-[#003366] mb-1">{profileData.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{profileData.position}</p>
              {isEditing && (
                <button className="text-sm text-[#990000] hover:text-[#BB0000] font-bold">
                  Thay đổi ảnh đại diện
                </button>
              )}
            </div>
          </div>

          {/* Membership Info */}
          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
              <Award size={20} />
              Thông tin hội viên
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Member ID</p>
                <p className="font-bold text-[#003366]">{membershipInfo.memberID}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Loại hội viên</p>
                <span className="inline-block px-3 py-1 bg-[#C5A059] text-white font-bold text-sm mt-1">
                  {membershipInfo.type}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Ngày gia nhập</p>
                <p className="font-medium">{new Date(membershipInfo.joinDate).toLocaleDateString('vi-VN')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Hạn sử dụng</p>
                <p className="font-medium">{new Date(membershipInfo.expiryDate).toLocaleDateString('vi-VN')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Trạng thái</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 font-bold text-sm mt-1">
                  {membershipInfo.status}
                </span>
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-[#990000] hover:bg-[#BB0000] text-white font-bold transition-colors">
              Gia hạn hội viên
            </button>
          </div>

          {/* Achievements */}
          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg text-[#003366] mb-4">Thành tích</h3>
            <div className="space-y-3">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50">
                  <Award className="text-[#C5A059] flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-800">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{new Date(achievement.date).toLocaleDateString('vi-VN')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
              <User size={20} />
              Thông tin cá nhân
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Họ và tên
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-700 flex items-center gap-2">
                    <Mail size={16} className="text-gray-500" />
                    {profileData.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Số điện thoại
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-700 flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    {profileData.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Địa điểm
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profileData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-700 flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    {profileData.location}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
              <Building2 size={20} />
              Thông tin công ty
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Tên công ty
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="company"
                    value={profileData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.company}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Chức vụ
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="position"
                    value={profileData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-700 flex items-center gap-2">
                    <Briefcase size={16} className="text-gray-500" />
                    {profileData.position}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Chuyên môn
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="specialization"
                    value={profileData.specialization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.specialization}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Website
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="website"
                    value={profileData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-700 flex items-center gap-2">
                    <Globe size={16} className="text-gray-500" />
                    <a href={`https://${profileData.website}`} className="text-[#003366] hover:underline">
                      {profileData.website}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* About / Bio */}
          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg text-[#003366] mb-4">Giới thiệu</h3>
            {isEditing ? (
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
              />
            ) : (
              <p className="text-gray-700">{profileData.bio}</p>
            )}
          </div>

          {/* Languages */}
          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg text-[#003366] mb-4 flex items-center gap-2">
              <Languages size={20} />
              Ngôn ngữ
            </h3>
            <div className="flex flex-wrap gap-2">
              {profileData.languages.map((lang, idx) => (
                <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 font-medium border border-blue-200">
                  {lang}
                </span>
              ))}
              {isEditing && (
                <button className="px-4 py-2 border-2 border-dashed border-gray-300 text-gray-500 hover:border-[#003366] hover:text-[#003366] transition-colors">
                  + Thêm ngôn ngữ
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
