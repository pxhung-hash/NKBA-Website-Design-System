import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { DashboardPage } from './components/DashboardPage';
import { PublicMemberDirectory } from './components/PublicMemberDirectory';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { AdminSetup } from './components/AdminSetup';
import { AuthProvider, useAuth } from './utils/AuthContext';
import { projectId, publicAnonKey } from './utils/supabase/info';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard' | 'directory' | 'login' | 'register' | 'admin-setup'>('home');
  const { user, isLoading } = useAuth();

  const handleNavigate = (page: string) => {
    // Check if trying to access protected pages
    if ((page === 'dashboard') && !user) {
      setCurrentPage('login');
      return;
    }
    
    if (page === 'home' || page === 'dashboard' || page === 'directory' || page === 'login' || page === 'register' || page === 'admin-setup') {
      setCurrentPage(page as any);
    }
  };

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#003366] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} isAuthenticated={!!user} />}
      {currentPage === 'dashboard' && <DashboardPage onNavigate={handleNavigate} />}
      {currentPage === 'directory' && <PublicMemberDirectory onNavigate={handleNavigate} />}
      {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
      {currentPage === 'register' && <RegisterPage onNavigate={handleNavigate} />}
      {currentPage === 'admin-setup' && <AdminSetup onNavigate={handleNavigate} />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}