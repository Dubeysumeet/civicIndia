import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Process', path: '/process' },
    { name: 'Quiz', path: '/quiz' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body-md antialiased">
      {/* TopNavBar */}
      <nav className="sticky top-0 w-full z-50 border-b bg-white/95 backdrop-blur-md border-slate-100 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-black text-primary tracking-tighter font-h1 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">how_to_vote</span>
            CivicLearn
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-h3 text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/quiz"
            className="bg-secondary text-white px-6 py-2.5 rounded-xl font-button shadow-[0px_4px_0px_#7a3400] active:shadow-none active:translate-y-[2px] transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">quiz</span>
            Test Yourself
          </Link>
        </div>
      </nav>

      <main className={`flex-grow w-full ${location.pathname === '/' ? '' : 'max-w-7xl mx-auto px-6 py-12'}`}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-primary text-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-xl font-bold font-h1 flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-secondary">how_to_vote</span>
                CivicLearn India
              </div>
              <p className="text-white/70 font-body-md text-sm max-w-md">
                Empowering citizens with knowledge about India's electoral process. Learn, understand, and participate in the world's largest democracy.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-white/90">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/learn" className="text-white/70 hover:text-white text-sm transition-colors">Learn About Elections</Link>
                <Link to="/process" className="text-white/70 hover:text-white text-sm transition-colors">Voting Process</Link>
                <Link to="/quiz" className="text-white/70 hover:text-white text-sm transition-colors">Test Your Knowledge</Link>
              </div>
            </div>

            {/* Official Resources */}
            <div>
              <h4 className="font-bold mb-4 text-white/90">Official Resources</h4>
              <div className="flex flex-col gap-2">
                <a href="https://eci.gov.in" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
                  Election Commission <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
                <a href="https://voters.eci.gov.in" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
                  Voter Portal <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} CivicLearn India. Education for a stronger democracy.
            </p>
            <p className="text-white/50 text-sm">
              Made with purpose for Indian citizens
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
