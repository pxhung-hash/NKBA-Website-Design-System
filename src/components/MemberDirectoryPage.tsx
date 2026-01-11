import React from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { Search, Filter } from 'lucide-react';
import { NKBAButton } from './NKBAButton';

interface MemberDirectoryPageProps {
  onLogout: () => void;
}

export function MemberDirectoryPage({ onLogout }: MemberDirectoryPageProps) {
  const [activeView] = React.useState('directory');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [industryFilter, setIndustryFilter] = React.useState('all');
  const [regionFilter, setRegionFilter] = React.useState('all');
  const [capitalFilter, setCapitalFilter] = React.useState('all');

  const members = [
    {
      id: 1,
      companyName: 'Tokyo Design Studio',
      industry: 'Design',
      region: 'Tokyo',
      capital: 'Japan',
      logo: 'TDS',
    },
    {
      id: 2,
      companyName: 'Viet Construction Group',
      industry: 'Construction',
      region: 'Hanoi',
      capital: 'Vietnam',
      logo: 'VCG',
    },
    {
      id: 3,
      companyName: 'Matsumoto Materials',
      industry: 'Material',
      region: 'Osaka',
      capital: 'Japan',
      logo: 'MM',
    },
    {
      id: 4,
      companyName: 'Saigon Interior Design',
      industry: 'Design',
      region: 'Ho Chi Minh',
      capital: 'Vietnam',
      logo: 'SID',
    },
    {
      id: 5,
      companyName: 'Yamada Construction',
      industry: 'Construction',
      region: 'Tokyo',
      capital: 'Japan',
      logo: 'YC',
    },
    {
      id: 6,
      companyName: 'Da Nang Building Materials',
      industry: 'Material',
      region: 'Da Nang',
      capital: 'Vietnam',
      logo: 'DBM',
    },
    {
      id: 7,
      companyName: 'Kyoto Architects',
      industry: 'Design',
      region: 'Kyoto',
      capital: 'Japan',
      logo: 'KA',
    },
    {
      id: 8,
      companyName: 'Hanoi Steel Works',
      industry: 'Material',
      region: 'Hanoi',
      capital: 'Vietnam',
      logo: 'HSW',
    },
    {
      id: 9,
      companyName: 'Osaka Builders',
      industry: 'Construction',
      region: 'Osaka',
      capital: 'Japan',
      logo: 'OB',
    },
  ];

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === 'all' || member.industry === industryFilter;
    const matchesRegion = regionFilter === 'all' || member.region === regionFilter;
    const matchesCapital = capitalFilter === 'all' || member.capital === capitalFilter;
    return matchesSearch && matchesIndustry && matchesRegion && matchesCapital;
  });

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'Design':
        return 'bg-purple-100 text-purple-800';
      case 'Construction':
        return 'bg-blue-100 text-blue-800';
      case 'Material':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <DashboardSidebar
        activeView={activeView}
        onNavigateView={() => {}}
        onLogout={onLogout}
      />

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Member Directory
          </h1>
          <p className="text-gray-600">Connect with trusted professionals in our network</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 nkba-shadow mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by company name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter size={16} className="inline mr-1" />
                Industry
              </label>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]"
              >
                <option value="all">All Industries</option>
                <option value="Design">Design</option>
                <option value="Construction">Construction</option>
                <option value="Material">Material</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter size={16} className="inline mr-1" />
                Region
              </label>
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]"
              >
                <option value="all">All Regions</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Osaka">Osaka</option>
                <option value="Kyoto">Kyoto</option>
                <option value="Hanoi">Hanoi</option>
                <option value="Ho Chi Minh">Ho Chi Minh</option>
                <option value="Da Nang">Da Nang</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter size={16} className="inline mr-1" />
                Capital Origin
              </label>
              <select
                value={capitalFilter}
                onChange={(e) => setCapitalFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]"
              >
                <option value="all">All Origins</option>
                <option value="Japan">Japan</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredMembers.length} of {members.length} members
          </p>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 nkba-shadow hover:nkba-shadow-lg transition-shadow border border-gray-200">
              {/* Logo Placeholder */}
              <div className="w-20 h-20 bg-[#003366] flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {member.logo}
                </span>
              </div>

              {/* Company Name */}
              <h3 className="text-lg font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {member.companyName}
              </h3>

              {/* Industry Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 text-xs font-semibold ${getIndustryColor(member.industry)}`}>
                  {member.industry}
                </span>
              </div>

              {/* Location */}
              <p className="text-sm text-gray-600 mb-4">
                📍 {member.region}, {member.capital}
              </p>

              {/* Connect Button */}
              <NKBAButton variant="primary" size="sm" className="w-full">
                Connect Now
              </NKBAButton>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="bg-white p-12 nkba-shadow text-center">
            <p className="text-gray-600">No members found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setIndustryFilter('all');
                setRegionFilter('all');
                setCapitalFilter('all');
              }}
              className="mt-4 text-[#003366] hover:text-[#990000] font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}