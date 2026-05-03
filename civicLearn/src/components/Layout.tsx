import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Basics', path: '/basics' },
    { name: 'Types', path: '/types' },
    { name: 'Process', path: '/process' },
    { name: 'Rights', path: '/rights' },
    { name: 'History', path: '/history' },
    { name: 'Elections', path: '/elections' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body-md antialiased">
      {/* TopNavBar */}
      <nav className="sticky top-0 w-full z-50 border-b bg-white/95 backdrop-blur-md border-slate-100 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-black text-primary tracking-tighter font-h1">
            CivicLearn India
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
            className="bg-secondary-container text-white px-6 py-2 rounded-xl font-button shadow-[0px_4px_0px_#9d4300] active:shadow-none active:translate-y-[2px] transition-all"
          >
            Start Learning
          </Link>
        </div>
      </nav>

      <main className={`flex-grow w-full ${location.pathname === '/' ? '' : 'max-w-7xl mx-auto px-6 py-12'}`}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-slate-50 border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-lg font-bold text-primary font-h1">CivicLearn India</div>
            <p className="text-slate-500 font-body-md text-sm">
              © {new Date().getFullYear()} CivicLearn India. Education for a stronger democracy.
            </p>
          </div>
          <div className="flex gap-8">
            <Link to="#" className="text-slate-500 hover:underline decoration-2 underline-offset-4 font-body-md text-sm">About</Link>
            <Link to="#" className="text-slate-500 hover:underline decoration-2 underline-offset-4 font-body-md text-sm">Methodology</Link>
            <Link to="#" className="text-slate-500 hover:underline decoration-2 underline-offset-4 font-body-md text-sm">Privacy</Link>
            <Link to="#" className="text-slate-500 hover:underline decoration-2 underline-offset-4 font-body-md text-sm">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
