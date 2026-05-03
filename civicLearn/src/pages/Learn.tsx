import { useState } from 'react';

type TabType = 'elections' | 'history' | 'constitution' | 'resources';

export default function Learn() {
  const [activeTab, setActiveTab] = useState<TabType>('elections');

  const tabs = [
    { id: 'elections' as TabType, label: 'Elections', icon: 'how_to_vote' },
    { id: 'history' as TabType, label: 'History', icon: 'history' },
    { id: 'constitution' as TabType, label: 'Constitution', icon: 'menu_book' },
    { id: 'resources' as TabType, label: 'Resources', icon: 'link' },
  ];

  const electionTypes = [
    {
      name: 'Lok Sabha',
      description: 'National Parliament (Lower House)',
      frequency: 'Every 5 years',
      voters: 'All citizens 18+',
      seats: '543 seats',
      icon: 'account_balance',
      color: 'primary'
    },
    {
      name: 'Vidhan Sabha',
      description: 'State Legislative Assembly',
      frequency: 'Every 5 years',
      voters: 'State residents 18+',
      seats: 'Varies by state',
      icon: 'domain',
      color: 'secondary'
    },
    {
      name: 'Rajya Sabha',
      description: 'Parliament (Upper House)',
      frequency: 'Every 2 years (1/3 members)',
      voters: 'Elected MLAs',
      seats: '245 seats',
      icon: 'corporate_fare',
      color: 'primary'
    },
    {
      name: 'Presidential',
      description: 'President of India',
      frequency: 'Every 5 years',
      voters: 'Electoral College (MPs + MLAs)',
      seats: '1 position',
      icon: 'shield_person',
      color: 'secondary'
    },
    {
      name: 'Local Body',
      description: 'Panchayat / Municipality',
      frequency: 'Every 5 years',
      voters: 'Local residents 18+',
      seats: 'Varies by locality',
      icon: 'location_city',
      color: 'primary'
    }
  ];

  const glossaryTerms = [
    { term: 'Constituency', meaning: 'Geographic area that elects one representative' },
    { term: 'Candidate', meaning: 'Person contesting the election' },
    { term: 'Manifesto', meaning: "Document outlining party's promises" },
    { term: 'EVM', meaning: 'Electronic Voting Machine' },
    { term: 'VVPAT', meaning: 'Paper slip that confirms your vote' },
    { term: 'NOTA', meaning: '"None of the Above" option' },
    { term: 'Model Code of Conduct', meaning: 'Rules parties must follow during elections' },
    { term: 'Electoral Roll', meaning: 'Official list of eligible voters' },
  ];

  const timelineEvents = [
    { year: '1950', title: 'Constitution Adopted', description: 'India becomes a Republic with universal adult suffrage on 26th January', icon: 'flag', highlight: true },
    { year: '1951-52', title: 'First General Election', description: '173 million voters, 68 phases, 4 months duration. Most voters were first-timers.', icon: 'celebration', highlight: true },
    { year: '1962', title: 'Indelible Ink Introduced', description: 'Silver nitrate-based ink to prevent duplicate voting becomes iconic symbol', icon: 'ink_pen', highlight: false },
    { year: '1982', title: 'EVM First Trial', description: 'Electronic Voting Machine tested in Paravur, Kerala', icon: 'memory', highlight: false },
    { year: '1989', title: 'Voting Age Reduced', description: '61st Amendment: Voting age changed from 21 to 18 years', icon: 'person', highlight: true },
    { year: '2004', title: 'EVM Nationwide', description: '100% EVM usage in General Elections, paper ballots eliminated', icon: 'touch_app', highlight: true },
    { year: '2013', title: 'NOTA Introduced', description: 'Supreme Court introduces "None of the Above" option', icon: 'block', highlight: false },
    { year: '2019', title: 'VVPAT Nationwide', description: 'Paper trail verification in all constituencies for transparency', icon: 'receipt', highlight: true },
    { year: '2024', title: 'Largest Election Ever', description: '969 million registered voters in 18th Lok Sabha elections', icon: 'trending_up', highlight: true },
  ];

  const constitutionalArticles = [
    { article: 'Article 324', title: 'Election Commission', description: 'Establishes ECI as independent authority to conduct elections', category: 'Authority' },
    { article: 'Article 325', title: 'No Discrimination', description: 'No person excluded from electoral roll based on religion, race, caste, or sex', category: 'Rights' },
    { article: 'Article 326', title: 'Universal Adult Suffrage', description: 'Every citizen 18+ has right to vote', category: 'Rights' },
    { article: 'Article 327', title: "Parliament's Power", description: 'Parliament can make laws regarding elections', category: 'Power' },
    { article: 'Article 329', title: 'Bar to Court Interference', description: 'Courts cannot interfere in electoral matters during elections', category: 'Process' },
  ];

  const amendments = [
    { amendment: '61st Amendment', year: '1989', change: 'Voting age reduced from 21 to 18' },
    { amendment: '73rd Amendment', year: '1992', change: 'Panchayati Raj - local self-governance' },
    { amendment: '74th Amendment', year: '1992', change: 'Municipality elections established' },
    { amendment: '52nd Amendment', year: '1985', change: 'Anti-defection law introduced' },
  ];

  const resources = [
    { name: 'Election Commission of India', url: 'https://eci.gov.in', description: 'Official election information and announcements', icon: 'verified' },
    { name: 'National Voters Service Portal', url: 'https://voters.eci.gov.in', description: 'Voter registration, ID download, find polling booth', icon: 'how_to_reg' },
    { name: 'Know Your Candidate', url: 'https://affidavit.eci.gov.in', description: 'View candidate backgrounds, assets, and criminal records', icon: 'person_search' },
    { name: 'Voter Helpline App', url: 'https://play.google.com/store/apps/details?id=com.eci.citizen', description: 'Check voter status, find booth on mobile', icon: 'smartphone' },
    { name: 'cVIGIL App', url: 'https://play.google.com/store/apps/details?id=in.eci.cvigil', description: 'Report election violations with evidence', icon: 'report' },
  ];

  return (
    <>
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-secondary font-label-caps tracking-widest">EDUCATION HUB</span>
        <h1 className="font-h1 text-4xl md:text-5xl text-primary mt-4">Learn About Elections</h1>
        <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
          Everything you need to know about India's electoral system, history, and constitutional foundation.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 bg-surface-container-low p-2 rounded-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-button transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-white shadow-lg'
                : 'text-on-surface-variant hover:bg-white hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {/* ELECTIONS TAB */}
        {activeTab === 'elections' && (
          <div className="space-y-12 animate-fadeIn">
            {/* What is an Election */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="font-h2 text-2xl text-primary mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">help</span>
                What is an Election?
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                An election is a formal process where citizens choose their representatives through voting.
                It's the bridge between the people and the government, allowing citizens to participate
                in the democratic process and hold their leaders accountable.
              </p>
              <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary">
                <p className="text-primary font-medium">
                  In India, we elect representatives at 3 levels: National (Lok Sabha), State (Vidhan Sabha),
                  and Local (Panchayat/Municipality)
                </p>
              </div>
            </section>

            {/* Types of Elections */}
            <section>
              <h2 className="font-h2 text-2xl text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">category</span>
                Types of Elections in India
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {electionTypes.map((type, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${type.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      <span className="material-symbols-outlined text-2xl">{type.icon}</span>
                    </div>
                    <h3 className="font-h3 text-xl text-primary mb-2">{type.name}</h3>
                    <p className="text-on-surface-variant text-sm mb-4">{type.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Frequency:</span>
                        <span className="font-medium">{type.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Who Votes:</span>
                        <span className="font-medium">{type.voters}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Seats:</span>
                        <span className="font-medium">{type.seats}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Election Commission */}
            <section className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-2xl text-white">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-5xl">shield_person</span>
                </div>
                <div>
                  <h2 className="font-h2 text-2xl mb-2">Election Commission of India (ECI)</h2>
                  <p className="text-white/80 mb-4">
                    Independent constitutional authority that conducts all elections in India. Established on 25th January 1950 (celebrated as National Voters' Day).
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <p className="text-xs text-white/60">Head</p>
                      <p className="font-medium">Chief Election Commissioner</p>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <p className="text-xs text-white/60">Key Function</p>
                      <p className="font-medium">Free & Fair Elections</p>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <p className="text-xs text-white/60">Website</p>
                      <a href="https://eci.gov.in" target="_blank" rel="noreferrer" className="font-medium hover:underline">eci.gov.in</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Glossary */}
            <section>
              <h2 className="font-h2 text-2xl text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">dictionary</span>
                Key Terms Glossary
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {glossaryTerms.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-slate-100 flex gap-4 items-start">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-secondary text-sm">label</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.term}</h4>
                      <p className="text-on-surface-variant text-sm">{item.meaning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="font-h2 text-2xl text-primary mb-2">Journey of Indian Elections</h2>
              <p className="text-on-surface-variant">From the first ballot in 1951 to the digital age of EVMs</p>
            </section>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-white p-6 rounded-2xl shadow-sm border ${event.highlight ? 'border-secondary' : 'border-slate-100'} hover:shadow-md transition-shadow`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${event.highlight ? 'bg-secondary text-white' : 'bg-primary/10 text-primary'}`}>
                          <span className="material-symbols-outlined">{event.icon}</span>
                        </div>
                        <span className={`font-h1 text-2xl ${event.highlight ? 'text-secondary' : 'text-primary'}`}>{event.year}</span>
                      </div>
                      <h3 className="font-h3 text-lg text-primary mb-2">{event.title}</h3>
                      <p className="text-on-surface-variant text-sm">{event.description}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              ))}
            </div>

            {/* Evolution Summary */}
            <section className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-100 p-6 rounded-2xl">
                <span className="material-symbols-outlined text-4xl text-slate-400 mb-4">inventory_2</span>
                <h3 className="font-h3 text-lg text-primary mb-2">Paper Ballot Era</h3>
                <p className="text-on-surface-variant text-sm">1951-1990s: Manual counting took days, susceptible to tampering</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-2xl">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">touch_app</span>
                <h3 className="font-h3 text-lg text-primary mb-2">EVM Revolution</h3>
                <p className="text-on-surface-variant text-sm">1982-2004: Electronic voting eliminated invalid votes</p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-2xl">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4">verified</span>
                <h3 className="font-h3 text-lg text-primary mb-2">VVPAT Era</h3>
                <p className="text-on-surface-variant text-sm">2013+: Paper trail adds transparency and trust</p>
              </div>
            </section>
          </div>
        )}

        {/* CONSTITUTION TAB */}
        {activeTab === 'constitution' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="font-h2 text-2xl text-primary mb-2">Constitutional Foundation</h2>
              <p className="text-on-surface-variant">The Indian Constitution guarantees democratic rights to every citizen</p>
            </section>

            {/* Key Articles */}
            <section>
              <h2 className="font-h2 text-xl text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">gavel</span>
                Fundamental Election Articles
              </h2>
              <div className="space-y-4">
                {constitutionalArticles.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white font-h1 text-sm">
                          {item.article.replace('Article ', 'Art. ')}
                        </div>
                        <div>
                          <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">{item.category}</span>
                          <h3 className="font-h3 text-lg text-primary mt-1">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-on-surface-variant md:ml-auto md:max-w-md md:text-right">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Amendments */}
            <section>
              <h2 className="font-h2 text-xl text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">edit_document</span>
                Key Constitutional Amendments
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {amendments.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                        {item.year}
                      </div>
                      <div>
                        <h3 className="font-h3 text-primary">{item.amendment}</h3>
                        <p className="text-on-surface-variant text-sm mt-1">{item.change}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Constitutional Values */}
            <section className="bg-primary text-white p-8 rounded-2xl">
              <h2 className="font-h2 text-xl mb-6">Constitutional Values in Elections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">lock</span>
                  <div>
                    <h4 className="font-bold">Secrecy</h4>
                    <p className="text-white/70 text-sm">Secret ballot - no one knows your vote</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">balance</span>
                  <div>
                    <h4 className="font-bold">Equality</h4>
                    <p className="text-white/70 text-sm">One person, one vote - equal value</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">flight_takeoff</span>
                  <div>
                    <h4 className="font-bold">Freedom</h4>
                    <p className="text-white/70 text-sm">Free to vote for anyone or NOTA</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">shield</span>
                  <div>
                    <h4 className="font-bold">Independence</h4>
                    <p className="text-white/70 text-sm">ECI independent of government</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* RESOURCES TAB */}
        {activeTab === 'resources' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="font-h2 text-2xl text-primary mb-2">Official Resources</h2>
              <p className="text-on-surface-variant">Verified government portals and tools for voters</p>
            </section>

            {/* Resource Links */}
            <section className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-primary transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">{resource.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-h3 text-lg text-primary group-hover:text-secondary transition-colors flex items-center gap-2">
                        {resource.name}
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </h3>
                      <p className="text-on-surface-variant text-sm mt-1">{resource.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </section>

            {/* Check Voter Status */}
            <section className="bg-gradient-to-br from-secondary to-orange-600 p-8 rounded-2xl text-white">
              <h2 className="font-h2 text-2xl mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">search</span>
                Check Your Voter Status
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {['Visit voters.eci.gov.in', 'Click "Search in Electoral Roll"', 'Enter your details', 'Find your polling station'].map((step, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                    <div className="w-8 h-8 bg-white text-secondary rounded-full flex items-center justify-center font-bold mb-2">
                      {index + 1}
                    </div>
                    <p className="text-sm">{step}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://voters.eci.gov.in"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-xl font-button hover:bg-slate-100 transition-colors"
              >
                Check Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </section>

            {/* Helplines */}
            <section className="bg-white p-8 rounded-2xl border border-slate-100">
              <h2 className="font-h2 text-xl text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">call</span>
                Important Helplines
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Voter Helpline</p>
                    <p className="font-h2 text-2xl text-primary">1950</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">ECI Toll Free</p>
                    <p className="font-h2 text-2xl text-secondary">1800-111-950</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
