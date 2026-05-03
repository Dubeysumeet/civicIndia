import { Link } from 'react-router-dom';

export default function TypeDetail() {
  return (
    <>
      

{/*  Hero Section  */}

{/*  Overview & Stats (Bento Style)  */}
<section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Overview Card  */}
<div className="md:col-span-2 bg-white p-8 rounded-xl custom-shadow border border-slate-50">
<h3 className="font-h3 text-h3 text-primary mb-4">Overview</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          The Lok Sabha (House of the People) is the primary legislative body of India. Members are elected through universal adult suffrage and a first-past-the-post system to represent their respective constituencies. The party or coalition that secures the majority in this house forms the Central Government.
        </p>
</div>
{/*  Term Duration Card  */}
<div className="bg-secondary-container p-8 rounded-xl text-white flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-[48px] mb-4" style={{fontVariationSettings: `"'FILL' 1"`}}>timer</span>
<h3 className="font-h3 text-h3 mb-2">Term Duration</h3>
<p className="font-body-md opacity-90">Elections are held every</p>
</div>
<div className="text-[64px] font-h1 font-black leading-none">5 Years</div>
</div>
</div>
</section>
{/*  Core Details: Who Votes & Who Gets Elected  */}
<section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
{/*  Who Votes  */}
<div className="bg-white p-10 rounded-xl custom-shadow border border-slate-50 flex flex-col gap-6">
<div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[32px]">groups</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-primary mb-4">Who Votes?</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Every Indian citizen aged 18 years or above on the qualifying date.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Must be registered in the electoral roll of their constituency.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">No person is disqualified due to religion, race, caste, or sex.</span>
</li>
</ul>
</div>
</div>
{/*  Who Gets Elected  */}
<div className="bg-white p-10 rounded-xl custom-shadow border border-slate-50 flex flex-col gap-6">
<div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[32px]">person_check</span>
</div>
<div>
<h3 className="font-h3 text-h3 text-primary mb-4">Who Gets Elected?</h3>
<p className="font-body-md text-on-surface-variant mb-4">Members of Parliament (MPs) representing 543 constituencies across India.</p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-surface-container rounded-lg">
<div className="text-h3 font-h1 text-primary">543</div>
<div className="text-label-caps text-on-surface-variant uppercase">Total Seats</div>
</div>
<div className="p-4 bg-surface-container rounded-lg">
<div className="text-h3 font-h1 text-primary">25+</div>
<div className="text-label-caps text-on-surface-variant uppercase">Age Requirement</div>
</div>
</div>
</div>
</div>
</section>
{/*  How It Works Summary (Timeline)  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-h2 text-h2 text-primary mb-4">How It Works</h2>
<p className="font-body-md text-on-surface-variant">The step-by-step journey of the General Election</p>
</div>
<div className="relative space-y-12">
{/*  Vertical Line  */}
<div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-primary/10 -z-10"></div>
{/*  Step 1  */}
<div className="flex gap-8 items-start">
<div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white shadow-lg">
<span className="material-symbols-outlined">campaign</span>
</div>
<div className="pt-2">
<h4 className="font-h3 text-xl text-primary mb-2">Notification &amp; Nominations</h4>
<p className="font-body-md text-on-surface-variant">The President issues a notification, and candidates file their nominations in their respective constituencies.</p>
</div>
</div>
{/*  Step 2  */}
<div className="flex gap-8 items-start">
<div className="w-14 h-14 rounded-full bg-white border-2 border-primary flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined">how_to_vote</span>
</div>
<div className="pt-2">
<h4 className="font-h3 text-xl text-primary mb-2">Polling Day</h4>
<p className="font-body-md text-on-surface-variant">Citizens head to polling stations to cast their vote using Electronic Voting Machines (EVMs) with VVPAT.</p>
</div>
</div>
{/*  Step 3  */}
<div className="flex gap-8 items-start">
<div className="w-14 h-14 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400">
<span className="material-symbols-outlined">analytics</span>
</div>
<div className="pt-2">
<h4 className="font-h3 text-xl text-primary mb-2">Counting &amp; Results</h4>
<p className="font-body-md text-on-surface-variant">Votes are counted under strict supervision, and the candidate with the most votes in each constituency is declared the winner.</p>
</div>
</div>
</div>
{/*  CTA  */}
<div className="mt-20 text-center">
<button className="saffron-button px-10 py-5 rounded-xl text-white font-button text-lg flex items-center gap-3 mx-auto">
          View Full Process
          <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</section>
{/*  Footer  */}


    </>
  );
}
