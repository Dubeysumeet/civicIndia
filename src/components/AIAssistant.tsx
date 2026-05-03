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

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!API_KEY || API_KEY === 'undefined') {
        throw new Error("VITE_GEMINI_API_KEY is not defined. Please restart your 'npm run dev' command to load the .env file.");
      }

      // Using gemini-2.5-flash as requested
      let model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      // Contextual prompt to keep it focused on Indian Elections
      const prompt = `You are a helpful and professional AI assistant for "CivicLearn India", a premium educational platform about Indian elections. 
      Keep your answers concise, accurate, and educational. Use a professional yet friendly tone. 
      Focus ONLY on Indian elections, the constitution, voting process, and civic duties.
      
      User says: ${userMessage}`;

      let result;
      try {
        result = await model.generateContent(prompt);
      } catch (firstError: any) {
        // Fallback if 2.5-flash fails
        if (firstError.message?.includes("404") || firstError.message?.includes("not found")) {
          console.warn("Gemini 2.5 Flash 404, trying gemini-pro fallback...");
          const fallbackModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
          result = await fallbackModel.generateContent(prompt);
        } else {
          throw firstError;
        }
      }

      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error: any) {
      console.error("Gemini Error:", error);
      let errorMessage = "I apologize, I'm having a bit of trouble connecting. Please try again in a moment.";
      
      if (error.message?.includes("VITE_GEMINI_API_KEY")) {
        errorMessage = error.message;
      } else if (error.message?.includes("API_KEY_INVALID")) {
        errorMessage = "The API key provided seems to be invalid. Please check your configuration in AI Studio.";
      } else if (error.message?.includes("404")) {
        errorMessage = "Model not found (404). Your API key might not have access to this specific model yet. Please check your AI Studio settings.";
      }
      
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body-md">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-border flex flex-col overflow-hidden noise-overlay"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex justify-between items-center sheen">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">smart_toy</span>
                </div>
                <div>
                  <h3 className="font-h2 text-sm">Civic Assistant</h3>
                  <p className="text-[10px] text-white/60 tracking-widest uppercase">Powered by Gemini AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-dot-pattern"
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
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
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
                  className="w-full bg-slate-100 border-none rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-container transition-colors disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
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
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen ? 'bg-white text-primary rotate-90' : 'bg-primary text-white shadow-primary/20'
        } sheen`}
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white animate-pulse"></span>
        )}
      </motion.button>
    </div>
  );
}
