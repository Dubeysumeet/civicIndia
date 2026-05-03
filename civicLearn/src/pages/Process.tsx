import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  const eligibilityCriteria = [
    { label: 'Age', value: 'Must be 18 years or above on January 1st of the year', icon: 'cake' },
    { label: 'Citizenship', value: 'Must be Indian citizen', icon: 'flag' },
    { label: 'Residence', value: 'Must be ordinary resident of the constituency', icon: 'home' },
    { label: 'Not Disqualified', value: 'Should not be of unsound mind (declared by court)', icon: 'verified_user' },
  ];

  const registrationMethods = [
    { method: 'Online', steps: 'Visit voters.eci.gov.in → Fill Form 6 → Upload documents → Submit', icon: 'computer' },
    { method: 'Offline', steps: 'Get Form 6 from BLO/ERO office → Fill & attach documents → Submit', icon: 'description' },
    { method: 'App', steps: 'Download Voter Helpline App → Register through app', icon: 'smartphone' },
  ];

  const requiredDocuments = [
    'Proof of Age (Birth certificate, 10th marksheet, passport)',
    'Proof of Address (Aadhaar, utility bills, bank statement)',
    'Passport size photograph',
  ];

  const acceptedIDs = [
    'Voter ID Card (EPIC)',
    'Aadhaar Card',
    'Passport',
    'Driving License',
    'PAN Card',
    'Bank/Post Office Passbook with photo',
    'MNREGA Job Card',
    'Pension document with photo',
    'Service ID of Central/State Govt',
    'Student ID (for students)',
    'Property document with photo',
    'Smart Card issued by RGI',
  ];

  const evmSteps = [
    { step: 1, instruction: 'Enter the voting compartment (private booth)' },
    { step: 2, instruction: 'Look at the EVM - shows candidate names, symbols, and buttons' },
    { step: 3, instruction: 'Press the button next to your chosen candidate' },
    { step: 4, instruction: "You'll hear a beep and light will glow" },
    { step: 5, instruction: 'VVPAT will show a paper slip for 7 seconds' },
    { step: 6, instruction: 'Verify your vote on the slip' },
    { step: 7, instruction: 'Exit the booth' },
  ];

  const voterRights = [
    { right: 'Right to Vote', description: 'Cannot be denied based on religion, caste, gender', icon: 'how_to_vote' },
    { right: 'Secret Ballot', description: 'No one can ask who you voted for', icon: 'lock' },
    { right: 'NOTA', description: 'Right to reject all candidates', icon: 'block' },
    { right: 'Accessible Voting', description: 'Special facilities for disabled voters', icon: 'accessible' },
    { right: 'Paid Leave', description: 'Employers must give leave on voting day', icon: 'event_available' },
    { right: 'Assistance', description: 'Can request help if unable to vote independently', icon: 'support' },
  ];

  const faqs = [
    { question: 'What if my name is not in the list?', answer: 'Apply for inclusion using Form 6 before the deadline.' },
    { question: 'Can I vote without Voter ID?', answer: 'Yes, with any of the 12 approved photo IDs listed above.' },
    { question: 'What if EVM malfunctions?', answer: 'Inform the presiding officer immediately. The machine will be replaced.' },
    { question: 'Can I change my vote?', answer: 'No, once the button is pressed, your vote is final.' },
    { question: 'What if VVPAT shows wrong candidate?', answer: 'Immediately inform the officer. Your vote will be recorded on paper ballot instead.' },
  ];

  const processSteps = [
    {
      id: 1,
      title: 'Check Eligibility',
      shortTitle: 'Eligibility',
      icon: 'checklist',
      phase: 'before'
    },
    {
      id: 2,
      title: 'Register as Voter',
      shortTitle: 'Register',
      icon: 'app_registration',
      phase: 'before'
    },
    {
      id: 3,
      title: 'Get Voter ID',
      shortTitle: 'Voter ID',
      icon: 'badge',
      phase: 'before'
    },
    {
      id: 4,
      title: 'Find Polling Station',
      shortTitle: 'Find Booth',
      icon: 'location_on',
      phase: 'before'
    },
    {
      id: 5,
      title: 'Documents to Carry',
      shortTitle: 'Documents',
      icon: 'folder_open',
      phase: 'on-day'
    },
    {
      id: 6,
      title: 'At Polling Station',
      shortTitle: 'At Booth',
      icon: 'domain',
      phase: 'on-day'
    },
    {
      id: 7,
      title: 'Cast Your Vote',
      shortTitle: 'Vote',
      icon: 'how_to_vote',
      phase: 'on-day'
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-secondary font-label-caps tracking-widest">STEP BY STEP GUIDE</span>
        <h1 className="font-h1 text-4xl md:text-5xl text-primary mt-4">Your Complete Voting Guide</h1>
        <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
          From registration to casting your vote - everything you need to know to participate in India's democracy.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-12 overflow-x-auto pb-4">
        <div className="flex justify-center gap-2 min-w-max px-4">
          {processSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                activeStep === step.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : activeStep > step.id
                  ? 'bg-green-100 text-green-700'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeStep === step.id ? 'bg-white/20' : activeStep > step.id ? 'bg-green-200' : 'bg-white'
              }`}>
                {activeStep > step.id ? (
                  <span className="material-symbols-outlined text-green-600">check</span>
                ) : (
                  <span className="material-symbols-outlined">{step.icon}</span>
                )}
              </div>
              <span className="text-xs font-medium whitespace-nowrap">{step.shortTitle}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Phase Indicator */}
      <div className="flex justify-center gap-4 mb-8">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${activeStep <= 4 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
          Before Election Day
        </span>
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${activeStep >= 5 ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-500'}`}>
          On Election Day
        </span>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12 min-h-[500px]">
        {/* Step 1: Eligibility */}
        {activeStep === 1 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">checklist</span>
              </div>
              <div>
                <span className="text-secondary font-label-caps">Step 1</span>
                <h2 className="font-h2 text-2xl text-primary">Check Your Eligibility</h2>
              </div>
            </div>

            <p className="text-on-surface-variant text-lg mb-8">
              Before registering, make sure you meet all the eligibility criteria to vote in Indian elections.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">{criteria.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{criteria.label}</h4>
                    <p className="text-on-surface-variant text-sm">{criteria.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
              <p className="text-primary font-medium">
                <span className="material-symbols-outlined align-middle mr-2">info</span>
                The qualifying date for age is January 1st of the year. If you turn 18 after January 1st, you'll need to wait for the next enrollment period.
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Register */}
        {activeStep === 2 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">app_registration</span>
              </div>
              <div>
                <span className="text-secondary font-label-caps">Step 2</span>
                <h2 className="font-h2 text-2xl text-primary">Register as a Voter</h2>
              </div>
            </div>

            <p className="text-on-surface-variant text-lg mb-8">
              You can register to vote through multiple methods. Choose the one most convenient for you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {registrationMethods.map((method, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">{method.icon}</span>
                  </div>
                  <h3 className="font-h3 text-lg text-primary mb-2">{method.method}</h3>
                  <p className="text-on-surface-variant text-sm">{method.steps}</p>
                </div>
              ))}
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <h3 className="font-h3 text-lg text-secondary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">folder</span>
                Required Documents
              </h3>
              <ul className="space-y-2">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                    <span className="text-on-surface-variant">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://voters.eci.gov.in"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-button hover:bg-primary-container transition-colors"
            >
              Register Online Now <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        )}

        {/* Step 3: Voter ID */}
        {activeStep === 3 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">badge</span>
              </div>
              <div>
                <span className="text-secondary font-label-caps">Step 3</span>
                <h2 className="font-h2 text-2xl text-primary">Get Your Voter ID (EPIC)</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-h3 text-lg text-primary mb-4">What is EPIC?</h3>
                <p className="text-on-surface-variant mb-4">
                  Electoral Photo Identity Card (EPIC) is the primary ID for voting. It's automatically sent after your registration is approved.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span className="text-on-surface-variant">Contains your photo and details</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span className="text-on-surface-variant">Unique EPIC number for identification</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span className="text-on-surface-variant">Can be used as general ID proof</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-xl text-white">
                <h3 className="font-h3 text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">download</span>
                  Download e-EPIC
                </h3>
                <p className="text-white/80 mb-4">Get digital version of your Voter ID</p>
                <ol className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    Visit voters.eci.gov.in
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    Login with mobile/email
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    Go to "Download e-EPIC"
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    Download PDF voter ID
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Find Polling Station */}
        {activeStep === 4 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <div>
                <span className="text-secondary font-label-caps">Step 4</span>
                <h2 className="font-h2 text-2xl text-primary">Find Your Polling Station</h2>
              </div>
            </div>

            <p className="text-on-surface-variant text-lg mb-8">
              Before election day, make sure you know exactly where to go to cast your vote.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">computer</span>
                </div>
                <h3 className="font-h3 text-lg text-primary mb-2">Online</h3>
                <p className="text-on-surface-variant text-sm">
                  voters.eci.gov.in → Search Electoral Roll → View polling station
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">sms</span>
                </div>
                <h3 className="font-h3 text-lg text-primary mb-2">SMS</h3>
                <p className="text-on-surface-variant text-sm">
                  Send EPIC&lt;space&gt;EPIC_NUMBER to 1950
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">smartphone</span>
                </div>
                <h3 className="font-h3 text-lg text-primary mb-2">App</h3>
                <p className="text-on-surface-variant text-sm">
                  Voter Helpline App → Know Your Polling Booth
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary/10 rounded-xl">
              <p className="text-secondary font-medium">
                <span className="material-symbols-outlined align-middle mr-2">tips_and_updates</span>
                Pro Tip: Visit your polling station before election day to familiarize yourself with the location and avoid confusion.
              </p>
            </div>
          </div>
        )}

        {/* Step 5: Documents */}
        {activeStep === 5 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">folder_open</span>
              </div>
              <div>
                <span className="text-secondary font-label-caps">Step 5 - Election Day</span>
                <h2 className="font-h2 text-2xl text-primary">Documents to Carry</h2>
              </div>
            </div>

            <p className="text-on-surface-variant text-lg mb-8">
              You need to carry any ONE of the following approved photo IDs to the polling station.
            </p>

            <div className="grid md:grid-cols-3 gap-3">
              {acceptedIDs.map((id, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span className="text-on-surface text-sm">{id}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
              <p className="text-primary font-medium">
                <span className="material-symbols-outlined align-middle mr-2">info</span>
                Voter ID is preferred but not mandatory. You can vote with any of the 12 approved IDs as long as your name is in the electoral roll.
              </p>
            </div>
          </div>
        )}

        {/* Step 6: At Polling Station */}
        {activeStep === 6 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">domain</span>
              </div>
              <div>
                <span className="text-secondary font-label-caps">Step 6 - Election Day</span>
                <h2 className="font-h2 text-2xl text-primary">At the Polling Station</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { stage: 'Queue', description: 'Stand in line at your designated booth', icon: 'groups' },
                { stage: 'Verification', description: 'Officer checks your ID and marks name', icon: 'verified_user' },
                { stage: 'Indelible Ink', description: 'Left index finger marked with ink', icon: 'ink_pen' },
                { stage: 'Proceed', description: 'Go to EVM booth to cast vote', icon: 'arrow_forward' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100">
                    <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <h3 className="font-h3 text-primary mb-2">{item.stage}</h3>
                    <p className="text-on-surface-variant text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <span className="material-symbols-outlined text-secondary">chevron_right</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
              <h3 className="font-h3 text-purple-700 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">ink_pen</span>
                About Indelible Ink
              </h3>
              <p className="text-purple-600 text-sm">
                The ink mark on your finger stays for 2-4 weeks. It prevents duplicate voting and is a proud symbol of participating in democracy!
              </p>
            </div>
          </div>
        )}

        {/* Step 7: Cast Vote */}
        {activeStep === 7 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">how_to_vote</span>
              </div>
              <div>
                <span className="text-secondary font-label-caps">Step 7 - Election Day</span>
                <h2 className="font-h2 text-2xl text-primary">Cast Your Vote (EVM Process)</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-h3 text-lg text-primary mb-4">How to Use the EVM</h3>
                <div className="space-y-3">
                  {evmSteps.map((item) => (
                    <div key={item.step} className="flex gap-4 p-3 bg-slate-50 rounded-xl">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {item.step}
                      </div>
                      <p className="text-on-surface-variant">{item.instruction}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-xl text-white">
                  <h3 className="font-h3 text-lg mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">receipt</span>
                    VVPAT Verification
                  </h3>
                  <p className="text-white/80 text-sm">
                    After pressing the button, a paper slip appears for 7 seconds showing your vote. This is your verification that the vote was recorded correctly.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h3 className="font-h3 text-orange-700 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined">block</span>
                    NOTA Option
                  </h3>
                  <p className="text-orange-600 text-sm">
                    If you don't want to vote for any candidate, you can select "None of the Above" (NOTA) - the last option on the EVM. Your right to reject is protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12 pt-8 border-t border-slate-100">
          <button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-button transition-all ${
              activeStep === 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-100 text-primary hover:bg-slate-200'
            }`}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Previous
          </button>

          {activeStep < 7 ? (
            <button
              onClick={() => setActiveStep(activeStep + 1)}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-button hover:bg-primary-container transition-all"
            >
              Next Step
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          ) : (
            <Link
              to="/quiz"
              className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-button hover:bg-orange-600 transition-all"
            >
              Take the Quiz
              <span className="material-symbols-outlined">quiz</span>
            </Link>
          )}
        </div>
      </div>

      {/* Your Rights Section */}
      <section className="mt-16">
        <h2 className="font-h2 text-2xl text-primary mb-8 text-center">Your Rights as a Voter</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {voterRights.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-h3 text-lg text-primary mb-2">{item.right}</h3>
              <p className="text-on-surface-variant text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="font-h2 text-2xl text-primary mb-8 text-center">Common Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 group">
              <summary className="flex justify-between items-center cursor-pointer font-h3 text-primary list-none">
                {faq.question}
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant pt-4 border-t border-slate-100">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 bg-gradient-to-br from-primary to-primary-container p-12 rounded-3xl text-white text-center">
        <h2 className="font-h1 text-3xl mb-4">Ready to Test Your Knowledge?</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          You've learned the complete voting process. Now prove your understanding and earn your Civic Champion certificate!
        </p>
        <Link
          to="/quiz"
          className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-button text-lg hover:bg-orange-600 transition-colors"
        >
          <span className="material-symbols-outlined">quiz</span>
          Take the Quiz
        </Link>
      </section>
    </>
  );
}
