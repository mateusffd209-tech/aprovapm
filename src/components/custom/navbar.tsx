'use client';

import Link from 'next/link';
import { BookOpen, Menu, X, GraduationCap, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Início' },
    { href: '/disciplinas', label: 'Disciplinas' },
    { href: '/simulados', label: 'Simulados' },
    { href: '/questoes', label: 'Questões' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-800 to-green-900 shadow-lg border-b-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-yellow-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-green-900" />
            </div>
            <span className="text-2xl font-bold text-white">
              Aprova<span className="text-yellow-400">PM</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow-400 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/comprar"
              className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold px-6 py-2 rounded-lg transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Comprar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-700">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-yellow-400 font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/comprar"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded-lg transition-all shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Comprar Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
