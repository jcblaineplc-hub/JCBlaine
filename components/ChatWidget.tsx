import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';
import { Icons } from '../constants';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Hello. I am the virtual intake assistant for JCBlaine, PLC. How can we assist with your cross-border legal needs today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userText }]);
    setIsLoading(true);

    // Get response from Gemini
    const responseText = await sendMessageToGemini(userText);

    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 rounded-lg shadow-2xl border border-slate-200 mb-4 overflow-hidden flex flex-col animate-fade-in-up" style={{ maxHeight: '500px', height: '60vh' }}>
          {/* Header */}
          <div className="bg-law-blue p-4 flex justify-between items-center text-white">
            <div className="flex items-center">
              <div className="bg-green-400 w-2 h-2 rounded-full mr-2"></div>
              <span className="font-semibold text-sm">JCBlaine Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
              <Icons.X />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-sm ${
                    msg.role === ChatRole.USER 
                      ? 'bg-law-blue text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-lg rounded-bl-none px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-law-blue focus:ring-1 focus:ring-law-blue"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className={`bg-law-silver text-white p-2 rounded-full hover:bg-slate-500 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Icons.Send />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-law-blue hover:bg-blue-800 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
      >
        {isOpen ? <Icons.X /> : <Icons.Chat />}
      </button>
    </div>
  );
};