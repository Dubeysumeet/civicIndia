import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import AIAssistant from './AIAssistant';

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Learn', path: '/learn', icon: 'school' },
    { name: 'Process', path: '/process', icon: 'route' },
    { name: 'Quiz', path: '/quiz', icon: 'quiz' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body-md antialiased">

      {/* ── Top Nav ── */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="flex justify-between items-center px-6 py-3.5 max-w-7xl mx-auto">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-secondary text-xl">how_to_vote</span>
            </div>
            <div>
              <span className="font-h1 text-lg font-black text-primary tracking-tight leading-none block">CivicLearn</span>
              <span className="text-[10px] text-on-surface-variant tracking-widest uppercase leading-none">India</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/8'
                    : 'text-on-surface-variant hover:text-primary hover:bg-slate-50'
                }`}
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/8 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                {isActive(link.path) && (
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full relative z-10" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/quiz"
              className="hidden md:flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-xl font-button text-sm shadow-[0px_3px_0px_#8C3500] active:shadow-none active:translate-y-[2px] transition-all hover:bg-[#E86020]"
            >
              <span className="material-symbols-outlined text-sm">quiz</span>
              Test Yourself
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center"
            >
              <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-white overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'text-on-surface-variant hover:bg-slate-50 hover:text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/quiz"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-secondary text-white px-4 py-3 rounded-xl font-button text-sm mt-2"
                >
                  <span className="material-symbols-outlined text-sm">quiz</span>
                  Test Yourself
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Page Content ── */}
      <main className={`flex-grow w-full ${location.pathname === '/' ? '' : 'max-w-7xl mx-auto px-6 py-12'}`}>
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="w-full bg-primary text-white">
        {/* Top stripe */}
        <div className="india-stripe h-1 w-full" />

        <div className="max-w-7xl mx-auto px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">how_to_vote</span>
                </div>
                <span className="font-h1 text-xl font-black tracking-tight">CivicLearn India</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Empowering citizens with knowledge about India's electoral process. Learn, understand, and participate in the world's largest democracy.
              </p>
              <div className="flex gap-2 mt-6">
                {['🏛️ Free', '📜 Verified', '🇮🇳 For India'].map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-white/70">{tag}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white/90 mb-4 text-sm tracking-wide">Explore</h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'Learn About Elections', to: '/learn' },
                  { label: 'Voting Process', to: '/process' },
                  { label: 'Test Your Knowledge', to: '/quiz' },
                ].map((l) => (
                  <Link key={l.to} to={l.to} className="text-white/50 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200">
                    → {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white/90 mb-4 text-sm tracking-wide">Official Links</h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'Election Commission', href: 'https://eci.gov.in' },
                  { label: 'Voter Portal', href: 'https://voters.eci.gov.in' },
                  { label: 'Voter Helpline 1950', href: '#' },
                ].map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1">
                    {l.label}
                    <span className="material-symbols-outlined text-xs opacity-60">open_in_new</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">© {new Date().getFullYear()} CivicLearn India. Built for a stronger democracy.</p>
            <p className="text-white/30 text-xs">Made with purpose for 1.4 billion citizens 🇮🇳</p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
