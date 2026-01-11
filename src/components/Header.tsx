import React from 'react';
import { NKBAButton } from './NKBAButton';
import { Menu, LogIn, LogOut } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  isAuthenticated?: boolean;
}

export function Header({ onNavigate, isAuthenticated }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white nkba-shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="text-3xl font-bold text-[#003366]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              NKBA
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-[#003366] transition-colors">
              About
            </button>
            <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-[#003366] transition-colors">
              Why Us
            </button>
            <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-[#003366] transition-colors">
              Leadership
            </button>
            <button onClick={() => onNavigate('directory')} className="text-gray-700 hover:text-[#003366] transition-colors">
              Members
            </button>
            <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-[#003366] transition-colors">
              Contact
            </button>
          </nav>

          {/* Login/Dashboard Button */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <NKBAButton variant="primary" size="sm" onClick={() => onNavigate('dashboard')}>
                <LogIn size={16} className="inline mr-2" />
                Dashboard
              </NKBAButton>
            ) : (
              <NKBAButton variant="primary" size="sm" onClick={() => onNavigate('login')}>
                <LogIn size={16} className="inline mr-2" />
                Login
              </NKBAButton>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#003366]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-gray-700 hover:text-[#003366] text-left">
                About
              </button>
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-gray-700 hover:text-[#003366] text-left">
                Why Us
              </button>
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-gray-700 hover:text-[#003366] text-left">
                Leadership
              </button>
              <button onClick={() => { onNavigate('directory'); setMobileMenuOpen(false); }} className="text-gray-700 hover:text-[#003366] text-left">
                Members
              </button>
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-gray-700 hover:text-[#003366] text-left">
                Contact
              </button>
              {isAuthenticated ? (
                <NKBAButton variant="primary" size="sm" onClick={() => { onNavigate('dashboard'); setMobileMenuOpen(false); }} className="w-full">
                  <LogIn size={16} className="inline mr-2" />
                  Dashboard
                </NKBAButton>
              ) : (
                <NKBAButton variant="primary" size="sm" onClick={() => { onNavigate('login'); setMobileMenuOpen(false); }} className="w-full">
                  <LogIn size={16} className="inline mr-2" />
                  Login
                </NKBAButton>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}