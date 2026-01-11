import React, { useState } from 'react';
import { Briefcase, Search, Filter, MapPin, DollarSign, Calendar, TrendingUp, Building2, AlertCircle } from 'lucide-react';

interface ProjectLeadsPageProps {
  onNavigate?: (page: string) => void;
}

export function ProjectLeadsPage({ onNavigate }: ProjectLeadsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Development - Đà Nẵng',
      client: 'Vinpearl Resort & Spa',
      location: 'Đà Nẵng, Việt Nam',
      budget: '$2.5M - $3.5M',
      timeline: '18 tháng',
      status: 'Đang mở',
      deadline: '2026-02-28',
      type: 'Thiết kế & Thi công',
      description: 'Dự án xây dựng 12 biệt thự cao cấp theo phong cách Nhật Bản hiện đại, yêu cầu tiêu chuẩn chất lượng cao và vật liệu nhập khẩu.',
      requirements: [
        'Kinh nghiệm thiết kế resort/villa cao cấp',
        'Hiểu biết về tiêu chuẩn xây dựng Nhật Bản',
        'Đội ngũ có kỹ sư nói được tiếng Nhật',
      ],
      postedDate: '2026-01-05',
      contactPerson: 'Ông Nguyễn Văn A',
      contactEmail: 'nguyenvana@vinpearl.com',
    },
    {
      id: 2,
      title: 'Commercial Complex Renovation',
      client: 'Hanoi Metropolitan Corporation',
      location: 'Hà Nội, Việt Nam',
      budget: '$5M - $7M',
      timeline: '24 tháng',
      status: 'Đang mở',
      deadline: '2026-03-15',
      type: 'Cải tạo & Nâng cấp',
      description: 'Cải tạo toàn diện tòa nhà thương mại 15 tầng, áp dụng công nghệ tiết kiệm năng lượng và hệ thống BMS hiện đại.',
      requirements: [
        'Chứng chỉ xây dựng công trình cao tầng',
        'Kinh nghiệm cải tạo tòa nhà đang vận hành',
        'Giải pháp tiết kiệm năng lượng',
      ],
      postedDate: '2026-01-08',
      contactPerson: 'Mr. Trần Minh B',
      contactEmail: 'tranb@hanoimet.vn',
    },
    {
      id: 3,
      title: 'Hotel Interior Design Project',
      client: 'Nha Trang Bay Hotel Group',
      location: 'Nha Trang, Việt Nam',
      budget: '$1.8M - $2.2M',
      timeline: '12 tháng',
      status: 'Đang mở',
      deadline: '2026-02-20',
      type: 'Thiết kế nội thất',
      description: 'Thiết kế nội thất cho khách sạn 5 sao 200 phòng, phong cách Nhật Bản kết hợp hiện đại, bao gồm lobby, nhà hàng, spa.',
      requirements: [
        'Portfolio thiết kế khách sạn 4-5 sao',
        'Am hiểu văn hóa và thẩm mỹ Nhật Bản',
        'Đội ngũ thiết kế nội thất chuyên nghiệp',
      ],
      postedDate: '2026-01-10',
      contactPerson: 'Ms. Lê Thị C',
      contactEmail: 'lethic@ntbayhotel.com',
    },
    {
      id: 4,
      title: 'Office Tower Construction - Tokyo',
      client: 'Mitsui Fudosan',
      location: 'Tokyo, Japan',
      budget: '$15M - $20M',
      timeline: '36 tháng',
      status: 'Đấu thầu',
      deadline: '2026-02-10',
      type: 'Xây dựng mới',
      description: 'Xây dựng tòa nhà văn phòng 25 tầng tại trung tâm Tokyo, tiêu chuẩn chống động đất cấp cao, LEED Platinum.',
      requirements: [
        'Chứng chỉ xây dựng tại Nhật Bản',
        'Kinh nghiệm công trình chống động đất',
        'Đội ngũ kỹ sư Nhật Bản hoặc có bằng cấp tương đương',
        'Đối tác địa phương (JV)',
      ],
      postedDate: '2026-01-03',
      contactPerson: '田中太郎 (Tanaka Taro)',
      contactEmail: 'tanaka@mitsui.co.jp',
    },
    {
      id: 5,
      title: 'Industrial Factory Expansion',
      client: 'Honda Vietnam Manufacturing',
      location: 'Vĩnh Phúc, Việt Nam',
      budget: '$8M - $10M',
      timeline: '20 tháng',
      status: 'Đang mở',
      deadline: '2026-03-01',
      type: 'Mở rộng nhà xưởng',
      description: 'Mở rộng nhà máy sản xuất linh kiện ô tô, yêu cầu tuân thủ tiêu chuẩn Honda toàn cầu và quy định an toàn lao động Nhật Bản.',
      requirements: [
        'Kinh nghiệm xây dựng nhà máy công nghiệp',
        'Hiểu tiêu chuẩn sản xuất Nhật Bản',
        'Quản lý dự án theo phương pháp Kaizen',
      ],
      postedDate: '2026-01-07',
      contactPerson: 'Mr. Yamamoto',
      contactEmail: 'yamamoto@honda.vn',
    },
    {
      id: 6,
      title: 'Residential Complex - Smart City',
      client: 'BRG Smart City',
      location: 'Hà Nội, Việt Nam',
      budget: '$12M - $15M',
      timeline: '30 tháng',
      status: 'Sắp đóng',
      deadline: '2026-01-25',
      type: 'Khu dân cư thông minh',
      description: 'Xây dựng khu chung cư cao cấp 500 căn hộ với hệ thống smart home, năng lượng mặt trời, và quản lý tòa nhà thông minh.',
      requirements: [
        'Kinh nghiệm dự án smart city/smart building',
        'Công nghệ IoT và tự động hóa',
        'Chứng nhận xây dựng xanh',
      ],
      postedDate: '2025-12-28',
      contactPerson: 'Ông Phạm Quang D',
      contactEmail: 'phamd@brg.vn',
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesLocation = filterLocation === 'all' || project.location.includes(filterLocation);
    return matchesSearch && matchesStatus && matchesLocation;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đang mở': return 'bg-green-50 text-green-700 border-green-200';
      case 'Đấu thầu': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Sắp đóng': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Project Leads
          </h1>
          <p className="text-gray-600">Cơ hội dự án từ các chủ đầu tư uy tín</p>
        </div>
        <button className="bg-[#990000] hover:bg-[#BB0000] text-white font-bold py-3 px-6 transition-colors">
          Đăng dự án mới
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 shadow-sm">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent appearance-none bg-white"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="Đang mở">Đang mở</option>
              <option value="Đấu thầu">Đấu thầu</option>
              <option value="Sắp đóng">Sắp đóng</option>
            </select>
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent appearance-none bg-white"
            >
              <option value="all">Tất cả địa điểm</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Nha Trang">Nha Trang</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow-sm border-l-4 border-[#003366]">
          <p className="text-gray-600 text-sm">Tổng dự án</p>
          <p className="text-2xl font-bold text-[#003366]">{projects.length}</p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-green-500">
          <p className="text-gray-600 text-sm">Đang mở</p>
          <p className="text-2xl font-bold text-green-600">
            {projects.filter(p => p.status === 'Đang mở').length}
          </p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm">Đấu thầu</p>
          <p className="text-2xl font-bold text-blue-600">
            {projects.filter(p => p.status === 'Đấu thầu').length}
          </p>
        </div>
        <div className="bg-white p-4 shadow-sm border-l-4 border-[#990000]">
          <p className="text-gray-600 text-sm">Tổng giá trị</p>
          <p className="text-2xl font-bold text-[#990000]">$45M+</p>
        </div>
      </div>

      {/* Project List */}
      <div className="grid gap-6">
        {filteredProjects.map((project) => {
          const daysRemaining = getDaysRemaining(project.deadline);
          return (
            <div key={project.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Building2 className="text-[#003366] flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#003366] mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm">
                          <strong>Chủ đầu tư:</strong> {project.client}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3 py-1 text-sm font-bold border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    {daysRemaining <= 7 && daysRemaining > 0 && (
                      <span className="px-3 py-1 text-sm font-bold bg-red-50 text-red-700 border border-red-200 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {daysRemaining} ngày
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign size={16} className="text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{project.budget}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} className="text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp size={16} className="text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{project.type}</span>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">Yêu cầu:</p>
                  <ul className="space-y-1">
                    {project.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-[#990000] mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <p><strong>Liên hệ:</strong> {project.contactPerson}</p>
                    <p>{project.contactEmail}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-6 py-2 bg-white border-2 border-[#003366] text-[#003366] font-bold hover:bg-[#003366] hover:text-white transition-colors">
                      Xem chi tiết
                    </button>
                    <button className="px-6 py-2 bg-[#990000] hover:bg-[#BB0000] text-white font-bold transition-colors">
                      Đăng ký quan tâm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="bg-white p-12 text-center">
          <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">Không tìm thấy dự án phù hợp với tiêu chí tìm kiếm.</p>
        </div>
      )}
    </div>
  );
}
