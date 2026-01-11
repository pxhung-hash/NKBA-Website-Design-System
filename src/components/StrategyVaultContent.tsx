import React from 'react';
import { Target, Handshake, Users, Lock, Files, Shield, Package, GitMerge, Lightbulb, Crown, CheckCircle, Clock, UserPlus, Download, Fingerprint, TrendingUp, ShieldCheck, Paintbrush, Edit } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface ContentProps {
  activeNavItem: string;
}

export function StrategyVaultContent({ activeNavItem }: ContentProps) {
  const [brandTab, setBrandTab] = React.useState('overview');
  const [selectedProduct, setSelectedProduct] = React.useState<string | null>(null);

  // Chart Data
  const coreValuesData = [
    { subject: 'Trust (Shinrai)', value: 95 },
    { subject: 'Expertise', value: 90 },
    { subject: 'Practicality', value: 85 },
    { subject: 'Sustainability', value: 88 },
  ];

  const colorData = [
    { name: 'Navy Blue', value: 50, color: '#002D62' },
    { name: 'Crimson Red', value: 20, color: '#BE0027' },
    { name: 'Steel Grey', value: 15, color: '#707070' },
    { name: 'White', value: 15, color: '#F5F5F5' },
  ];

  const productDetails: Record<string, any> = {
    tender: {
      title: 'NKBA PRIVATE TENDER (Sàn Đấu Thầu Kín)',
      type: 'Digital Platform',
      status: 'Development',
      owner: 'Ban Biz-Link',
      description: 'Nền tảng niêm yết các gói thầu xây dựng/cung ứng vật tư từ Tổng thầu Nhật Bản và Chủ đầu tư lớn. Đặc điểm cốt lõi là tính "Kín" (Private) - chỉ dành cho hội viên NKBA đã xác thực năng lực (Level 2 & 3).',
      valueProp: [
        'Tiếp cận nguồn việc "sạch", ít cạnh tranh ảo.',
        'Được NKBA bảo chứng năng lực với chủ thầu.',
        'Quy trình nộp hồ sơ chuẩn hóa theo phong cách Nhật.'
      ],
      kpi: '20 Gói thầu/tháng - GMV 50 tỷ VNĐ'
    },
    training: {
      title: '"JAPAN-READY" ENGINEER CERTIFICATION',
      type: 'Education / Training',
      status: 'Planning',
      owner: 'Ban Talent-Hub',
      description: 'Chương trình đào tạo ngắn hạn và cấp chứng chỉ kỹ năng làm việc chuẩn Nhật cho kỹ sư Việt Nam. Tập trung vào tư duy Horenso, 5S, An toàn lao động (Safety) và Thuật ngữ chuyên ngành xây dựng.',
      valueProp: [
        'Chuẩn hóa nhân sự đầu vào cho các công ty Nhật.',
        'Chứng chỉ do NKBA cấp có giá trị uy tín trong cộng đồng.',
        'Giúp kỹ sư hòa nhập nhanh chóng, giảm xung đột văn hóa.'
      ],
      kpi: '100 Học viên/quý - Tỷ lệ hài lòng > 90%'
    }
  };

  const renderDashboard = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target size={48} className="text-[#002D62]" />
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Tiến độ Phase 1</p>
          <h3 className="text-2xl font-bold text-slate-800">85%</h3>
          <div className="w-full bg-slate-100 h-1.5 mt-3 rounded-full overflow-hidden">
            <div className="bg-[#002D62] h-full rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="text-xs text-green-600 mt-2 font-medium">✓ Đang đi đúng lộ trình</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Handshake size={48} className="text-[#BE0027]" />
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Thương vụ Biz-Link</p>
          <h3 className="text-2xl font-bold text-slate-800">12 Active</h3>
          <p className="text-xs text-slate-400 mt-2">Tổng giá trị: <span className="text-slate-700 font-bold">Waiting...</span></p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users size={48} className="text-blue-600" />
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Nhân sự Talent-Hub</p>
          <h3 className="text-2xl font-bold text-slate-800">45 Profiles</h3>
          <p className="text-xs text-slate-400 mt-2">Đã thẩm định: <span className="text-slate-700 font-bold">28</span></p>
        </div>

        <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 p-4 opacity-20">
            <Lock size={48} className="text-green-400" />
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-1">Trạng thái Bảo mật</p>
          <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            SECURE
          </h3>
          <p className="text-xs text-gray-400 mt-2">Chống copy: <span className="text-white font-bold">BẬT</span></p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#002D62] mb-4 flex items-center gap-2">
        <Files size={20} /> Hồ Sơ Chiến Lược
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all group cursor-pointer">
          <div className="h-40 bg-slate-100 flex items-center justify-center rounded-t-xl">
            <div className="text-center opacity-80">
              <Paintbrush className="mx-auto mb-2 text-[#002D62]" size={32} />
              <h4 className="font-bold text-[#002D62]">BRAND GUIDELINES</h4>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-slate-800">Bộ Nhận Diện</h4>
            <p className="text-sm text-slate-500">Logo, Màu sắc, Sứ mệnh.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all group cursor-pointer">
          <div className="h-40 bg-[#002D62] flex items-center justify-center rounded-t-xl">
            <div className="text-center text-white">
              <GitMerge className="mx-auto mb-2 text-[#BE0027]" size={32} />
              <h4 className="font-bold">TRANSITION MODEL</h4>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-slate-800">Cơ Cấu & Pháp Lý</h4>
            <p className="text-sm text-slate-500">Mô hình Lai.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all group cursor-pointer">
          <div className="h-40 bg-slate-50 flex items-center justify-center rounded-t-xl">
            <div className="text-center opacity-60">
              <Package className="mx-auto mb-2 text-slate-400" size={32} />
              <h4 className="font-bold text-slate-500">PRODUCT MAP</h4>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-slate-800">Lộ Trình Sản Phẩm</h4>
            <p className="text-sm text-slate-500">Biz-Link, Talent, Insights.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all group cursor-pointer border-l-4 border-l-[#D4AF37]">
          <div className="h-40 bg-gradient-to-br from-slate-800 to-[#002D62] flex items-center justify-center rounded-t-xl">
            <div className="text-center text-[#D4AF37]">
              <Crown className="mx-auto mb-2" size={32} />
              <h4 className="font-bold text-white">MEMBERSHIP</h4>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-slate-800">Chính Sách Hội Viên</h4>
            <p className="text-sm text-slate-500">Phân hạng & Quyền lợi.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBrand = () => (
    <div>
      <div className="mb-6 border-b border-slate-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          {['overview', 'logo', 'namecard', 'brochure', 'profile'].map((tab) => (
            <li key={tab} className="mr-2">
              <button
                onClick={() => setBrandTab(tab)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  brandTab === tab
                    ? 'border-[#BE0027] text-[#002D62] font-bold'
                    : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {brandTab === 'overview' && (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <header className="bg-[#002D62] text-white py-12 px-4 shadow-lg text-center">
            <div className="max-w-6xl mx-auto">
              <div className="inline-block border-4 border-white p-6 mb-6">
                <h1 className="text-6xl font-heading font-extrabold tracking-tighter">NKBA</h1>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-200">
                NICHIETSU KENSETSU BUSINESS ALLIANCE
              </h2>
              <p className="text-xl md:text-2xl italic font-light mt-4 text-[#BE0027] font-slab bg-white inline-block px-4 py-1 rounded">
                "Connecting Trust - Building Value"
              </p>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
                <h3 className="text-2xl font-bold text-[#002D62] mb-4">4 Trụ Cột Giá Trị</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={coreValuesData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Values" dataKey="value" stroke="#002D62" fill="#002D62" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
                <h3 className="text-2xl font-bold text-[#002D62] mb-4">Hệ Thống Màu Sắc</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={colorData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {colorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-[#002D62] mb-4">Màu Sắc Thương Hiệu</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-[#002D62] mr-3 border border-gray-300 rounded"></span>
                  <div>
                    <strong className="text-[#002D62]">Navy Blue</strong>
                    <span className="text-xs block text-gray-500">Tin cậy, Kỹ thuật</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-[#BE0027] mr-3 border border-gray-300 rounded"></span>
                  <div>
                    <strong className="text-[#BE0027]">Crimson Red</strong>
                    <span className="text-xs block text-gray-500">Nhiệt huyết</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {brandTab === 'namecard' && (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8 rounded-xl border border-slate-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">NKBA Name Card Design</h1>
            <p className="text-gray-600">Mô phỏng kích thước chuẩn 90mm x 55mm</p>
          </div>
          <div className="flex flex-col xl:flex-row gap-12 items-center justify-center">
            {/* Front */}
            <div className="flex flex-col items-center">
              <span className="mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Mặt Trước (Front)</span>
              <div className="w-[540px] h-[330px] relative bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full opacity-50"></div>
                <div className="h-full flex flex-col justify-between p-10 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#002D62] flex items-center justify-center relative">
                      <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
                      <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-[#BE0027]"></div>
                    </div>
                    <div>
                      <h2 className="text-4xl font-montserrat font-extrabold text-[#002D62] tracking-tight leading-none">NKBA</h2>
                      <p className="text-[0.6rem] text-[#002D62] font-bold tracking-widest uppercase mt-1">Nichietsu Kensetsu Business Alliance</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-800 uppercase mb-1">Nguyen Van An</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-[#BE0027] uppercase tracking-wide">Project Director</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-sm text-gray-500">プロジェクトディレクター</span>
                    </div>
                    <div className="w-16 h-1 bg-[#BE0027] mt-4"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-light flex justify-between items-end">
                    <span>Vietnam - Japan Connection</span>
                  </div>
                </div>
                <div className="absolute right-0 top-10 bottom-10 w-1 bg-[#BE0027]"></div>
              </div>
            </div>

            {/* Back */}
            <div className="flex flex-col items-center">
              <span className="mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Mặt Sau (Back)</span>
              <div className="w-[540px] h-[330px] bg-[#002D62] relative text-white shadow-xl rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#BE0027]"></div>
                <div className="h-full flex flex-col justify-center items-center p-10 relative z-10 text-center">
                  <div className="mb-8">
                    <div className="inline-block px-4 py-1 border border-white/30 rounded mb-3">
                      <span className="text-xs tracking-[0.2em] uppercase text-gray-300">Mission</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl uppercase tracking-wider leading-snug">
                      Connecting Trust<br />
                      <span className="text-[#BE0027]">Building Value</span>
                    </h3>
                  </div>
                  <div className="w-full border-t border-white/20 pt-6 mt-2 flex flex-col gap-2 text-sm font-light tracking-wide text-gray-200">
                    <div className="flex items-center justify-center gap-3">
                      <span className="font-bold text-[#BE0027]">M:</span>
                      <span>+84 90 123 4567</span>
                      <span className="text-gray-500">|</span>
                      <span>+81 80 1234 5678</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="font-bold text-[#BE0027]">E:</span>
                      <span>contact@nkba.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="font-bold text-[#BE0027]">W:</span>
                      <span>www.nkba.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(brandTab === 'logo' || brandTab === 'brochure' || brandTab === 'profile') && (
        <div className="bg-white p-10 rounded-xl border border-slate-200 text-center">
          <h3 className="text-xl font-bold text-[#002D62] mb-4">
            {brandTab.charAt(0).toUpperCase() + brandTab.slice(1)} Design
          </h3>
          <p className="text-gray-500">Nội dung đang được cập nhật...</p>
        </div>
      )}
    </div>
  );

  const renderStructure = () => (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#002D62] flex items-center gap-3">
            <GitMerge size={24} /> Cơ Cấu Tổ Chức & Pháp Lý
          </h2>
          <p className="text-slate-500 text-sm mt-1">Mô hình vận hành Hybrid và Sơ đồ quản trị Công ty Cổ phần</p>
        </div>
      </div>

      {/* Entity Model */}
      <div className="mb-10">
        <h3 className="font-bold text-lg text-slate-800 mb-4 border-l-4 border-[#BE0027] pl-3">
          1. Mô Hình Pháp Nhân (Hybrid Model)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border-t-4 border-[#002D62] shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#002D62]">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#002D62]">NKBA ALLIANCE</h4>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase">
                  Tổ chức Xã hội / Phi lợi nhuận
                </span>
              </div>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5" />
                <span><strong>Vai trò:</strong> Branding, Quan hệ chính phủ (GR), Cộng đồng.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border-t-4 border-[#BE0027] shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#BE0027]">
                <Package size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#BE0027]">NKBA SERVICES JSC</h4>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase">
                  Công ty Cổ phần Thương mại
                </span>
              </div>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5" />
                <span><strong>Vai trò:</strong> Cánh tay thương mại, Ký HĐ kinh tế, Xuất hóa đơn.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Org Chart */}
      <div className="mb-10">
        <h3 className="font-bold text-lg text-slate-800 mb-6 border-l-4 border-[#002D62] pl-3">
          2. Sơ Đồ Tổ Chức
        </h3>
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
          <div className="min-w-[800px] flex flex-col items-center gap-10">
            {/* Level 1: General Meeting */}
            <div className="relative z-10">
              <div className="px-6 py-3 bg-[#002D62] text-white rounded-lg shadow-md font-bold text-center border-2 border-white ring-2 ring-[#002D62]">
                ĐẠI HỘI ĐỒNG CỔ ĐÔNG<br />
                <span className="text-[10px] font-normal opacity-80">(General Meeting of Shareholders)</span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full h-10 w-0.5 bg-slate-300"></div>
            </div>

            {/* Level 2: BOD + BKS */}
            <div className="flex gap-16 relative w-full justify-center">
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-64 h-0.5 bg-slate-300"></div>
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 h-5 w-0.5 bg-slate-300"></div>
              
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-[-20px] h-5 w-0.5 bg-slate-300"></div>
                <div className="px-4 py-2 bg-slate-100 text-slate-700 rounded border border-slate-300 font-bold text-sm text-center">
                  BAN KIỂM SOÁT
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-[-20px] h-5 w-0.5 bg-slate-300"></div>
                <div className="px-6 py-3 bg-[#BE0027] text-white rounded-lg shadow-md font-bold text-center w-64">
                  HỘI ĐỒNG QUẢN TRỊ
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full h-10 w-0.5 bg-slate-300"></div>
              </div>
            </div>

            {/* Level 3: CEO */}
            <div className="relative z-10">
              <div className="px-6 py-3 bg-white text-[#002D62] border-2 border-[#002D62] rounded-lg shadow-sm font-bold text-center w-56">
                BAN TỔNG GIÁM ĐỐC<br />
                <span className="text-[10px] font-normal text-slate-500">(Board of Management - CEO)</span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-slate-300"></div>
            </div>

            {/* Level 4: Departments */}
            <div className="relative w-full pt-4">
              <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-slate-300"></div>
              <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-4 w-0.5 bg-slate-300"></div>
              <div className="grid grid-cols-4 gap-4">
                {['KHỐI BIZ-LINK', 'KHỐI TALENT-HUB', 'KHỐI INSIGHTS', 'VẬN HÀNH (ADMIN)'].map((dept, index) => (
                  <div key={index} className="relative pt-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-slate-300"></div>
                    <div className={`p-3 ${index < 3 ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-200'} border rounded text-center`}>
                      <div className={`font-bold text-sm ${index < 3 ? 'text-[#002D62]' : 'text-slate-700'}`}>
                        {dept}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => {
    if (selectedProduct && productDetails[selectedProduct]) {
      const product = productDetails[selectedProduct];
      return (
        <div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#002D62] mb-6 transition-colors"
          >
            ← Quay lại danh sách sản phẩm
          </button>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="bg-blue-50 px-8 py-8 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-bold border border-slate-200 shadow-sm text-slate-600 uppercase tracking-wider">
                  {product.type}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded border border-green-200">
                  {product.status}
                </span>
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-[#002D62]">{product.title}</h2>
              <p className="text-slate-600 mt-2 flex items-center gap-2">
                <Users size={16} /> Owner: <strong>{product.owner}</strong>
              </p>
              <div className="mt-4">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Mục Tiêu KPI</div>
                <div className="text-xl font-bold text-slate-800">{product.kpi}</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-[#002D62] text-lg mb-3 border-b border-slate-100 pb-2">Mô Tả Sản Phẩm</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>
              
              <h3 className="font-bold text-[#002D62] text-lg mb-3 border-b border-slate-100 pb-2">
                Giá Trị Cốt Lõi (Value Proposition)
              </h3>
              <ul className="space-y-3">
                {product.valueProp.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-0.5" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#002D62] flex items-center gap-3">
              <Package size={24} /> Quản Lý Danh Mục Sản Phẩm & Dịch Vụ
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Hệ sinh thái sản phẩm cốt lõi: Biz-Link, Talent-Hub và Insights
            </p>
          </div>
        </div>

        {/* Phase Banner */}
        <div className="bg-gradient-to-r from-[#002D62] to-blue-900 rounded-xl p-6 text-white mb-8 shadow-md relative overflow-hidden">
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">Chiến Lược Hiện Tại</p>
              <h3 className="text-2xl font-bold font-heading">GIAI ĐOẠN 1: LƯU THÔNG NỘI BỘ</h3>
              <p className="text-sm opacity-80 mt-1">Tập trung tạo "Quick Wins" cho thành viên nòng cốt.</p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* BIZ-LINK */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl border-t-4 border-[#002D62] shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#002D62]">
                  <Handshake size={20} />
                </div>
                <h3 className="font-bold text-lg text-[#002D62]">NKBA BIZ-LINK</h3>
              </div>
              <p className="text-xs text-slate-500">Kết nối kinh doanh & Xúc tiến thương mại</p>
            </div>

            <div
              onClick={() => setSelectedProduct('tender')}
              className="bg-white p-4 rounded-lg border border-[#BE0027]/30 shadow-md hover:shadow-lg transition-all cursor-pointer ring-1 ring-[#BE0027]/10 group"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#002D62] text-sm group-hover:text-[#BE0027] transition-colors">
                  ★ NKBA PRIVATE TENDER
                </h4>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded">STRATEGIC</span>
              </div>
              <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                Sàn đấu thầu kín dành riêng cho thành viên đã xác thực.
              </p>
              <div className="text-[10px] text-slate-400 border-t border-slate-100 pt-2 flex justify-between">
                <span>Platform: Web/App</span>
                <span className="font-bold text-[#002D62]">Click chi tiết →</span>
              </div>
            </div>
          </div>

          {/* TALENT-HUB */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl border-t-4 border-[#BE0027] shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#BE0027]">
                  <Users size={20} />
                </div>
                <h3 className="font-bold text-lg text-[#BE0027]">NKBA TALENT-HUB</h3>
              </div>
              <p className="text-xs text-slate-500">Nhân sự & Đào tạo thực chiến</p>
            </div>

            <div
              onClick={() => setSelectedProduct('training')}
              className="bg-white p-4 rounded-lg border border-[#BE0027]/30 shadow-md hover:shadow-lg transition-all cursor-pointer ring-1 ring-[#BE0027]/10 group"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#002D62] text-sm group-hover:text-[#BE0027] transition-colors">
                  ★ "JAPAN-READY" TRAINING
                </h4>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded">STRATEGIC</span>
              </div>
              <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                Khóa đào tạo & Chứng chỉ Kỹ sư chuẩn Nhật.
              </p>
              <div className="text-[10px] text-slate-400 border-t border-slate-100 pt-2 flex justify-between">
                <span>Type: Education</span>
                <span className="font-bold text-[#002D62]">Click chi tiết →</span>
              </div>
            </div>
          </div>

          {/* INSIGHTS */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl border-t-4 border-[#D4AF37] shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center text-[#D4AF37]">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-bold text-lg text-[#D4AF37]">NKBA INSIGHTS</h3>
              </div>
              <p className="text-xs text-slate-500">Thông tin thị trường & Tư vấn</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#D4AF37]/30 shadow-md hover:shadow-lg transition-all cursor-pointer ring-1 ring-[#D4AF37]/10 group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#002D62] text-sm group-hover:text-[#D4AF37] transition-colors">
                  ★ VJ MARKET WATCH
                </h4>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded">STRATEGIC</span>
              </div>
              <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                Báo cáo thị trường, dòng vốn FDI.
              </p>
              <div className="text-[10px] text-slate-400 border-t border-slate-100 pt-2 flex justify-between">
                <span>Type: Report</span>
                <span className="font-bold text-[#002D62]">Click chi tiết →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMembership = () => (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#002D62] flex items-center gap-3">
            <Crown size={24} /> Chính Sách Hội Viên
          </h2>
          <p className="text-slate-500 text-sm mt-1">Phiên bản 1.0 - Áp dụng cho Chiến lược Product-Led</p>
        </div>
      </div>

      {/* Principles */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h3 className="font-bold text-[#002D62] text-lg mb-4 border-b border-slate-100 pb-2">1. Nguyên Tắc Chung</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-50 rounded-lg">
            <div className="text-[#BE0027] font-bold mb-2 flex items-center gap-2">
              <Fingerprint size={18} /> Định danh (KYC)
            </div>
            <p className="text-sm text-slate-600">Mọi cá nhân/tổ chức phải định danh để đảm bảo an toàn & uy tín.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <div className="text-[#002D62] font-bold mb-2 flex items-center gap-2">
              <TrendingUp size={18} /> Phân cấp
            </div>
            <p className="text-sm text-slate-600">Quyền lợi dựa trên mức độ cam kết tài chính & đóng góp.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <div className="text-green-600 font-bold mb-2 flex items-center gap-2">
              <ShieldCheck size={18} /> Bảo mật
            </div>
            <p className="text-sm text-slate-600">Dữ liệu nhạy cảm chỉ dành cho thành viên được thẩm định.</p>
          </div>
        </div>
      </div>

      {/* Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="bg-blue-50 p-4 border-b border-blue-100 text-center">
            <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-blue-600 border border-blue-200 mb-2">
              LEVEL 1
            </span>
            <h3 className="font-bold text-xl text-[#002D62]">REGISTERED</h3>
            <p className="text-sm text-slate-500">Thành viên Đăng ký</p>
            <div className="mt-3 text-2xl font-bold text-slate-800">Miễn phí</div>
          </div>
          <div className="p-6 flex-1 text-sm text-slate-600 space-y-3">
            <p className="font-semibold text-slate-800">Quyền lợi:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hồ sơ cá nhân cơ bản</li>
              <li>Xem tiêu đề cơ hội (ẩn contact)</li>
              <li>Xem Job Board công khai</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-300 overflow-hidden flex flex-col relative transform md:-translate-y-2">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#002D62]"></div>
          <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
            <span className="inline-block px-3 py-1 bg-[#002D62] rounded-full text-xs font-bold text-white mb-2">
              LEVEL 2
            </span>
            <h3 className="font-bold text-xl text-[#002D62]">SILVER PARTNER</h3>
            <p className="text-sm text-slate-500">Đối tác Chính thức</p>
            <div className="mt-3 text-xl font-bold text-slate-800">
              5-10tr <span className="text-sm font-normal text-slate-500">/năm</span>
            </div>
          </div>
          <div className="p-6 flex-1 text-sm text-slate-600 space-y-3">
            <p className="font-semibold text-slate-800">Quyền lợi Đặc biệt:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Biz-Link:</strong> Đăng tin & Xem contact</li>
              <li><strong>Talent:</strong> Đăng 03 tin tuyển dụng/tháng</li>
              <li><strong>Insights:</strong> Bản tin thị trường tháng</li>
              <li>Liệt kê trong Danh bạ Uy tín</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-yellow-200 overflow-hidden flex flex-col">
          <div className="bg-yellow-50 p-4 border-b border-yellow-100 text-center">
            <span className="inline-block px-3 py-1 bg-[#D4AF37] rounded-full text-xs font-bold text-white mb-2">
              LEVEL 3
            </span>
            <h3 className="font-bold text-xl text-[#002D62]">GOLD VIP</h3>
            <p className="text-sm text-slate-500">Thành viên Chiến lược</p>
            <div className="mt-3 text-xl font-bold text-slate-800">
              &gt;20tr <span className="text-sm font-normal text-slate-500">/năm</span>
            </div>
          </div>
          <div className="p-6 flex-1 text-sm text-slate-600 space-y-3">
            <p className="font-semibold text-slate-800">Quyền lợi Độc quyền:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tiếp cận thầu kín, M&A</li>
              <li>Bảo chứng năng lực (Verified Badge)</li>
              <li>Headhunt C-Level Profile</li>
              <li>Tư vấn 1-1 & Private Dinner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#002D62] flex items-center gap-3">
            <Users size={24} /> Quản Lý Phân Quyền User
          </h2>
          <p className="text-slate-500 text-sm mt-1">Kiểm soát truy cập, phê duyệt thành viên và phân cấp quyền hạn.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#002D62] text-white rounded-lg hover:bg-blue-900 transition-colors shadow-lg">
          <UserPlus size={16} /> Thêm User Mới
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold">Tổng User</p>
            <h3 className="text-xl font-bold text-slate-800">1,245</h3>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold">Active Users</p>
            <h3 className="text-xl font-bold text-slate-800">890</h3>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-[#D4AF37]">
            <Crown size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold">Gold VIP</p>
            <h3 className="text-xl font-bold text-slate-800">45</h3>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#BE0027]">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold">Chờ duyệt</p>
            <h3 className="text-xl font-bold text-slate-800">12</h3>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Tìm kiếm tên, email..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62] transition-all"
              />
            </div>
            <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none cursor-pointer">
              <option value="">Tất cả Role</option>
              <option value="Registered">Registered (L1)</option>
              <option value="Silver">Silver (L2)</option>
              <option value="Gold">Gold VIP (L3)</option>
            </select>
          </div>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded border border-slate-200">
            <Download size={18} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 w-10">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3">User Info</th>
                <th className="px-6 py-3">Role / Cấp bậc</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3">Last Access</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#002D62] text-white flex items-center justify-center font-bold">
                      NT
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Nguyen Van Thanh</div>
                      <div className="text-xs text-slate-500">thanh.nguyen@kajima.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-50 text-yellow-700 border border-yellow-200">
                    <Crown size={12} className="text-[#D4AF37]" /> GOLD VIP
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span> Active
                </td>
                <td className="px-6 py-4 text-slate-500">Just now</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-[#002D62] p-1">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold">
                      LM
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Le Minh</div>
                      <div className="text-xs text-slate-500">minh.le@construction.vn</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                    <Shield size={12} /> SILVER
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span> Active
                </td>
                <td className="px-6 py-4 text-slate-500">2 hours ago</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-[#002D62] p-1">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
          <p className="text-xs text-slate-500">
            Showing <strong>1-2</strong> of <strong>1,245</strong> users
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-[#002D62] border border-[#002D62] rounded text-xs text-white">
              1
            </button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render based on active nav item
  switch (activeNavItem) {
    case 'dashboard':
      return renderDashboard();
    case 'brand':
      return renderBrand();
    case 'structure':
      return renderStructure();
    case 'product':
      return renderProducts();
    case 'membership':
      return renderMembership();
    case 'users':
      return renderUsers();
    default:
      return renderDashboard();
  }
}