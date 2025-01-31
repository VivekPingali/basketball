import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey there! 👋 How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    const userInput = input;
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you find the perfect basketball gear!",
        "Our premium collection features professional-grade equipment.",
        "Would you like to know more about our latest products?",
        "Feel free to ask any questions about our equipment!",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-2xl z-50">
          <div className="p-4 bg-navy-900 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 bg-sand-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-white text-navy-900'
                      : 'bg-orange-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;