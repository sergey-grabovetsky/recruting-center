"use client";

import { useState, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Вітаємо! Я рекрутер [Назва вашого загону]. Як я можу вам допомогти?", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    "Які вакансії зараз є?",
    "Які умови контракту?",
    "Як подати заявку?",
    "Хочу зв'язатися з рекрутером"
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");

    // Імітація відповіді
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Дякую за запитання! Наш рекрутер зв'яжеться з вами найближчим часом по телефону або в Telegram. Залиште ваш номер?", 
        isBot: true 
      }]);
    }, 900);
  };

  return (
    <>
      {/* Плаваюча кнопка */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#166534] hover:bg-[#14532d] text-white p-5 rounded-full shadow-2xl z-50 flex items-center gap-3 text-lg font-medium transition-all active:scale-95"
      >
        💬 <span className="hidden md:inline">Написати рекрутеру</span>
      </button>

      {/* Вікно чату */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border border-gray-200">
          
          {/* Заголовок */}
          <div className="bg-[#0f172a] text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-xl">🛡️</div>
              <div>
                <p className="font-semibold">Рекрутер ДПСУ</p>
                <p className="text-xs text-green-400">Онлайн • Відповідаємо швидко</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-3xl leading-none hover:text-gray-300"
            >
              ×
            </button>
          </div>

          {/* Повідомлення */}
          <div className="h-96 p-5 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? '' : 'justify-end'}`}>
                <div className={`max-w-[80%] px-5 py-3.5 rounded-2xl ${msg.isBot 
                  ? 'bg-white border border-gray-100' 
                  : 'bg-[#166534] text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Швидкі відповіді */}
          <div className="p-3 border-t bg-white flex flex-wrap gap-2">
            {quickReplies.map((reply, i) => (
              <button
                key={i}
                onClick={() => {
                  setMessages(prev => [...prev, { text: reply, isBot: false }]);
                  setTimeout(() => sendMessage(), 400);
                }}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Поле вводу */}
          <div className="p-4 border-t bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Напишіть повідомлення..."
              className="flex-1 border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:border-[#166534]"
            />
            <button 
              onClick={sendMessage}
              className="bg-[#166534] text-white px-6 rounded-full hover:bg-[#14532d] transition"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}