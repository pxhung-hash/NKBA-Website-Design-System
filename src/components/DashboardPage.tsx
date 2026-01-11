import React from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { BODSchedulePage } from './BODSchedulePage';
import { TalentPoolPage } from './TalentPoolPage';
import { ProjectLeadsPage } from './ProjectLeadsPage';
import { MemberDirectoryPage } from './MemberDirectoryPage';
import { MyProfilePage } from './MyProfilePage';
import { SettingsPage } from './SettingsPage';
import { CheckCircle, Calendar, TrendingUp, Bell, ExternalLink, LayoutDashboard, FolderKanban, Users, Settings } from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [activeView, setActiveView] = React.useState('dashboard');

  const handleLogout = () => {
    onNavigate('home');
  };

  const handleBackToHome = () => {
    onNavigate('home');
  };

  const projectLeads = [
    {
      id: 1,
      name: 'Luxury Villa Development',
      location: 'Da Nang, Vietnam',
      budget: '$2.5M - $3.5M',
      status: 'Open',
    },
    {
      id: 2,
      name: 'Commercial Complex Renovation',
      location: 'Hanoi, Vietnam',
      budget: '$5M - $7M',
      status: 'Open',
    },
    {
      id: 3,
      name: 'Hotel Interior Design',
      location: 'Ho Chi Minh City',
      budget: '$1.8M - $2.2M',
      status: 'Open',
    },
    {
      id: 4,
      name: 'Office Tower Construction',
      location: 'Tokyo, Japan',
      budget: '$15M - $20M',
      status: 'Bidding',
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'New Project Lead Available',
      message: 'Luxury Villa Development in Da Nang requires design consultation',
      date: 'Jan 8, 2026',
    },
    {
      id: 2,
      title: 'Membership Fee Reminder',
      message: 'Your annual membership fee is due on February 15, 2026',
      date: 'Jan 7, 2026',
    },
    {
      id: 3,
      title: 'Networking Event',
      message: 'Join us for the NKBA Annual Conference in Tokyo on March 20-22',
      date: 'Jan 5, 2026',
    },
  ];

  const menuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Active Projects', icon: FolderKanban },
    { id: 'members', label: 'Member Directory', icon: Users },
    { id: 'schedule', label: 'BOD Schedule', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <DashboardSidebar
        activeView={activeView}
        onNavigateView={setActiveView}
        onLogout={handleLogout}
        onNavigateHome={handleBackToHome}
      />

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        {activeView === 'dashboard' && (
          <>
            {/* Welcome Message */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Welcome back, Hiroshi Sato
              </h1>
              <p className="text-gray-600">Here's what's happening with your membership today.</p>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Card 1 */}
              <div className="bg-white p-6 nkba-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Membership Status</p>
                    <p className="text-2xl font-bold text-[#003366]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Active
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 flex items-center justify-center">
                    <CheckCircle size={24} className="text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">Valid until Dec 31, 2026</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 nkba-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Fee Due Date</p>
                    <p className="text-2xl font-bold text-[#003366]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Feb 15
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center">
                    <Calendar size={24} className="text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">Annual membership renewal</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 nkba-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">New Project Leads</p>
                    <p className="text-2xl font-bold text-[#003366]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      12
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 flex items-center justify-center">
                    <TrendingUp size={24} className="text-[#990000]" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">Available this month</p>
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="bg-white p-6 nkba-shadow mb-8">
              <div className="flex items-center mb-6">
                <Bell size={24} className="text-[#003366] mr-3" />
                <h2 className="text-xl section-title text-[#003366]">Recent Notifications</h2>
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border-l-4 border-[#990000] pl-4 py-2">
                    <h3 className="font-semibold text-[#003366] mb-1">{notification.title}</h3>
                    <p className="text-gray-700 text-sm mb-1">{notification.message}</p>
                    <p className="text-gray-500 text-xs">{notification.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Leads Table */}
            <div className="bg-white nkba-shadow overflow-hidden">
              <div className="bg-[#003366] text-white px-6 py-4">
                <h2 className="text-xl section-title">Project Leads</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F5F5F5]">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Project Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Budget</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {projectLeads.map((project) => (
                      <tr key={project.id} className="hover:bg-[#F5F5F5] transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-900">{project.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{project.location}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{project.budget}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 text-xs font-semibold ${
                            project.status === 'Open' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="flex items-center space-x-1 text-[#003366] hover:text-[#990000] transition-colors text-sm font-medium">
                            <span>View Details</span>
                            <ExternalLink size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeView === 'profile' && (
          <MyProfilePage />
        )}

        {activeView === 'directory' && (
          <MemberDirectoryPage />
        )}

        {activeView === 'projects' && (
          <ProjectLeadsPage />
        )}

        {activeView === 'talent' && (
          <TalentPoolPage />
        )}

        {activeView === 'settings' && (
          <SettingsPage />
        )}

        {activeView === 'schedule' && (
          <BODSchedulePage onNavigate={() => {}} />
        )}
      </main>
    </div>
  );
}