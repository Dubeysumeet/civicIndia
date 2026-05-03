import { Link } from 'react-router-dom';

export default function Basics() {
  return (
    <>
      {/* Hero Section: What is an Election? */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-secondary-container font-label-caps tracking-widest uppercase">
            Chapter 01: The Core Foundation
          </span>
          <h1 className="font-h1 text-h1 text-primary leading-tight">What is an Election?</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            At its heart, an election is a collective decision-making process by which a population chooses an individual or multiple individuals to hold public office. In India, this is the mechanism that powers the world's largest democracy.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-primary">person</span>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-secondary">how_to_reg</span>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-green-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-green-700">check_circle</span>
              </div>
            </div>
            <span className="text-sm font-medium text-on-surface-variant">Join 2.4M+ learners understanding their vote</span>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              className="w-full h-full object-cover" 
              alt="Electoral ink on finger"
              src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 saffron-gradient rounded-2xl -z-10 opacity-20"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary rounded-full -z-10 opacity-5"></div>
        </div>
      </section>

      {/* Formal Definition Block */}
      <section className="mb-12">
        <div className="bg-primary-container rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
              <span className="material-symbols-outlined text-4xl">menu_book</span>
            </div>
            <div>
              <h2 className="font-h2 text-h2 mb-4">The Formal Definition</h2>
              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed italic">
                "An election is a formal group decision-making process by which a population chooses an individual or multiple individuals to hold public office. It is the vital bridge between the individual citizen and the state's power."
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">Representation</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">Sovereignty</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">Legitimacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Elections Matter */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="font-h2 text-h2 text-primary">Why Elections Matter</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mt-2">
            Beyond just casting a ballot, elections serve several critical functions in a modern republic.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl election-card-shadow border border-slate-50 transition-all flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-2xl">account_balance</span>
            </div>
            <h3 className="font-h3 text-h3 mb-3">Political Legitimacy</h3>
            <p className="text-on-surface-variant font-body-md flex-grow">
              Elections provide the legal right for a government to exist and exercise authority over the people.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl election-card-shadow border border-slate-50 transition-all flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-2xl">group</span>
            </div>
            <h3 className="font-h3 text-h3 mb-3">Public Participation</h3>
            <p className="text-on-surface-variant font-body-md flex-grow">
              They offer a structured way for ordinary citizens to engage in the governance of their nation.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl election-card-shadow border border-slate-50 transition-all flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
              <span className="material-symbols-outlined text-2xl">swap_horiz</span>
            </div>
            <h3 className="font-h3 text-h3 mb-3">Peaceful Transition</h3>
            <p className="text-on-surface-variant font-body-md flex-grow">
              They ensure that power changes hands without violence or conflict through the will of the majority.
            </p>
          </div>
        </div>
      </section>

      {/* Democracy Explained Section */}
      <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-50 rounded-[40px] p-8 lg:p-16">
        <div className="space-y-6">
          <h2 className="font-h2 text-h2 text-primary">Democracy Explained</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            India follows a **Representative Democracy**. This means we don't vote on every single law directly. Instead, we elect representatives who represent our interests in Parliament.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-xs">check</span>
              </div>
              <div>
                <span className="font-bold text-primary">Direct Input:</span>
                <p className="text-sm text-on-surface-variant">Citizens vote for local and national leaders.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-xs">check</span>
              </div>
              <div>
                <span className="font-bold text-primary">Representation:</span>
                <p className="text-sm text-on-surface-variant">Elected officials debate and create laws on your behalf.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-xs">check</span>
              </div>
              <div>
                <span className="font-bold text-primary">Accountability:</span>
                <p className="text-sm text-on-surface-variant">If they fail, they can be voted out in the next cycle.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img 
                className="w-full h-full object-cover" 
                alt="Democratic discussion"
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img 
                className="w-full h-full object-cover" 
                alt="Parliament"
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop"
              />
            </div>
            <div className="bg-secondary-container p-6 rounded-2xl text-white">
              <p className="text-3xl font-bold">1.4B+</p>
              <p className="text-sm opacity-90">People represented by the democratic system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role of Election Authority (ECI) */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto border-2 border-dashed border-slate-200 rounded-[32px] p-8 lg:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-4xl text-primary">shield_person</span>
            </div>
            <h2 className="font-h2 text-h2 text-primary mb-4">The Election Commission (ECI)</h2>
            <p className="text-on-surface-variant mb-10 text-lg">
              The guardian of Indian elections. It is a permanent, autonomous Constitutional Authority responsible for administering all the electoral processes in India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex gap-4 text-left p-4 bg-white rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
                <div>
                  <h4 className="font-bold text-primary">Impartiality</h4>
                  <p className="text-sm text-on-surface-variant">Functions independently of the ruling government to ensure fairness.</p>
                </div>
              </div>
              <div className="flex gap-4 text-left p-4 bg-white rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-secondary">gavel</span>
                <div>
                  <h4 className="font-bold text-primary">Rule of Law</h4>
                  <p className="text-sm text-on-surface-variant">Enforces the 'Model Code of Conduct' during election periods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mb-12 text-center">
        <div className="bg-slate-50 border border-slate-200 p-12 rounded-[40px] relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-label-caps text-secondary-container block mb-4">Module Complete</span>
            <h2 className="font-h1 text-h1 text-primary mb-6">Ready for the next step?</h2>
            <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
              Now that you know what an election is, let's explore the different types of elections that happen in India, from local Panchayats to the Lok Sabha.
            </p>
            <Link to="/types" className="bg-primary text-white px-10 py-4 rounded-2xl font-button shadow-[0px_4px_0px_#00164e] active:shadow-none active:translate-y-[2px] transition-all inline-flex items-center gap-2 mx-auto">
              Next: Explore Types
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
