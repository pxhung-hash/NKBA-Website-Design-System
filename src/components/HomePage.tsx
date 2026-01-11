import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NKBAButton } from './NKBAButton';
import { Building2, Users, TrendingUp, Handshake, UserCheck, Lightbulb, Check, X, Phone, Mail, MapPin, FileDown } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  isAuthenticated?: boolean;
}

export function HomePage({ onNavigate, isAuthenticated }: HomePageProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    phone: '',
    field: 'Thiết kế',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký! Ban Thư ký sẽ liên hệ trong thời gian sớm nhất.');
    setFormData({ name: '', company: '', phone: '', field: 'Thiết kế' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={onNavigate} isAuthenticated={isAuthenticated} />

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.7)), url('https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjgwNTc0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-[#990000] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                Mô hình Doanh nghiệp Xã hội
              </span>
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                CONNECTING TRUST <br />
                <span className="text-[#C5A059]">BUILDING VALUE</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
                Liên minh Kinh doanh Xây dựng Nhật - Việt. <br />
                Nơi hội tụ các nhà lãnh đạo thực chiến, kết nối chuỗi cung ứng và kiến tạo cơ hội thương mại bền vững.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#join"
                  className="px-8 py-4 bg-[#990000] text-white font-bold shadow-lg hover:bg-[#BB0000] transition text-center"
                >
                  Trở thành Hội viên
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-[#003366] transition text-center flex items-center justify-center gap-2"
                >
                  <FileDown size={20} />
                  Tải Hồ Sơ (PDF)
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4MDE2MDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                className="shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition duration-500"
                alt="Meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY NKBA SECTION */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-3xl text-[#003366] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Tại sao NKBA ra đời?
            </h2>
            <div className="w-16 h-1 bg-[#990000] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Chúng tôi thấu hiểu "điểm nghẽn" của thị trường xây dựng Việt - Nhật và sinh ra để giải quyết nó.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition duration-300 border-t-4 border-[#003366] group">
              <div className="w-14 h-14 bg-blue-50 text-[#003366] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#003366] group-hover:text-white transition">
                <Handshake size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Kết nối đứt gãy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                DN Nhật có kỹ thuật nhưng thiếu quan hệ bán hàng. DN Việt muốn làm dự án Nhật nhưng thiếu thông tin. NKBA là cầu nối **Biz-Link** giúp hai bên gặp nhau.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition duration-300 border-t-4 border-[#990000] group">
              <div className="w-14 h-14 bg-red-50 text-[#990000] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#990000] group-hover:text-white transition">
                <UserCheck size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Nhân sự thiếu hụt</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thiếu nhân sự quản lý biết tiếng Nhật và am hiểu kỹ thuật. NKBA cung cấp giải pháp **Talent-Hub** chia sẻ nguồn nhân lực chất lượng cao.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition duration-300 border-t-4 border-[#003366] group">
              <div className="w-14 h-14 bg-blue-50 text-[#003366] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#003366] group-hover:text-white transition">
                <Lightbulb size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Thông tin hạn chế</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rào cản ngôn ngữ và pháp lý. NKBA cung cấp **Insights**, tư vấn pháp lý và tiêu chuẩn kỹ thuật để các bên yên tâm hợp tác.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section id="benefits" className="py-20 bg-[#003366] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <Building2 size={400} className="absolute -right-20 -bottom-20" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Các gói Hội viên
            </h2>
            <p className="text-gray-300">Lựa chọn vị thế phù hợp với doanh nghiệp của bạn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Member Tier */}
            <div className="bg-white text-gray-800 p-8 shadow-lg transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-2">Member</h3>
              <div className="text-4xl font-bold text-[#003366] mb-6">
                3.000.000 <span className="text-base font-normal text-gray-500">vnđ/năm</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  Tham gia họp định kỳ hàng tháng
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  Đăng 1 tin B2B/tháng trên Group
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  Xem Danh bạ hội viên (Cơ bản)
                </li>
                <li className="flex items-center text-gray-400">
                  <X size={18} className="mr-3 flex-shrink-0" />
                  Thông tin liên hệ Chủ đầu tư
                </li>
              </ul>
              <a
                href="#join"
                className="block w-full py-3 bg-gray-100 text-[#003366] font-bold text-center hover:bg-gray-200 transition"
              >
                Đăng ký Ngay
              </a>
            </div>

            {/* Partner Tier (Featured) */}
            <div className="bg-white text-gray-800 p-8 shadow-2xl transform scale-105 border-4 border-[#C5A059] relative">
              <div className="absolute top-0 right-0 bg-[#C5A059] text-white text-xs font-bold px-3 py-1 uppercase rounded-bl">
                Khuyên dùng
              </div>
              <h3 className="text-lg font-bold text-[#C5A059] uppercase tracking-widest mb-2">Partner (VIP)</h3>
              <div className="text-4xl font-bold text-[#003366] mb-6">
                12.000.000 <span className="text-base font-normal text-gray-500">vnđ/năm</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm font-medium">
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  **Quyền ưu tiên Biz-Matching 1:1**
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  **Xem Full Info Dự án & Nhân sự**
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  Trang Profile riêng trên Website
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  Đăng tin B2B không giới hạn
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  Huy hiệu Member mạ vàng
                </li>
              </ul>
              <a
                href="#join"
                className="block w-full py-3 bg-[#003366] text-white font-bold text-center hover:bg-opacity-90 transition shadow-lg"
              >
                Trở thành Đối tác VIP
              </a>
            </div>

            {/* Strategic Tier */}
            <div className="bg-white text-gray-800 p-8 shadow-lg transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-2">Strategic</h3>
              <div className="text-4xl font-bold text-[#003366] mb-6">
                50.000.000 <span className="text-base font-normal text-gray-500">vnđ/năm</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  **Quyền lợi Nhà tài trợ (Logo lớn)**
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  15 phút diễn thuyết (Keynote) / năm
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  Banner quảng cáo độc quyền
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  Ưu tiên số 1 về Pháp lý/Dịch thuật
                </li>
              </ul>
              <a
                href="#join"
                className="block w-full py-3 bg-gray-100 text-[#003366] font-bold text-center hover:bg-gray-200 transition"
              >
                Liên hệ Hợp tác
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section id="founders" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-[#003366]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ban Sáng Lập
            </h2>
            <p className="text-gray-600 mt-2">Dẫn dắt bởi những chuyên gia am hiểu sâu sắc Nhật Bản</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 mb-4 overflow-hidden border-4 border-[#003366]">
                <img
                  src="https://ui-avatars.com/api/?name=Nguyen+Ngoc+Khang&background=003366&color=fff&size=200"
                  alt="Nguyen Ngoc Khang"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Ông Nguyễn Ngọc Khang</h3>
              <p className="text-[#990000] text-sm font-bold uppercase mb-2">Chủ tịch (Chairman)</p>
              <p className="text-gray-500 text-xs px-4">
                Giám đốc Công ty Việt Long. Chuyên gia 20 năm kinh nghiệm thi công & vật liệu chuẩn Nhật.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 mb-4 overflow-hidden border-4 border-[#003366]">
                <img
                  src="https://ui-avatars.com/api/?name=Pham+Xuan+Hung&background=003366&color=fff&size=200"
                  alt="Pham Xuan Hung"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Ông Phạm Xuân Hưng</h3>
              <p className="text-[#990000] text-sm font-bold uppercase mb-2">Tổng Thư Ký (CEO)</p>
              <p className="text-gray-500 text-xs px-4">
                Nhà khởi xướng NKBA, Giám đốc kinh doanh kiêm Giám đốc chi nhánh miền bắc YKK AP Việt Nam. 12 năm kinh nghiệm an toàn cháy và sản xuất phân phối cửa.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 mb-4 overflow-hidden border-4 border-[#003366]">
                <img
                  src="https://ui-avatars.com/api/?name=Ngo+Van+Phu&background=003366&color=fff&size=200"
                  alt="Ngo Van Phu"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Ông Ngô Văn Phú</h3>
              <p className="text-[#990000] text-sm font-bold uppercase mb-2">GĐ Pháp chế</p>
              <p className="text-gray-500 text-xs px-4">
                Giám đốc Công ty Luật Hitsuji. Chuyên gia tư vấn pháp lý doanh nghiệp Nhật Bản.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN FORM SECTION */}
      <section id="join" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Info Side */}
            <div className="bg-[#003366] text-white p-10 md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Gia nhập ngay
                </h3>
                <p className="text-sm opacity-80 mb-6">
                  Để lại thông tin, Ban Thư ký sẽ liên hệ gửi hồ sơ và tư vấn gói hội viên phù hợp nhất.
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>09xx xxx xxx (Mr. Hưng)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    <span>lienhe@nkba.vn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} />
                    <span>[Địa chỉ văn phòng]</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs opacity-50 uppercase tracking-widest">Pháp nhân</p>
                <p className="font-bold">Công ty Cổ phần Xã hội NKBA</p>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:w-3/5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Họ và Tên</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border focus:outline-none focus:border-[#003366] bg-gray-50"
                      placeholder="Nguyễn Văn A"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Tên Công ty</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border focus:outline-none focus:border-[#003366] bg-gray-50"
                      placeholder="Công ty Xây dựng ABC"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border focus:outline-none focus:border-[#003366] bg-gray-50"
                        placeholder="09xxx..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Lĩnh vực</label>
                      <select
                        name="field"
                        value={formData.field}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border focus:outline-none focus:border-[#003366] bg-gray-50"
                      >
                        <option>Thiết kế</option>
                        <option>Thi công</option>
                        <option>Vật liệu</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#990000] text-white font-bold hover:bg-[#BB0000] transition shadow-lg mt-2"
                  >
                    Gửi Đăng Ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}