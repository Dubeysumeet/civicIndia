import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

type Level = 'beginner' | 'intermediate' | 'advanced';
type QuizState = 'selection' | 'quiz' | 'result' | 'name-input';

interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export default function Quiz() {
  const [quizState, setQuizState] = useState<QuizState>('selection');
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [userName, setUserName] = useState('');
  const certificateRef = useRef<HTMLDivElement>(null);

  const levels = [
    {
      id: 'beginner' as Level,
      name: 'Beginner',
      description: 'Basic election concepts',
      questions: 10,
      passScore: 60,
      badge: 'Civic Learner',
      badgeColor: 'from-amber-400 to-amber-600',
      icon: 'school'
    },
    {
      id: 'intermediate' as Level,
      name: 'Intermediate',
      description: 'Process & rights knowledge',
      questions: 10,
      passScore: 70,
      badge: 'Informed Voter',
      badgeColor: 'from-slate-400 to-slate-600',
      icon: 'psychology'
    },
    {
      id: 'advanced' as Level,
      name: 'Advanced',
      description: 'Constitution & history deep dive',
      questions: 10,
      passScore: 80,
      badge: 'Civic Champion',
      badgeColor: 'from-yellow-400 to-yellow-600',
      icon: 'emoji_events'
    }
  ];

  const questionBank: Record<Level, Question[]> = {
    beginner: [
      { question: 'What is the minimum age to vote in India?', options: ['16 years', '18 years', '21 years', '25 years'], answer: 1, explanation: 'The voting age in India was reduced from 21 to 18 years by the 61st Constitutional Amendment in 1989.' },
      { question: 'Who conducts elections in India?', options: ['Supreme Court', 'Parliament', 'Election Commission', 'President'], answer: 2, explanation: 'The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering elections.' },
      { question: 'What does EVM stand for?', options: ['Electronic Voting Machine', 'Election Voting Method', 'Electoral Vote Mechanism', 'Easy Vote Machine'], answer: 0, explanation: 'EVM stands for Electronic Voting Machine, first used in India in 1982.' },
      { question: 'What is NOTA?', options: ['A political party', 'None of the Above option', 'Type of ballot', 'Voter ID'], answer: 1, explanation: 'NOTA (None of the Above) was introduced in 2013 by the Supreme Court, allowing voters to reject all candidates.' },
      { question: 'How often are Lok Sabha elections held?', options: ['Every 2 years', 'Every 4 years', 'Every 5 years', 'Every 6 years'], answer: 2, explanation: 'Lok Sabha elections are held every 5 years unless dissolved earlier.' },
      { question: 'What is National Voters Day?', options: ['26th January', '15th August', '25th January', '2nd October'], answer: 2, explanation: 'National Voters Day is celebrated on 25th January, the foundation day of ECI (1950).' },
      { question: 'What is the purpose of indelible ink?', options: ['Decoration', 'Prevent duplicate voting', 'Party symbol', 'Counting votes'], answer: 1, explanation: 'Indelible ink marks the finger to prevent a person from voting more than once.' },
      { question: 'What is a constituency?', options: ['Type of election', 'Geographic voting area', 'Political party', 'Voter ID'], answer: 1, explanation: 'A constituency is a geographic area that elects one representative to the legislature.' },
      { question: 'Which document is the primary ID for voting?', options: ['Aadhaar Card', 'PAN Card', 'Voter ID (EPIC)', 'Passport'], answer: 2, explanation: 'EPIC (Electoral Photo Identity Card) is the primary voting ID, though other IDs are also accepted.' },
      { question: 'What is VVPAT?', options: ['Voting app', 'Paper slip verification system', 'Voter registration form', 'Election officer'], answer: 1, explanation: 'VVPAT (Voter Verifiable Paper Audit Trail) shows a paper slip for 7 seconds to verify your vote.' },
    ],
    intermediate: [
      { question: 'Which article provides universal adult suffrage?', options: ['Article 14', 'Article 21', 'Article 324', 'Article 326'], answer: 3, explanation: 'Article 326 of the Indian Constitution provides for universal adult suffrage.' },
      { question: 'When was EVM first used in India?', options: ['1977', '1982', '1991', '2004'], answer: 1, explanation: 'EVMs were first used on an experimental basis in 1982 in Paravur, Kerala.' },
      { question: 'How many seats are in Lok Sabha?', options: ['500', '543', '545', '552'], answer: 1, explanation: 'Lok Sabha has 543 elected seats. 2 additional seats can be nominated by the President.' },
      { question: 'What was the voting age before 1989?', options: ['18 years', '19 years', '20 years', '21 years'], answer: 3, explanation: 'The 61st Constitutional Amendment (1989) reduced voting age from 21 to 18 years.' },
      { question: 'When was NOTA introduced?', options: ['2009', '2013', '2014', '2019'], answer: 1, explanation: 'NOTA was introduced in September 2013 following a Supreme Court judgment.' },
      { question: 'What is Model Code of Conduct?', options: ['Constitution chapter', 'Rules during elections', 'Voting process', 'Candidate eligibility'], answer: 1, explanation: 'MCC is a set of guidelines issued by ECI to regulate political parties and candidates during elections.' },
      { question: 'Minimum age to contest Lok Sabha elections?', options: ['18 years', '21 years', '25 years', '30 years'], answer: 2, explanation: 'A person must be at least 25 years old to contest Lok Sabha elections.' },
      { question: 'How long does VVPAT show the paper slip?', options: ['3 seconds', '5 seconds', '7 seconds', '10 seconds'], answer: 2, explanation: 'The VVPAT displays a paper slip for 7 seconds before it falls into a sealed box.' },
      { question: 'Which amendment reduced voting age to 18?', options: ['42nd', '52nd', '61st', '73rd'], answer: 2, explanation: 'The 61st Constitutional Amendment Act, 1988 (effective 1989) reduced voting age from 21 to 18.' },
      { question: 'What is the term of a Rajya Sabha member?', options: ['4 years', '5 years', '6 years', 'Lifetime'], answer: 2, explanation: 'Rajya Sabha members serve for 6 years, with one-third retiring every 2 years.' },
    ],
    advanced: [
      { question: "India's first general election had how many phases?", options: ['28', '48', '68', '88'], answer: 2, explanation: 'The first general election (1951-52) was conducted in 68 phases over 4 months.' },
      { question: 'Which article bars court interference in elections?', options: ['Article 324', 'Article 326', 'Article 329', 'Article 330'], answer: 2, explanation: 'Article 329 bars courts from interfering in electoral matters during the election process.' },
      { question: 'Who appoints the Chief Election Commissioner?', options: ['Prime Minister', 'Parliament', 'President', 'Supreme Court'], answer: 2, explanation: 'The President of India appoints the Chief Election Commissioner and Election Commissioners.' },
      { question: 'Which amendment introduced Panchayati Raj?', options: ['61st', '73rd', '74th', '86th'], answer: 1, explanation: 'The 73rd Constitutional Amendment (1992) established the Panchayati Raj system.' },
      { question: 'When was Election Commission established?', options: ['26th January 1950', '25th January 1950', '15th August 1947', '26th November 1949'], answer: 1, explanation: 'ECI was established on 25th January 1950, which is celebrated as National Voters Day.' },
      { question: 'Dr. Ambedkar called which article "Heart and Soul" of Constitution?', options: ['Article 14', 'Article 21', 'Article 32', 'Article 326'], answer: 2, explanation: 'Article 32 (Right to Constitutional Remedies) was called the "Heart and Soul" of the Constitution.' },
      { question: 'First state to use EVM in all constituencies?', options: ['Kerala', 'Goa', 'Delhi', 'Sikkim'], answer: 1, explanation: 'Goa became the first state to use EVMs in all constituencies in 1999.' },
      { question: 'How many registered voters in 2024 elections?', options: ['850 million', '900 million', '969 million', '1 billion'], answer: 2, explanation: 'The 2024 Lok Sabha elections had approximately 969 million registered voters.' },
      { question: 'Anti-defection law was introduced by which amendment?', options: ['42nd', '52nd', '61st', '73rd'], answer: 1, explanation: 'The 52nd Constitutional Amendment (1985) introduced the anti-defection law.' },
      { question: 'Which article deals with Election Commission?', options: ['Article 280', 'Article 300', 'Article 324', 'Article 352'], answer: 2, explanation: 'Article 324 deals with the superintendence, direction, and control of elections by the Election Commission.' },
    ]
  };

  const startQuiz = (level: Level) => {
    setSelectedLevel(level);
    if (!userName) {
      setQuizState('name-input');
    } else {
      initQuiz(level);
    }
  };

  const initQuiz = (level: Level) => {
    setQuizState('quiz');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const questions = questionBank[selectedLevel!];
    if (answerIndex === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setAnswers([...answers, answerIndex]);
  };

  const nextQuestion = () => {
    const questions = questionBank[selectedLevel!];
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizState('result');
    }
  };

  const resetQuiz = () => {
    setQuizState('selection');
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
  };

  const getCurrentLevel = () => levels.find(l => l.id === selectedLevel);
  const getPercentage = () => {
    const questions = questionBank[selectedLevel!];
    return Math.round((score / questions.length) * 100);
  };
  const isPassed = () => {
    const level = getCurrentLevel();
    return getPercentage() >= (level?.passScore || 0);
  };

  const getResultMessage = () => {
    const percentage = getPercentage();
    if (percentage >= 90) return { title: 'Outstanding!', message: "You're a true Civic Champion!", icon: 'star' };
    if (percentage >= 80) return { title: 'Excellent!', message: "Impressive knowledge! You're well-prepared to vote.", icon: 'thumb_up' };
    if (percentage >= 70) return { title: 'Great Job!', message: 'Good understanding! Review a few topics to strengthen your knowledge.', icon: 'sentiment_satisfied' };
    if (percentage >= 60) return { title: 'You Passed!', message: 'You made it! Consider revisiting some sections.', icon: 'check_circle' };
    return { title: 'Keep Learning!', message: "Don't give up! Review the material and try again.", icon: 'refresh' };
  };
  const downloadCertificate = () => {
    if (!certificateRef.current) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set dimensions for a high-quality certificate
    canvas.width = 1200;
    canvas.height = 800;

    // Draw Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Border
    ctx.strokeStyle = '#0B1F4A';
    ctx.lineWidth = 20;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    ctx.strokeStyle = '#D4880A';
    ctx.lineWidth = 5;
    ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

    // Text Content
    ctx.textAlign = 'center';
    
    // Header
    ctx.fillStyle = '#0B1F4A';
    ctx.font = 'bold 60px Inter, sans-serif';
    ctx.fillText('CERTIFICATE OF CIVIC KNOWLEDGE', canvas.width / 2, 200);

    // Subtitle
    ctx.fillStyle = '#64748b';
    ctx.font = '30px Inter, sans-serif';
    ctx.fillText('This is to certify that', canvas.width / 2, 280);

    // Name
    ctx.fillStyle = '#C84B00';
    ctx.font = 'bold 80px Lexend, sans-serif';
    ctx.fillText(userName || 'Civic Learner', canvas.width / 2, 400);

    // Achievement
    ctx.fillStyle = '#1e293b';
    ctx.font = '35px Inter, sans-serif';
    ctx.fillText('has successfully completed the', canvas.width / 2, 480);
    ctx.fillText(`${getCurrentLevel()?.name} Level Quiz on Indian Elections`, canvas.width / 2, 530);

    // Stats
    ctx.fillStyle = '#0B1F4A';
    ctx.font = 'bold 40px Inter, sans-serif';
    ctx.fillText(`Score: ${getPercentage()}%`, canvas.width / 2, 630);

    // Date & Footer
    ctx.fillStyle = '#94a3b8';
    ctx.font = '20px sans-serif';
    ctx.fillText(`Awarded on ${new Date().toLocaleDateString()}`, canvas.width / 2, 720);
    ctx.fillText('CivicLearn India - Empowerment through Knowledge', canvas.width / 2, 750);

    // Trigger Download
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `CivicLearn_Certificate_${userName.replace(/\s+/g, '_') || 'Learner'}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to generate download. Please try again or take a screenshot.");
    }
  };
  return (
    <>
      {/* Level Selection */}
      {quizState === 'selection' && (
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label text-secondary">TEST YOUR KNOWLEDGE</span>
            <h1 className="font-h1 text-4xl md:text-5xl text-primary mt-4">Choose Your Level</h1>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
              Select a difficulty level and test your understanding of India's electoral system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => startQuiz(level.id)}
                className="card p-8 text-left group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${level.badgeColor} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform noise-overlay sheen`}>
                  <span className="material-symbols-outlined text-3xl">{level.icon}</span>
                </div>
                <h3 className="font-h2 text-2xl text-primary mb-2">{level.name}</h3>
                <p className="text-on-surface-variant mb-4">{level.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Questions:</span>
                    <span className="font-medium">{level.questions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Pass Score:</span>
                    <span className="font-medium">{level.passScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Certificate:</span>
                    <span className="font-medium text-secondary">{level.badge}</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 text-primary font-button group-hover:gap-3 transition-all">
                  Start Quiz <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-on-surface-variant">
              Complete all levels to earn the <span className="font-bold text-primary">Democracy Expert</span> platinum badge!
            </p>
          </div>
        </div>
      )}
      {/* Name Input */}
      {quizState === 'name-input' && (
        <div className="max-w-xl mx-auto text-center py-12">
          <div className="card p-10 noise-overlay sheen">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
              <span className="material-symbols-outlined text-4xl">person_edit</span>
            </div>
            <h2 className="font-h1 text-3xl text-primary mb-4">What's Your Name?</h2>
            <p className="text-on-surface-variant mb-8">
              We'll use this to personalize your learning journey and your certificates.
            </p>
            <div className="relative mb-8">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-6 py-4 text-lg focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-center outline-none"
                autoFocus
                onKeyPress={(e) => e.key === 'Enter' && userName && initQuiz(selectedLevel!)}
              />
            </div>
            <button
              onClick={() => userName && initQuiz(selectedLevel!)}
              disabled={!userName}
              className="w-full bg-primary text-white py-4 rounded-xl font-button text-lg shadow-lg shadow-primary/20 hover:bg-primary-container transition-all disabled:opacity-50 disabled:grayscale"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      )}
      {/* Quiz */}
      {quizState === 'quiz' && selectedLevel && (
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-on-surface-variant text-sm">
                Question {currentQuestion + 1} of {questionBank[selectedLevel].length}
              </span>
              <span className="font-h3 text-primary">
                {Math.round(((currentQuestion + 1) / questionBank[selectedLevel].length) * 100)}%
              </span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden timeline-line opacity-20">
              <div
                className="h-full bg-gradient-to-r from-[#C84B00] to-primary transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questionBank[selectedLevel].length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="card p-8 md:p-12 noise-overlay">
            <div className="flex items-center gap-4 mb-6">
              <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getCurrentLevel()?.badgeColor} text-white`}>
                {getCurrentLevel()?.name}
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span className="text-sm">{score} correct</span>
              </div>
            </div>

            <h2 className="font-h2 text-2xl text-primary mb-8">
              {questionBank[selectedLevel][currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questionBank[selectedLevel][currentQuestion].options.map((option, index) => {
                const isCorrect = index === questionBank[selectedLevel][currentQuestion].answer;
                const isSelected = index === selectedAnswer;

                let buttonClass = 'border-2 border-slate-200 hover:border-primary hover:bg-primary/5';
                if (showExplanation) {
                  if (isCorrect) {
                    buttonClass = 'border-2 border-green-500 bg-green-50';
                  } else if (isSelected && !isCorrect) {
                    buttonClass = 'border-2 border-red-500 bg-red-50';
                  } else {
                    buttonClass = 'border-2 border-slate-200 opacity-50';
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-5 rounded-xl transition-all flex items-center justify-between ${buttonClass}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        showExplanation && isCorrect ? 'bg-green-500 text-white' :
                        showExplanation && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-on-surface">{option}</span>
                    </div>
                    {showExplanation && isCorrect && (
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                    )}
                    {showExplanation && isSelected && !isCorrect && (
                      <span className="material-symbols-outlined text-red-500">cancel</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className={`mt-6 p-6 rounded-xl ${selectedAnswer === questionBank[selectedLevel][currentQuestion].answer ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
                <div className="flex items-start gap-3">
                  <span className={`material-symbols-outlined ${selectedAnswer === questionBank[selectedLevel][currentQuestion].answer ? 'text-green-600' : 'text-orange-600'}`}>
                    {selectedAnswer === questionBank[selectedLevel][currentQuestion].answer ? 'lightbulb' : 'info'}
                  </span>
                  <div>
                    <h4 className={`font-bold mb-1 ${selectedAnswer === questionBank[selectedLevel][currentQuestion].answer ? 'text-green-700' : 'text-orange-700'}`}>
                      {selectedAnswer === questionBank[selectedLevel][currentQuestion].answer ? 'Correct!' : 'Explanation'}
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      {questionBank[selectedLevel][currentQuestion].explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Next Button */}
            {showExplanation && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={nextQuestion}
                  className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-button hover:bg-primary-container transition-colors"
                >
                  {currentQuestion < questionBank[selectedLevel].length - 1 ? 'Next Question' : 'See Results'}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            )}
          </div>

          {/* Quit Button */}
          <div className="mt-6 text-center">
            <button
              onClick={resetQuiz}
              className="text-slate-500 hover:text-primary transition-colors text-sm"
            >
              Quit Quiz
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {quizState === 'result' && selectedLevel && (
        <div className="max-w-2xl mx-auto text-center">
          {/* Result Card */}
          <div className={`rounded-3xl p-12 mb-8 noise-overlay sheen ${isPassed() ? 'bg-gradient-to-br from-[#060F2A] via-primary to-primary-container text-white shadow-xl' : 'card bg-slate-100 text-on-surface'}`}>
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${isPassed() ? 'bg-white/20' : 'bg-slate-200'}`}>
              <span className={`material-symbols-outlined text-5xl ${isPassed() ? 'text-white' : 'text-slate-500'}`}>
                {getResultMessage().icon}
              </span>
            </div>

            <h1 className="font-h1 text-4xl mb-2">{getResultMessage().title}</h1>
            <p className={`text-lg mb-8 ${isPassed() ? 'text-white/80' : 'text-on-surface-variant'}`}>
              {getResultMessage().message}
            </p>

            <div className="flex justify-center gap-8 mb-8">
              <div className={`p-6 rounded-2xl ${isPassed() ? 'bg-white/10' : 'bg-white'}`}>
                <p className={`text-sm mb-1 ${isPassed() ? 'text-white/60' : 'text-slate-500'}`}>Score</p>
                <p className="font-h1 text-3xl">{score}/{questionBank[selectedLevel].length}</p>
              </div>
              <div className={`p-6 rounded-2xl ${isPassed() ? 'bg-white/10' : 'bg-white'}`}>
                <p className={`text-sm mb-1 ${isPassed() ? 'text-white/60' : 'text-slate-500'}`}>Percentage</p>
                <p className="font-h1 text-3xl">{getPercentage()}%</p>
              </div>
              <div className={`p-6 rounded-2xl ${isPassed() ? 'bg-white/10' : 'bg-white'}`}>
                <p className={`text-sm mb-1 ${isPassed() ? 'text-white/60' : 'text-slate-500'}`}>Level</p>
                <p className="font-h1 text-3xl">{getCurrentLevel()?.name}</p>
              </div>
            </div>

            {isPassed() && (
              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${getCurrentLevel()?.badgeColor}`}>
                <span className="material-symbols-outlined">workspace_premium</span>
                <span className="font-bold">{getCurrentLevel()?.badge} Certificate Earned!</span>
              </div>
            )}
          </div>

          {/* Certificate Preview (if passed) */}
          {isPassed() && (
            <div ref={certificateRef} className="card p-8 mb-8 border-4 border-double border-primary/20 bg-dot-pattern">
              <div className="border-2 border-primary/10 rounded-xl p-8">
                <div className="flex justify-center mb-4">
                  <span className="material-symbols-outlined text-6xl text-secondary">verified</span>
                </div>
                <h2 className="font-h1 text-2xl text-primary mb-2">Certificate of Civic Knowledge</h2>
                <p className="text-on-surface-variant mb-6">This certifies that</p>
                <p className="font-h2 text-3xl text-primary mb-6">{userName || 'Civic Learner'}</p>
                <p className="text-on-surface-variant mb-4">
                  has successfully demonstrated knowledge of the Indian Electoral System
                </p>
                <div className="flex justify-center gap-8 text-sm">
                  <div>
                    <p className="text-slate-500">Level</p>
                    <p className="font-bold text-primary">{getCurrentLevel()?.name}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Score</p>
                    <p className="font-bold text-primary">{getPercentage()}%</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Badge</p>
                    <p className="font-bold text-secondary">{getCurrentLevel()?.badge}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-400">CivicLearn India | {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            {isPassed() ? (
              <>
                <button 
                  onClick={downloadCertificate}
                  className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-button hover:bg-primary-container transition-colors"
                >
                  <span className="material-symbols-outlined">download</span>
                  Download Certificate
                </button>
                <button className="flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-button hover:bg-orange-600 transition-colors">
                  <span className="material-symbols-outlined">share</span>
                  Share Achievement
                </button>
              </>
            ) : (
              <button
                onClick={() => startQuiz(selectedLevel)}
                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-button hover:bg-primary-container transition-colors"
              >
                <span className="material-symbols-outlined">refresh</span>
                Try Again
              </button>
            )}
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 bg-slate-100 text-primary px-8 py-4 rounded-xl font-button hover:bg-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined">grid_view</span>
              Choose Another Level
            </button>
          </div>

          {/* Next Steps */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-h3 text-lg text-primary mb-4">What's Next?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {!isPassed() && (
                <Link to="/learn" className="flex items-center gap-2 text-primary hover:underline">
                  <span className="material-symbols-outlined text-sm">school</span>
                  Review Learning Materials
                </Link>
              )}
              {isPassed() && selectedLevel !== 'advanced' && (
                <button
                  onClick={() => startQuiz(selectedLevel === 'beginner' ? 'intermediate' : 'advanced')}
                  className="flex items-center gap-2 text-secondary hover:underline"
                >
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  Try Next Level
                </button>
              )}
              <a href="https://voters.eci.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                <span className="material-symbols-outlined text-sm">how_to_vote</span>
                Register to Vote
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
