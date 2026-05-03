import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  FloatingElement,
} from '../components/Animations';

type TabType = 'elections' | 'history' | 'constitution' | 'resources' | 'ai-tutor';

export default function Learn() {
  const [activeTab, setActiveTab] = useState<TabType>('elections');

  const tabs = [
    { id: 'elections' as TabType, label: 'Elections', icon: 'how_to_vote' },
    { id: 'ai-tutor' as TabType, label: 'Learn with AI', icon: 'smart_toy' },
    { id: 'history' as TabType, label: 'History', icon: 'history' },
    { id: 'constitution' as TabType, label: 'Constitution', icon: 'menu_book' },
    { id: 'resources' as TabType, label: 'Resources', icon: 'link' },
  ];

  const electionTypes = [
    {
      name: 'Lok Sabha',
      slug: 'lok-sabha',
      description: 'National Parliament (Lower House)',
      frequency: 'Every 5 years',
      seats: '543 seats',
      icon: 'account_balance',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=250&fit=crop'
    },
    {
      name: 'Vidhan Sabha',
      slug: 'vidhan-sabha',
      description: 'State Legislative Assembly',
      frequency: 'Every 5 years',
      seats: 'Varies by state',
      icon: 'domain',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=250&fit=crop'
    },
    {
      name: 'Local Body',
      slug: 'local-body',
      description: 'Panchayat / Municipality',
      frequency: 'Every 5 years',
      seats: 'Varies by locality',
      icon: 'location_city',
      color: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=250&fit=crop'
    }
  ];

  const glossaryTerms = [
    { term: 'Constituency', meaning: 'Geographic area that elects one representative', icon: 'map' },
    { term: 'EVM', meaning: 'Electronic Voting Machine', icon: 'touch_app' },
    { term: 'VVPAT', meaning: 'Paper slip that confirms your vote', icon: 'receipt' },
    { term: 'NOTA', meaning: '"None of the Above" option', icon: 'block' },
    { term: 'Model Code', meaning: 'Rules parties follow during elections', icon: 'gavel' },
    { term: 'Electoral Roll', meaning: 'Official list of eligible voters', icon: 'list' },
  ];

  const timelineEvents = [
    { year: '1950', title: 'Constitution Adopted', description: 'India becomes a Republic with universal adult suffrage', icon: 'flag', color: 'bg-[#0B1F4A]' },
    { year: '1951', title: 'First General Election', description: '173 million voters, 68 phases, 4 months duration', icon: 'celebration', color: 'bg-secondary' },
    { year: '1962', title: 'Indelible Ink', description: 'Silver nitrate ink to prevent duplicate voting', icon: 'ink_pen', color: 'bg-[#0B7A75]' },
    { year: '1982', title: 'EVM Trial', description: 'First Electronic Voting Machine tested in Kerala', icon: 'memory', color: 'bg-[#D4880A]' },
    { year: '1989', title: 'Age Reduced', description: 'Voting age changed from 21 to 18 years', icon: 'person', color: 'bg-[#9B1C2E]' },
    { year: '2004', title: 'EVM Nationwide', description: '100% EVM usage in General Elections', icon: 'touch_app', color: 'bg-primary-container' },
    { year: '2013', title: 'NOTA Introduced', description: 'Supreme Court introduces "None of the Above"', icon: 'block', color: 'bg-secondary' },
    { year: '2019', title: 'VVPAT Nationwide', description: 'Paper trail in all constituencies', icon: 'receipt', color: 'bg-[#0B7A75]' },
    { year: '2024', title: 'Largest Ever', description: '969 million registered voters', icon: 'trending_up', color: 'bg-[#D4880A]' },
  ];

  const constitutionalArticles = [
    { article: '324', title: 'Election Commission', description: 'Establishes ECI as independent authority', icon: 'shield' },
    { article: '325', title: 'No Discrimination', description: 'No exclusion based on religion, race, caste, sex', icon: 'diversity_3' },
    { article: '326', title: 'Adult Suffrage', description: 'Every citizen 18+ has right to vote', icon: 'how_to_vote' },
    { article: '329', title: 'Court Bar', description: 'Courts cannot interfere during elections', icon: 'gavel' },
  ];

  const resources = [
    { name: 'Election Commission', url: 'https://eci.gov.in', description: 'Official election information', icon: 'verified', color: 'bg-blue-500' },
    { name: 'Voter Portal', url: 'https://voters.eci.gov.in', description: 'Registration & ID download', icon: 'how_to_reg', color: 'bg-green-500' },
    { name: 'Know Candidate', url: 'https://affidavit.eci.gov.in', description: 'View candidate backgrounds', icon: 'person_search', color: 'bg-purple-500' },
    { name: 'Voter Helpline', url: '#', description: 'Call 1950 for assistance', icon: 'call', color: 'bg-secondary' },
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative">
      {/* Header */}
      <FadeInUp className="text-center mb-12">
        <span className="text-secondary font-label-caps tracking-widest">EDUCATION HUB</span>
        <h1 className="font-h1 text-4xl md:text-5xl text-primary mt-4">Learn About Elections</h1>
        <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
          Everything you need to know about India's electoral system.
        </p>
      </FadeInUp>

      {/* Tab Navigation */}
      <FadeInUp delay={0.2}>
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-100 p-2 rounded-2xl max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-button transition-all relative ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-slate-500 hover:text-primary'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="material-symbols-outlined text-xl relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </FadeInUp>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {/* AI TUTOR TAB */}
        {activeTab === 'ai-tutor' && (
          <motion.div
            key="ai-tutor"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-12"
          >
            <section className="card p-10 md:p-16 relative overflow-hidden noise-overlay sheen bg-dot-pattern">
              <FloatingElement className="absolute -right-20 -top-20 text-primary/5" duration={8}>
                <span className="material-symbols-outlined text-[300px]">smart_toy</span>
              </FloatingElement>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <span className="section-label text-secondary mb-4 inline-block">PERSONALIZED LEARNING</span>
                <h2 className="font-h1 text-4xl md:text-5xl text-primary mb-6">Learn with your Civic AI Tutor</h2>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  Have a specific question about the Indian Constitution? Or want to understand a complex election law? 
                  Our AI Tutor is trained to explain everything simply.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 text-left mb-10">
                  {[
                    "Explain Article 324 simply",
                    "What is a coalition government?",
                    "How are electoral bonds different from direct funding?",
                    "What is the role of the President during elections?"
                  ].map((q, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.dispatchEvent(new CustomEvent('ask-ai', { detail: q }))}
                      className="flex items-center gap-3 p-4 bg-white/50 border border-slate-200 rounded-2xl text-primary text-sm font-medium hover:bg-white hover:border-primary transition-all"
                    >
                      <span className="material-symbols-outlined text-secondary text-lg">lightbulb</span>
                      {q}
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.dispatchEvent(new CustomEvent('ask-ai', { detail: "I want to start learning about Indian elections. Where should I begin?" }))}
                  className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-button text-lg shadow-xl shadow-primary/20"
                >
                  <span className="material-symbols-outlined">smart_toy</span>
                  Start AI Learning Session
                </motion.button>
              </div>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Smart Summaries", icon: "summarize", desc: "Get complex laws summarized in simple bullet points." },
                { title: "Interactive Q&A", icon: "quiz", desc: "Ask follow-up questions until you truly understand." },
                { title: "Multilingual Support", icon: "translate", desc: "Ask questions in your preferred language." }
              ].map((feature, i) => (
                <motion.div key={i} whileHover={{ y: -8 }} className="card p-8 text-center">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-4">
                    <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-h3 text-lg text-primary mb-2">{feature.title}</h3>
                  <p className="text-on-surface-variant text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ELECTIONS TAB */}
        {activeTab === 'elections' && (
          <motion.div
            key="elections"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-16"
          >
            {/* What is an Election */}
            <section className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInLeft>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-2xl">help</span>
                    </div>
                    <h2 className="font-h2 text-2xl text-primary">What is an Election?</h2>
                  </div>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                    An election is a formal process where citizens choose their representatives through voting.
                    It's the bridge between the people and the government.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl border-l-4 border-primary"
                  >
                    <p className="text-primary font-medium">
                      In India, we elect representatives at 3 levels: National, State, and Local
                    </p>
                  </motion.div>
                </div>
              </FadeInLeft>

              <FadeInRight>
                <div className="relative">
                  <motion.img
                    src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop"
                    alt="Voting in India"
                    className="rounded-3xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <FloatingElement className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <p className="font-h1 text-3xl text-primary">
                        <AnimatedCounter value={969} suffix="M" />
                      </p>
                      <p className="text-xs text-slate-500">Registered Voters</p>
                    </div>
                  </FloatingElement>
                </div>
              </FadeInRight>
            </section>

            {/* Types of Elections */}
            <section>
              <FadeInUp className="text-center mb-10">
                <h2 className="font-h2 text-2xl text-primary flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-secondary">category</span>
                  Types of Elections
                </h2>
              </FadeInUp>

              <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
                {electionTypes.map((type, index) => (
                  <StaggerItem key={index}>
                    <Link to={`/learn/election/${type.slug}`} className="block h-full">
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-full cursor-pointer group"
                      >
                        <div className="h-40 overflow-hidden relative">
                          <img
                            src={type.image}
                            alt={type.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${type.color} opacity-60`}></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <span className="material-symbols-outlined text-3xl">{type.icon}</span>
                          </div>
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">View Details →</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-h3 text-xl text-primary mb-2">{type.name}</h3>
                          <p className="text-on-surface-variant text-sm mb-4">{type.description}</p>
                          <div className="space-y-2 text-sm mb-4">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Frequency:</span>
                              <span className="font-medium text-primary">{type.frequency}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Seats:</span>
                              <span className="font-medium text-primary">{type.seats}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                            Explore in Detail
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>

            {/* ECI Section */}
            <ScaleIn>
              <div className="bg-gradient-to-br from-primary to-primary-container p-8 md:p-12 rounded-3xl text-white relative overflow-hidden">
                <FloatingElement className="absolute -right-10 -top-10 text-white/10" duration={5}>
                  <span className="material-symbols-outlined text-[200px]">shield</span>
                </FloatingElement>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  >
                    <span className="material-symbols-outlined text-5xl">shield_person</span>
                  </motion.div>
                  <div>
                    <h2 className="font-h2 text-2xl mb-2">Election Commission of India</h2>
                    <p className="text-white/80 mb-4">
                      Independent constitutional authority conducting all elections since 25th January 1950.
                    </p>
                    <a
                      href="https://eci.gov.in"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                    >
                      Visit Website <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScaleIn>

            {/* Glossary */}
            <section>
              <FadeInUp className="text-center mb-8">
                <h2 className="font-h2 text-2xl text-primary">Key Terms</h2>
              </FadeInUp>
              <div className="grid md:grid-cols-3 gap-4">
                {glossaryTerms.map((item, index) => (
                  <FadeInUp key={index} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ scale: 1.03, x: 5 }}
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('ask-ai', { 
                          detail: `Explain the term "${item.term}" in the context of Indian elections.` 
                        }));
                      }}
                      className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-center cursor-pointer group"
                    >
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-secondary group-hover:text-white">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary text-sm">{item.term}</h4>
                        <p className="text-on-surface-variant text-xs">{item.meaning}</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-300 text-sm group-hover:text-primary transition-colors">smart_toy</span>
                    </motion.div>
                  </FadeInUp>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <motion.div
            key="history"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-12"
          >
            <FadeInUp className="text-center">
              <h2 className="font-h2 text-2xl text-primary mb-2">Journey of Indian Elections</h2>
              <p className="text-on-surface-variant">From first ballot in 1951 to digital age</p>
            </FadeInUp>

            {/* Interactive Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 timeline-line transform -translate-x-1/2 rounded-full"></div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-[45%] ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="card p-6"
                    >
                      <span className="font-h1 text-3xl text-primary">{event.year}</span>
                      <h3 className="font-h3 text-lg text-primary mt-1">{event.title}</h3>
                      <p className="text-on-surface-variant text-sm mt-2">{event.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${event.color} rounded-full flex items-center justify-center text-white shadow-xl z-10 border-4 border-white`}
                  >
                    <span className="material-symbols-outlined">{event.icon}</span>
                  </motion.div>

                  {/* Spacer */}
                  <div className="w-[45%]"></div>
                </motion.div>
              ))}
            </div>

            {/* Evolution Summary */}
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {[
                { title: 'Paper Ballot Era', period: '1951-1990s', desc: 'Manual counting took days', icon: 'inventory_2', color: 'bg-slate-100' },
                { title: 'EVM Revolution', period: '1982-2004', desc: 'Electronic voting eliminated errors', icon: 'touch_app', color: 'bg-primary/10' },
                { title: 'VVPAT Era', period: '2013+', desc: 'Paper trail adds transparency', icon: 'verified', color: 'bg-secondary/10' },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`${item.color} p-6 rounded-2xl`}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-4">{item.icon}</span>
                    <h3 className="font-h3 text-lg text-primary">{item.title}</h3>
                    <p className="text-secondary text-sm font-medium">{item.period}</p>
                    <p className="text-on-surface-variant text-sm mt-2">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        )}

        {/* CONSTITUTION TAB */}
        {activeTab === 'constitution' && (
          <motion.div
            key="constitution"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-12"
          >
            <FadeInUp className="text-center">
              <h2 className="font-h2 text-2xl text-primary mb-2">Constitutional Foundation</h2>
              <p className="text-on-surface-variant">Legal framework for Indian elections</p>
            </FadeInUp>

            {/* Key Articles */}
            <div className="grid md:grid-cols-2 gap-6">
              {constitutionalArticles.map((item, index) => (
                <FadeInUp key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg flex gap-6"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-container rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                      <div className="text-center">
                        <p className="text-xs opacity-80">Article</p>
                        <p className="font-h1 text-2xl">{item.article}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-h3 text-lg text-primary mb-1">{item.title}</h3>
                      <p className="text-on-surface-variant text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                </FadeInUp>
              ))}
            </div>

            {/* Constitutional Values */}
            <ScaleIn>
              <div className="bg-primary text-white p-8 rounded-3xl">
                <h2 className="font-h2 text-xl mb-6 text-center">Electoral Values in Constitution</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: 'lock', title: 'Secrecy', desc: 'Secret ballot' },
                    { icon: 'balance', title: 'Equality', desc: 'One person, one vote' },
                    { icon: 'flight_takeoff', title: 'Freedom', desc: 'Free choice' },
                    { icon: 'shield', title: 'Independence', desc: 'ECI autonomy' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScaleIn>
          </motion.div>
        )}

        {/* RESOURCES TAB */}
        {activeTab === 'resources' && (
          <motion.div
            key="resources"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-12"
          >
            <FadeInUp className="text-center">
              <h2 className="font-h2 text-2xl text-primary mb-2">Official Resources</h2>
              <p className="text-on-surface-variant">Verified government portals</p>
            </FadeInUp>

            {/* Resource Links */}
            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {resources.map((resource, index) => (
                <StaggerItem key={index}>
                  <motion.a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="block bg-white p-6 rounded-2xl border border-slate-100 shadow-lg group"
                  >
                    <div className="flex gap-4">
                      <div className={`w-14 h-14 ${resource.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                        <span className="material-symbols-outlined text-2xl">{resource.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-h3 text-lg text-primary flex items-center gap-2">
                          {resource.name}
                          <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                        </h3>
                        <p className="text-on-surface-variant text-sm mt-1">{resource.description}</p>
                      </div>
                    </div>
                  </motion.a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Helplines */}
            <ScaleIn>
              <div className="bg-gradient-to-r from-secondary to-orange-500 p-8 rounded-3xl text-white">
                <h2 className="font-h2 text-xl mb-6 text-center">Need Help? Call Now</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center"
                  >
                    <span className="material-symbols-outlined text-4xl mb-2">call</span>
                    <p className="text-white/80 text-sm">Voter Helpline</p>
                    <p className="font-h1 text-4xl mt-2">1950</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center"
                  >
                    <span className="material-symbols-outlined text-4xl mb-2">support_agent</span>
                    <p className="text-white/80 text-sm">ECI Toll Free</p>
                    <p className="font-h1 text-3xl mt-2">1800-111-950</p>
                  </motion.div>
                </div>
              </div>
            </ScaleIn>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
