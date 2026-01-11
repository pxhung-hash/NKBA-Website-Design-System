import React from 'react';

export function NKBAShowcase() {
  return (
    <div>
      {/* NAVIGATION (simple variant since Header exists) */}
      <nav className="bg-white shadow-md fixed w-full z-40">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[var(--nkba-navy)] text-white flex items-center justify-center font-bold rounded">VJ</div>
            <div className="leading-tight">
              <h1 className="font-heading font-bold text-[var(--nkba-navy)] text-xl">NKBA</h1>
              <p className="text-xs text-gray-500 tracking-wider">Business Alliance</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-sm">
            <a href="#about" className="hover:text-[var(--nkba-red)] transition">Về NKBA</a>
            <a href="#benefits" className="hover:text-[var(--nkba-red)] transition">Quyền lợi</a>
            <a href="#founders" className="hover:text-[var(--nkba-red)] transition">Lãnh đạo</a>
            <a href="#join" className="px-5 py-2 bg-[var(--nkba-red)] text-white rounded hover:bg-red-800 transition shadow">Đăng ký Hội viên</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-bg h-screen min-h-[600px] flex items-center text-white relative clip-path-slant">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-16">
          <div>
            <span className="bg-[var(--nkba-red)] text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase mb-4 inline-block">Mô hình Doanh nghiệp Xã hội</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl leading-tight mb-6">
              CONNECTING TRUST <br />
              <span className="text-[var(--nkba-gold)]">BUILDING VALUE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
              Liên minh Kinh doanh Xây dựng Nhật - Việt. <br />
              Nơi hội tụ các nhà lãnh đạo thực chiến, kết nối chuỗi cung ứng và kiến tạo cơ hội thương mại bền vững.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#join" className="px-8 py-4 bg-[var(--nkba-red)] text-white font-bold rounded shadow-lg hover:bg-red-800 transition text-center">
                Trở thành Hội viên
              </a>
              <a href="#" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-[var(--nkba-navy)] transition text-center flex items-center justify-center gap-2">
                <i className="fas fa-file-download"></i> Tải Hồ Sơ (PDF)
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="rounded-lg shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition duration-500" alt="Meeting" />
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl text-[var(--nkba-navy)] mb-4">Tại sao NKBA ra đời?</h2>
            <div className="w-16 h-1 bg-[var(--nkba-red)] mx-auto mb-6"></div>
            <p className="text-gray-600">Chúng tôi thấu hiểu "điểm nghẽn" của thị trường xây dựng Việt - Nhật và sinh ra để giải quyết nó.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border-t-4 border-[var(--nkba-navy)] group">
              <div className="w-14 h-14 bg-blue-50 text-[var(--nkba-navy)] rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-[var(--nkba-navy)] group-hover:text-white transition">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Kết nối đứt gãy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">DN Nhật có kỹ thuật nhưng thiếu quan hệ bán hàng. DN Việt muốn làm dự án Nhật nhưng thiếu thông tin. NKBA là cầu nối <strong>Biz-Link</strong> giúp hai bên gặp nhau.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border-t-4 border-[var(--nkba-red)] group">
              <div className="w-14 h-14 bg-red-50 text-[var(--nkba-red)] rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-[var(--nkba-red)] group-hover:text-white transition">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Nhân sự thiếu hụt</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Thiếu nhân sự quản lý biết tiếng Nhật và am hiểu kỹ thuật. NKBA cung cấp giải pháp <strong>Talent-Hub</strong> chia sẻ nguồn nhân lực chất lượng cao.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border-t-4 border-[var(--nkba-navy)] group">
              <div className="w-14 h-14 bg-blue-50 text-[var(--nkba-navy)] rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-[var(--nkba-navy)] group-hover:text-white transition">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Thông tin hạn chế</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Rào cản ngôn ngữ và pháp lý. NKBA cung cấp <strong>Insights</strong>, tư vấn pháp lý và tiêu chuẩn kỹ thuật để các bên yên tâm hợp tác.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-20 bg-[var(--nkba-navy)] text-white relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <i className="fas fa-building text-[400px] absolute -right-20 -bottom-20"></i>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl mb-4">Các gói Hội viên</h2>
            <p className="text-gray-300">Lựa chọn vị thế phù hợp với doanh nghiệp của bạn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-2">Member</h3>
              <div className="text-4xl font-bold text-[var(--nkba-navy)] mb-6">3.000.000 <span className="text-base font-normal text-gray-500">vnđ/năm</span></div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Tham gia họp định kỳ hàng tháng</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Đăng 1 tin B2B/tháng trên Group</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Xem Danh bạ hội viên (Cơ bản)</li>
                <li className="flex items-center text-gray-400"><i className="fas fa-times mr-3"></i> Thông tin liên hệ Chủ đầu tư</li>
              </ul>
              <a href="#join" className="block w-full py-3 bg-gray-100 text-[var(--nkba-navy)] font-bold text-center rounded hover:bg-gray-200 transition">Đăng ký Ngay</a>
            </div>

            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-2xl transform scale-105 border-4 border-[var(--nkba-gold)] relative">
              <div className="absolute top-0 right-0 bg-[var(--nkba-gold)] text-white text-xs font-bold px-3 py-1 uppercase rounded-bl">Khuyên dùng</div>
              <h3 className="text-lg font-bold text-[var(--nkba-gold)] uppercase tracking-widest mb-2">Partner (VIP)</h3>
              <div className="text-4xl font-bold text-[var(--nkba-navy)] mb-6">12.000.000 <span className="text-base font-normal text-gray-500">vnđ/năm</span></div>
              <ul className="space-y-4 mb-8 text-sm font-medium">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> <strong>Quyền ưu tiên Biz-Matching 1:1</strong></li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> <strong>Xem Full Info Dự án & Nhân sự</strong></li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Trang Profile riêng trên Website</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Đăng tin B2B không giới hạn</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Huy hiệu Member mạ vàng</li>
              </ul>
              <a href="#join" className="block w-full py-3 bg-[var(--nkba-navy)] text-white font-bold text-center rounded hover:bg-opacity-90 transition shadow-lg">Trở thành Đối tác VIP</a>
            </div>

            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-2">Strategic</h3>
              <div className="text-4xl font-bold text-[var(--nkba-navy)] mb-6">50.000.000 <span className="text-base font-normal text-gray-500">vnđ/năm</span></div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> <strong>Quyền lợi Nhà tài trợ (Logo lớn)</strong></li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> 15 phút diễn thuyết (Keynote) / năm</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Banner quảng cáo độc quyền</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Ưu tiên số 1 về Pháp lý/Dịch thuật</li>
              </ul>
              <a href="#join" className="block w-full py-3 bg-gray-100 text-[var(--nkba-navy)] font-bold text-center rounded hover:bg-gray-200 transition">Liên hệ Hợp tác</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-[var(--nkba-navy)]">Ban Sáng Lập</h2>
            <p className="text-gray-600 mt-2">Dẫn dắt bởi những chuyên gia am hiểu sâu sắc Nhật Bản</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-[var(--nkba-navy)]">
                <img src="https://ui-avatars.com/api/?name=Nguyen+Ngoc+Khang&background=003366&color=fff&size=200" alt="Nguyen Ngoc Khang" />
              </div>
              <h3 className="font-bold text-lg">Ông Nguyễn Ngọc Khang</h3>
              <p className="text-nkba-red text-sm font-bold uppercase mb-2">Chủ tịch (Chairman)</p>
              <p className="text-gray-500 text-xs px-4">Giám đốc Công ty Việt Long. Chuyên gia 20 năm kinh nghiệm thi công & vật liệu chuẩn Nhật.</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-[var(--nkba-navy)]">
                <img src="https://ui-avatars.com/api/?name=Pham+Xuan+Hung&background=003366&color=fff&size=200" alt="Pham Xuan Hung" />
              </div>
              <h3 className="font-bold text-lg">Ông Phạm Xuân Hưng</h3>
              <p className="text-nkba-red text-sm font-bold uppercase mb-2">Tổng Thư Ký (CEO)</p>
              <p className="text-gray-500 text-xs px-4">Nhà khởi xướng NKBA, Giám đốc kinh doanh kiêm Giám đốc chi nhánh miền bắc YKK AP Việt Nam. 12 năm kinh nghiệm an toàn cháy và sản xuất phân phối cửa.</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-[var(--nkba-navy)]">
                <img src="https://ui-avatars.com/api/?name=Ngo+Van+Phu&background=003366&color=fff&size=200" alt="Ngo Van Phu" />
              </div>
              <h3 className="font-bold text-lg">Ông Ngô Văn Phú</h3>
              <p className="text-nkba-red text-sm font-bold uppercase mb-2">GĐ Pháp chế</p>
              <p className="text-gray-500 text-xs px-4">Giám đốc Công ty Luật Hitsuji. Chuyên gia tư vấn pháp lý doanh nghiệp Nhật Bản.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-[var(--nkba-navy)] text-white p-10 md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-4">Gia nhập ngay</h3>
                <p className="text-sm opacity-80 mb-6">Để lại thông tin, Ban Thư ký sẽ liên hệ gửi hồ sơ và tư vấn gói hội viên phù hợp nhất.</p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-phone-alt"></i>
                    <span>09xx xxx xxx (Mr. Hưng)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-envelope"></i>
                    <span>lienhe@nkba.vn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>[Địa chỉ văn phòng]</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs opacity-50 uppercase tracking-widest">Pháp nhân</p>
                <p className="font-bold">Công ty Cổ phần Xã hội NKBA</p>
              </div>
            </div>

            <div className="p-10 md:w-3/5">
              <form>
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Họ và Tên</label>
                    <input type="text" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[var(--nkba-navy)] bg-gray-50" placeholder="Nguyễn Văn A" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Tên Công ty</label>
                    <input type="text" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[var(--nkba-navy)] bg-gray-50" placeholder="Công ty Xây dựng ABC" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại</label>
                      <input type="tel" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[var(--nkba-navy)] bg-gray-50" placeholder="09xxx..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Lĩnh vực</label>
                      <select className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[var(--nkba-navy)] bg-gray-50">
                        <option>Thiết kế</option>
                        <option>Thi công</option>
                        <option>Vật liệu</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </div>
                  <button type="button" className="w-full py-3 bg-[var(--nkba-red)] text-white font-bold rounded hover:bg-red-800 transition shadow-lg mt-2">Gửi Đăng Ký</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (light duplicate) */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <div className="container mx-auto px-6">
          <p className="opacity-50">&copy; 2026 Nichietsu Kensetsu Business Alliance (NKBA). All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
