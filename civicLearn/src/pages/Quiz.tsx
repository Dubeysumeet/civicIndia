
export default function Quiz() {
  return (
    <>
      
{/*  Header  */}
<header className="text-center mb-12">
<span className="font-label-caps text-label-caps text-secondary tracking-widest mb-2 block uppercase">Module 01: Fundamental Rights</span>
<h1 className="font-h1 text-h1 text-primary mb-4">Test Your Knowledge</h1>
<div className="flex items-center justify-center gap-2 text-outline">
<span className="material-symbols-outlined text-md">timer</span>
<span className="font-body-md text-sm">Estimated time: 5 minutes</span>
</div>
</header>
{/*  Progress Indicator  */}
<div className="w-full max-w-2xl mb-12">
<div className="flex justify-between items-end mb-4">
<span className="font-label-caps text-on-surface-variant">Question 4 of 10</span>
<span className="font-h3 text-h3 text-primary">40%</span>
</div>
<div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-tertiary-fixed-dim w-[40%] transition-all duration-500"></div>
</div>
</div>
{/*  Quiz Container  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
{/*  Left: Sidebar Summary  */}
<aside className="lg:col-span-3 space-y-6 order-2 lg:order-1">
<div className="bg-white rounded-xl p-6 shadow-[0px_10px_30px_rgba(30,58,138,0.04)] border border-surface-container-low">
<h3 className="font-h3 text-h3 text-primary mb-4 text-lg">Your Progress</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-600 font-bold" data-weight="fill">check_circle</span>
<span className="text-body-md text-on-surface">3 Correct</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-error font-bold" data-weight="fill">cancel</span>
<span className="text-body-md text-on-surface">0 Incorrect</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">pending</span>
<span className="text-body-md text-on-surface">7 Remaining</span>
</div>
</div>
</div>
<div className="rounded-xl overflow-hidden shadow-lg">
<div className="relative h-40">
<img className="w-full h-full object-cover" data-alt="A clean, minimalist 3D render of the Ashoka Chakra symbol reimagined in a contemporary glassmorphism style. The composition features soft, diffused lighting with highlights of deep blue and saffron against a crisp white studio background, evoking a sense of modern patriotic pride and educational clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWuIG1OYXkrfjtjxFNwgXHpz8NXpDtl8uz8TB9vQynBnvprHlHy_2BTEMhmtkav_W_w-T2eywbp6YFI8hKGMacWawoCBeilT0iUE5ctNHF9PgFQrUkOMnYC3BHMCZiLks1bl6NI6X8c2CDIRKUdCFOCLCbJCL_GcaI4rnCw5Sz1we-PNp2ReFk2i63XoEOGfR1WIUDIxWoLSXQfwoO_a3gD0ddLUgnlE3XMj8hpz4NkqvjVbnxTjySpgl868MI_TdLhkOD_lJx2Ifc"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
<p className="text-white text-sm font-medium">Keep it up! You're in the top 10% of learners today.</p>
</div>
</div>
</div>
</aside>
{/*  Center: Question Card  */}
<section className="lg:col-span-9 order-1 lg:order-2">
<div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0px_10px_40px_rgba(30,58,138,0.06)] border border-surface-container-low relative overflow-hidden">
{/*  Subtle background decoration  */}
<div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h2 className="font-h2 text-h2 text-on-surface mb-8">Which Article of the Indian Constitution ensures the Right to Constitutional Remedies?</h2>
{/*  Options List  */}
<div className="space-y-4 mb-10">
{/*  Inactive State  */}
<button className="w-full text-left p-6 rounded-xl border-2 border-surface-container hover:border-primary-container hover:bg-surface-container-low transition-all duration-200 group flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-outline group-hover:bg-primary-container group-hover:text-white transition-colors">A</span>
<span className="font-body-lg text-body-lg text-on-surface-variant">Article 14</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">radio_button_unchecked</span>
</button>
{/*  Correct State Example  */}
<button className="w-full text-left p-6 rounded-xl border-2 border-green-500 bg-green-50 flex items-center justify-between transition-all duration-200">
<div className="flex items-center gap-4">
<span className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">B</span>
<span className="font-body-lg text-body-lg text-on-surface">Article 32</span>
</div>
<div className="flex items-center gap-2 text-green-600">
<span className="font-label-caps">CORRECT</span>
<span className="material-symbols-outlined" data-weight="fill">check_circle</span>
</div>
</button>
{/*  Incorrect State Example  */}
<button className="w-full text-left p-6 rounded-xl border-2 border-error-container bg-error-container/20 flex items-center justify-between transition-all duration-200">
<div className="flex items-center gap-4">
<span className="w-10 h-10 rounded-full bg-error flex items-center justify-center font-bold text-white">C</span>
<span className="font-body-lg text-body-lg text-on-surface">Article 21</span>
</div>
<div className="flex items-center gap-2 text-error">
<span className="font-label-caps">INCORRECT</span>
<span className="material-symbols-outlined" data-weight="fill">cancel</span>
</div>
</button>
<button className="w-full text-left p-6 rounded-xl border-2 border-surface-container hover:border-primary-container hover:bg-surface-container-low transition-all duration-200 group flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-outline group-hover:bg-primary-container group-hover:text-white transition-colors">D</span>
<span className="font-body-lg text-body-lg text-on-surface-variant">Article 19</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">radio_button_unchecked</span>
</button>
</div>
{/*  Feedback Area (Only shows after answering)  */}
<div className="bg-surface-container-low rounded-xl p-6 mb-10 border-l-4 border-green-500">
<h4 className="font-h3 text-primary text-lg mb-2">Great Job!</h4>
<p className="text-on-surface-variant">Dr. B.R. Ambedkar called Article 32 the "Heart and Soul" of the Constitution because it allows citizens to move the Supreme Court for the enforcement of fundamental rights.</p>
</div>
{/*  Action Buttons  */}
<div className="flex flex-col sm:flex-row gap-4 justify-end">
<button className="px-8 py-4 rounded-xl border-2 border-primary text-primary font-button hover:bg-primary-container/5 transition-all active:scale-95">
                                Explain Further
                            </button>
<button className="px-10 py-4 bg-secondary text-white rounded-xl font-button saffron-button-shadow transition-all flex items-center justify-center gap-2">
<span>Next Question</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
</div>
{/*  End of Quiz Splash (Hidden by default, shown at the end)  */}
<div className="mt-20 w-full max-w-4xl bg-primary-container text-white rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20">
<span className="material-symbols-outlined text-[120px]">emoji_events</span>
</div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="font-h1 text-h1 mb-4">Mastery Achieved!</h2>
<p className="text-body-lg mb-8 max-w-lg">You've successfully completed the Fundamental Rights quiz with an 80% accuracy. Your understanding of democratic basics is growing stronger!</p>
<div className="flex gap-6 mb-12">
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[140px]">
<p className="font-label-caps opacity-80 mb-1">SCORE</p>
<p className="font-h2 text-h2">8/10</p>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[140px]">
<p className="font-label-caps opacity-80 mb-1">LEVEL</p>
<p className="font-h2 text-h2">Civic Pro</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-primary px-10 py-4 rounded-xl font-button shadow-xl hover:bg-surface-container-lowest transition-all active:scale-95">
                        Continue Learning
                    </button>
<button className="bg-transparent border-2 border-white/40 text-white px-10 py-4 rounded-xl font-button hover:bg-white/10 transition-all active:scale-95">
                        Share Achievement
                    </button>
</div>
</div>
</div>

    </>
  );
}
