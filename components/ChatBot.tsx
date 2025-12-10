import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! I am Nova. How can I help you optimize your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass only the last few messages for context to keep token usage optimized, 
      // though Gemini can handle large context.
      const response = await generateChatResponse(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`bg-secondary border border-slate-700 shadow-2xl rounded-2xl w-80 sm:w-96 mb-4 overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto flex flex-col ${
          isOpen ? 'opacity-100 scale-100 translate-y-0 h-[500px]' : 'opacity-0 scale-95 translate-y-10 h-0'
        }`}
      >
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-accent p-1.5 rounded-lg">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">Nova Assistant</h3>
              <span className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Online
              </span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-slate-700' : 'bg-accent/20 text-accent'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                msg.role === 'user' 
                  ? 'bg-accent text-white rounded-tr-none' 
                  : 'bg-secondary border border-slate-700 text-slate-200 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2">
               <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                 <Bot size={16} />
               </div>
               <div className="bg-secondary border border-slate-700 rounded-lg p-3 rounded-tl-none flex items-center gap-1">
                 <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                 <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AI or Cloud..."
            className="flex-1 bg-secondary border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="bg-accent hover:bg-accentHover text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-accent hover:bg-accentHover text-white p-4 rounded-full shadow-lg shadow-accent/30 transition-all duration-300 hover:scale-110 pointer-events-auto"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatBot;