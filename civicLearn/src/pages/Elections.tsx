
export default function Elections() {
  return (
    <>
      
{/*  Hero Header  */}
<header className="mb-12">
<h1 className="font-h1 text-h1 text-primary mb-4">Current Elections</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Stay informed about the democratic pulse of India. Browse upcoming polls, track ongoing elections, and explore historical results.
            </p>
</header>
{/*  Tab Interface  */}
<div className="flex flex-col gap-8">
<div className="flex items-center gap-1 bg-surface-container-low p-1.5 rounded-xl self-start">
<button className="px-6 py-2.5 rounded-lg bg-white shadow-sm text-primary font-button text-button transition-all">
                    Upcoming
                </button>
<button className="px-6 py-2.5 rounded-lg text-outline hover:text-primary font-button text-button transition-all">
                    Ongoing
                </button>
<button className="px-6 py-2.5 rounded-lg text-outline hover:text-primary font-button text-button transition-all">
                    Results
                </button>
</div>
{/*  Bento Grid Layout for Election Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  Card 1: Featured Upcoming  */}
<div className="lg:col-span-2 group bg-white p-lg rounded-xl shadow-[0px_10px_30px_rgba(30,58,138,0.04)] hover:shadow-[0px_15px_40px_rgba(30,58,138,0.08)] transition-all border border-transparent hover:border-primary-fixed-dim relative overflow-hidden">
<div className="absolute top-0 right-0 p-lg">
<span className="inline-flex items-center px-3 py-1 rounded-full text-label-caps font-label-caps bg-secondary-fixed text-on-secondary-fixed">
<span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                            REGISTRATION OPEN
                        </span>
</div>
<div className="flex flex-col md:flex-row gap-lg items-start">
<div className="w-24 h-24 rounded-2xl bg-primary-fixed-dim flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-4xl">how_to_vote</span>
</div>
<div className="flex-1">
<span className="text-label-caps font-label-caps text-secondary tracking-widest block mb-2 uppercase">LOK SABHA 2024</span>
<h3 className="font-h3 text-h3 text-primary mb-2">General Elections Phase VII</h3>
<div className="flex flex-wrap gap-4 mt-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">location_on</span>
<span className="font-body-md text-body-md">Pan-India (Multiple States)</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">calendar_month</span>
<span className="font-body-md text-body-md">June 01, 2024</span>
</div>
</div>
<button className="mt-8 flex items-center gap-2 text-primary font-button text-button hover:gap-3 transition-all">
                                Check Voter Eligibility
                                <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Card 2: State Level  */}
<div className="bg-white p-lg rounded-xl shadow-[0px_10px_30px_rgba(30,58,138,0.04)] hover:shadow-[0px_15px_40px_rgba(30,58,138,0.08)] transition-all border border-transparent hover:border-primary-fixed-dim">
<div className="mb-6">
<span className="inline-flex items-center px-3 py-1 rounded-full text-label-caps font-label-caps bg-primary-fixed text-on-primary-fixed">
                            UPCOMING
                        </span>
</div>
<div className="mb-8">
<h3 className="font-h3 text-h3 text-primary mb-1">State Assembly</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Maharashtra Legislative Assembly</p>
</div>
<div className="space-y-4 pt-4 border-t border-slate-100">
<div className="flex justify-between">
<span className="text-outline font-label-caps text-label-caps">DATE</span>
<span className="text-on-surface font-medium">Nov 2024 (Tentative)</span>
</div>
<div className="flex justify-between">
<span className="text-outline font-label-caps text-label-caps">SEATS</span>
<span className="text-on-surface font-medium">288 Constituencies</span>
</div>
</div>
</div>
{/*  Card 3: Bye-Elections  */}
<div className="bg-white p-lg rounded-xl shadow-[0px_10px_30px_rgba(30,58,138,0.04)] hover:shadow-[0px_15px_40px_rgba(30,58,138,0.08)] transition-all border border-transparent hover:border-primary-fixed-dim">
<div className="mb-6">
<span className="inline-flex items-center px-3 py-1 rounded-full text-label-caps font-label-caps bg-primary-fixed text-on-primary-fixed">
                            UPCOMING
                        </span>
</div>
<div className="mb-8">
<h3 className="font-h3 text-h3 text-primary mb-1">Bye-Elections</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Pali Legislative Assembly</p>
</div>
<div className="space-y-4 pt-4 border-t border-slate-100">
<div className="flex justify-between">
<span className="text-outline font-label-caps text-label-caps">STATE</span>
<span className="text-on-surface font-medium">Rajasthan</span>
</div>
<div className="flex justify-between">
<span className="text-outline font-label-caps text-label-caps">DATE</span>
<span className="text-on-surface font-medium">July 10, 2024</span>
</div>
</div>
</div>
{/*  Card 4: Local Bodies  */}
<div className="bg-white p-lg rounded-xl shadow-[0px_10px_30px_rgba(30,58,138,0.04)] hover:shadow-[0px_15px_40px_rgba(30,58,138,0.08)] transition-all border border-transparent hover:border-primary-fixed-dim">
<div className="mb-6">
<span className="inline-flex items-center px-3 py-1 rounded-full text-label-caps font-label-caps bg-primary-fixed text-on-primary-fixed">
                            UPCOMING
                        </span>
</div>
<div className="mb-8">
<h3 className="font-h3 text-h3 text-primary mb-1">Municipal Polls</h3>
<p className="font-body-md text-body-md text-on-surface-variant">BBMP Elections</p>
</div>
<div className="space-y-4 pt-4 border-t border-slate-100">
<div className="flex justify-between">
<span className="text-outline font-label-caps text-label-caps">CITY</span>
<span className="text-on-surface font-medium">Bengaluru</span>
</div>
<div className="flex justify-between">
<span className="text-outline font-label-caps text-label-caps">DATE</span>
<span className="text-on-surface font-medium">Aug 2024 (Pending)</span>
</div>
</div>
</div>
{/*  Action Card: Learning CTA  */}
<div className="bg-primary p-lg rounded-xl shadow-[0px_10px_30px_rgba(0,35,111,0.2)] text-white flex flex-col justify-between overflow-hidden relative">
<div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
<div>
<span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4">school</span>
<h3 className="font-h3 text-h3 mb-2">First Time Voter?</h3>
<p className="font-body-md text-body-md text-primary-fixed/80">Download our step-by-step guide to the polling booth process.</p>
</div>
<button className="mt-8 bg-white text-primary px-6 py-2.5 rounded-full font-button text-button w-fit hover:scale-105 active:scale-95 transition-all">
                        Get Voter Guide
                    </button>
</div>
</div>
</div>
{/*  Informational Section  */}
<section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative">
<img className="rounded-2xl shadow-xl w-full h-[400px] object-cover" data-alt="A clean, minimalist 3D rendering of an Indian voting machine EVM on a soft gray background, illuminated by cinematic professional studio lighting. The scene represents technological progress and civic transparency with a professional corporate aesthetic using primary deep blues and subtle saffron accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYfTSOhoHdy8rctPm7kvpbD6TTV1i_93seOqQoAPdz9DyXaq-1Gj0jn_MvUSRfaH1woa3FtvLHQ9N9QezwXjWYYqFcl8V7_GK7S63eD4Pzc0xs6lHQVAmgM8_vFouaoWq0ndZQ-UBuW3CQyMoK2lU9oWX3eB3R7WTd0y30p4OthIfv5bL9Ph60y9rg0DbeM02pLyz90-xesKREr_WPmkhUN_o0v3dx4TC56pUnV6DSTpHEXxnhi5OIT6pjomrbl2Wy3wEixteiHJX"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg border border-white/20">
<p className="font-body-md text-body-md text-primary font-medium italic">"Democracy is not just about voting, it's about being an informed citizen."</p>
</div>
</div>
<div>
<h2 className="font-h2 text-h2 text-primary mb-6">How our directory works</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<h4 className="font-h3 text-h3 text-primary text-lg mb-1">Verified Data</h4>
<p className="font-body-md text-body-md text-on-surface-variant">All election dates and statuses are sourced directly from the Election Commission of India official gazettes.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">notifications_active</span>
</div>
<div>
<h4 className="font-h3 text-h3 text-primary text-lg mb-1">Smart Notifications</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Get notified when voter registration opens for elections in your specific constituency.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">map</span>
</div>
<div>
<h4 className="font-h3 text-h3 text-primary text-lg mb-1">Constituency Maps</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Deep dive into detailed boundaries and historical voting patterns for each listing.</p>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
