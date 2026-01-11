import React, { useState } from 'react';
import { Search, Filter, Mail, Phone, Globe, MapPin, Building2, Briefcase } from 'lucide-react';

interface MemberDirectoryPageProps {
  onNavigate?: (page: string) => void;
}

export function MemberDirectoryPage({ onNavigate }: MemberDirectoryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');

  const members = [
    {
      id: 1,
      companyName: 'Tokyo Design Studio Co., Ltd.',
      contactPerson: '田中 太郎 (Tanaka Taro)',
      industry: 'Design & Architecture',
      region: 'Tokyo, Japan',
      specialization: 'Modern Japanese Architecture',
      membershipType: 'Partner (VIP)',
      email: 'tanaka@tds.co.jp',
      phone: '+81 3 1234 5678',
      website: 'www.tokyodesignstudio.jp',
      logo: 'TDS',
      employees: '50-100',
    },
    {
      id: 2,
      companyName: 'Việt Long Construction Group',
      contactPerson: 'Nguyễn Ngọc Khang',
      industry: 'Construction & Engineering',
      region: 'Hà Nội, Việt Nam',
      specialization: 'High-rise Building Construction',
      membershipType: 'Partner (VIP)',
      email: 'khang@vietlong.vn',
      phone: '+84 24 3456 7890',
      website: 'www.vietlong.vn',
      logo: 'VL',
      employees: '200+',
    },
    {
      id: 3,
      companyName: 'Matsumoto Materials Co.',
      contactPerson: '松本 次郎 (Matsumoto Jiro)',
      industry: 'Materials & Supply',
      region: 'Osaka, Japan',
      specialization: 'Premium Construction Materials',
      membershipType: 'Strategic',
      email: 'jiro@matsumoto.jp',
      phone: '+81 6 2345 6789',
      website: 'www.matsumoto-materials.jp',
      logo: 'MM',
      employees: '100-200',
    },
    {
      id: 4,
      companyName: 'Saigon Interior Design Studio',
      contactPerson: 'Trần Thị Lan',
      industry: 'Interior Design',
      region: 'TP Hồ Chí Minh, Việt Nam',
      specialization: 'Japanese-inspired Interior',
      membershipType: 'Member',
      email: 'lan@saigoninterior.vn',
      phone: '+84 28 3456 7890',
      website: 'www.saigoninterior.vn',
      logo: 'SI',
      employees: '20-50',
    },
    {
      id: 5,
      companyName: 'Kyoto Engineering Solutions',
      contactPerson: '佐藤 健 (Sato Ken)',
      industry: 'Engineering',
      region: 'Kyoto, Japan',
      specialization: 'Structural Engineering & MEP',
      membershipType: 'Partner (VIP)',
      email: 'ken@kyoto-eng.jp',
      phone: '+81 75 1234 5678',
      website: 'www.kyoto-engineering.jp',
      logo: 'KE',
      employees: '50-100',
    },
    {
      id: 6,
      companyName: 'Đà Nẵng Development Corporation',
      contactPerson: 'Lê Văn Minh',
      industry: 'Real Estate Development',
      region: 'Đà Nẵng, Việt Nam',
      specialization: 'Resort & Residential Development',
      membershipType: 'Strategic',
      email: 'minh@danangdev.vn',
      phone: '+84 236 3456 789',
      website: 'www.danangdev.vn',
      logo: 'DD',
      employees: '100-200',
    },
    {
      id: 7,
      companyName: 'Nagoya Construction Tech',
      contactPerson: '木村 大輔 (Kimura Daisuke)',
      industry: 'Construction Technology',
      region: 'Nagoya, Japan',
      specialization: 'Smart Building Solutions',
      membershipType: 'Member',
      email: 'daisuke@nagoya-tech.jp',
      phone: '+81 52 2345 6789',
      website: 'www.nagoya-tech.jp',
      logo: 'NT',
      employees: '30-50',
    },
    {
      id: 8,
      companyName: 'Hanoi Architectural Partners',
      contactPerson: 'Phạm Xuân Hưng',
      industry: 'Architecture',
      region: 'Hà Nội, Việt Nam',
      specialization: 'Commercial Architecture',
      membershipType: 'Partner (VIP)',
      email: 'hung@hanoiarch.vn',
      phone: '+84 24 4567 8901',
      website: 'www.hanoiarch.vn',
      logo: 'HA',
      employees: '50-100',
    },
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === 'all' || member.industry === industryFilter;
    const matchesRegion = regionFilter === 'all' || member.region.includes(regionFilter);
    return matchesSearch && matchesIndustry && matchesRegion;
  });

  const getMembershipBadgeColor = (type: string) => {
    switch (type) {
      case 'Strategic': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'Partner (VIP)': return 'bg-[#C5A059] text-white';
      case 'Member': return 'bg-blue-100 text-blue-700 border-blue-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Member Directory
          </h1>
          <p className="text-gray-600">Kết nối với {members.length} doanh nghiệp thành viên NKBA</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 shadow-sm">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative md:col-span-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm công ty, người liên hệ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent appearance-none bg-white"
            >
              <option value="all">Tất cả lĩnh vực</option>
              <option value="Design & Architecture">Design & Architecture</option>
              <option value="Construction & Engineering">Construction & Engineering</option>
              <option value="Materials & Supply">Materials & Supply</option>
              <option value="Interior Design">Interior Design</option>
              <option value="Engineering">Engineering</option>
              <option value="Real Estate Development">Real Estate Development</option>
              <option value="Construction Technology">Construction Technology</option>
              <option value="Architecture">Architecture</option>
            </select>
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent appearance-none bg-white"
            >
              <option value="all">Tất cả khu vực</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Osaka">Osaka</option>
              <option value="Kyoto">Kyoto</option>
              <option value="Nagoya">Nagoya</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow-sm border-l-4 border-[#003366]">
          <p className="text-gray-600 text-sm">Tổng thành viên</p>
          <p className="text-2xl font-bold text-[#003366]">{members.length}</p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-[#C5A059]">
          <p className="text-gray-600 text-sm">Partner (VIP)</p>
          <p className="text-2xl font-bold text-[#C5A059]">
            {members.filter(m => m.membershipType === 'Partner (VIP)').length}
          </p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-purple-500">
          <p className="text-gray-600 text-sm">Strategic</p>
          <p className="text-2xl font-bold text-purple-600">
            {members.filter(m => m.membershipType === 'Strategic').length}
          </p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm">Việt Nam</p>
          <p className="text-2xl font-bold text-blue-600">
            {members.filter(m => m.region.includes('Việt Nam')).length}
          </p>
        </div>
      </div>

      {/* Member Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#004488] text-white flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {member.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-[#003366] mb-1 truncate">{member.companyName}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.contactPerson}</p>
                  <span className={`inline-block px-3 py-1 text-xs font-bold ${getMembershipBadgeColor(member.membershipType)}`}>
                    {member.membershipType}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Briefcase size={16} className="text-gray-500 flex-shrink-0" />
                  <span>{member.industry}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} className="text-gray-500 flex-shrink-0" />
                  <span>{member.region}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Building2 size={16} className="text-gray-500 flex-shrink-0" />
                  <span>{member.employees} nhân viên</span>
                </div>
              </div>

              <div className="mb-4 p-3 bg-gray-50">
                <p className="text-xs text-gray-600 font-bold mb-1">Chuyên môn:</p>
                <p className="text-sm text-gray-800">{member.specialization}</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs mb-4">
                <a href={`mailto:${member.email}`} className="flex items-center gap-1 text-[#003366] hover:text-[#004488]">
                  <Mail size={14} />
                  Email
                </a>
                <span className="text-gray-300">•</span>
                <a href={`tel:${member.phone}`} className="flex items-center gap-1 text-[#003366] hover:text-[#004488]">
                  <Phone size={14} />
                  Call
                </a>
                <span className="text-gray-300">•</span>
                <a href={`https://${member.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#003366] hover:text-[#004488]">
                  <Globe size={14} />
                  Website
                </a>
              </div>

              <button className="w-full bg-[#990000] hover:bg-[#BB0000] text-white font-bold py-2 px-4 transition-colors">
                Xem hồ sơ đầy đủ
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="bg-white p-12 text-center">
          <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">Không tìm thấy thành viên phù hợp với tiêu chí tìm kiếm.</p>
        </div>
      )}
    </div>
  );
}
