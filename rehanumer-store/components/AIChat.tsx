import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { getShoppingAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Rehanumer's AI Assistant. Looking for something specific? I can help!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await getShoppingAssistantResponse(messages, userMsg.text);
    
    setMessages((prev) => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
      >
        <MessageCircle size={24} />
        <span className="font-medium hidden sm:inline">Ask AI</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <h3 className="font-semibold">Rehanumer Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-700 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-slate-200 text-slate-500 text-xs py-2 px-3 rounded-full animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about products..."
              className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
