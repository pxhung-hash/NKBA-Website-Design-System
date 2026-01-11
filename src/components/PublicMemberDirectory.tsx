import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Search, Filter } from 'lucide-react';
import { NKBAButton } from './NKBAButton';

interface PublicMemberDirectoryProps {
  onNavigate: (page: string) => void;
}

export function PublicMemberDirectory({ onNavigate }: PublicMemberDirectoryProps) {
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
    {
      id: 10,
      companyName: 'Nagoya Engineering',
      industry: 'Construction',
      region: 'Nagoya',
      capital: 'Japan',
      logo: 'NE',
    },
    {
      id: 11,
      companyName: 'Hue Design Collective',
      industry: 'Design',
      region: 'Hue',
      capital: 'Vietnam',
      logo: 'HDC',
    },
    {
      id: 12,
      companyName: 'Fukuoka Materials Inc',
      industry: 'Material',
      region: 'Fukuoka',
      capital: 'Japan',
      logo: 'FMI',
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
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Construction':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Material':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header onNavigate={onNavigate} />

      {/* Page Header */}
      <section className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl mb-4 section-title">
            Member Directory
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Connect with trusted professionals across Japan and Vietnam
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar - Large and Prominent */}
          <div className="bg-white p-6 md:p-8 nkba-shadow mb-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Search Members
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                <input
                  type="text"
                  placeholder="Search by company name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
                />
              </div>
            </div>

            {/* Filters Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <Filter size={20} className="text-[#003366] mr-2" />
                <h3 className="font-semibold text-[#003366]">Filter Results</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Industry Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
                  >
                    <option value="all">All Industries</option>
                    <option value="Design">Design</option>
                    <option value="Construction">Construction</option>
                    <option value="Material">Material</option>
                  </select>
                </div>

                {/* Region Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Region
                  </label>
                  <select
                    value={regionFilter}
                    onChange={(e) => setRegionFilter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
                  >
                    <option value="all">All Regions</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Osaka">Osaka</option>
                    <option value="Kyoto">Kyoto</option>
                    <option value="Nagoya">Nagoya</option>
                    <option value="Fukuoka">Fukuoka</option>
                    <option value="Hanoi">Hanoi</option>
                    <option value="Ho Chi Minh">Ho Chi Minh</option>
                    <option value="Da Nang">Da Nang</option>
                    <option value="Hue">Hue</option>
                  </select>
                </div>

                {/* Capital Origin Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capital Origin
                  </label>
                  <select
                    value={capitalFilter}
                    onChange={(e) => setCapitalFilter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
                  >
                    <option value="all">All Origins</option>
                    <option value="Japan">Japan</option>
                    <option value="Vietnam">Vietnam</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-700 font-medium">
              Showing <span className="text-[#003366] font-bold">{filteredMembers.length}</span> of <span className="font-bold">{members.length}</span> members
            </p>
            {(searchQuery || industryFilter !== 'all' || regionFilter !== 'all' || capitalFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIndustryFilter('all');
                  setRegionFilter('all');
                  setCapitalFilter('all');
                }}
                className="text-[#990000] hover:text-[#BB0000] font-medium text-sm transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Member Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white p-6 border border-gray-300 hover:border-[#003366] transition-all duration-300 hover:nkba-shadow-lg"
              >
                {/* Logo */}
                <div className="w-20 h-20 bg-[#003366] flex items-center justify-center mb-4">
                  <span 
                    className="text-white text-xl font-bold" 
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {member.logo}
                  </span>
                </div>

                {/* Company Name */}
                <h3 
                  className="text-xl font-bold text-[#003366] mb-3 min-h-[3.5rem]" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {member.companyName}
                </h3>

                {/* Industry Badge */}
                <div className="mb-4">
                  <span 
                    className={`inline-block px-3 py-1 text-xs font-semibold border ${getIndustryColor(member.industry)}`}
                  >
                    {member.industry}
                  </span>
                </div>

                {/* Location Info */}
                <div className="mb-4 text-sm text-gray-600 space-y-1">
                  <p>📍 {member.region}</p>
                  <p>🌏 {member.capital}</p>
                </div>

                {/* Connect Button */}
                <NKBAButton variant="primary" size="sm" className="w-full">
                  Connect Now
                </NKBAButton>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredMembers.length === 0 && (
            <div className="bg-white p-16 nkba-shadow text-center border border-gray-200">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  No Members Found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any members matching your search criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setIndustryFilter('all');
                    setRegionFilter('all');
                    setCapitalFilter('all');
                  }}
                  className="text-[#990000] hover:text-[#BB0000] font-semibold transition-colors"
                >
                  Clear All Filters →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
