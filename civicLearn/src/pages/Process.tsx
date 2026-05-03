
export default function Process() {
  return (
    <>
      
{/*  Header Section  */}
<header className="mb-xl text-center">
<span className="font-label-caps text-secondary tracking-widest mb-md block">EDUCATIONAL JOURNEY</span>
<h1 className="font-h1 text-h1 text-primary mb-md">How Elections Work in India</h1>
<p className="font-body-lg text-body-lg text-outline max-w-2xl mx-auto">
                Explore the massive organizational feat of the world's largest democracy through our interactive step-by-step guide.
            </p>
</header>
{/*  Visual Flow Diagram (High-Level)  */}
<section className="mb-xl">
<div className="bg-white rounded-xl p-lg shadow-[0px_10px_30px_rgba(30,58,138,0.04)] border border-surface-container overflow-x-auto">
<div className="flex items-center justify-between min-w-[800px] px-md">
{/*  Flow Node 1  */}
<div className="flex flex-col items-center gap-sm group">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary border-2 border-primary">
<span className="material-symbols-outlined" data-icon="campaign">campaign</span>
</div>
<span className="font-label-caps text-primary">Announcement</span>
</div>
{/*  Connector  */}
<div className="flex-grow h-0.5 bg-primary mx-xs relative">
<div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary"></div>
</div>
{/*  Flow Node 2  */}
<div className="flex flex-col items-center gap-sm">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary border-2 border-primary">
<span className="material-symbols-outlined" data-icon="description">description</span>
</div>
<span className="font-label-caps text-primary">Nomination</span>
</div>
{/*  Connector  */}
<div className="flex-grow h-0.5 bg-primary mx-xs relative">
<div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary"></div>
</div>
{/*  Flow Node 3  */}
<div className="flex flex-col items-center gap-sm">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary border-2 border-primary">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
</div>
<span className="font-label-caps text-primary">Campaign</span>
</div>
{/*  Connector (Dashed for current)  */}
<div className="flex-grow h-0.5 border-t-2 border-dashed border-primary mx-xs relative">
<div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary"></div>
</div>
{/*  Flow Node 4  */}
<div className="flex flex-col items-center gap-sm">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline border-2 border-outline-variant">
<span className="material-symbols-outlined" data-icon="how_to_vote">how_to_vote</span>
</div>
<span className="font-label-caps text-outline">Voting</span>
</div>
{/*  Connector  */}
<div className="flex-grow h-0.5 border-t-2 border-dashed border-outline-variant mx-xs relative">
<div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-outline-variant"></div>
</div>
{/*  Flow Node 5  */}
<div className="flex flex-col items-center gap-sm">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline border-2 border-outline-variant">
<span className="material-symbols-outlined" data-icon="count">numbers</span>
</div>
<span className="font-label-caps text-outline">Counting</span>
</div>
</div>
</div>
</section>
{/*  Bento Grid / Interactive Steps Panel  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Left: Timeline Navigation  */}
<div className="lg:col-span-4 space-y-md">
<div className="bg-white p-6 rounded-xl border border-surface-container-high step-active transition-all">
<div className="flex gap-md">
<div className="text-primary font-h3">01</div>
<div>
<h3 className="font-h3 text-h3 text-primary mb-xs">Announcement</h3>
<p className="text-on-surface-variant text-sm">The Election Commission issues the Model Code of Conduct.</p>
</div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<div className="flex gap-md">
<div className="text-outline font-h3">02</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-xs">Nomination</h3>
<p className="text-on-surface-variant text-sm">Candidates file their papers and disclose assets/records.</p>
</div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<div className="flex gap-md">
<div className="text-outline font-h3">03</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-xs">Campaigning</h3>
<p className="text-on-surface-variant text-sm">Parties release manifestos and hold public rallies.</p>
</div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<div className="flex gap-md">
<div className="text-outline font-h3">04</div>
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-xs">Voting (EVM)</h3>
<p className="text-on-surface-variant text-sm">Citizens cast their ballots using secure EVM machines.</p>
</div>
</div>
</div>
</div>
{/*  Right: Detail Panel (Visual Focus)  */}
<div className="lg:col-span-8">
<div className="bg-white rounded-xl shadow-[0px_10px_30px_rgba(30,58,138,0.04)] border border-surface-container p-lg min-h-[500px] flex flex-col">
<div className="flex items-center justify-between mb-lg">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-4xl text-secondary" data-icon="settings_input_component">settings_input_component</span>
<h2 className="font-h2 text-h2 text-primary">Stage 04: Voting (EVM Focus)</h2>
</div>
<span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full font-label-caps">In Progress</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg flex-grow">
<div className="space-y-lg">
<div>
<h4 className="font-h3 text-body-lg font-bold text-primary mb-sm">The EVM &amp; VVPAT System</h4>
<p className="text-body-md text-on-surface-variant">
                                    India uses Electronic Voting Machines (EVMs) connected to Voter Verifiable Paper Audit Trail (VVPAT) units. This ensures every vote is recorded electronically and verifiable via a physical slip.
                                </p>
</div>
<ul className="space-y-md">
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" data-weight="fill">check_circle</span>
<span className="text-body-md">Tamper-proof stand-alone units (not connected to internet).</span>
</li>
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" data-weight="fill">check_circle</span>
<span className="text-body-md">VVPAT displays a paper slip for 7 seconds to the voter.</span>
</li>
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" data-weight="fill">check_circle</span>
<span className="text-body-md">Two-stage randomization for machine allocation.</span>
</li>
</ul>
</div>
<div className="rounded-xl overflow-hidden relative group">
<img alt="EVM Voting Process" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A detailed, modern close-up shot of an Indian Electronic Voting Machine (EVM) in a well-lit, professional setting. The image uses a soft focus background to emphasize the interface of the machine, which is colored in a clean, industrial blue and white. The lighting is high-key and bright, creating a clean light-mode aesthetic that feels authoritative and secure. The overall mood is one of democratic precision and modern technological reliability, with subtle accents of saffron and green appearing in the background to reflect the Indian national colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr118HFitwDydi238CXcNm5tERHWl7IGfCgc06a01_k8NvWHkV9v0frFnWqxYg0OJgdKTxsVYty3OvDxjp7XqabNURjfDScfOWLunJfNq-la-bVn-zNnpiuHJFOIyRcEzA23Ul6xG_66Ho69YWl5Ycizt2X23EgwAS_fE9wsWsj7czOSDpu7JrWEfQTJ-ouFl0vHyResoCCKoEsA1_srPjOl9SWn64cC18N23o8CYD4PlmLXbyLL3Behu4E4tU1Fxd9y7icddWjgrI"/>
<div className="absolute bottom-0 left-0 right-0 p-lg bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-sm font-medium">Inside a Model Polling Station: Secure voting booths ensure complete privacy and security for every citizen.</p>
</div>
</div>
</div>
<div className="mt-xl flex items-center justify-between border-t pt-lg border-surface-container">
<div className="flex gap-md">
<button className="flex items-center gap-xs font-button text-primary hover:bg-primary-fixed px-4 py-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                                Previous Step
                            </button>
<button className="flex items-center gap-xs font-button text-primary hover:bg-primary-fixed px-4 py-2 rounded-lg transition-colors">
                                Next Step
                                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<button className="saffron-button bg-secondary text-white px-lg py-md rounded-lg font-button flex items-center gap-sm transition-all">
                            Take Progress Quiz
                            <span className="material-symbols-outlined" data-icon="quiz">quiz</span>
</button>
</div>
</div>
</div>
</div>
{/*  Call to Action / Assessment  */}
<section className="mt-xl bg-primary-container rounded-2xl p-xl text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-fixed-dim rounded-full blur-3xl"></div>
</div>
<div className="relative z-10">
<h2 className="font-h2 text-h2 text-white mb-md">Ready to test your knowledge?</h2>
<p className="text-on-primary-container text-body-lg max-w-xl mx-auto mb-lg">
                    Mastered the election process? Take our 5-minute interactive quiz to earn your 'Democracy Guardian' badge.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-md">
<button className="bg-secondary text-white font-button px-xl py-md rounded-lg saffron-button">
                        Start Final Quiz
                    </button>
<button className="bg-white/10 text-white border border-white/20 font-button px-xl py-md rounded-lg hover:bg-white/20 transition-colors">
                        Download Cheat Sheet (PDF)
                    </button>
</div>
</div>
</section>

    </>
  );
}
