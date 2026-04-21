'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'Customize', href: '/#customize' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1b2a]/95 backdrop-blur-md shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-heading text-white font-extrabold text-lg tracking-widest uppercase hover:text-emerald-400 transition-colors"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/20">
              <Image 
                src="/logo.jpg" 
                alt="Flower Capsule Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span>FLOWER CAPSULE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn btn-sm bg-emerald-600 hover:bg-emerald-500 text-white border-0 rounded-full px-5 font-semibold transition-all hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d1b2a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-heading text-4xl font-bold text-white hover:text-emerald-400 tracking-widest transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="btn bg-emerald-600 hover:bg-emerald-500 text-white border-0 rounded-full px-8 text-lg mt-4"
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}
