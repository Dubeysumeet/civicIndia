import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full text-label-caps uppercase">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Election 2024 Readiness
            </div>
            <h1 className="font-h1 text-[56px] leading-[1.1] text-primary">Understand Elections in India 🇮🇳</h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              Your comprehensive, gamified guide to navigating the world's largest democracy. Learn how laws are made and how your vote shapes the future.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/basics" 
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-button text-lg shadow-[0_5px_0_0_#5c2400] active:translate-y-[2px] active:shadow-[0_3px_0_0_#5c2400] transition-all"
              >
                Start Learning
              </Link>
              <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-button text-lg hover:bg-primary/5 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Watch How it Works
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-3xl -z-10"></div>
            <img 
              alt="Digital Democracy Illustration" 
              className="w-full h-auto rounded-3xl shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuNqcazfLgLIohb9__Iy6bpzS0hdSOHFS4VthNh1n8XT--PkFq9vz_COqPLLyw_BHLKspyTX56CSzWkGf8nUlc5gNYs4SkqMh2SyxvrW2kFdTCDHDbGwldn6_8kEQdwC5vsXL6pSVI6FYhaR9NBOcmQB-M_AUo_23WWpZ7mYpiHEyOEnbGriTvgq6R49LDB1UZ8TRSWvSddBDgJ2Zg86IO6eX1lQMbL11TPxA7iDhntLz8ektWfekb9qPo8sNHlXOlfdWZZ80U2Ov8"
            />
          </div>
        </div>
      </section>

      {/* Interactive Learning Path (Duolingo Style) */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-h2 text-primary mb-4">Your Learning Journey</h2>
          <p className="text-on-surface-variant">Master the civic landscape one step at a time.</p>
        </div>
        <div className="max-w-lg mx-auto relative flex flex-col items-center gap-12">
          {/* Step 1: Basics (Completed) */}
          <Link to="/basics" className="relative z-10 w-full flex justify-start pl-12 group cursor-pointer block">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-500 w-64 transform -rotate-2 group-hover:rotate-0 transition-all flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">menu_book</span>
              </div>
              <span className="font-h3 text-xl">Basics</span>
              <div className="bg-emerald-500 text-white p-1 rounded-full flex items-center">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
            </div>
          </Link>
          
          {/* Path Line */}
          <div className="absolute w-1 h-full bg-slate-200 left-1/2 -translate-x-1/2 top-0 z-0"></div>
          
          {/* Step 2: Types (Active) */}
          <Link to="/types" className="relative z-10 w-full flex justify-end pr-12 group cursor-pointer block">
            <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-primary active-glow w-64 transform rotate-2 group-hover:rotate-0 transition-all flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-primary-container text-white rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">account_balance</span>
              </div>
              <span className="font-h3 text-xl text-primary">Types</span>
              <div className="bg-primary px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest animate-pulse">Current</div>
            </div>
          </Link>

          {/* Step 3: Process (Locked) */}
          <div className="relative z-10 w-full flex justify-center">
            <div className="bg-slate-100 p-6 rounded-2xl border-2 border-dashed border-slate-300 w-64 opacity-60 flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">how_to_reg</span>
              </div>
              <span className="font-h3 text-xl text-slate-500">Process</span>
              <span className="material-symbols-outlined text-slate-400">lock</span>
            </div>
          </div>

          {/* Step 4: Rights (Locked) */}
          <div className="relative z-10 w-full flex justify-start pl-12">
            <div className="bg-slate-100 p-6 rounded-2xl border-2 border-dashed border-slate-300 w-64 opacity-60 flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">gavel</span>
              </div>
              <span className="font-h3 text-xl text-slate-500">Rights</span>
              <span className="material-symbols-outlined text-slate-400">lock</span>
            </div>
          </div>

          {/* Step 5: History (Locked) */}
          <div className="relative z-10 w-full flex justify-end pr-12">
            <div className="bg-slate-100 p-6 rounded-2xl border-2 border-dashed border-slate-300 w-64 opacity-60 flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">history_edu</span>
              </div>
              <span className="font-h3 text-xl text-slate-500">History</span>
              <span className="material-symbols-outlined text-slate-400">lock</span>
            </div>
          </div>
        </div>
      </section>

      {/* Election Process Timeline */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <h2 className="font-h2 text-primary text-center mb-16">The Election Lifecycle</h2>
        <div className="relative">
          <div className="absolute top-12 left-0 w-full h-[2px] border-t-2 border-dashed border-primary-fixed -z-10"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined">campaign</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 w-full">
                <p className="font-bold text-sm mb-1">Announcement</p>
                <p className="text-xs text-slate-500">ECI declares election dates</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 w-full">
                <p className="font-bold text-sm mb-1">Nominations</p>
                <p className="text-xs text-slate-500">Candidates file papers</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 w-full">
                <p className="font-bold text-sm mb-1">Campaigning</p>
                <p className="text-xs text-slate-500">Rallies & Manifestos</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined">how_to_vote</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 w-full border-2 border-secondary/20">
                <p className="font-bold text-sm mb-1">Polling Day</p>
                <p className="text-xs text-slate-500">Citizens cast votes</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined">equalizer</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 w-full">
                <p className="font-bold text-sm mb-1">Counting</p>
                <p className="text-xs text-slate-500">Tallying of EVM results</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined">emoji_events</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 w-full">
                <p className="font-bold text-sm mb-1">Declaration</p>
                <p className="text-xs text-slate-500">Results officially announced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Elections Tabs */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-h2 text-primary mb-2">Live Election Watch</h2>
              <p className="text-on-surface-variant">Stay updated with ongoing and upcoming polls.</p>
            </div>
            <div className="flex p-1 bg-surface-container rounded-full">
              <button className="px-6 py-2 rounded-full bg-white shadow-sm font-button text-primary">Upcoming</button>
              <button className="px-6 py-2 rounded-full font-button text-slate-500 hover:text-primary">Ongoing</button>
              <button className="px-6 py-2 rounded-full font-button text-slate-500 hover:text-primary">Results</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/elections/maharashtra-2024" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-slate-100 block">
              <div className="h-48 relative">
                <img 
                  alt="State Assembly" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZnC0TiLq2hyKaMrHG6h6AIglS8PEnnrnS20YgY0hRJmsXYSs2u2xvg5qWbqo4jFKHOTgC5SIofPTEW0Qj_PbJ_Er1GbSB3uk6jV4cd-cZMJce9mACqYms60bwu9pf0E6KlGozF5I0p4WCKU_P2324IcKabsOj2wePrp22LnfeG49rAYLFhTBm7h8LjqARiDqCbD3dEmfgFdgeTtJOXMXxlDJ1928RJm04flnAL2Ixtca2Ctso7jVrEDjA2crcaQlDTsVp0sJlyfcg"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">State Assembly</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  November 2024
                </div>
                <h3 className="font-h3 text-2xl mb-4">Maharashtra Legislative Assembly</h3>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-slate-500 text-sm">Status: Notification Pending</span>
                  <button className="text-primary font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    Track Details <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/elections/haryana-2024" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-slate-100 block">
              <div className="h-48 relative">
                <img 
                  alt="State Map Data" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAQLr92ANuXdyIX2__tMVFsjQzztawG6BrU1v-5F0LDhEtNBxUY_A55NBNONBApwpD3KGa_5DdEj292rDP7ZRazhkOAHWlyyCVF5IK_spL6QRRBrmqAVtUbUJ-1FLHBNR5Z9Z2DvRoXvUpmheH-3O2K_mAnyGk_cxzPz5ZoueeG0IsfU3xv5nAy-dy0vVXnMcEcb8jfuooOJqvJvMc3XqFfnSTP9psTR3Bb5ZVVpaQHgfdWNOCzGN3YZPKctxkdFSwndcBYVENNhhZ"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">State Assembly</div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  October 2024
                </div>
                <h3 className="font-h3 text-2xl mb-4">Haryana Legislative Assembly</h3>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-slate-500 text-sm">Status: Pre-poll Training</span>
                  <button className="text-primary font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    Track Details <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-primary text-white rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-secondary p-2 rounded-lg">
                <span className="material-symbols-outlined">quiz</span>
              </div>
              <h2 className="font-h3 text-2xl">Quick Quiz: Test your knowledge!</h2>
            </div>
            <div className="mb-10">
              <p className="text-xl md:text-2xl font-medium mb-8">What is the minimum age to vote in India?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-white/10 hover:bg-white/20 border-2 border-white/20 p-5 rounded-2xl text-left transition-all font-bold flex justify-between items-center group">
                  <span>18 Years</span>
                  <div className="w-6 h-6 border-2 border-white/40 rounded-full group-hover:border-white transition-colors"></div>
                </button>
                <button className="bg-white/10 hover:bg-white/20 border-2 border-white/20 p-5 rounded-2xl text-left transition-all font-bold flex justify-between items-center group">
                  <span>21 Years</span>
                  <div className="w-6 h-6 border-2 border-white/40 rounded-full group-hover:border-white transition-colors"></div>
                </button>
                <button className="bg-white/10 hover:bg-white/20 border-2 border-white/20 p-5 rounded-2xl text-left transition-all font-bold flex justify-between items-center group">
                  <span>25 Years</span>
                  <div className="w-6 h-6 border-2 border-white/40 rounded-full group-hover:border-white transition-colors"></div>
                </button>
                <button className="bg-white/10 hover:bg-white/20 border-2 border-white/20 p-5 rounded-2xl text-left transition-all font-bold flex justify-between items-center group">
                  <span>30 Years</span>
                  <div className="w-6 h-6 border-2 border-white/40 rounded-full group-hover:border-white transition-colors"></div>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white/60 text-sm">Question 1 of 10</p>
              <Link to="/quiz" className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors inline-block">Next Question</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-h1 text-[64px] leading-tight mb-6">
            Every <span className="text-secondary italic underline decoration-secondary/30">Vote</span> Counts.<br/>
            Every Voice Matters.
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="font-body-lg text-slate-500 max-w-xl mx-auto">
            Democracy is not just a system, it's a shared responsibility. Join 5M+ Indians learning to navigate our elective process with confidence.
          </p>
        </div>
      </section>
    </>
  );
}
