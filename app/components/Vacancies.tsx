"use client";

import { useState } from "react";
import { vacancies, Vacancy } from "../data/vacancies";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function Vacancies() {
  const [view, setView] = useState<"list" | "map">("list");
  const [search, setSearch] = useState("");

  const filtered = vacancies.filter(v =>
    v.location.toLowerCase().includes(search.toLowerCase()) ||
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="vacancies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Актуальні вакансії</h2>
          <p className="text-xl text-gray-600">Не бойові посади у [Назва вашого загону]</p>
        </div>

        {/* Фільтри */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
          <input
            type="text"
            placeholder="Пошук за посадою або підрозділом..."
            className="w-full md:w-96 px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#166534] text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex bg-gray-100 p-1.5 rounded-2xl">
            <button
              onClick={() => setView("list")}
              className={`px-8 py-3 rounded-xl font-medium transition ${view === "list" ? "bg-white shadow text-[#166534]" : "text-gray-600"}`}
            >
              Список
            </button>
            <button
              onClick={() => setView("map")}
              className={`px-8 py-3 rounded-xl font-medium transition ${view === "map" ? "bg-white shadow text-[#166534]" : "text-gray-600"}`}
            >
              Карта
            </button>
          </div>
        </div>

        {/* Список вакансій */}
        {view === "list" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((vacancy) => (
              <div 
                key={vacancy.id} 
                className="border border-gray-200 rounded-3xl p-8 hover:border-[#166534] hover:shadow-xl transition-all group"
              >
                <div className="text-[#166534] font-semibold mb-2">{vacancy.unit}</div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{vacancy.title}</h3>
                
                <div className="text-3xl font-bold text-[#166534] mb-6">
                  {vacancy.salary}
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-8">
                  📍 {vacancy.location}
                </div>

                <button 
                  onClick={() => alert(`Відгук на посаду: ${vacancy.title}\n\nЧат з рекрутером відкрито`)}
                  className="w-full bg-[#166534] hover:bg-[#14532d] text-white py-4 rounded-2xl font-semibold transition group-hover:scale-105"
                >
                  Відгукнутися
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Карта */
          <div className="h-[650px] border border-gray-200 rounded-3xl overflow-hidden shadow-xl">
            <Map vacancies={filtered} />
          </div>
        )}

        <div className="text-center mt-12 text-gray-500">
          Більше вакансій — пишіть у чат рекрутеру
        </div>
      </div>
    </section>
  );
}