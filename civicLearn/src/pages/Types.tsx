import { Link } from 'react-router-dom';

export default function Types() {
  return (
    <>
      
{/*  Hero Section  */}
<div className="mb-xl text-center md:text-left max-w-3xl">
<h1 className="font-h1 text-h1 text-primary-container mb-md">Types of Elections in India</h1>
<p className="font-body-lg text-body-lg text-outline">
                India's democratic architecture is built on multiple layers of representation. Understand how the world's largest democracy votes at the national, state, and local levels.
            </p>
</div>
{/*  Card Grid (Asymmetric Layout)  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-start">
{/*  Lok Sabha - Featured Large Card  */}
<div className="md:col-span-8 bg-surface-container-lowest p-lg rounded-xl edu-card-shadow edu-card-hover transition-all duration-300 border border-surface-variant/20 flex flex-col md:flex-row gap-lg">
<div className="md:w-1/2">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-md">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<h3 className="font-h3 text-h3 text-primary-container mb-sm">Lok Sabha (General Elections)</h3>
<p className="font-body-md text-body-md text-outline mb-lg">
                        Conducted every five years to elect the Lower House of Parliament. These elections determine the Prime Minister and the central government of India.
                    </p>
<Link to="/types/lok-sabha" className="bg-secondary text-white px-6 py-3 rounded-xl font-button inline-flex items-center gap-2 hover:bg-orange-700 transition-colors">
                        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
<div className="md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden bg-surface-container">
<img alt="Indian Parliament" className="w-full h-full object-cover" data-alt="A high-angle architectural photography shot of the Indian Parliament building at dusk. The majestic circular structure is bathed in warm golden light against a deep navy blue sky, reflecting a sense of authority and historical weight. The minimalist composition emphasizes the grand columns and the scale of the democratic institution, maintaining a clean and professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ism694EP9y-9QBi9cLShZ9ZzuI7U_h3Ivgu7tFcTr6bgh3zcy0bMe63Sd_6PArvWqdhVHKqp2CvX7isl4FzIQQRC7bBc0oHdD0B9kKfMWgrSQJfvTrH0TI_1tPalE2prpDWOBehtQnSpxeCv0rEHPrr09QIjHxtxWuTcHo7A66nHNcyNDvpSlcxvy4O5HIJiiuGHQgtvtCmKA_DeWQ_TW9tULoFDJT6aNmVdb3SunKc_9IM23MN6z6xoTf2Nvi8uKsAQj6-yHf3t"/>
</div>
</div>
{/*  Vidhan Sabha - Vertical Card  */}
<div className="md:col-span-4 bg-surface-container-lowest p-lg rounded-xl edu-card-shadow edu-card-hover transition-all duration-300 border border-surface-variant/20 flex flex-col">
<div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-md">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
</div>
<h3 className="font-h3 text-h3 text-primary-container mb-sm">Vidhan Sabha</h3>
<p className="font-body-md text-body-md text-outline mb-lg flex-grow">
                    State Legislative Assembly elections that decide the Chief Minister and state-level policy administration across 28 states and 8 union territories.
                </p>
<div className="mt-auto">
<Link className="text-primary font-button flex items-center gap-sm hover:underline decoration-2 underline-offset-4" to="#">
                        View State Hub <span className="material-symbols-outlined text-sm">open_in_new</span>
</Link>
</div>
</div>
{/*  Presidential - Horizontal Card  */}
<div className="md:col-span-6 bg-surface-container-lowest p-lg rounded-xl edu-card-shadow edu-card-hover transition-all duration-300 border border-surface-variant/20 flex flex-col md:flex-row gap-md items-center">
<div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden">
<img alt="Constitutional Seal" className="w-full h-full object-cover" data-alt="A macro studio photograph of an official wax seal and legal document representing constitutional authority. The lighting is soft and cinematic, highlighting the intricate details of the emblem. The color palette is dominated by professional navy blues and cream tones, evoking a sense of solemnity, tradition, and formal democratic procedures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkONWoiTJ_iBe34rYlsLoZSOKuDGLB_lbuyEaWv4PnAMLH6bOXoJvCufDay1-5eaJDw1ToBolfraXKIGLhcjvMl6eKhsngu9W2n99_t5vgkYeZhPYOY53_zk31JrhJSETpYnIByehRVm2q8txOjOjGcUY5jz9Tz2EFwQ5k8w7EDl2NeH1FsQ2vVn_5GL8Vzql1sTuga4A81CaXOXQmJ1qsRhRPyxcB0SzyWHa_Dwg2iHTWN1kP-KYezZvfMUQ6W0cq_iQi17c-MyMy"/>
</div>
<div className="md:w-2/3">
<h3 className="font-h3 text-h3 text-primary-container mb-sm">Presidential Elections</h3>
<p className="font-body-md text-body-md text-outline mb-md">
                        The President of India is elected indirectly by an electoral college consisting of elected members of both houses of Parliament and state assemblies.
                    </p>
<Link className="text-secondary font-button inline-flex items-center gap-xs" to="#">
                        How it works <span className="material-symbols-outlined text-sm">info</span>
</Link>
</div>
</div>
{/*  Local Bodies - Square Detail Card  */}
<div className="md:col-span-6 bg-surface-container-lowest p-lg rounded-xl edu-card-shadow edu-card-hover transition-all duration-300 border border-surface-variant/20">
<div className="flex items-start justify-between mb-md">
<div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
</div>
<span className="bg-on-tertiary-container text-on-tertiary px-sm py-xs rounded-full text-[10px] font-bold uppercase tracking-widest">Ground Level</span>
</div>
<h3 className="font-h3 text-h3 text-primary-container mb-sm">Local Body Elections</h3>
<p className="font-body-md text-body-md text-outline mb-lg">
                    Focuses on Panchayats in rural areas and Municipalities in urban areas. This is where governance directly touches your daily community life.
                </p>
<div className="grid grid-cols-2 gap-sm">
<div className="p-sm bg-surface-container-low rounded-lg text-center">
<p className="text-xs font-bold text-primary mb-xs">MUNICIPAL</p>
<p className="text-xs text-outline">Urban Governance</p>
</div>
<div className="p-sm bg-surface-container-low rounded-lg text-center">
<p className="text-xs font-bold text-secondary mb-xs">PANCHAYAT</p>
<p className="text-xs text-outline">Rural Councils</p>
</div>
</div>
</div>
</div>
{/*  Comparison Section  */}
<section className="mt-xl pt-xl border-t border-surface-container-high">
<h2 className="font-h2 text-h2 text-primary-container mb-lg">Election Timeline Cycle</h2>
<div className="relative py-md">
<div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-lg relative z-10">
<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-md ring-4 ring-white">
<span className="material-symbols-outlined text-sm">how_to_vote</span>
</div>
<h4 className="font-button text-on-surface mb-xs">Voter Enrollment</h4>
<p className="text-xs text-outline px-sm">Ongoing process managed by the ECI</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-md ring-4 ring-white">
<span className="material-symbols-outlined text-sm">campaign</span>
</div>
<h4 className="font-button text-on-surface mb-xs">Nomination</h4>
<p className="text-xs text-outline px-sm">Candidates file their legal papers</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center mb-md ring-4 ring-white">
<span className="material-symbols-outlined text-sm">touch_app</span>
</div>
<h4 className="font-button text-on-surface mb-xs">Polling Day</h4>
<p className="text-xs text-outline px-sm">Citizens cast their secret ballots</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-outline flex items-center justify-center mb-md ring-4 ring-white">
<span className="material-symbols-outlined text-sm">equalizer</span>
</div>
<h4 className="font-button text-on-surface mb-xs">Counting &amp; Results</h4>
<p className="text-xs text-outline px-sm">EVM counting and official declaration</p>
</div>
</div>
</div>
</section>

    </>
  );
}
