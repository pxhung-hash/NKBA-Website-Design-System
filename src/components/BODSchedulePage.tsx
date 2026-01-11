import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Calendar, Flag, FileText, ChevronDown, Printer, Scale, Coins, Laptop, GlassWater, Users, Edit, Plus, Save, X, Link as LinkIcon, Upload, Trash2, ExternalLink } from 'lucide-react';

interface BODSchedulePageProps {
  onNavigate: (page: string) => void;
}

interface Milestone {
  date: string;
  title: string;
  desc: string;
}

interface Task {
  id: string;
  category: 'Legal' | 'Finance' | 'Assets' | 'Event';
  task: string;
  owner: string;
  support: string;
  start: string;
  end: string;
  status: 'Done' | 'In Progress' | 'To Do' | 'Overdue';
  note: string;
  documentUrl?: string;
}

interface Document {
  id: string;
  taskId: string;
  name: string;
  url: string;
  uploadedDate: string;
  uploadedBy: string;
}

export function BODSchedulePage({ onNavigate }: BODSchedulePageProps) {
  const [activeTab, setActiveTab] = useState<'tasks' | 'documents'>('tasks');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedTasks, setExpandedTasks] = useState<Set<string>>(new Set());
  
  // Registered members list
  const registeredMembers = ['Hưng', 'Phú', 'Khang', 'Tất cả'];
  
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1.1', category: 'Legal', task: 'Thiết lập kế hoạch triển khai', owner: 'Hưng', support: 'Tất cả', start: '2026-01-08', end: '2026-01-10', status: 'Done', note: 'Gửi vào nhóm Zalo chung', documentUrl: 'https://docs.google.com/document/plan' },
    { id: '1.2', category: 'Legal', task: 'Soạn thảo Điều lệ & Thỏa thuận cổ đông', owner: 'Phú', support: 'Hưng', start: '2026-01-08', end: '2026-01-14', status: 'To Do', note: 'Cần bản draft để review' },
    { id: '1.3', category: 'Legal', task: 'Ký hồ sơ thành lập doanh nghiệp', owner: 'Phú', support: 'Tất cả', start: '2026-01-15', end: '2026-01-16', status: 'To Do', note: 'Ký nháy từng trang (Online/Offline)' },
    { id: '1.4', category: 'Legal', task: 'Nộp hồ sơ lên Sở KHĐT', owner: 'Phú', support: '', start: '2026-01-16', end: '2026-01-17', status: 'To Do', note: '' },
    { id: '1.5', category: 'Legal', task: 'Nhận Giấy ĐKKD & Khắc dấu', owner: 'Phú', support: '', start: '2026-01-22', end: '2026-01-25', status: 'To Do', note: 'Mục tiêu có trước tiệc' },
    { id: '2.1', category: 'Finance', task: 'Chuyển khoản Vốn góp đợt 1', owner: 'Tất cả', support: 'Hưng nhắc', start: '2026-01-13', end: '2026-01-17', status: 'To Do', note: '30 Triệu/người vào TK chỉ định' },
    { id: '2.2', category: 'Finance', task: 'Mở Tài khoản Ngân hàng Công ty', owner: 'Hưng', support: 'Phú', start: '2026-01-26', end: '2026-01-28', status: 'To Do', note: 'Ngay sau khi có ĐKKD' },
    { id: '3.1', category: 'Assets', task: 'Chốt thiết kế Logo & Namecard', owner: 'Hưng', support: '', start: '2026-01-08', end: '2026-01-12', status: 'In Progress', note: 'Thuê Designer vẽ lại Vector' },
    { id: '3.2', category: 'Assets', task: 'In ấn Namecard cho 3 Founder', owner: 'Hưng', support: '', start: '2026-01-13', end: '2026-01-18', status: 'To Do', note: 'Cầm đi mời khách cho sang' },
    { id: '3.3', category: 'Assets', task: 'Soạn nội dung & Thiết kế Sales Kit', owner: 'Hưng', support: 'Khang', start: '2026-01-10', end: '2026-01-18', status: 'To Do', note: 'QUAN TRỌNG: Cần để mời khách' },
    { id: '3.4', category: 'Assets', task: 'Mua Domain & Dựng Landing Page', owner: 'Hưng', support: '', start: '2026-01-15', end: '2026-01-22', status: 'To Do', note: 'Để khách quét QR Code xem' },
    { id: '3.5', category: 'Assets', task: 'Tạo nhóm Zalo "NKBA - Core Team"', owner: 'Hưng', support: '', start: '2026-01-25', end: '2026-01-25', status: 'Done', note: 'Sau tiệc chỉ add người đồng ý' },
    { id: '4.1', category: 'Event', task: 'Lên danh sách khách mời (Short-list)', owner: 'Khang', support: 'Hưng, Phú', start: '2026-01-08', end: '2026-01-14', status: 'To Do', note: '10 người, chọn lọc kỹ' },
    { id: '4.2', category: 'Event', task: 'Chọn Nhà hàng & Chốt Menu', owner: 'Khang', support: 'Hưng', start: '2026-01-15', end: '2026-01-17', status: 'To Do', note: 'Private Room, sang trọng' },
    { id: '4.3', category: 'Event', task: 'Gửi lời mời & Xác nhận (RSVP)', owner: 'Khang', support: 'Hưng', start: '2026-01-18', end: '2026-01-22', status: 'To Do', note: 'Gọi điện + Gửi Sales Kit' },
    { id: '4.4', category: 'Event', task: 'Chuẩn bị bài thuyết trình', owner: 'Hưng', support: '', start: '2026-01-23', end: '2026-01-25', status: 'To Do', note: 'Tập dượt trước' },
    { id: '4.5', category: 'Event', task: 'TỔ CHỨC TIỆC (EVENT DAY)', owner: 'Tất cả', support: '', start: '2026-01-25', end: '2026-01-30', status: 'To Do', note: 'Chốt nhân sự tại trận' }
  ]);
  const [documents, setDocuments] = useState<Document[]>([
    { id: 'doc1', taskId: '1.1', name: 'Kế hoạch triển khai NKBA Q1 2026.pdf', url: 'https://docs.google.com/document/plan', uploadedDate: '2026-01-08', uploadedBy: 'Hưng' },
    { id: 'doc2', taskId: '1.2', name: 'Điều lệ công ty - Draft v1.docx', url: 'https://docs.google.com/document/charter', uploadedDate: '2026-01-10', uploadedBy: 'Phú' },
  ]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<Task | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTaskData, setNewTaskData] = useState<Task>({
    id: '',
    category: 'Legal',
    task: '',
    owner: '',
    support: '',
    start: '',
    end: '',
    status: 'To Do',
    note: '',
    documentUrl: ''
  });

  const milestones: Milestone[] = [
    { date: '15/01', title: 'Pháp Lý & Vốn', desc: 'Hoàn thiện hồ sơ thỏa thuận cổ đông & Góp vốn mồi' },
    { date: '20/01', title: 'Công Cụ Sales', desc: 'Có Logo, Sales Kit, Web Demo' },
    { date: '25/01', title: 'Giấy Phép', desc: 'Có ĐKKD & Con dấu tròn' },
    { date: '30/01', title: 'Founders\' Dinner', desc: 'Sự kiện ra mắt lãnh đạo' }
  ];

  const filteredTasks = selectedFilter === 'all' 
    ? tasks 
    : tasks.filter(t => t.category === selectedFilter);

  const stats = {
    total: tasks.length,
    inProgress: tasks.filter(t => t.status === 'In Progress').length,
    done: tasks.filter(t => t.status === 'Done').length,
    todo: tasks.filter(t => t.status === 'To Do').length
  };

  const statusData = [
    { name: 'Hoàn Thành', value: stats.done, color: '#10B981' },
    { name: 'Đang Làm', value: stats.inProgress, color: '#F59E0B' },
    { name: 'Chưa Làm', value: stats.todo, color: '#EF4444' }
  ];

  const ownerCounts: { [key: string]: number } = {};
  tasks.forEach(t => {
    const owner = t.owner.split('(')[0].trim();
    if (owner !== 'Tất cả') {
      ownerCounts[owner] = (ownerCounts[owner] || 0) + 1;
    }
  });

  const ownerData = Object.entries(ownerCounts).map(([name, value]) => ({
    name,
    value
  }));

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Done': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Overdue': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'Done': return 'Hoàn Thành';
      case 'In Progress': return 'Đang Làm';
      case 'Overdue': return 'Trễ Hạn';
      default: return 'Chưa Làm';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Legal': return <Scale size={14} />;
      case 'Finance': return <Coins size={14} />;
      case 'Assets': return <Laptop size={14} />;
      case 'Event': return <GlassWater size={14} />;
      default: return <FileText size={14} />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Legal': return 'Pháp Lý';
      case 'Finance': return 'Tài Chính';
      case 'Assets': return 'Tài Sản';
      case 'Event': return 'Sự Kiện';
      default: return category;
    }
  };

  const toggleTask = (taskId: string) => {
    const newExpanded = new Set(expandedTasks);
    if (newExpanded.has(taskId)) {
      newExpanded.delete(taskId);
    } else {
      newExpanded.add(taskId);
    }
    setExpandedTasks(newExpanded);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEditTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setEditingTaskId(taskId);
      setEditFormData({ ...task });
    }
  };

  const handleSaveEdit = () => {
    if (editFormData) {
      const updatedTasks = tasks.map(t => (t.id === editingTaskId ? editFormData : t));
      setTasks(updatedTasks);
      setEditingTaskId(null);
      setEditFormData(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditFormData(null);
  };

  const handleAddNewTask = () => {
    setIsAddingNew(true);
    // Generate next ID based on category
    const categoryTasks = tasks.filter(t => t.category === newTaskData.category);
    const nextNum = categoryTasks.length + 1;
    const categoryPrefix = selectedFilter !== 'all' && selectedFilter !== '' ? selectedFilter : 'Legal';
    const categoryMap: { [key: string]: string } = {
      'Legal': '1',
      'Finance': '2',
      'Assets': '3',
      'Event': '4'
    };
    const newId = `${categoryMap[categoryPrefix]}.${nextNum}`;
    setNewTaskData({ ...newTaskData, id: newId });
  };

  const handleSaveNewTask = () => {
    if (newTaskData.id && newTaskData.task && newTaskData.owner && newTaskData.start && newTaskData.end) {
      const updatedTasks = [...tasks, newTaskData];
      setTasks(updatedTasks);
      setIsAddingNew(false);
      setNewTaskData({
        id: '',
        category: 'Legal',
        task: '',
        owner: '',
        support: '',
        start: '',
        end: '',
        status: 'To Do',
        note: '',
        documentUrl: ''
      });
    }
  };

  const handleCancelNewTask = () => {
    setIsAddingNew(false);
    setNewTaskData({
      id: '',
      category: 'Legal',
      task: '',
      owner: '',
      support: '',
      start: '',
      end: '',
      status: 'To Do',
      note: '',
      documentUrl: ''
    });
  };

  const handleDeleteDocument = (docId: string) => {
    if (confirm('Bạn có chắc muốn xóa tài liệu này?')) {
      setDocuments(documents.filter(d => d.id !== docId));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-[#003366] text-white shadow-lg print:bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-[#003366] text-2xl font-bold shadow-inner" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                VJ
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  NKBA DASHBOARD
                </h1>
                <p className="text-sm md:text-base text-gray-300 italic">Connecting Trust - Building Value</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="text-center md:text-right">
                <p className="text-sm font-medium uppercase tracking-wider opacity-80">Giai Đoạn Khởi Động</p>
                <p className="text-xl font-bold text-[#990000] bg-white px-3 py-1 inline-block mt-1 shadow-sm text-slate-800">
                  Tháng 1/2026
                </p>
              </div>
              <button
                onClick={handlePrint}
                className="bg-white text-[#003366] hover:bg-gray-100 font-bold py-2 px-4 shadow flex items-center gap-2 transition-colors print:hidden"
              >
                <Printer size={18} />
                Xuất PDF / In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Intro Text */}
        <section className="bg-white p-6 shadow-sm border-l-4 border-[#003366]">
          <h2 className="text-xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Tổng Quan Kế Hoạch
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tiến độ triển khai NKBA trong tháng 1/2026. 
            Một số mốc thời gian quan trọng, phân bổ công việc giữa các thành viên sáng lập (Khang, Phú và Hưng) 
            và trạng thái thực tế của từng đầu việc từ pháp lý, tài chính đến tổ chức sự kiện.
          </p>
        </section>

        {/* Milestones Timeline */}
        <section>
          <h3 className="text-lg font-bold text-gray-700 mb-6 flex items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <Flag className="mr-2 text-[#990000]" size={20} />
            Mốc Thời Gian Quan Trọng (Milestones)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="bg-white p-4 shadow-md border-t-4 border-[#990000] relative hover:-translate-y-1 transition-transform"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#003366] text-white text-xs font-bold px-2 py-1 border-2 border-white">
                  Mốc {index + 1}
                </div>
                <div className="text-center mt-2">
                  <div className="text-2xl font-bold text-gray-800">{milestone.date}</div>
                  <div className="font-bold text-[#003366] text-sm mt-1 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {milestone.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{milestone.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats & Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Key Metrics Cards */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            <div className="bg-white p-5 shadow border-b-4 border-blue-500">
              <p className="text-gray-500 text-xs uppercase font-bold">Tổng Đầu Việc</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{stats.total}</p>
            </div>
            <div className="bg-white p-5 shadow border-b-4 border-yellow-500">
              <p className="text-gray-500 text-xs uppercase font-bold">Đang Thực Hiện</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{stats.inProgress}</p>
            </div>
            <div className="bg-white p-5 shadow border-b-4 border-green-500">
              <p className="text-gray-500 text-xs uppercase font-bold">Hoàn Thành</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{stats.done}</p>
            </div>
            <div className="bg-white p-5 shadow border-b-4 border-red-500">
              <p className="text-gray-500 text-xs uppercase font-bold">Chưa Bắt Đầu</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{stats.todo}</p>
            </div>
          </div>

          {/* Status Chart */}
          <div className="bg-white p-6 shadow lg:col-span-1">
            <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 text-center">Trạng Thái Công Việc</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Owner Workload Chart */}
          <div className="bg-white p-6 shadow lg:col-span-1">
            <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 text-center">Phân Bổ Nhân Sự</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={ownerData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#003366" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 bg-white shadow-sm">
          <div className="flex">
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'tasks'
                  ? 'border-b-2 border-[#003366] text-[#003366] bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText size={18} className="inline mr-2" />
              Bảng Chi Tiết Công Việc
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'documents'
                  ? 'border-b-2 border-[#003366] text-[#003366] bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Upload size={18} className="inline mr-2" />
              Quản Lý Tài Liệu ({documents.length})
            </button>
          </div>
        </div>

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <section className="bg-white shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 print:hidden">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedFilter === 'all'
                      ? 'bg-[#003366] text-white'
                      : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Tất cả
                </button>
                <button
                  onClick={() => setSelectedFilter('Legal')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedFilter === 'Legal'
                      ? 'bg-[#003366] text-white'
                      : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Pháp lý
                </button>
                <button
                  onClick={() => setSelectedFilter('Finance')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedFilter === 'Finance'
                      ? 'bg-[#003366] text-white'
                      : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Tài chính
                </button>
                <button
                  onClick={() => setSelectedFilter('Assets')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedFilter === 'Assets'
                      ? 'bg-[#003366] text-white'
                      : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Tài sản
                </button>
                <button
                  onClick={() => setSelectedFilter('Event')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedFilter === 'Event'
                      ? 'bg-[#003366] text-white'
                      : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Sự kiện
                </button>
              </div>

              <button
                onClick={handleAddNewTask}
                className="bg-[#990000] hover:bg-[#BB0000] text-white px-4 py-2 font-bold flex items-center gap-2 transition-colors print:hidden"
              >
                <Plus size={18} />
                Thêm Công Việc
              </button>
            </div>

            {/* Task Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-16">ID</th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-24">Loại</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Công việc</th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-28">Phụ trách</th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-40">Thời gian</th>
                    <th className="px-3 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-28">Trạng thái</th>
                    <th className="px-3 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-16">Link</th>
                    <th className="relative px-3 py-3 print:hidden w-20"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Add New Task Row */}
                  {isAddingNew && (
                    <tr className="bg-blue-50">
                      <td className="px-3 py-3 whitespace-nowrap">
                        <input
                          type="text"
                          placeholder="ID"
                          value={newTaskData.id}
                          onChange={(e) => setNewTaskData({ ...newTaskData, id: e.target.value })}
                          className="w-full px-2 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        />
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <select
                          value={newTaskData.category}
                          onChange={(e) => setNewTaskData({ ...newTaskData, category: e.target.value as Task['category'] })}
                          className="w-full px-2 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        >
                          <option value="Legal">Pháp lý</option>
                          <option value="Finance">Tài chính</option>
                          <option value="Assets">Tài sản</option>
                          <option value="Event">Sự kiện</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="Tên công việc"
                          value={newTaskData.task}
                          onChange={(e) => setNewTaskData({ ...newTaskData, task: e.target.value })}
                          className="w-full px-2 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        />
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <select
                          value={newTaskData.owner}
                          onChange={(e) => setNewTaskData({ ...newTaskData, owner: e.target.value })}
                          className="w-full px-2 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        >
                          <option value="">Chọn...</option>
                          {registeredMembers.map(member => (
                            <option key={member} value={member}>{member}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <input
                            type="date"
                            value={newTaskData.start}
                            onChange={(e) => setNewTaskData({ ...newTaskData, start: e.target.value })}
                            className="w-full px-1 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                          />
                          <input
                            type="date"
                            value={newTaskData.end}
                            onChange={(e) => setNewTaskData({ ...newTaskData, end: e.target.value })}
                            className="w-full px-1 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                          />
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap text-center">
                        <select
                          value={newTaskData.status}
                          onChange={(e) => setNewTaskData({ ...newTaskData, status: e.target.value as Task['status'] })}
                          className="w-full px-2 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        >
                          <option value="To Do">Chưa Làm</option>
                          <option value="In Progress">Đang Làm</option>
                          <option value="Done">Hoàn Thành</option>
                        </select>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <input
                          type="text"
                          placeholder="URL"
                          value={newTaskData.documentUrl || ''}
                          onChange={(e) => setNewTaskData({ ...newTaskData, documentUrl: e.target.value })}
                          className="w-full px-1 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        />
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap print:hidden">
                        <div className="flex gap-1">
                          <button
                            onClick={handleSaveNewTask}
                            className="bg-green-600 hover:bg-green-700 text-white p-1 transition-colors"
                            title="Lưu"
                          >
                            <Save size={14} />
                          </button>
                          <button
                            onClick={handleCancelNewTask}
                            className="bg-gray-600 hover:bg-gray-700 text-white p-1 transition-colors"
                            title="Hủy"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}

                  {filteredTasks.map((task) => (
                    <React.Fragment key={task.id}>
                      {editingTaskId === task.id ? (
                        // Edit Mode Row
                        <tr className="bg-yellow-50">
                          <td className="px-3 py-3 whitespace-nowrap">
                            <div className="text-sm font-bold text-gray-900">{task.id}</div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <select
                              value={editFormData?.category || ''}
                              onChange={(e) => setEditFormData({ ...editFormData!, category: e.target.value as Task['category'] })}
                              className="w-full px-2 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                            >
                              <option value="Legal">Pháp lý</option>
                              <option value="Finance">Tài chính</option>
                              <option value="Assets">Tài sản</option>
                              <option value="Event">Sự kiện</option>
                            </select>
                          </td>
                          <td className="px-4 py-3">
                            <input
                              type="text"
                              value={editFormData?.task || ''}
                              onChange={(e) => setEditFormData({ ...editFormData!, task: e.target.value })}
                              className="w-full px-2 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                            />
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <select
                              value={editFormData?.owner || ''}
                              onChange={(e) => setEditFormData({ ...editFormData!, owner: e.target.value })}
                              className="w-full px-2 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                            >
                              <option value="">Chọn...</option>
                              {registeredMembers.map(member => (
                                <option key={member} value={member}>{member}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <div className="flex flex-col gap-1">
                              <input
                                type="date"
                                value={editFormData?.start || ''}
                                onChange={(e) => setEditFormData({ ...editFormData!, start: e.target.value })}
                                className="w-full px-1 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                              />
                              <input
                                type="date"
                                value={editFormData?.end || ''}
                                onChange={(e) => setEditFormData({ ...editFormData!, end: e.target.value })}
                                className="w-full px-1 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                              />
                            </div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-center">
                            <select
                              value={editFormData?.status || ''}
                              onChange={(e) => setEditFormData({ ...editFormData!, status: e.target.value as Task['status'] })}
                              className="w-full px-2 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                            >
                              <option value="To Do">Chưa Làm</option>
                              <option value="In Progress">Đang Làm</option>
                              <option value="Done">Hoàn Thành</option>
                              <option value="Overdue">Trễ Hạn</option>
                            </select>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="URL"
                              value={editFormData?.documentUrl || ''}
                              onChange={(e) => setEditFormData({ ...editFormData!, documentUrl: e.target.value })}
                              className="w-full px-1 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                            />
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap print:hidden">
                            <div className="flex gap-1">
                              <button
                                onClick={handleSaveEdit}
                                className="bg-green-600 hover:bg-green-700 text-white p-1 transition-colors"
                                title="Lưu"
                              >
                                <Save size={14} />
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="bg-gray-600 hover:bg-gray-700 text-white p-1 transition-colors"
                                title="Hủy"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        // View Mode Row
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-3 py-3 whitespace-nowrap align-top">
                            <div className="text-sm font-bold text-gray-900">{task.id}</div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap align-top">
                            <div className="flex items-center gap-2">
                              <div className="flex-shrink-0 h-6 w-6 bg-blue-50 text-[#003366] flex items-center justify-center">
                                {getCategoryIcon(task.category)}
                              </div>
                              <span className="text-xs text-gray-700">{getCategoryLabel(task.category)}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 align-top">
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">{task.task}</div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap align-top">
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Users size={12} className="flex-shrink-0" />
                              <span className="truncate">{task.owner}</span>
                            </div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap align-top">
                            <div className="text-xs text-gray-500 leading-tight">
                              <div>{formatDate(task.start)}</div>
                              <div>{formatDate(task.end)}</div>
                            </div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-center align-top">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold border ${getStatusColor(task.status)}`}>
                              {getStatusLabel(task.status)}
                            </span>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-center align-top">
                            {task.documentUrl && (
                              <a
                                href={task.documentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#003366] hover:text-[#990000] inline-flex items-center gap-1"
                                title="Xem tài liệu"
                              >
                                <LinkIcon size={14} />
                              </a>
                            )}
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap print:hidden align-top">
                            <div className="flex gap-1">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditTask(task.id);
                                }}
                                className="text-[#003366] hover:text-[#990000] p-1 transition-colors"
                                title="Chỉnh sửa"
                              >
                                <Edit size={14} />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleTask(task.id);
                                }}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                title="Chi tiết"
                              >
                                <ChevronDown 
                                  size={14} 
                                  className={`transform transition-transform duration-300 ${
                                    expandedTasks.has(task.id) ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                      {expandedTasks.has(task.id) && editingTaskId !== task.id && (
                        <tr className="bg-gray-50">
                          <td colSpan={8} className="px-6 py-4 border-b border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-bold text-gray-500 uppercase text-xs tracking-wider">Ghi chú:</span>
                                <p className="mt-1 text-gray-700 bg-white p-3 border border-gray-200 shadow-sm leading-relaxed">
                                  {task.note || 'Không có ghi chú thêm.'}
                                </p>
                              </div>
                              <div>
                                <span className="font-bold text-gray-500 uppercase text-xs tracking-wider">Người hỗ trợ:</span>
                                <p className="mt-1 text-gray-800 font-medium flex items-center">
                                  {task.support ? (
                                    <>
                                      <Users size={14} className="mr-1 text-gray-400" />
                                      {task.support}
                                    </>
                                  ) : (
                                    'Không có người hỗ trợ'
                                  )}
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 text-center text-sm text-gray-500 italic">
              Báo cáo được trích xuất từ Hệ thống Quản trị NKBA
            </div>
          </section>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <section className="bg-white shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#003366] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Tài Liệu Dự Án
              </h3>
              
              <div className="space-y-4">
                {documents.map((doc) => {
                  const task = tasks.find(t => t.id === doc.taskId);
                  return (
                    <div key={doc.id} className="border border-gray-200 p-4 hover:border-[#003366] transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <FileText className="text-[#003366]" size={20} />
                            <div>
                              <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                              <p className="text-sm text-gray-500 mt-1">
                                Liên kết với: <span className="font-medium text-[#003366]">{task?.id} - {task?.task}</span>
                              </p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span>Tải lên: {doc.uploadedDate}</span>
                                <span>Bởi: {doc.uploadedBy}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 print:hidden">
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#003366] hover:text-[#990000] p-2 border border-gray-300 hover:border-[#003366] transition-colors"
                            title="Mở tài liệu"
                          >
                            <ExternalLink size={16} />
                          </a>
                          <button
                            onClick={() => handleDeleteDocument(doc.id)}
                            className="text-red-600 hover:text-red-700 p-2 border border-gray-300 hover:border-red-600 transition-colors"
                            title="Xóa tài liệu"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {documents.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <Upload size={48} className="mx-auto mb-4 opacity-30" />
                    <p>Chưa có tài liệu nào được tải lên</p>
                    <p className="text-sm mt-2">Thêm URL tài liệu vào các công việc để quản lý tập trung</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-8 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>NKBA</h2>
          <p className="opacity-75 text-sm mb-4">Nichietsu Kensetsu Business Alliance</p>
          <div className="flex justify-center space-x-4 text-sm opacity-60">
            <span>&copy; 2026 NKBA Corp</span>
            <span>•</span>
            <span>Internal Use Only</span>
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          @page { margin: 1cm; size: A4; }
          body { 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
            background-color: white !important;
          }
          .print\\:hidden { display: none !important; }
          .shadow-lg, .shadow-md, .shadow-sm { box-shadow: none !important; border: 1px solid #ddd; }
        }
      `}</style>
    </div>
  );
}