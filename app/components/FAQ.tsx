"use client";

import { useState } from "react";

const faqs = [
  { q: "Чи можу я служити тільки в своєму регіоні?", a: "Так. Ми гарантуємо службу в регіоні протягом першого року." },
  { q: "Які документи потрібні?", a: "Паспорт, ІПН, військовий квиток, документи про освіту." },
  { q: "Який мінімальний вік?", a: "Від 18 років (для контракту 18-24 є спеціальна програма)." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Часті питання</h2>
        {faqs.map((item, i) => (
          <div key={i} className="border-b">
            <button
              className="w-full text-left py-6 flex justify-between items-center"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-medium">{item.q}</span>
              <span>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <p className="pb-6 text-gray-600">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}