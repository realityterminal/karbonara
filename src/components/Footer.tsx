import React from 'react';
import { Zap, Dribbble, Instagram, X } from 'lucide-react';

/**
 * Footer component replicating the provided design.
 * - 4-column grid: Logo, Pages, CMS, Branding Agency
 * - Social icons, address, copyright
 * - Responsive and accessible
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 border-b border-gray-200">
          {/* Logo */}
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-8 h-8 text-gray-900 font-bold" />
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Digiso
              </span>
            </div>
          </div>
          {/* Pages */}
          <nav aria-label="Footer Pages" className="flex flex-col">
            <h3 className="text-xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Services</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Portfolio</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Contact</a></li>
            </ul>
          </nav>
          {/* CMS */}
          <nav aria-label="Footer CMS" className="flex flex-col">
            <h3 className="text-xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>CMS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Integration</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Customers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Case Studies</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Our Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition font-medium text-lg">Careers</a></li>
            </ul>
          </nav>
          {/* Branding Agency */}
          <div className="flex flex-col">
            <h3 className="text-xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Branding Agency</h3>
            <address className="not-italic text-gray-500 font-medium text-lg mb-6 leading-relaxed">
              3F Mitaka Takagi Building,<br />
              Musashino-shi,80-0006<br />
              Japan
            </address>
            <div className="flex space-x-4">
              <a href="#" aria-label="Dribbble" className="rounded-full border border-gray-200 w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
                <Dribbble className="w-6 h-6 text-gray-900" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full border border-gray-200 w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
                <Instagram className="w-6 h-6 text-gray-900" />
              </a>
              <a href="#" aria-label="X" className="rounded-full border border-gray-200 w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
                <X className="w-6 h-6 text-gray-900" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <span className="text-gray-500 text-xl font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            All Right Reserved © 2024 Digiso
          </span>
          {/* Scroll to top button */}
          <button
            aria-label="Scroll to top"
            className="mt-6 md:mt-0 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-700 transition fixed md:static bottom-6 right-6 z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
