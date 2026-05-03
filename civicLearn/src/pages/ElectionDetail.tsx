
export default function ElectionDetail() {
  return (
    <>
      
{/*  Hero Section  */}
<header className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-label-caps text-secondary tracking-widest mb-2 block">CONSTITUTIONAL PROCESS</span>
<h1 className="font-h1 text-h1 text-primary">General Election 2024</h1>
<p className="text-body-lg text-outline mt-4 max-w-2xl">The largest democratic exercise in the world, determining the 18th Lok Sabha through a multi-phase national voting process.</p>
</div>
<div className="flex gap-4">
<button className="bg-secondary text-on-secondary px-8 py-3 rounded-xl font-button shadow-tactile transition-all">
                        Follow Live Updates
                    </button>
</div>
</div>
</header>
{/*  Summary Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
<div className="bg-white p-lg rounded-xl card-elevation border border-surface-container flex flex-col gap-sm">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="ballot">ballot</span>
<span className="text-outline font-label-caps">ELECTION TYPE</span>
<span className="text-h3 font-h3 text-primary">Lok Sabha</span>
</div>
<div className="bg-white p-lg rounded-xl card-elevation border border-surface-container flex flex-col gap-sm">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="calendar_month">calendar_month</span>
<span className="text-outline font-label-caps">POLL DATES</span>
<span className="text-h3 font-h3 text-primary">Apr 19 - Jun 01</span>
</div>
<div className="bg-white p-lg rounded-xl card-elevation border border-surface-container flex flex-col gap-sm">
<span className="material-symbols-outlined text-secondary text-4xl" data-icon="check_circle">check_circle</span>
<span className="text-outline font-label-caps">CURRENT STATUS</span>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
<span className="text-h3 font-h3 text-secondary">In Progress</span>
</div>
</div>
</section>
{/*  Main Content Asymmetric Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
{/*  Left Column: Phases & Constituencies  */}
<div className="lg:col-span-8 flex flex-col gap-xl">
{/*  Phases Timeline  */}
<section>
<div className="flex items-center justify-between mb-lg">
<h2 className="font-h2 text-h2 text-primary">Election Phases</h2>
<span className="bg-surface-container px-4 py-1 rounded-full text-sm font-medium">7 Phases Total</span>
</div>
<div className="space-y-gutter relative">
{/*  Connecting Line  */}
<div className="absolute left-[23px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-outline-variant"></div>
<div className="relative flex gap-lg group">
<div className="z-10 bg-primary w-12 h-12 rounded-full flex items-center justify-center text-on-primary font-bold shadow-lg">1</div>
<div className="bg-white p-lg rounded-xl card-elevation border border-surface-container flex-1 transition-transform group-hover:-translate-y-1">
<div className="flex justify-between items-start mb-2">
<h3 className="font-h3 text-primary">Phase 1: April 19</h3>
<span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold">COMPLETED</span>
</div>
<p className="text-outline">102 Constituencies across 21 States &amp; UTs. High voter turnout recorded in North-Eastern states.</p>
</div>
</div>
<div className="relative flex gap-lg group">
<div className="z-10 bg-primary w-12 h-12 rounded-full flex items-center justify-center text-on-primary font-bold shadow-lg">2</div>
<div className="bg-white p-lg rounded-xl card-elevation border border-surface-container flex-1 transition-transform group-hover:-translate-y-1">
<div className="flex justify-between items-start mb-2">
<h3 className="font-h3 text-primary">Phase 2: April 26</h3>
<span className="bg-secondary-container/20 text-secondary-container px-3 py-1 rounded text-xs font-bold">ACTIVE</span>
</div>
<p className="text-outline">88 Constituencies including key urban centers. Monitoring systems deployed at all sensitive booths.</p>
</div>
</div>
<div className="relative flex gap-lg group">
<div className="z-10 bg-surface-container w-12 h-12 rounded-full flex items-center justify-center text-outline font-bold border-2 border-outline-variant">3</div>
<div className="bg-white/50 p-lg rounded-xl border border-dashed border-outline-variant flex-1 opacity-70">
<h3 className="font-h3 text-outline">Phase 3: May 07</h3>
<p className="text-outline mt-2 italic text-sm">Preparations in progress for 94 constituencies.</p>
</div>
</div>
</div>
</section>
{/*  Constituencies Map/Grid Section  */}
<section>
<h2 className="font-h2 text-h2 text-primary mb-lg">Constituencies</h2>
<div className="bg-primary-container rounded-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" data-alt="A stylized, clean vector map of India highlighting different voting districts with subtle shades of blue and orange. The background is a crisp off-white, and the map features glowing points representing major polling stations. The overall aesthetic is professional and informative, using a minimal corporate design language with clear boundaries and elegant data visualization overlays." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3RlZQbpvdM9wkaaE3LVLAsgLocZPA0aN10um-k8eOS5vOeDRBzc-hUAVDCpNl0tqE4Jl8PqnVryOz3zWbLvK6lzm6wAmT5qI1FhKRwkZ-F_590hiEw2chu-VW52kgIyDDLRi3QARCiVNJiQrMgfCb4M2lU9goZvhAXdcOajyVq8er59nbGOYjrjSNTG5soCmhtcYgB7xSnnLpyytLZ7AQ64ZtimHlGjW9UeIcoJ4vW6fYA9uChQecQRBAJA33E1FydMw9hvDFZ76M"/>
<div className="relative z-10 text-center p-xl">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-on-primary mb-4">
<span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
<span className="font-label-caps">Total: 543 Constituencies</span>
</div>
<h3 className="font-h1 text-white mb-lg">Explore Your District</h3>
<div className="max-w-md mx-auto">
<div className="relative">
<input className="w-full pl-12 pr-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-secondary text-on-surface" placeholder="Search by Pincode or City..." type="text"/>
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
</div>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Results & Info  */}
<div className="lg:col-span-4 flex flex-col gap-xl">
{/*  Party-wise Breakdown  */}
<section className="bg-white p-lg rounded-2xl card-elevation border border-surface-container">
<h3 className="font-h3 text-primary mb-lg">Seat Distribution</h3>
<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="font-bold text-primary">NDA Alliance</span>
<span className="text-h3 font-h3">300+ <span className="text-sm font-normal text-outline">proj.</span></span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="font-bold text-primary">I.N.D.I.A Alliance</span>
<span className="text-h3 font-h3">180+ <span className="text-sm font-normal text-outline">proj.</span></span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="font-bold text-primary">Others</span>
<span className="text-h3 font-h3">63 <span className="text-sm font-normal text-outline">proj.</span></span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-outline rounded-full" style={{width: '15%'}}></div>
</div>
</div>
</div>
<p className="mt-8 text-xs text-outline italic text-center">Data based on latest verified EC reports and exit polls.</p>
</section>
{/*  Process CTA Card  */}
<section className="bg-secondary-fixed text-on-secondary-fixed p-lg rounded-2xl relative overflow-hidden group">
<div className="relative z-10">
<h3 className="font-h3 mb-4">How does the counting work?</h3>
<p className="text-sm mb-lg opacity-80">Understand the complex process of tallying millions of votes through Electronic Voting Machines (EVMs).</p>
<button className="bg-on-secondary-fixed text-secondary-fixed px-6 py-3 rounded-lg font-button w-full active:scale-95 transition-all">
                            Learn Process
                        </button>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" data-icon="settings_accessibility">settings_accessibility</span>
</section>
{/*  Quick FAQ  */}
<section className="bg-surface-container-low p-lg rounded-2xl border border-surface-container">
<h3 className="font-h3 text-primary mb-md">Quick Guide</h3>
<div className="space-y-4">
<details className="group border-b border-surface-container-high pb-4">
<summary className="list-none flex justify-between items-center cursor-pointer font-medium text-primary">
                                What is Model Code of Conduct?
                                <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180" data-icon="expand_more">expand_more</span>
</summary>
<p className="mt-2 text-sm text-outline">Guidelines issued by the EC to regulate parties and candidates during elections.</p>
</details>
<details className="group border-b border-surface-container-high pb-4">
<summary className="list-none flex justify-between items-center cursor-pointer font-medium text-primary">
                                Can I vote without a Voter ID?
                                <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180" data-icon="expand_more">expand_more</span>
</summary>
<p className="mt-2 text-sm text-outline">Yes, if your name is in the roll, you can use 12 other prescribed photo IDs like Aadhaar or PAN.</p>
</details>
</div>
</section>
</div>
</div>

    </>
  );
}
