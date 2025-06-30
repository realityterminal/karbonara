import React from 'react';
import { Zap } from 'lucide-react';

/**
 * Header component for the landing page.
 * Contains logo, navigation, and call-to-action.
 * Responsive and visually consistent with the design system.
 */
const Header: React.FC = () => (
  <header className="w-full bg-white">
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Zap className="w-8 h-8 text-gray-900 font-bold" />
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight select-none" style={{ fontFamily: 'Inter, sans-serif' }}>
          Digiso
        </span>
      </div>
      {/* Center Nav */}
      <ul className="hidden md:flex items-center space-x-8 font-semibold text-lg text-gray-900">
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
          Home
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
          Pages
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
          Portfolio
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition">
          Contact
        </li>
      </ul>
      {/* CTA */}
      <div className="hidden md:block">
        <a
          href="#"
          className="text-lg font-bold text-gray-900 underline underline-offset-4 decoration-2 decoration-gray-900 hover:text-blue-600 transition"
        >
          Join with us
        </a>
      </div>
      {/* Mobile menu placeholder (not implemented) */}
    </nav>
  </header>
);

export default Header;
