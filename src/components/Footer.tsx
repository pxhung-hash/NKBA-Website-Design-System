import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="section-title text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>Nichietsu Kensetsu Business Association</p>
              <p>Tokyo, Japan</p>
              <p>Email: info@nkba.jp</p>
              <p>Phone: +81-3-XXXX-XXXX</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="section-title text-white mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="section-title text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Member Resources
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#004488] text-center text-gray-400">
          <p>&copy; 2026 NKBA - Nichietsu Kensetsu Business Association. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
