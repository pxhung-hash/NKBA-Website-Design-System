import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { DashboardPage } from './components/DashboardPage';
import { PublicMemberDirectory } from './components/PublicMemberDirectory';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { AuthProvider, useAuth } from './utils/AuthContext';
import { projectId, publicAnonKey } from './utils/supabase/info';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard' | 'directory' | 'login' | 'register'>('home');
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  const handleNavigate = (page: string) => {
    // Check if trying to access protected pages
    if ((page === 'dashboard') && !isAuthenticated) {
      setCurrentPage('login');
      return;
    }
    
    if (page === 'home' || page === 'dashboard' || page === 'directory' || page === 'login' || page === 'register') {
      setCurrentPage(page);
    }
  };

  const handleLogin = async (userData: { id: string; email: string; name: string }) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      login(userData, token);
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = async () => {
    await logout();
    setCurrentPage('home');
  };

  const handleRegisterSuccess = () => {
    setCurrentPage('login');
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
    <div className="min-h-screen">
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} isAuthenticated={isAuthenticated} />}
      {currentPage === 'dashboard' && isAuthenticated && <DashboardPage onLogout={handleLogout} />}
      {currentPage === 'directory' && <PublicMemberDirectory onNavigate={handleNavigate} />}
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} onNavigateToRegister={() => setCurrentPage('register')} />}
      {currentPage === 'register' && <RegisterPage onRegisterSuccess={handleRegisterSuccess} onNavigateToLogin={() => setCurrentPage('login')} />}
      
      {/* Redirect to login if trying to access protected page without auth */}
      {currentPage === 'dashboard' && !isAuthenticated && (
        <LoginPage onLogin={handleLogin} onNavigateToRegister={() => setCurrentPage('register')} />
      )}
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