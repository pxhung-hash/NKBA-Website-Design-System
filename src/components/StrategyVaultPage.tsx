import React, { useEffect, useRef, useState } from 'react';
import { Target, Handshake, Users, Lock, Files, Paintbrush, GitMerge, Map, Eye, Share, Pencil, MonitorPlay, Menu as MenuIcon, BarChart3, Shield, Package, Settings as SettingsIcon, LogOut, Home, ExternalLink, Edit, Trash2, Plus, Search, Check, X } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';

interface StrategyVaultPageProps {
  onNavigate?: (page: string) => void;
}

interface Strategy {
  id: string;
  category: string;
  name: string;
  version: string;
  createdDate: string;
  updatedDate: string;
  url: string;
  status: 'published' | 'draft' | 'private';
}

export function StrategyVaultPage({ onNavigate }: StrategyVaultPageProps) {
  const { user } = useAuth();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeView, setActiveView] = useState<'overview' | 'table'>('table');
  const [activeNavItem, setActiveNavItem] = useState('dashboard');
  const [strategies, setStrategies] = useState<Strategy[]>([
    {
      id: 'STR-001',
      category: 'Brand Identity',
      name: 'Bộ Nhận Diện Thương Hiệu',
      version: '1.0',
      createdDate: '2024-01-15',
      updatedDate: '2024-03-10',
      url: 'https://docs.google.com/document/d/example-brand-guidelines',
      status: 'private',
    },
    {
      id: 'STR-002',
      category: 'Cơ cấu & Pháp lý',
      name: 'Chiến Lược Chuyển Đổi',
      version: '2.0',
      createdDate: '2024-02-01',
      updatedDate: '2024-03-12',
      url: 'https://docs.google.com/document/d/example-transition-model',
      status: 'published',
    },
    {
      id: 'STR-003',
      category: 'Sản phẩm (Product)',
      name: 'Lộ Trình Sản Phẩm',
      version: '0.9',
      createdDate: '2024-02-20',
      updatedDate: '2024-03-05',
      url: 'https://docs.google.com/document/d/example-product-roadmap',
      status: 'draft',
    },
  ]);

  const [editingStrategy, setEditingStrategy] = useState<Strategy | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Strategy | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Check access rights
  if (!user || user.email !== 'px.hung@nkba.vn') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center max-w-md p-8 bg-slate-800 rounded-xl border border-red-500/20">
          <div className="w-20 h-20 mx-auto mb-4 bg-red-500/10 rounded-full flex items-center justify-center">
            <Lock className="text-red-500" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
          <p className="text-gray-400 mb-4">
            This area is restricted to authorized personnel only.
          </p>
          <p className="text-xs text-red-400 font-mono mb-6">
            ERROR: INSUFFICIENT_PRIVILEGES
          </p>
          <button
            onClick={() => onNavigate?.('dashboard')}
            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Disable right-click and keyboard shortcuts
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'p' || e.key === 'u')) {
        e.preventDefault();
        alert('Hành động bị hạn chế trong NKBA Strategy Vault!');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleRevise = (strategy: Strategy) => {
    setEditingStrategy(strategy);
    // Open URL in new tab for revision
    window.open(strategy.url, '_blank');
  };

  const handleEdit = (strategy: Strategy) => {
    setEditingId(strategy.id);
    setEditForm({ ...strategy });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleSaveEdit = () => {
    if (editForm) {
      setStrategies(strategies.map(s => 
        s.id === editForm.id ? { ...editForm, updatedDate: new Date().toISOString().split('T')[0] } : s
      ));
      setEditingId(null);
      setEditForm(null);
    }
  };

  const handleFormChange = (field: keyof Strategy, value: string) => {
    if (editForm) {
      setEditForm({ ...editForm, [field]: value });
    }
  };

  const handleDeleteStrategy = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa chiến lược này?')) {
      setStrategies(strategies.filter(s => s.id !== id));
    }
  };

  const filteredStrategies = strategies.filter(strategy =>
    strategy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    strategy.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    strategy.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded border border-green-200">Published</span>;
      case 'draft':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded border border-yellow-200">Draft</span>;
      case 'private':
        return <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded border border-gray-200">Private</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50" style={{ userSelect: 'none' }}>
      {/* Top Navigation Bar */}
      <header className="bg-[#002D62] text-white shadow-lg">
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#BE0027] rounded flex items-center justify-center font-bold text-lg shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                N
              </div>
              <div>
                <h1 className="font-bold text-lg tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>NKBA</h1>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Strategy Vault</p>
              </div>
            </div>
            
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded border border-green-200">
              PHIÊN BẢN 2.0 (HYBRID)
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#BE0027] to-orange-500 border border-white/20"></div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">Admin Quản Trị</p>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate?.('dashboard')}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Back to Dashboard"
            >
              <Home size={20} />
            </button>
            <button 
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-1 px-6 overflow-x-auto">
          <button
            onClick={() => { setActiveNavItem('dashboard'); setActiveView('overview'); }}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeNavItem === 'dashboard'
                ? 'text-[#BE0027] border-[#BE0027] bg-white/5'
                : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
            }`}
          >
            <MenuIcon size={18} />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveNavItem('analytics')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeNavItem === 'analytics'
                ? 'text-[#BE0027] border-[#BE0027] bg-white/5'
                : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
            }`}
          >
            <BarChart3 size={18} />
            <span>Analytics</span>
          </button>
          <button
            onClick={() => setActiveNavItem('brand')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeNavItem === 'brand'
                ? 'text-[#BE0027] border-[#BE0027] bg-white/5'
                : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
            }`}
          >
            <Shield size={18} />
            <span>Brand Identity</span>
          </button>
          <button
            onClick={() => setActiveNavItem('structure')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeNavItem === 'structure'
                ? 'text-[#BE0027] border-[#BE0027] bg-white/5'
                : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
            }`}
          >
            <GitMerge size={18} />
            <span>Cơ cấu & Pháp lý</span>
          </button>
          <button
            onClick={() => setActiveNavItem('product')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeNavItem === 'product'
                ? 'text-[#BE0027] border-[#BE0027] bg-white/5'
                : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
            }`}
          >
            <Package size={18} />
            <span>Sản phẩm</span>
          </button>
          <button
            onClick={() => setActiveNavItem('users')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeNavItem === 'users'
                ? 'text-[#BE0027] border-[#BE0027] bg-white/5'
                : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
            }`}
          >
            <Users size={18} />
            <span>Phân quyền</span>
          </button>
          <button
            onClick={() => setActiveNavItem('security')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeNavItem === 'security'
                ? 'text-[#BE0027] border-[#BE0027] bg-white/5'
                : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
            }`}
          >
            <SettingsIcon size={18} />
            <span>Bảo mật</span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* Action Bar */}
        <div className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-[#002D62]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Strategy Overview
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveView('overview')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeView === 'overview'
                      ? 'bg-[#002D62] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveView('table')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeView === 'table'
                      ? 'bg-[#002D62] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Table View
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-300">
                <Share size={16} /> Export .nkba
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#BE0027] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md">
                <Plus size={16} /> Tạo Chiến Lược Mới
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="h-[calc(100vh-200px)] overflow-y-auto p-6">
          {/* Watermark */}
          <div 
            className="fixed inset-0 pointer-events-none z-50" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='20' y='100' fill='rgba(190, 0, 39, 0.05)' font-family='Arial' font-size='20' transform='rotate(-45 100 100)'%3ECONFIDENTIAL%3C/text%3E%3C/svg%3E")`,
            }}
          />

          {activeView === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Stat 1 */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target size={48} className="text-[#002D62]" />
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Tiến độ Phase 1</p>
                  <h3 className="text-2xl font-bold text-slate-800">85%</h3>
                  <div className="w-full bg-slate-100 h-1.5 mt-3 rounded-full overflow-hidden">
                    <div className="bg-[#002D62] h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-green-600 mt-2 font-medium">▲ Đang đi đúng lộ trình</p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Handshake size={48} className="text-[#BE0027]" />
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Thương vụ Biz-Link</p>
                  <h3 className="text-2xl font-bold text-slate-800">12 Active</h3>
                  <p className="text-xs text-slate-400 mt-2">Tổng giá trị: <span className="text-slate-700 font-bold">Waiting...</span></p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={48} className="text-blue-600" />
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Nhân sự Talent-Hub</p>
                  <h3 className="text-2xl font-bold text-slate-800">45 Profiles</h3>
                  <p className="text-xs text-slate-400 mt-2">Đã thẩm định: <span className="text-slate-700 font-bold">28</span></p>
                </div>

                {/* Stat 4 - Security */}
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

              {/* Preview Area */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#002D62] flex items-center gap-2">
                    <MonitorPlay size={20} /> Xem Nhanh: Cấu Trúc Hybrid
                  </h3>
                  <span className="text-xs font-bold text-[#BE0027] bg-red-50 px-2 py-1 rounded border border-red-100">
                    CHẾ ĐỘ BẢO MẬT: ON
                  </span>
                </div>
                
                <div className="w-full h-64 bg-slate-100 rounded-lg relative overflow-hidden border border-slate-200 flex items-center justify-center">
                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div className="text-4xl font-bold text-slate-300 opacity-20 -rotate-12" style={{ userSelect: 'none' }}>
                      NKBA CONFIDENTIAL • ADMIN VIEW
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center z-10" style={{ userSelect: 'none', cursor: 'default' }}>
                    <div className="flex items-center gap-8 opacity-80">
                      <div className="bg-white p-4 rounded shadow border-t-4 border-[#002D62] w-32">
                        <div className="text-2xl">🏛️</div>
                        <div className="font-bold text-xs mt-2">ALLIANCE</div>
                      </div>
                      <div className="text-2xl text-gray-400">🤝</div>
                      <div className="bg-white p-4 rounded shadow border-t-4 border-[#BE0027] w-32">
                        <div className="text-2xl">💼</div>
                        <div className="font-bold text-xs mt-2">SERVICES JSC</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-500 font-mono">Dữ liệu được bảo vệ. Không thể chuột phải.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeView === 'table' && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              {/* Table Header */}
              <div className="p-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#002D62] flex items-center gap-2">
                    <Files size={20} /> Strategy Management
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search strategies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">ID</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Name Strategy</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Version</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Created Date</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Updated Date</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">URL</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {filteredStrategies.map((strategy) => {
                      const isEditing = editingId === strategy.id;
                      const currentData = isEditing && editForm ? editForm : strategy;
                      
                      return (
                        <tr key={strategy.id} className={`transition-colors ${isEditing ? 'bg-blue-50' : 'hover:bg-slate-50'}`}>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">{strategy.id}</td>
                          <td className="px-4 py-3 text-sm">
                            {isEditing ? (
                              <select
                                value={currentData.category}
                                onChange={(e) => handleFormChange('category', e.target.value)}
                                className="w-full px-2 py-1 border border-[#002D62] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                                style={{ userSelect: 'auto' }}
                              >
                                <option>Brand Identity</option>
                                <option>Cơ cấu & Pháp lý</option>
                                <option>Sản phẩm (Product)</option>
                              </select>
                            ) : (
                              <span className="text-slate-600">{currentData.category}</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {isEditing ? (
                              <input
                                type="text"
                                value={currentData.name}
                                onChange={(e) => handleFormChange('name', e.target.value)}
                                className="w-full px-2 py-1 border border-[#002D62] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                                style={{ userSelect: 'auto' }}
                              />
                            ) : (
                              <span className="font-medium text-slate-900">{currentData.name}</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {isEditing ? (
                              <input
                                type="text"
                                value={currentData.version}
                                onChange={(e) => handleFormChange('version', e.target.value)}
                                className="w-20 px-2 py-1 border border-[#002D62] rounded text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                                style={{ userSelect: 'auto' }}
                              />
                            ) : (
                              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded font-mono text-xs">
                                v{currentData.version}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {isEditing ? (
                              <input
                                type="date"
                                value={currentData.createdDate}
                                onChange={(e) => handleFormChange('createdDate', e.target.value)}
                                className="w-full px-2 py-1 border border-[#002D62] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                                style={{ userSelect: 'auto' }}
                              />
                            ) : (
                              <span className="text-slate-600">{currentData.createdDate}</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-600">{strategy.updatedDate}</td>
                          <td className="px-4 py-3 text-sm">
                            {isEditing ? (
                              <select
                                value={currentData.status}
                                onChange={(e) => handleFormChange('status', e.target.value as Strategy['status'])}
                                className="w-full px-2 py-1 border border-[#002D62] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                                style={{ userSelect: 'auto' }}
                              >
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                                <option value="private">Private</option>
                              </select>
                            ) : (
                              getStatusBadge(currentData.status)
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {isEditing ? (
                              <input
                                type="url"
                                value={currentData.url}
                                onChange={(e) => handleFormChange('url', e.target.value)}
                                className="w-full px-2 py-1 border border-[#002D62] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                                placeholder="https://..."
                                style={{ userSelect: 'auto' }}
                              />
                            ) : (
                              <a
                                href={currentData.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-[#002D62] hover:text-[#BE0027] transition-colors"
                              >
                                <ExternalLink size={14} />
                                <span className="truncate max-w-[150px]">Open</span>
                              </a>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div className="flex items-center justify-center gap-2">
                              {isEditing ? (
                                <>
                                  <button
                                    onClick={handleSaveEdit}
                                    className="p-2 text-green-600 hover:bg-green-600 hover:text-white rounded-lg transition-colors"
                                    title="Save"
                                  >
                                    <Check size={16} />
                                  </button>
                                  <button
                                    onClick={handleCancelEdit}
                                    className="p-2 text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg transition-colors"
                                    title="Cancel"
                                  >
                                    <X size={16} />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => handleEdit(strategy)}
                                    className="p-2 text-[#002D62] hover:bg-[#002D62] hover:text-white rounded-lg transition-colors"
                                    title="Edit"
                                  >
                                    <Edit size={16} />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteStrategy(strategy.id)}
                                    className="p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                                    title="Delete"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {filteredStrategies.length === 0 && (
                  <div className="text-center py-12 text-slate-500">
                    <Files size={48} className="mx-auto mb-3 opacity-20" />
                    <p className="text-sm">No strategies found</p>
                  </div>
                )}
              </div>

              {/* Table Footer */}
              <div className="px-4 py-3 border-t border-slate-200 bg-slate-50">
                <p className="text-xs text-slate-500">
                  Showing {filteredStrategies.length} of {strategies.length} strategies
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}