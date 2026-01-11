import React, { useState } from 'react';
import { UserPlus, Search, Filter, Briefcase, MapPin, Languages, Award, Mail, Phone } from 'lucide-react';

interface TalentPoolPageProps {
  onNavigate?: (page: string) => void;
}

export function TalentPoolPage({ onNavigate }: TalentPoolPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const talents = [
    {
      id: 1,
      name: 'Nguyễn Minh Tuấn',
      role: 'Project Manager',
      experience: '15 năm',
      languages: ['Tiếng Việt', 'Tiếng Nhật (N2)', 'Tiếng Anh'],
      specialization: 'Quản lý dự án xây dựng cao tầng',
      location: 'Hà Nội',
      availability: 'Sẵn sàng',
      email: 'tuan.nguyen@example.com',
      phone: '0912 345 678',
      certifications: ['PMP', 'Construction Manager'],
    },
    {
      id: 2,
      name: '田中 健太 (Tanaka Kenta)',
      role: 'Structural Engineer',
      experience: '12 năm',
      languages: ['Tiếng Nhật', 'Tiếng Anh', 'Tiếng Việt (Cơ bản)'],
      specialization: 'Thiết kế kết cấu chống động đất',
      location: 'Hồ Chí Minh',
      availability: 'Sẵn sàng',
      email: 'tanaka.k@example.com',
      phone: '0923 456 789',
      certifications: ['Structural Engineer (Japan)', 'Seismic Design Specialist'],
    },
    {
      id: 3,
      name: 'Trần Thị Lan',
      role: 'Architect',
      experience: '10 năm',
      languages: ['Tiếng Việt', 'Tiếng Nhật (N3)', 'Tiếng Anh'],
      specialization: 'Thiết kế nội thất phong cách Nhật Bản',
      location: 'Đà Nẵng',
      availability: 'Từ tháng 3/2026',
      email: 'lan.tran@example.com',
      phone: '0934 567 890',
      certifications: ['Licensed Architect', 'LEED AP'],
    },
    {
      id: 4,
      name: '佐藤 美咲 (Sato Misaki)',
      role: 'Interior Designer',
      experience: '8 năm',
      languages: ['Tiếng Nhật', 'Tiếng Anh'],
      specialization: 'Thiết kế khách sạn và resort',
      location: 'Tokyo, Japan',
      availability: 'Từ tháng 2/2026',
      email: 'misaki.sato@example.com',
      phone: '+81 90 1234 5678',
      certifications: ['Interior Design License', 'Hospitality Design Specialist'],
    },
    {
      id: 5,
      name: 'Phạm Đức Anh',
      role: 'Construction Supervisor',
      experience: '18 năm',
      languages: ['Tiếng Việt', 'Tiếng Nhật (N1)'],
      specialization: 'Giám sát thi công theo tiêu chuẩn Nhật',
      location: 'Hà Nội',
      availability: 'Sẵn sàng',
      email: 'anh.pham@example.com',
      phone: '0945 678 901',
      certifications: ['Construction Supervisor', 'Safety Manager'],
    },
    {
      id: 6,
      name: '木村 大輔 (Kimura Daisuke)',
      role: 'MEP Engineer',
      experience: '14 năm',
      languages: ['Tiếng Nhật', 'Tiếng Anh', 'Tiếng Việt (Cơ bản)'],
      specialization: 'Hệ thống điện và cơ khí công trình',
      location: 'Hồ Chí Minh',
      availability: 'Sẵn sàng',
      email: 'kimura.d@example.com',
      phone: '0956 789 012',
      certifications: ['MEP Engineer', 'Energy Efficiency Specialist'],
    },
  ];

  const filteredTalents = talents.filter(talent => {
    const matchesSearch = talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRole === 'all' || talent.role === filterRole;
    return matchesSearch && matchesFilter;
  });

  const roles = ['all', 'Project Manager', 'Architect', 'Structural Engineer', 'Interior Designer', 'Construction Supervisor', 'MEP Engineer'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Talent Pool
          </h1>
          <p className="text-gray-600">Nguồn nhân lực chất lượng cao từ các thành viên NKBA</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, vai trò, hoặc chuyên môn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent appearance-none bg-white"
            >
              <option value="all">Tất cả vai trò</option>
              {roles.filter(r => r !== 'all').map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow-sm border-l-4 border-[#003366]">
          <p className="text-gray-600 text-sm">Tổng nhân sự</p>
          <p className="text-2xl font-bold text-[#003366]">{talents.length}</p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-green-500">
          <p className="text-gray-600 text-sm">Sẵn sàng</p>
          <p className="text-2xl font-bold text-green-600">
            {talents.filter(t => t.availability === 'Sẵn sàng').length}
          </p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-[#990000]">
          <p className="text-gray-600 text-sm">Quản lý dự án</p>
          <p className="text-2xl font-bold text-[#990000]">
            {talents.filter(t => t.role === 'Project Manager').length}
          </p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm">Kỹ sư & Kiến trúc sư</p>
          <p className="text-2xl font-bold text-blue-600">
            {talents.filter(t => ['Architect', 'Structural Engineer', 'MEP Engineer'].includes(t.role)).length}
          </p>
        </div>
      </div>

      {/* Talent List */}
      <div className="grid gap-6">
        {filteredTalents.map((talent) => (
          <div key={talent.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                {/* Left: Main Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#003366] text-white flex items-center justify-center text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {talent.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#003366] mb-1">{talent.name}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {talent.role}
                        </span>
                        <span>•</span>
                        <span>{talent.experience} kinh nghiệm</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {talent.location}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        <strong>Chuyên môn:</strong> {talent.specialization}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Languages size={16} className="text-gray-500" />
                        {talent.languages.map((lang, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 text-xs font-medium">
                            {lang}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Award size={16} className="text-gray-500" />
                        {talent.certifications.map((cert, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Availability & Contact */}
                <div className="lg:w-64 space-y-3">
                  <div className={`px-4 py-2 text-center font-bold text-sm ${
                    talent.availability === 'Sẵn sàng' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-orange-50 text-orange-700 border border-orange-200'
                  }`}>
                    {talent.availability}
                  </div>
                  <div className="space-y-2 text-sm">
                    <a href={`mailto:${talent.email}`} className="flex items-center gap-2 text-[#003366] hover:text-[#004488]">
                      <Mail size={16} />
                      <span className="truncate">{talent.email}</span>
                    </a>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={16} />
                      <span>{talent.phone}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#990000] hover:bg-[#BB0000] text-white font-bold py-2 px-4 transition-colors">
                    Liên hệ ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTalents.length === 0 && (
        <div className="bg-white p-12 text-center">
          <UserPlus size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">Không tìm thấy nhân sự phù hợp với tiêu chí tìm kiếm.</p>
        </div>
      )}
    </div>
  );
}
