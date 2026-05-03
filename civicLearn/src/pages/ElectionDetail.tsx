import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn, StaggerContainer, StaggerItem, AnimatedCounter, FloatingElement, ParticleBackground } from '../components/Animations';

const electionData: Record<string, {
  name: string; subtitle: string; emoji: string;
  color: string; bgGradient: string; accentColor: string;
  heroImage: string; icon: string;
  overview: string; keyFacts: { label: string; value: string; icon: string }[];
  howItWorks: { step: number; title: string; desc: string; icon: string }[];
  fastFacts: string[];
  funFact: string;
  didYouKnow: { title: string; value: string; desc: string }[];
  powers: { title: string; desc: string; icon: string }[];
  historicMoments: { year: string; event: string }[];
}> = {
  'lok-sabha': {
    name: 'Lok Sabha',
    subtitle: 'House of the People — India\'s National Parliament',
    emoji: '🏛️',
    color: 'from-[#0B1F4A] to-[#1A3A7A]',
    bgGradient: 'from-surface via-white to-surface-container',
    accentColor: '#0B1F4A',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop',
    icon: 'account_balance',
    overview: 'The Lok Sabha is the lower house of the Parliament of India. It is the supreme legislative body for the whole nation. Members are directly elected by citizens across 543 constituencies — making it the direct voice of 1.4 billion Indians.',
    keyFacts: [
      { label: 'Total Seats', value: '543', icon: 'event_seat' },
      { label: 'Term Duration', value: '5 Years', icon: 'calendar_month' },
      { label: 'Minimum Age to Contest', value: '25 Years', icon: 'person' },
      { label: 'Voting System', value: 'First-Past-the-Post', icon: 'how_to_vote' },
      { label: 'States Represented', value: '28 States + UTs', icon: 'map' },
      { label: 'Reserved Seats (SC/ST)', value: '131 Seats', icon: 'diversity_3' },
    ],
    howItWorks: [
      { step: 1, title: 'Constituency Division', desc: 'India is divided into 543 Lok Sabha constituencies. Each constituency elects one MP.', icon: 'map' },
      { step: 2, title: 'You Vote Directly', desc: 'Citizens aged 18+ vote directly for candidates in their constituency via EVM.', icon: 'how_to_vote' },
      { step: 3, title: 'Winner Takes All', desc: 'The candidate with the most votes (even a simple majority) wins — First-Past-The-Post system.', icon: 'emoji_events' },
      { step: 4, title: 'Government Formation', desc: 'The party/alliance with 272+ seats forms the government and their leader becomes PM.', icon: 'account_balance' },
    ],
    fastFacts: [
      'Can be dissolved by President before 5 years on PM\'s advice',
      'Sessions: Budget (Feb), Monsoon (Jul), Winter (Nov)',
      'Speaker is elected by Lok Sabha members',
      'Money Bills can only originate in Lok Sabha',
      'No-confidence motion can remove the government',
    ],
    funFact: 'In 2019, 8,054 candidates contested for just 543 seats — odds of 1 in 14!',
    didYouKnow: [
      { title: 'Biggest Mandate', value: '303', desc: 'BJP won 303 seats in 2019 — largest single-party majority since 1984' },
      { title: 'Closest Contest', value: '53', desc: 'The Lok Sabha seat of Baramati in 2004 was won by just 53 votes' },
      { title: 'Total Voters 2024', value: '969M', desc: 'More voters than the entire population of Europe combined' },
    ],
    powers: [
      { title: 'Pass Laws', desc: 'Introduces and passes bills that become laws of the land', icon: 'gavel' },
      { title: 'Control Budget', desc: 'Approves the annual Union Budget and financial decisions', icon: 'payments' },
      { title: 'Remove Government', desc: 'Can pass a no-confidence vote to remove the sitting government', icon: 'policy' },
      { title: 'Question Ministers', desc: 'Ministers answer questions during Question Hour every session', icon: 'quiz' },
    ],
    historicMoments: [
      { year: '1952', event: 'First ever Lok Sabha election with 489 seats' },
      { year: '1971', event: 'Indira Gandhi wins with "Garibi Hatao" slogan — 352 seats' },
      { year: '1977', event: 'First non-Congress government formed by Janata Party' },
      { year: '1984', event: 'Congress wins 415 seats — largest majority ever after Indira assassination' },
      { year: '2019', event: 'Highest voter turnout in history — 67.4%' },
    ],
  },
  'vidhan-sabha': {
    name: 'Vidhan Sabha',
    subtitle: 'State Legislative Assembly — Voice of the State',
    emoji: '🏢',
    color: 'from-[#C84B00] to-[#E86020]',
    bgGradient: 'from-surface-warm via-white to-surface-container',
    accentColor: '#C84B00',
    heroImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&h=600&fit=crop',
    icon: 'domain',
    overview: 'The Vidhan Sabha is the lower house of each state\'s legislature. Just like Lok Sabha at the national level, Vidhan Sabha is the direct democratic voice of each state. Members (MLAs) are elected by constituents of state assembly segments.',
    keyFacts: [
      { label: 'Largest (UP)', value: '403 Seats', icon: 'event_seat' },
      { label: 'Smallest (Sikkim)', value: '32 Seats', icon: 'event_seat' },
      { label: 'Term Duration', value: '5 Years', icon: 'calendar_month' },
      { label: 'Min Age to Contest', value: '25 Years', icon: 'person' },
      { label: 'Total States', value: '28 States', icon: 'map' },
      { label: 'Elections Conducted By', value: 'ECI', icon: 'shield' },
    ],
    howItWorks: [
      { step: 1, title: 'Assembly Segments', desc: 'Each state is divided into assembly constituencies. Each elects one MLA.', icon: 'map' },
      { step: 2, title: 'Vote for MLA', desc: 'Citizens vote for their local Member of the Legislative Assembly.', icon: 'how_to_vote' },
      { step: 3, title: 'Majority Wins', desc: 'Party with majority in assembly forms the state government.', icon: 'emoji_events' },
      { step: 4, title: 'Chief Minister', desc: 'Majority party leader becomes Chief Minister, appoints a cabinet.', icon: 'person_badge' },
    ],
    fastFacts: [
      'Can be dismissed by Governor under Article 356 (President\'s Rule)',
      'Chief Minister leads the Council of Ministers',
      'State budget is passed in Vidhan Sabha',
      'Can be dissolved before 5 years',
      'Goa (40 seats) and Mizoram (40 seats) are among the smallest',
    ],
    funFact: 'Uttar Pradesh\'s 403 assembly seats would be larger than many national parliaments worldwide!',
    didYouKnow: [
      { title: 'Most Seats', value: '403', desc: 'Uttar Pradesh has the largest state assembly in India' },
      { title: 'President\'s Rule', value: '130+', desc: 'President\'s Rule has been imposed 130+ times across states since 1950' },
      { title: 'Women MLAs', value: '9%', desc: 'Only about 9% of all MLAs in India are women — a figure slowly rising' },
    ],
    powers: [
      { title: 'State Laws', desc: 'Makes laws on state subjects like police, public health, agriculture', icon: 'gavel' },
      { title: 'State Budget', desc: 'Controls state finances and approves annual state budget', icon: 'payments' },
      { title: 'Accountability', desc: 'Questions the Chief Minister and ministers in the assembly', icon: 'quiz' },
      { title: 'Local Governance', desc: 'Oversees Panchayats and urban local bodies within the state', icon: 'location_city' },
    ],
    historicMoments: [
      { year: '1957', event: 'Kerala becomes first state to elect a communist government' },
      { year: '1985', event: 'MGR wins Tamil Nadu with massive landslide victory' },
      { year: '2015', event: 'AAP wins 67 of 70 Delhi seats — historic sweep' },
      { year: '2022', event: 'UP election becomes world\'s largest state-level election' },
    ],
  },
  'local-body': {
    name: 'Local Body',
    subtitle: 'Panchayat & Municipality — Democracy at Your Doorstep',
    emoji: '🏘️',
    color: 'from-[#0B7A75] to-[#0E968F]',
    bgGradient: 'from-surface via-white to-[#E6F7F2]',
    accentColor: '#0B7A75',
    heroImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&h=600&fit=crop',
    icon: 'location_city',
    overview: 'Local body elections are the elections closest to the common citizen. They elect Gram Panchayats in villages and Municipal Councils/Corporations in cities. These elected bodies manage daily life — roads, water, sanitation, local schools, and more.',
    keyFacts: [
      { label: 'Rural Bodies', value: '2.5 Lakh+ Panchayats', icon: 'park' },
      { label: 'Urban Bodies', value: '4,041 Municipalities', icon: 'location_city' },
      { label: 'Elected Reps (Rural)', value: '30 Lakh+', icon: 'groups' },
      { label: 'Conducted By', value: 'State Election Commissions', icon: 'shield' },
      { label: '73rd Amendment', value: 'Panchayati Raj Act, 1992', icon: 'menu_book' },
      { label: '74th Amendment', value: 'Urban Local Bodies Act, 1992', icon: 'menu_book' },
    ],
    howItWorks: [
      { step: 1, title: 'Ward Division', desc: 'Villages divide into wards, cities into municipal wards. Each elects a representative.', icon: 'map' },
      { step: 2, title: 'Vote for Panch/Councillor', desc: 'Citizens vote for their ward representative — Panch in villages, Councillor in cities.', icon: 'how_to_vote' },
      { step: 3, title: 'Sarpanch/Mayor', desc: 'Elected members then choose their leader — Sarpanch for Panchayat, Mayor for city.', icon: 'emoji_events' },
      { step: 4, title: 'Local Development', desc: 'Elected body decides local development: roads, drainage, public spaces, welfare.', icon: 'construction' },
    ],
    fastFacts: [
      '33% seats reserved for women by 73rd & 74th Amendments',
      'Many states have 50% reservation for women',
      'Managed by State Election Commission, not ECI',
      '3-tier system: Gram, Block, District Panchayat',
      'Cities have Ward Committees, Zonal Committees',
    ],
    funFact: 'India has over 30 lakh elected local body representatives — more than any other country on earth!',
    didYouKnow: [
      { title: 'Women Leaders', value: '46%', desc: '46% of all elected local body representatives are women — higher than Parliament' },
      { title: 'Village Panchayats', value: '2.5L+', desc: 'Over 2.5 lakh Gram Panchayats govern India\'s 6 lakh villages' },
      { title: 'Budget Control', value: '₹2L Cr+', desc: 'Local bodies collectively manage over ₹2 lakh crore in annual budgets' },
    ],
    powers: [
      { title: 'Roads & Infrastructure', desc: 'Build and maintain village/city roads, drains, public toilets', icon: 'construction' },
      { title: 'Water & Sanitation', desc: 'Manage drinking water supply and sewage systems', icon: 'water_drop' },
      { title: 'Local Welfare', desc: 'Run local welfare schemes, ration distribution, health camps', icon: 'volunteer_activism' },
      { title: 'Tax Collection', desc: 'Collect property tax, trade licenses, and local levies', icon: 'receipt' },
    ],
    historicMoments: [
      { year: '1992', event: '73rd & 74th Amendments constitutionally mandated Panchayati Raj' },
      { year: '1993', event: 'First elections held under new Panchayati Raj framework' },
      { year: '2001', event: 'Kerala\'s "People\'s Plan Campaign" becomes global model for decentralization' },
      { year: '2023', event: 'Several states achieve 50%+ women representation in local bodies' },
    ],
  },
};

export default function ElectionDetail() {
  const { type } = useParams<{ type: string }>();
  const data = electionData[type || ''];

  if (!data) {
    return (
      <div className="text-center py-24">
        <span className="material-symbols-outlined text-6xl text-slate-300">error</span>
        <p className="mt-4 text-slate-500">Election type not found.</p>
        <Link to="/learn" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-xl">
          Back to Learn
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={data.heroImage} alt={data.name} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${data.color} opacity-80`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        <ParticleBackground count={18} color="#ffffff" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
            <Link to="/learn">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Learn
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <span className="material-symbols-outlined text-white text-3xl">{data.icon}</span>
                </div>
                <span className="text-white/70 text-sm font-semibold tracking-widest uppercase">Election Type</span>
              </div>
              <h1 className="font-h1 text-5xl md:text-7xl text-white mb-3">{data.emoji} {data.name}</h1>
              <p className="text-white/80 text-xl max-w-2xl">{data.subtitle}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className={`bg-gradient-to-b ${data.bgGradient}`}>
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

          {/* Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <span className="section-label mb-3 block" style={{ color: data.accentColor }}>OVERVIEW</span>
              <h2 className="font-h1 text-3xl md:text-4xl text-primary mb-6">What is {data.name}?</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">{data.overview}</p>
              <div className="p-4 rounded-2xl border-l-4 bg-white shadow-sm italic text-slate-600" style={{ borderColor: data.accentColor }}>
                💡 Fun Fact: {data.funFact}
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="grid grid-cols-2 gap-4">
                {data.keyFacts.map((fact, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="card p-5"
                  >
                    <span className="material-symbols-outlined text-2xl mb-2 block" style={{ color: data.accentColor }}>{fact.icon}</span>
                    <p className="font-bold text-primary text-lg">{fact.value}</p>
                    <p className="text-slate-500 text-xs mt-1">{fact.label}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInRight>
          </div>

          {/* Did You Know Stats */}
          <FadeInUp>
            <h2 className="font-h1 text-3xl text-primary text-center mb-10">Did You Know?</h2>
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
              {data.didYouKnow.map((item, i) => (
                <StaggerItem key={i}>
                  <div className={`bg-gradient-to-br ${data.color} p-8 rounded-3xl text-white text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    </div>
                    <p className="font-h1 text-5xl font-black mb-2 relative z-10">{item.value}</p>
                    <p className="font-bold text-lg relative z-10">{item.title}</p>
                    <p className="text-white/70 text-sm mt-2 relative z-10">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInUp>

          {/* How It Works */}
          <div>
            <FadeInUp className="text-center mb-12">
              <span className="section-label mb-3 block" style={{ color: data.accentColor }}>PROCESS</span>
              <h2 className="font-h1 text-3xl md:text-4xl text-primary">How {data.name} Works</h2>
            </FadeInUp>
            <div className="relative">
              <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-1 timeline-line opacity-30" />
              <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.15}>
                {data.howItWorks.map((step, i) => (
                  <StaggerItem key={i}>
                    <motion.div whileHover={{ y: -8 }} className="card p-6 text-center relative">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10"
                        style={{ background: `linear-gradient(135deg, ${data.accentColor}, ${data.accentColor}99)` }}>
                        {step.step}
                      </div>
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="material-symbols-outlined text-2xl" style={{ color: data.accentColor }}>{step.icon}</span>
                      </div>
                      <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Powers */}
          <div>
            <FadeInUp className="text-center mb-10">
              <h2 className="font-h1 text-3xl text-primary">Powers & Functions</h2>
            </FadeInUp>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
              {data.powers.map((power, i) => (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ y: -6 }} className="card p-6 h-full">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4" style={{ background: data.accentColor }}>
                      <span className="material-symbols-outlined">{power.icon}</span>
                    </div>
                    <h3 className="font-bold text-primary mb-2">{power.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{power.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Timeline */}
          <div>
            <FadeInUp className="text-center mb-10">
              <h2 className="font-h1 text-3xl text-primary">Historic Moments</h2>
            </FadeInUp>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-1 timeline-line opacity-40" />
              {data.historicMoments.map((moment, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 mb-8 items-start pl-4"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 z-10 relative"
                    style={{ background: `linear-gradient(135deg, ${data.accentColor}, ${data.accentColor}99)` }}>
                    {moment.year.slice(2)}
                  </div>
                  <motion.div whileHover={{ x: 6 }} className="card p-5 flex-1">
                    <span className="text-sm font-bold" style={{ color: data.accentColor }}>{moment.year}</span>
                    <p className="text-slate-700 mt-1">{moment.event}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fast Facts */}
          <FadeInUp>
            <div className={`bg-gradient-to-br ${data.color} p-10 rounded-3xl text-white relative overflow-hidden noise-overlay sheen`}>
              <ParticleBackground count={12} color="#ffffff" />
              <div className="relative z-10">
                <h2 className="font-h1 text-2xl mb-8 text-center">Quick Facts</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.fastFacts.map((fact, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                    >
                      <span className="material-symbols-outlined text-yellow-300 flex-shrink-0">lightbulb</span>
                      <p className="text-white/90 text-sm">{fact}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* CTA */}
          <ScaleIn>
            <div className="text-center py-8">
              <h2 className="font-h1 text-2xl text-primary mb-6">Ready to Learn More?</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/learn">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold">
                    <span className="material-symbols-outlined">arrow_back</span> Back to Learn
                  </motion.button>
                </Link>
                <Link to="/process">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-semibold">
                    <span className="material-symbols-outlined">route</span> How to Vote
                  </motion.button>
                </Link>
                <Link to="/quiz">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold">
                    <span className="material-symbols-outlined">quiz</span> Test Yourself
                  </motion.button>
                </Link>
              </div>
            </div>
          </ScaleIn>

        </div>
      </div>
    </div>
  );
}
