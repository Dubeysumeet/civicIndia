import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  FloatingElement,
  TextReveal,
  MagneticButton,
  ScrollProgress,
  AnimatedProgress,
} from '../components/Animations';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const impactStories = [
    {
      stat: 53,
      unit: "Votes",
      description: "In 2019, one Lok Sabha seat was won by just 53 votes. Your vote could be the deciding one.",
      icon: "how_to_vote",
      color: "from-[#0B1F4A] to-[#1A3A7A]"
    },
    {
      stat: 67.4,
      unit: "%",
      description: "2019 saw the highest voter turnout in Indian history. Be part of history.",
      icon: "trending_up",
      color: "from-[#0B7A75] to-[#0E968F]"
    },
    {
      stat: 5,
      unit: "Years",
      description: "One vote today shapes national policy for the next 5 years for 1.4 billion people.",
      icon: "calendar_month",
      color: "from-[#C84B00] to-[#E86020]"
    }
  ];

  const democraticValues = [
    {
      title: "Universal Suffrage",
      description: "Every citizen 18+ can vote regardless of caste, religion, gender, or wealth",
      icon: "groups",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop"
    },
    {
      title: "Secret Ballot",
      description: "Your vote is private - no one can force you to reveal your choice",
      icon: "lock",
      image: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?w=400&h=300&fit=crop"
    },
    {
      title: "One Person One Vote",
      description: "Rich or poor, every citizen has equal voting power",
      icon: "balance",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=300&fit=crop"
    },
    {
      title: "Regular Elections",
      description: "Elections happen every 5 years ensuring accountability",
      icon: "event_repeat",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=300&fit=crop"
    }
  ];

  const learningJourney = [
    {
      step: 1,
      title: "Learn",
      description: "Understand elections, history & constitution",
      icon: "school",
      link: "/learn",
      color: "bg-[#0B1F4A]"
    },
    {
      step: 2,
      title: "Process",
      description: "Know exactly how to vote step-by-step",
      icon: "route",
      link: "/process",
      color: "bg-[#0B7A75]"
    },
    {
      step: 3,
      title: "Test & Certify",
      description: "Prove your knowledge, earn certificate",
      icon: "workspace_premium",
      link: "/quiz",
      color: "bg-secondary"
    }
  ];

  const quickFacts = [
    { fact: "India conducted its first election in 1951-52 with 173 million voters", icon: "history" },
    { fact: "The Election Commission manages the world's largest democratic exercise", icon: "public" },
    { fact: "India has over 1 million polling stations across the country", icon: "location_on" },
    { fact: "EVMs were first used in 1982 and eliminated invalid votes", icon: "touch_app" },
    { fact: "In 2024, 969 million voters were registered - more than Europe's population", icon: "groups" },
    { fact: "VVPAT provides a paper trail for every electronic vote cast", icon: "receipt" },
  ];

  return (
    <>
      <ScrollProgress />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#060F2A] via-primary to-primary-container flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: heroY }}
            className="absolute inset-0"
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C84B00]/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Floating Icons */}
          <FloatingElement className="absolute top-[20%] left-[10%] text-white/10" duration={4}>
            <span className="material-symbols-outlined text-8xl">how_to_vote</span>
          </FloatingElement>
          <FloatingElement className="absolute top-[60%] right-[15%] text-white/10" duration={5}>
            <span className="material-symbols-outlined text-6xl">account_balance</span>
          </FloatingElement>
          <FloatingElement className="absolute bottom-[20%] left-[20%] text-white/10" duration={3.5}>
            <span className="material-symbols-outlined text-7xl">groups</span>
          </FloatingElement>
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
              >
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">World's Largest Democracy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-h1 text-5xl md:text-6xl lg:text-7xl leading-tight"
              >
                One Vote.<br/>
                <span className="text-secondary">One Voice.</span><br/>
                One Nation.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/80 max-w-lg leading-relaxed"
              >
                In the world's largest democracy, YOUR single vote has the power to shape the future of <span className="text-secondary font-bold">1.4 billion</span> people.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton>
                  <Link
                    to="/learn"
                    className="bg-secondary text-white px-8 py-4 rounded-xl font-button text-lg shadow-[0_5px_0_0_#8C3500] active:translate-y-[2px] active:shadow-[0_3px_0_0_#8C3500] transition-all hover:bg-[#E86020] flex items-center gap-2 group"
                  >
                    Start Learning
                    <motion.span
                      className="material-symbols-outlined"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      arrow_forward
                    </motion.span>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/quiz"
                    className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-button text-lg hover:bg-white/20 transition-all flex items-center gap-2"
                  >
                    Test Your Knowledge
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Animated Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center perspective-1000"
            >
              <div className="bg-white p-10 rounded-3xl shadow-2xl text-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 max-w-md w-full">
                <div className="absolute top-0 left-0 w-full h-1 india-stripe"></div>
                <motion.span
                  animate={{ rotate: [12, 0, 12] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="material-symbols-outlined text-[100px] text-primary/10 absolute -bottom-6 -right-6"
                >
                  groups
                </motion.span>

                <p className="text-sm font-label-caps tracking-widest text-slate-500 uppercase mb-4 relative z-10">Total Registered Voters</p>
                <div className="flex items-baseline justify-center gap-2 relative z-10">
                  <span className="font-h1 text-7xl font-black text-primary leading-none tracking-tighter">
                    <AnimatedCounter value={969} duration={2.5} />
                  </span>
                  <span className="font-h2 text-2xl text-secondary">Million</span>
                </div>
                <p className="font-body-md text-slate-500 mt-6 relative z-10">The world's largest democratic exercise awaits your voice.</p>

                <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="font-h3 text-2xl text-primary">
                      <AnimatedCounter value={543} duration={2} />
                    </p>
                    <p className="text-xs text-slate-400">Lok Sabha Seats</p>
                  </div>
                  <div className="text-center">
                    <p className="font-h3 text-2xl text-primary">
                      <AnimatedCounter value={28} duration={1.5} />
                    </p>
                    <p className="text-xs text-slate-400">States</p>
                  </div>
                  <div className="text-center">
                    <p className="font-h3 text-2xl text-primary">
                      <AnimatedCounter value={1} suffix="M+" duration={1.5} />
                    </p>
                    <p className="text-xs text-slate-400">Polling Booths</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Your Vote Matters - With Images */}
      <section className="py-28 px-6 bg-surface-warm relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <span className="section-label text-secondary">THE IMPACT</span>
            <h2 className="font-h1 text-4xl md:text-5xl text-primary mt-4">
              <TextReveal text="Why Your Vote Matters" />
            </h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
              Every vote counts. Here's proof that your single ballot can change history.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {impactStories.map((story, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                  className="card rounded-3xl overflow-hidden group cursor-pointer"
                >
                  {/* Gradient Header */}
                  <div className={`h-36 bg-gradient-to-br ${story.color} flex items-center justify-center relative overflow-hidden noise-overlay sheen`}>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      whileHover={{ scale: 1.2, opacity: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined text-white/20 text-[120px]">{story.icon}</span>
                    </motion.div>
                    <div className="relative z-10 text-center text-white">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="font-h1 text-5xl font-black">
                          <AnimatedCounter value={story.stat} duration={2} />
                        </span>
                        <span className="font-h3 text-xl">{story.unit}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-on-surface-variant leading-relaxed">{story.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What is Democracy - Interactive */}
      <section className="py-28 px-6 bg-surface-container relative overflow-hidden dot-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <span className="section-label text-secondary">UNDERSTAND</span>
              <h2 className="font-h1 text-4xl md:text-5xl text-primary mt-4 mb-6">What is Democracy?</h2>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-accent-left p-8 mb-8"
              >
                <p className="text-xl text-on-surface leading-relaxed">
                  "Democracy means <span className="text-primary font-bold">'rule by the people'</span>. In India, we practice Representative Democracy - we elect leaders who make decisions on our behalf."
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  { title: "You Vote", desc: "Citizens elect representatives through voting", icon: "how_to_vote" },
                  { title: "They Represent", desc: "Elected leaders create laws and policies on your behalf", icon: "account_balance" },
                  { title: "You Hold Accountable", desc: "If they fail, you can vote them out in the next election", icon: "gavel" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100"
                  >
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="relative">
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-40 h-40 border-4 border-dashed border-primary/20 rounded-full"
                />

                <div className="bg-white p-8 rounded-3xl shadow-2xl relative z-10">
                  <div className="flex flex-col items-center gap-4">
                    {/* Visual Flow */}
                    {[
                      { icon: "groups", label: "Citizens", color: "bg-primary" },
                      { icon: "how_to_vote", label: "Vote", color: "bg-secondary", isAction: true },
                      { icon: "account_balance", label: "Representatives", color: "bg-primary" },
                      { icon: "description", label: "Create Laws", color: "bg-secondary", isAction: true },
                      { icon: "gavel", label: "Policies", color: "bg-primary" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="flex flex-col items-center"
                      >
                        {index > 0 && (
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: 30 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.3 }}
                            className="w-0.5 bg-gradient-to-b from-primary to-secondary mb-2"
                          />
                        )}
                        {item.isAction ? (
                          <span className="text-sm text-slate-500 bg-slate-100 px-4 py-1 rounded-full">{item.label}</span>
                        ) : (
                          <>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                            >
                              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                            </motion.div>
                            <p className="font-bold text-primary mt-2">{item.label}</p>
                          </>
                        )}
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      className="mt-4 flex items-center gap-2 text-sm text-slate-500 bg-primary/5 px-4 py-2 rounded-full"
                    >
                      <span className="material-symbols-outlined text-sm">sync</span>
                      Cycle repeats every 5 years
                    </motion.div>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Democratic Values - Cards with Images */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <span className="section-label text-secondary">FOUNDATION</span>
            <h2 className="font-h1 text-4xl md:text-5xl text-primary mt-4">India's Democratic Values</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
              These principles ensure every Indian has an equal voice in governance.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {democraticValues.map((value, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="card rounded-2xl overflow-hidden group cursor-pointer h-full"
                >
                  <div className="h-40 overflow-hidden relative">
                    <motion.img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4A]/80 to-transparent flex items-end p-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">{value.icon}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-h3 text-lg text-primary mb-2">{value.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey - Interactive Path */}
      <section className="py-28 px-6 bg-surface-container relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #00236f 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center mb-16">
            <span className="section-label text-secondary">YOUR PATH</span>
            <h2 className="font-h1 text-4xl md:text-5xl text-primary mt-4">Your Learning Journey</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
              Become an informed voter in 3 simple steps.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-32 left-[15%] right-[15%] h-1">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full origin-left"
              />
            </div>

            {learningJourney.map((step, index) => (
              <ScaleIn key={index} delay={index * 0.2}>
                <Link to={step.link}>
                  <motion.div
                    whileHover={{ y: -15, scale: 1.02 }}
                    className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all group relative"
                  >
                    <motion.div
                      className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>
                    <div className="pt-10 text-center">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors"
                      >
                        <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                      </motion.div>
                      <h3 className="font-h2 text-2xl text-primary mb-2">{step.title}</h3>
                      <p className="text-on-surface-variant">{step.description}</p>
                      <motion.div
                        className="mt-6 flex items-center justify-center gap-2 text-secondary font-button"
                        whileHover={{ gap: 12 }}
                      >
                        Start Now
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </ScaleIn>
            ))}
          </div>

          {/* Progress Indicator */}
          <FadeInUp delay={0.5} className="mt-16 max-w-md mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-500">Your Progress</span>
                <span className="text-sm font-bold text-primary">0%</span>
              </div>
              <AnimatedProgress progress={0} />
              <p className="text-xs text-slate-400 mt-2 text-center">Start your journey to become a Civic Champion!</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Quick Facts - Animated Cards */}
      <section className="py-28 px-6 bg-gradient-to-br from-[#060F2A] via-primary to-primary-container text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center mb-12">
            <span className="section-label text-[#D4880A]">DID YOU KNOW?</span>
            <h2 className="font-h1 text-4xl md:text-5xl mt-4">Quick Facts</h2>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {quickFacts.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  className="card-glass-dark p-6 cursor-pointer transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 bg-[#D4880A] rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <span className="material-symbols-outlined text-white">{item.icon}</span>
                    </motion.div>
                    <p className="text-white/90 leading-relaxed">{item.fact}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 bg-gradient-to-br from-secondary via-[#E86020] to-secondary relative overflow-hidden noise-overlay">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-10 left-10 text-white/10" duration={4}>
            <span className="material-symbols-outlined text-[150px]">how_to_vote</span>
          </FloatingElement>
          <FloatingElement className="absolute bottom-10 right-10 text-white/10" duration={5}>
            <span className="material-symbols-outlined text-[120px]">workspace_premium</span>
          </FloatingElement>
        </div>

        <ScaleIn className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="font-h1 text-4xl md:text-5xl mb-6">
            Ready to become an informed voter?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Learn about elections, understand the process, and earn your <span className="font-bold">Civic Champion</span> certificate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton>
              <Link
                to="/learn"
                className="bg-white text-secondary px-10 py-4 rounded-xl font-button text-lg shadow-lg hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined">school</span>
                Start Learning
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/quiz"
                className="bg-primary text-white px-10 py-4 rounded-xl font-button text-lg shadow-lg hover:bg-primary-container transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined">quiz</span>
                Test Yourself
              </Link>
            </MagneticButton>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/70"
          >
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
          </motion.div>
        </ScaleIn>
      </section>
    </>
  );
}
