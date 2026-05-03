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
  AnimatedProgress,
  FloatingElement,
} from '../components/Animations';

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  const processSteps = [
    { id: 1, title: 'Check Eligibility', icon: 'checklist', color: 'bg-[#0B1F4A]' },
    { id: 2, title: 'Register', icon: 'app_registration', color: 'bg-[#C84B00]' },
    { id: 3, title: 'Get Voter ID', icon: 'badge', color: 'bg-[#0B7A75]' },
    { id: 4, title: 'Find Booth', icon: 'location_on', color: 'bg-[#D4880A]' },
    { id: 5, title: 'Documents', icon: 'folder_open', color: 'bg-[#9B1C2E]' },
    { id: 6, title: 'At Booth', icon: 'domain', color: 'bg-[#0B1F4A]' },
    { id: 7, title: 'Vote!', icon: 'how_to_vote', color: 'bg-[#C84B00]' },
  ];

  const eligibilityCriteria = [
    { label: 'Age', value: '18 years or above on January 1st', icon: 'cake', color: 'from-[#0B1F4A] to-[#1A3A7A]' },
    { label: 'Citizenship', value: 'Must be Indian citizen', icon: 'flag', color: 'from-[#C84B00] to-[#E86020]' },
    { label: 'Residence', value: 'Ordinary resident of constituency', icon: 'home', color: 'from-[#0B7A75] to-[#0E968F]' },
    { label: 'Sound Mind', value: 'Not declared of unsound mind by court', icon: 'psychology', color: 'from-[#D4880A] to-[#E6A01F]' },
  ];

  const acceptedIDs = [
    'Voter ID (EPIC)', 'Aadhaar Card', 'Passport', 'Driving License',
    'PAN Card', 'Bank Passbook', 'MNREGA Card', 'Pension Document',
    'Service ID Card', 'Student ID', 'Property Document', 'RGI Smart Card'
  ];

  const evmSteps = [
    { step: 1, text: 'Enter the private voting booth', icon: 'door_front' },
    { step: 2, text: 'Find your candidate on EVM', icon: 'search' },
    { step: 3, text: 'Press the button next to name', icon: 'touch_app' },
    { step: 4, text: 'Hear beep & see light glow', icon: 'notifications' },
    { step: 5, text: 'VVPAT shows slip for 7 seconds', icon: 'receipt' },
    { step: 6, text: 'Verify your vote on slip', icon: 'verified' },
    { step: 7, text: 'Exit the booth', icon: 'exit_to_app' },
  ];

  const voterRights = [
    { right: 'Right to Vote', desc: 'Cannot be denied based on religion, caste, gender', icon: 'how_to_vote', color: 'bg-[#0B1F4A]' },
    { right: 'Secret Ballot', desc: 'No one can ask who you voted for', icon: 'lock', color: 'bg-[#C84B00]' },
    { right: 'NOTA Option', desc: 'Right to reject all candidates', icon: 'block', color: 'bg-[#D4880A]' },
    { right: 'Paid Leave', desc: 'Employers must give leave on voting day', icon: 'event_available', color: 'bg-[#0B7A75]' },
  ];

  const stepContent = {
    1: (
      <div className="space-y-6">
        <h3 className="font-h2 text-2xl text-primary">Check Your Eligibility</h3>
        <p className="text-on-surface-variant">Make sure you meet all criteria to vote.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {eligibilityCriteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative overflow-hidden rounded-2xl p-6 text-white noise-overlay sheen"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl mb-3">{item.icon}</span>
                <h4 className="font-bold text-lg">{item.label}</h4>
                <p className="text-white/80 text-sm mt-1">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    2: (
      <div className="space-y-6">
        <h3 className="font-h2 text-2xl text-primary">Register as a Voter</h3>
        <p className="text-on-surface-variant">Choose your preferred registration method.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { method: 'Online', icon: 'computer', desc: 'Visit voters.eci.gov.in', color: 'bg-blue-500' },
            { method: 'Offline', icon: 'description', desc: 'Get Form 6 from ERO office', color: 'bg-purple-500' },
            { method: 'App', icon: 'smartphone', desc: 'Use Voter Helpline App', color: 'bg-green-500' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h4 className="font-h3 text-lg text-primary">{item.method}</h4>
              <p className="text-on-surface-variant text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="https://voters.eci.gov.in"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-button"
        >
          Register Online <span className="material-symbols-outlined text-sm">open_in_new</span>
        </motion.a>
      </div>
    ),
    3: (
      <div className="space-y-6">
        <h3 className="font-h2 text-2xl text-primary">Get Your Voter ID (EPIC)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <p className="text-on-surface-variant">Electoral Photo Identity Card is your primary voting ID. It's automatically sent after registration approval.</p>
            {['Contains your photo & details', 'Unique EPIC number', 'Valid as general ID proof'].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                <span className="text-on-surface">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-2xl text-white"
          >
            <h4 className="font-h3 text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">download</span> Download e-EPIC
            </h4>
            {['Visit voters.eci.gov.in', 'Login with mobile/email', 'Click "Download e-EPIC"', 'Get PDF voter ID'].map((step, i) => (
              <div key={i} className="flex gap-3 mb-2">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">{i + 1}</span>
                <span className="text-white/90 text-sm">{step}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    ),
    4: (
      <div className="space-y-6">
        <h3 className="font-h2 text-2xl text-primary">Find Your Polling Station</h3>
        <p className="text-on-surface-variant">Know exactly where to go before election day.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { method: 'Online', icon: 'computer', desc: 'voters.eci.gov.in → Search Electoral Roll' },
            { method: 'SMS', icon: 'sms', desc: 'Send EPIC<space>EPIC_NUMBER to 1950' },
            { method: 'App', icon: 'smartphone', desc: 'Voter Helpline → Know Your Booth' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="card p-6 text-center"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-3">{item.icon}</span>
              <h4 className="font-bold text-primary">{item.method}</h4>
              <p className="text-on-surface-variant text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    5: (
      <div className="space-y-6">
        <h3 className="font-h2 text-2xl text-primary">Documents to Carry</h3>
        <p className="text-on-surface-variant">Carry ANY ONE of these approved photo IDs:</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {acceptedIDs.map((id, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              className="flex items-center gap-2 p-3 bg-[#E6F7F2] rounded-xl border border-[#0B7A75]/20"
            >
              <span className="material-symbols-outlined text-[#0B7A75] text-sm">check_circle</span>
              <span className="text-on-surface text-sm">{id}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    ),
    6: (
      <div className="space-y-6">
        <h3 className="font-h2 text-2xl text-primary">At the Polling Station</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { stage: 'Queue', icon: 'groups', desc: 'Stand in line' },
            { stage: 'Verify', icon: 'verified_user', desc: 'Show your ID' },
            { stage: 'Ink', icon: 'ink_pen', desc: 'Finger marked' },
            { stage: 'Vote', icon: 'how_to_vote', desc: 'Go to EVM' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-[#C84B00] rounded-2xl flex items-center justify-center text-white shadow-lg sheen"
              >
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </motion.div>
              <p className="font-bold text-primary mt-2">{item.stage}</p>
              <p className="text-on-surface-variant text-xs">{item.desc}</p>
              {index < 3 && (
                <motion.div
                  className="hidden md:block absolute -right-8 top-1/2 w-8 h-1 timeline-line opacity-40 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    ),
    7: (
      <div className="space-y-6">
        <h3 className="font-h2 text-2xl text-primary">Cast Your Vote (EVM)</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {evmSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 10 }}
                className="flex gap-4 p-3 card-accent-left border-slate-100"
              >
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">{item.icon}</span>
                  <span className="text-on-surface text-sm">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-2xl text-white"
            >
              <h4 className="font-h3 text-lg mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">receipt</span> VVPAT
              </h4>
              <p className="text-white/80 text-sm">Paper slip appears for 7 seconds showing your vote for verification.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-orange-50 p-6 rounded-2xl border border-orange-100"
            >
              <h4 className="font-h3 text-lg text-orange-700 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">block</span> NOTA
              </h4>
              <p className="text-orange-600 text-sm">Don't like any candidate? Select "None of the Above" - last option on EVM.</p>
            </motion.div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="relative">
      {/* Header */}
      <FadeInUp className="text-center mb-12">
        <span className="section-label text-secondary">STEP BY STEP</span>
        <h1 className="font-h1 text-4xl md:text-5xl text-primary mt-4">Your Voting Guide</h1>
        <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
          Everything you need to know to cast your vote.
        </p>
      </FadeInUp>

      {/* Progress Steps */}
      <FadeInUp delay={0.2} className="mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {processSteps.map((step) => (
            <motion.button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-2xl transition-all ${
                activeStep === step.id
                  ? `${step.color} text-white shadow-lg`
                  : activeStep > step.id
                  ? 'bg-green-100 text-green-700'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              <motion.div
                animate={activeStep === step.id ? { rotate: [0, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep === step.id ? 'bg-white/20' : activeStep > step.id ? 'bg-green-200' : 'bg-white'
                }`}
              >
                {activeStep > step.id ? (
                  <span className="material-symbols-outlined text-green-600">check</span>
                ) : (
                  <span className="material-symbols-outlined">{step.icon}</span>
                )}
              </motion.div>
              <span className="text-xs font-medium hidden md:block">{step.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-2xl mx-auto">
          <AnimatedProgress progress={(activeStep / 7) * 100} />
          <p className="text-center text-sm text-slate-500 mt-2">Step {activeStep} of 7</p>
        </div>
      </FadeInUp>

      {/* Step Content */}
      <div className="card p-8 md:p-12 min-h-[400px] relative overflow-hidden noise-overlay">
        <FloatingElement className="absolute -right-20 -top-20 text-primary/5" duration={6}>
          <span className="material-symbols-outlined text-[200px]">{processSteps[activeStep - 1].icon}</span>
        </FloatingElement>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                {stepContent[activeStep as keyof typeof stepContent]}
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('ask-ai', { 
                    detail: `Help me understand step ${activeStep}: "${processSteps[activeStep-1].title}" in the voting process. What should I be careful about?` 
                  }));
                }}
                className="w-12 h-12 bg-secondary text-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 ml-4 sheen"
                title="Ask AI about this step"
              >
                <span className="material-symbols-outlined">smart_toy</span>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-12 pt-8 border-t border-slate-100">
          <motion.button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            whileHover={activeStep !== 1 ? { x: -5 } : {}}
            whileTap={activeStep !== 1 ? { scale: 0.95 } : {}}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-button ${
              activeStep === 1 ? 'bg-slate-100 text-slate-400' : 'bg-slate-100 text-primary hover:bg-slate-200'
            }`}
          >
            <span className="material-symbols-outlined">arrow_back</span> Previous
          </motion.button>

          {activeStep < 7 ? (
            <motion.button
              onClick={() => setActiveStep(activeStep + 1)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-button"
            >
              Next <span className="material-symbols-outlined">arrow_forward</span>
            </motion.button>
          ) : (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/quiz"
                className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-button"
              >
                Take Quiz <span className="material-symbols-outlined">quiz</span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Voter Rights */}
      <section className="mt-16">
        <FadeInUp className="text-center mb-8">
          <h2 className="font-h2 text-2xl text-primary">Your Rights as a Voter</h2>
        </FadeInUp>
        <StaggerContainer className="grid md:grid-cols-4 gap-4" staggerDelay={0.1}>
          {voterRights.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="card p-6 text-center"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-h3 text-lg text-primary">{item.right}</h3>
                <p className="text-on-surface-variant text-sm mt-2">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <ScaleIn className="mt-16">
        <div className="bg-gradient-to-br from-[#060F2A] via-primary to-primary-container p-12 rounded-3xl text-white text-center relative overflow-hidden noise-overlay sheen">
          <FloatingElement className="absolute -left-10 -top-10 text-white/10" duration={4}>
            <span className="material-symbols-outlined text-[150px]">quiz</span>
          </FloatingElement>
          <div className="relative z-10">
            <h2 className="font-h1 text-3xl mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              You know the process. Now prove it and earn your certificate!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-button text-lg"
              >
                <span className="material-symbols-outlined">quiz</span> Start Quiz
              </Link>
            </motion.div>
          </div>
        </div>
      </ScaleIn>
    </div>
  );
}
