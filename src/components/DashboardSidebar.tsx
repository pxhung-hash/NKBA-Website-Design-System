import React from 'react';
import { LayoutDashboard, User, Users, Briefcase, UserPlus, Settings, LogOut, Menu, X, Calendar, Home } from 'lucide-react';

interface DashboardSidebarProps {
  activeView: string;
  onNavigateView: (view: string) => void;
  onLogout: () => void;
  onNavigateHome?: () => void;
}

export function DashboardSidebar({ activeView, onNavigateView, onLogout, onNavigateHome }: DashboardSidebarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'directory', label: 'Member Directory', icon: Users },
    { id: 'projects', label: 'Project Leads', icon: Briefcase },
    { id: 'schedule', label: 'BOD Schedule', icon: Calendar },
    { id: 'talent', label: 'Talent Pool', icon: UserPlus },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#002244]">
        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          NKBA
        </div>
        <p className="text-sm text-gray-400 mt-1">Member Portal</p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigateView(item.id);
                setMobileOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-6 py-3 transition-colors ${
                isActive
                  ? 'bg-[#990000] text-white'
                  : 'text-gray-300 hover:bg-[#004488] hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Back to Homepage & Logout */}
      <div className="border-t border-[#002244]">
        {onNavigateHome && (
          <button
            onClick={() => {
              onNavigateHome();
              setMobileOpen(false);
            }}
            className="w-full flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-[#004488] hover:text-white transition-colors"
          >
            <Home size={20} />
            <span>Back to Homepage</span>
          </button>
        )}
        <button
          onClick={() => {
            onLogout();
            setMobileOpen(false);
          }}
          className="w-full flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-[#990000] hover:text-white transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#003366] text-white p-2 nkba-shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-[#003366] h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="lg:hidden fixed left-0 top-0 w-64 bg-[#003366] h-screen z-50">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}