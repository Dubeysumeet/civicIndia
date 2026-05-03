import { Link } from 'react-router-dom';

export default function Home() {
  const impactStories = [
    {
      stat: "53",
      unit: "Votes",
      description: "In 2019, one Lok Sabha seat was won by just 53 votes. Your vote could be the deciding one.",
      icon: "how_to_vote"
    },
    {
      stat: "67.4",
      unit: "%",
      description: "2019 saw the highest voter turnout in Indian history. Be part of history.",
      icon: "trending_up"
    },
    {
      stat: "5",
      unit: "Years",
      description: "One vote today shapes national policy for the next 5 years for 1.4 billion people.",
      icon: "calendar_month"
    }
  ];

  const democraticValues = [
    {
      title: "Universal Suffrage",
      description: "Every citizen 18+ can vote regardless of caste, religion, gender, or wealth",
      icon: "groups"
    },
    {
      title: "Secret Ballot",
      description: "Your vote is private - no one can force you to reveal your choice",
      icon: "lock"
    },
    {
      title: "One Person One Vote",
      description: "Rich or poor, every citizen has equal voting power",
      icon: "balance"
    },
    {
      title: "Regular Elections",
      description: "Elections happen every 5 years ensuring accountability",
      icon: "event_repeat"
    }
  ];

  const learningJourney = [
    {
      step: 1,
      title: "Learn",
      description: "Understand elections, history & constitution",
      icon: "school",
      link: "/learn"
    },
    {
      step: 2,
      title: "Process",
      description: "Know exactly how to vote step-by-step",
      icon: "route",
      link: "/process"
    },
    {
      step: 3,
      title: "Test & Certify",
      description: "Prove your knowledge, earn certificate",
      icon: "workspace_premium",
      link: "/quiz"
    }
  ];

  const quickFacts = [
    "India conducted its first election in 1951-52 with 173 million voters - most voting for the first time ever",
    "The Election Commission of India manages the world's largest democratic exercise",
    "India has over 1 million polling stations to ensure every citizen can vote",
    "EVMs were first used in 1982 and eliminated invalid votes completely",
    "In 2024, 969 million voters were registered - more than the population of Europe"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-container py-24 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">World's Largest Democracy</span>
              </div>

              <h1 className="font-h1 text-5xl md:text-6xl lg:text-7xl leading-tight">
                One Vote.<br/>
                <span className="text-secondary">One Voice.</span><br/>
                One Nation.
              </h1>

              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                In the world's largest democracy, YOUR single vote has the power to shape the future of <span className="text-secondary font-bold">1.4 billion</span> people.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/learn"
                  className="bg-secondary text-white px-8 py-4 rounded-xl font-button text-lg shadow-[0_5px_0_0_#7a3400] active:translate-y-[2px] active:shadow-[0_3px_0_0_#7a3400] transition-all hover:bg-orange-600 flex items-center gap-2"
                >
                  Start Learning
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  to="/quiz"
                  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-button text-lg hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  Test Your Knowledge
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="flex justify-center">
              <div className="bg-white p-10 rounded-3xl shadow-2xl text-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
                <span className="material-symbols-outlined text-[80px] text-primary/10 absolute -bottom-4 -right-4 rotate-12 group-hover:rotate-0 transition-transform duration-700">groups</span>

                <p className="text-sm font-label-caps tracking-widest text-slate-500 uppercase mb-4 relative z-10">Total Registered Voters</p>
                <div className="flex items-baseline justify-center gap-2 relative z-10">
                  <span className="font-h1 text-7xl font-black text-primary leading-none tracking-tighter">969</span>
                  <span className="font-h2 text-2xl text-secondary">Million</span>
                </div>
                <p className="font-body-md text-slate-500 mt-6 relative z-10">The world's largest democratic exercise awaits your voice.</p>

                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-center gap-8">
                  <div className="text-center">
                    <p className="font-h3 text-2xl text-primary">543</p>
                    <p className="text-xs text-slate-400">Lok Sabha Seats</p>
                  </div>
                  <div className="text-center">
                    <p className="font-h3 text-2xl text-primary">28</p>
                    <p className="text-xs text-slate-400">States</p>
                  </div>
                  <div className="text-center">
                    <p className="font-h3 text-2xl text-primary">1M+</p>
                    <p className="text-xs text-slate-400">Polling Booths</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Vote Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps tracking-widest">THE IMPACT</span>
            <h2 className="font-h1 text-4xl md:text-5xl text-primary mt-4">Why Your Vote Matters</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
              Every vote counts. Here's proof that your single ballot can change history.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{story.icon}</span>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-h1 text-5xl text-primary">{story.stat}</span>
                  <span className="font-h3 text-xl text-secondary">{story.unit}</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Democracy */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-label-caps tracking-widest">UNDERSTAND</span>
              <h2 className="font-h1 text-4xl md:text-5xl text-primary mt-4 mb-6">What is Democracy?</h2>

              <div className="bg-white p-8 rounded-2xl border-l-4 border-secondary mb-8">
                <p className="text-xl text-on-surface leading-relaxed italic">
                  "Democracy means <span className="text-primary font-bold">'rule by the people'</span>. In India, we practice Representative Democracy - we elect leaders who make decisions on our behalf."
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">You Vote</h4>
                    <p className="text-on-surface-variant">Citizens elect representatives through voting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">They Represent</h4>
                    <p className="text-on-surface-variant">Elected leaders create laws and policies on your behalf</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">You Hold Accountable</h4>
                    <p className="text-on-surface-variant">If they fail, you can vote them out in the next election</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <p className="font-bold text-primary">Citizens</p>

                <div className="w-0.5 h-8 bg-secondary"></div>
                <span className="material-symbols-outlined text-secondary text-2xl">arrow_downward</span>
                <p className="text-sm text-slate-500 bg-secondary/10 px-4 py-1 rounded-full">VOTE</p>

                <div className="w-0.5 h-8 bg-secondary"></div>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">account_balance</span>
                </div>
                <p className="font-bold text-primary">Representatives</p>

                <div className="w-0.5 h-8 bg-primary"></div>
                <span className="material-symbols-outlined text-primary text-2xl">arrow_downward</span>
                <p className="text-sm text-slate-500 bg-primary/10 px-4 py-1 rounded-full">CREATE LAWS</p>

                <div className="w-0.5 h-8 bg-primary"></div>
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">gavel</span>
                </div>
                <p className="font-bold text-primary">Policies & Laws</p>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <span className="material-symbols-outlined text-xs">sync</span>
                  Cycle repeats every 5 years
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Democratic Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps tracking-widest">FOUNDATION</span>
            <h2 className="font-h1 text-4xl md:text-5xl text-primary mt-4">India's Democratic Values</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
              These principles ensure every Indian has an equal voice in governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {democraticValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-2xl text-white group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                </div>
                <h3 className="font-h3 text-xl mb-2">{value.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps tracking-widest">YOUR PATH</span>
            <h2 className="font-h1 text-4xl md:text-5xl text-primary mt-4">Your Learning Journey</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
              Become an informed voter in 3 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>

            {learningJourney.map((step, index) => (
              <Link
                key={index}
                to={step.link}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-secondary transition-colors">
                  {step.step}
                </div>
                <div className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-primary">{step.icon}</span>
                  </div>
                  <h3 className="font-h2 text-2xl text-primary mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant">{step.description}</p>
                  <div className="mt-4 flex items-center justify-center gap-1 text-secondary font-button group-hover:gap-2 transition-all">
                    Start Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary font-label-caps tracking-widest">DID YOU KNOW?</span>
            <h2 className="font-h1 text-4xl md:text-5xl mt-4">Quick Facts</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickFacts.map((fact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-sm text-white">lightbulb</span>
                  </div>
                  <p className="text-white/90 leading-relaxed">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-secondary via-orange-500 to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-h1 text-4xl md:text-5xl mb-6">
            Ready to become an informed voter?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Learn about elections, understand the process, and earn your <span className="font-bold">Civic Champion</span> certificate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/learn"
              className="bg-white text-secondary px-10 py-4 rounded-xl font-button text-lg shadow-lg hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined">school</span>
              Start Learning
            </Link>
            <Link
              to="/quiz"
              className="bg-primary text-white px-10 py-4 rounded-xl font-button text-lg shadow-lg hover:bg-primary-container transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined">quiz</span>
              Already Know? Test Yourself
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">timer</span>
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">workspace_premium</span>
              <span>Earn Certificate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">verified</span>
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
