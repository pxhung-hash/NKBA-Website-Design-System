import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, CheckCircle, Home } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const SERVER_URL = `https://${projectId}.supabase.co/functions/v1/make-server-f61d8c0d`;

interface AdminSetupProps {
  onNavigate?: (page: string) => void;
}

export function AdminSetup({ onNavigate }: AdminSetupProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const createAdminAccount = async () => {
    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${SERVER_URL}/auth/create-admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create admin account');
      }

      setResult(data);
    } catch (err: any) {
      console.error('Admin setup error:', err);
      setError(err.message || 'Failed to create admin account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#004488] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white mx-auto flex items-center justify-center text-[#003366] text-3xl font-bold shadow-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            VJ
          </div>
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            NKBA Admin Setup
          </h1>
          <p className="text-gray-200 text-sm">Initialize Administrator Account</p>
        </div>

        {/* Setup Card */}
        <div className="bg-white shadow-2xl overflow-hidden">
          <div className="bg-[#003366] px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <ShieldCheck size={24} />
              Admin Account Setup
            </h2>
          </div>

          <div className="p-6 space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 flex items-start gap-3">
                <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            {result && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <div className="flex-1">
                    <p className="text-green-700 font-bold mb-2">{result.message}</p>
                    {result.credentials && (
                      <div className="bg-white p-4 mt-3 border border-green-200">
                        <p className="text-sm font-bold text-gray-700 mb-2">Admin Credentials:</p>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-gray-600">Email:</span>{' '}
                            <code className="bg-gray-100 px-2 py-1 font-mono text-[#003366]">
                              {result.credentials.email}
                            </code>
                          </div>
                          <div>
                            <span className="text-gray-600">Password:</span>{' '}
                            <code className="bg-gray-100 px-2 py-1 font-mono text-[#003366]">
                              {result.credentials.password}
                            </code>
                          </div>
                          {result.credentials.note && (
                            <p className="text-orange-600 text-xs mt-2 font-medium">
                              ⚠️ {result.credentials.note}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {!result && (
              <div className="text-gray-600 text-sm space-y-3">
                <p>Click the button below to create the administrator account for NKBA.</p>
                <p className="text-xs text-gray-500">
                  This will create an admin account with full access to the system. If an admin account already exists, it will display the existing credentials.
                </p>
              </div>
            )}

            <button
              onClick={createAdminAccount}
              disabled={isLoading}
              className="w-full bg-[#990000] hover:bg-[#BB0000] text-white font-bold py-3 px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Creating Admin Account...
                </>
              ) : (
                <>
                  <ShieldCheck size={20} />
                  Create Admin Account
                </>
              )}
            </button>

            {result && (
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/login"
                  className="block w-full text-center py-3 bg-[#003366] hover:bg-[#004488] text-white font-bold transition-colors"
                >
                  Go to Login Page
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-200 text-xs">
          <p>&copy; 2026 NKBA Corp. All rights reserved.</p>
          <p className="mt-1">Internal Use Only</p>
        </div>
      </div>
    </div>
  );
}