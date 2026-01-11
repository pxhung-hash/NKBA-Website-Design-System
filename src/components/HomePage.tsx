import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NKBAButton } from './NKBAButton';
import { Building2, Users, TrendingUp } from 'lucide-react';
import { NKBAShowcase } from './NKBAShowcase';

interface HomePageProps {
  onNavigate: (page: string) => void;
  isAuthenticated?: boolean;
}

export function HomePage({ onNavigate, isAuthenticated }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={onNavigate} isAuthenticated={isAuthenticated} />

      {/* Added: NKBA Showcase (converted from provided HTML) */}
      <div className="mt-16">
        <NKBAShowcase />
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), url('https://images.unsplash.com/photo-1589779255235-85dc2a054145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjgwNTY5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 section-title">
            Connecting Trust - Building Value
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 font-light">
            Official Portal for Nichietsu Kensetsu Members
          </p>
          <NKBAButton variant="accent" size="lg" className="w-full md:w-auto">
            Become a Member
          </NKBAButton>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-[#003366] mb-6">Mission & Vision</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Nichietsu Kensetsu Business Association (NKBA) serves as a bridge between Japanese and Vietnamese construction industries, fostering collaboration, trust, and sustainable growth.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our mission is to create a trusted ecosystem where design professionals, construction companies, and material suppliers can connect, collaborate, and build exceptional projects together.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to excellence, transparency, and the highest standards of professional conduct in all our endeavors.
              </p>
            </div>
            <div className="relative h-[400px] nkba-shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2ODAwNDY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business Partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NKBA */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-[#003366] text-center mb-12">Why Choose NKBA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Core Value 1 */}
            <div className="bg-white p-8 nkba-shadow text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#003366] flex items-center justify-center">
                  <Building2 size={32} className="text-white" />
                </div>
              </div>
              <h3 className="section-title text-[#003366] mb-4">Trusted Network</h3>
              <p className="text-gray-700">
                Access a vetted community of professional contractors, designers, and suppliers committed to excellence.
              </p>
            </div>

            {/* Core Value 2 */}
            <div className="bg-white p-8 nkba-shadow text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#003366] flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
              </div>
              <h3 className="section-title text-[#003366] mb-4">Cross-Border Collaboration</h3>
              <p className="text-gray-700">
                Bridge Japanese precision with Vietnamese dynamism for successful international projects.
              </p>
            </div>

            {/* Core Value 3 */}
            <div className="bg-white p-8 nkba-shadow text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#003366] flex items-center justify-center">
                  <TrendingUp size={32} className="text-white" />
                </div>
              </div>
              <h3 className="section-title text-[#003366] mb-4">Business Growth</h3>
              <p className="text-gray-700">
                Gain access to exclusive project leads, networking events, and business development resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-[#003366] text-center mb-12">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden nkba-shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjgwNTY5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Director 1"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Takeshi Yamamoto
              </h3>
              <p className="text-gray-600">Chairman & CEO</p>
              <p className="text-sm text-gray-500 mt-2">30+ years in construction</p>
            </div>

            {/* Director 2 */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden nkba-shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522199899308-2eef382e2158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODAyNzM0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Director 2"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Nguyen Thi Lan
              </h3>
              <p className="text-gray-600">Vice President</p>
              <p className="text-sm text-gray-500 mt-2">International Business Development</p>
            </div>

            {/* Director 3 */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden nkba-shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk5ODkzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Director 3"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="font-bold text-[#003366] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Kenji Tanaka
              </h3>
              <p className="text-gray-600">Secretary General</p>
              <p className="text-sm text-gray-500 mt-2">Operations & Member Relations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}