import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Namaste! I am your Civic Assistant. How can I help you learn about Indian elections today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleExternalAsk = (e: any) => {
      const question = e.detail;
      if (question) {
        setIsOpen(true);
        setInput(question);
        // We'll let the user click send, or we could auto-send.
        // For now, let's just populate the input to give them control.
      }
    };
    window.addEventListener('ask-ai', handleExternalAsk);
    return () => window.removeEventListener('ask-ai', handleExternalAsk);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Security: Limit input length to prevent token abuse
    if (input.length > 500) {
      setMessages(prev => [...prev, { role: 'model', text: "Your message is a bit too long. Please keep it under 500 characters." }]);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!API_KEY || API_KEY === 'undefined') {
        throw new Error("API Key missing. Please check your environment configuration.");
      }

      // Using gemini-1.5-flash for optimal speed and efficiency
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `You are a helpful and professional AI assistant for "CivicLearn India".
      Focus ONLY on Indian elections, constitution, and civic duties. 
      Tone: Professional, friendly, educational.
      User question: ${userMessage}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error: any) {
      console.error("Gemini Error:", error);
      let errorMessage = "I'm having trouble connecting to the brain. Please try again.";
      if (error.message?.includes("API_KEY_INVALID")) errorMessage = "Invalid API Key.";
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body-md" role="region" aria-label="AI Assistant">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Civic Assistant Chat"
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-border flex flex-col overflow-hidden noise-overlay"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex justify-between items-center sheen">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary" aria-hidden="true">smart_toy</span>
                </div>
                <div>
                  <h3 className="font-h2 text-sm">Civic Assistant</h3>
                  <p className="text-[10px] text-white/60 tracking-widest uppercase">Powered by Gemini AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">close</span>
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-dot-pattern"
              aria-live="polite"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-white rounded-tr-none' 
                      : 'bg-slate-100 text-on-surface rounded-tl-none border border-slate-200'
                  }`}>
                    <span className="sr-only">{msg.role === 'user' ? 'You:' : 'Assistant:'}</span>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start" aria-label="Assistant is typing">
                  <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none border border-slate-200 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about elections..."
                  aria-label="Ask about elections"
                  className="w-full bg-slate-100 border-none rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  aria-label="Send message"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-container transition-colors disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">send</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Assistant" : "Open AI Civic Assistant"}
        aria-expanded={isOpen}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen ? 'bg-white text-primary rotate-90' : 'bg-primary text-white shadow-primary/20'
        } sheen`}
      >
        <span className="material-symbols-outlined text-3xl" aria-hidden="true">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white animate-pulse"></span>
        )}
      </motion.button>
    </div>
  );
}
