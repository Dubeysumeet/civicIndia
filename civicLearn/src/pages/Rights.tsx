import { Link } from 'react-router-dom';

export default function Rights() {
  return (
    <>
      
{/*  Hero Section  */}
<section className="mb-xl text-center md:text-left grid md:grid-cols-2 gap-lg items-center">
<div>
<span className="inline-block font-label-caps text-secondary uppercase tracking-widest mb-md">Empowerment Series</span>
<h1 className="font-h1 text-h1 text-primary mb-md leading-tight">Your Rights as a Voter</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-lg">
                    The Indian Constitution guarantees fundamental electoral rights to every citizen. Understanding these protections is the first step toward active participation in our democracy.
                </p>
<div className="flex flex-wrap gap-md justify-center md:justify-start">
<button className="saffron-button bg-secondary text-on-tertiary px-8 py-4 rounded-xl font-button transition-all">
                        Check Elections
                    </button>
<button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-button hover:bg-primary/5 transition-colors">
                        Download Rights Guide
                    </button>
</div>
</div>
<div className="relative">
<div className="aspect-video rounded-3xl overflow-hidden voter-card-shadow">
<img alt="Voter Rights" className="w-full h-full object-cover" data-alt="A detailed digital illustration showcasing a diverse group of Indian citizens standing proudly before a modern, glass-walled polling station. The scene is bathed in warm, golden hour sunlight, creating a hopeful and authoritative atmosphere. The visual style is clean and corporate-minimalist, using a palette of deep blues and vibrant oranges. Every individual displays a confident expression, symbolizing the empowerment and clarity provided by civic education." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg2t_9KNlvhEa6kT1F0OBP0WzDUtG-v-jR60j6GIAor7gVNGzlPKBEJweqXh_cQRC_V1SJWymYWLZ9VxsuPXy6toEvzxRf2TrdHOwrHrhLvQw6Ax4dnAUiGsB7PXQqK6u5CyAWRchxvJcNQJO7pp5xCGEjKLEoUr8qY9t-Ig8vs5JZ6aip72PPfRl7fmh5rfqKsOAHlmMJAu5oS-5NTgTfYUoLEHG-IMRm9ldrBj-CPw4y7Uv1S-iEQIlhrUuXict1i5l4N5z_pH40"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block max-w-[200px]">
<div className="flex items-center gap-xs text-secondary mb-xs">
<span className="material-symbols-outlined" style={{fontVariationSettings: `"'FILL' 1"`}}>verified</span>
<span className="font-label-caps">Verified Information</span>
</div>
<p className="text-[12px] font-medium leading-tight text-on-surface-variant">Based on Election Commission of India guidelines 2024.</p>
</div>
</div>
</section>
{/*  Rights Bento Grid  */}
<section className="mb-xl">
<h2 className="font-h2 text-h2 text-primary mb-xl text-center">Core Constitutional Rights</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Right to Vote  */}
<div className="md:col-span-8 bg-white p-lg rounded-3xl border border-slate-50 voter-card-shadow transition-all group">
<div className="flex flex-col md:flex-row gap-lg items-start">
<div className="w-16 h-16 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary-container shrink-0">
<span className="material-symbols-outlined text-[32px]">how_to_reg</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-primary mb-sm">Right to Vote</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">
                                Every citizen of India above 18 years of age, regardless of caste, religion, or gender, has the right to vote. This is the cornerstone of our Universal Adult Suffrage system.
                            </p>
<div className="flex flex-wrap gap-sm">
<span className="px-3 py-1 bg-surface-container rounded-full text-[12px] font-semibold text-primary">Article 326</span>
<span className="px-3 py-1 bg-surface-container rounded-full text-[12px] font-semibold text-primary">Non-Discriminatory</span>
</div>
</div>
</div>
</div>
{/*  NOTA  */}
<div className="md:col-span-4 bg-white p-lg rounded-3xl border border-slate-50 voter-card-shadow transition-all flex flex-col justify-between">
<div>
<div className="w-16 h-16 rounded-2xl bg-error-container flex items-center justify-center text-error mb-lg">
<span className="material-symbols-outlined text-[32px]">block</span>
</div>
<h3 className="font-h3 text-h3 text-primary mb-sm">NOTA</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            'None of the Above' allows you to express your dissatisfaction with all contesting candidates while still participating in the process.
                        </p>
</div>
<div className="mt-lg pt-md border-t border-slate-100 flex justify-between items-center">
<span className="font-label-caps text-secondary">Right to Reject</span>
<span className="material-symbols-outlined text-secondary">arrow_forward</span>
</div>
</div>
{/*  Secret Ballot  */}
<div className="md:col-span-4 bg-white p-lg rounded-3xl border border-slate-50 voter-card-shadow transition-all flex flex-col">
<div className="w-16 h-16 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary mb-lg">
<span className="material-symbols-outlined text-[32px]">lock</span>
</div>
<h3 className="font-h3 text-h3 text-primary mb-sm">Secret Ballot</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">
                        Your vote is your business. No one, including election officials, can force you to disclose who you voted for.
                    </p>
<ul className="mt-auto space-y-2">
<li className="flex items-center gap-xs text-[14px] text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                            Privacy Protections
                        </li>
<li className="flex items-center gap-xs text-[14px] text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                            EVM/VVPAT Security
                        </li>
</ul>
</div>
{/*  Process Timeline Section  */}
<div className="md:col-span-8 bg-primary-container p-lg rounded-3xl text-on-tertiary shadow-xl relative overflow-hidden">
<div className="relative z-10 h-full flex flex-col">
<h3 className="font-h3 text-h3 text-on-primary-container mb-lg">Why Your Vote Matters</h3>
<p className="font-body-lg text-body-lg text-on-primary-container/80 mb-xl max-w-lg">
                            Democracy is not a spectator sport. Every single ballot is a brick in the foundation of the nation's future policies and leadership.
                        </p>
{/*  Mini Timeline  */}
<div className="mt-auto">
<div className="flex items-center gap-0 w-full mb-md">
<div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white shrink-0 z-20">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: `"'FILL' 1"`}}>check</span>
</div>
<div className="h-1 flex-grow bg-secondary"></div>
<div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white shrink-0 z-20">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: `"'FILL' 1"`}}>check</span>
</div>
<div className="h-1 flex-grow border-t-2 border-dashed border-on-primary-container/30"></div>
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center border-2 border-on-primary-container shrink-0 z-20">
<span className="text-[10px] font-bold">YOU</span>
</div>
</div>
<div className="flex justify-between text-[12px] font-bold text-on-primary-container/60 uppercase tracking-tighter">
<span>Awareness</span>
<span>Registration</span>
<span>Impact</span>
</div>
</div>
</div>
{/*  Abstract Background Pattern  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-24 -mt-24"></div>
<div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-12 -mb-12"></div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="bg-slate-50 rounded-[40px] p-xl text-center border border-slate-100 mb-xl">
<h2 className="font-h2 text-h2 text-primary mb-md">Ready to Exercise Your Rights?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
                Knowing your rights is the first step. The next is taking action. Check the upcoming election schedule in your constituency.
            </p>
<div className="flex flex-col sm:flex-row gap-lg justify-center">
<Link className="saffron-button bg-secondary text-on-tertiary px-12 py-5 rounded-2xl font-button text-lg flex items-center justify-center gap-md" to="#">
                    Check Upcoming Elections
                    <span className="material-symbols-outlined">event_note</span>
</Link>
<Link className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-2xl font-button text-lg flex items-center justify-center gap-md hover:bg-slate-50 transition-colors" to="#">
                    Find My Polling Station
                    <span className="material-symbols-outlined">location_on</span>
</Link>
</div>
</section>

    </>
  );
}
