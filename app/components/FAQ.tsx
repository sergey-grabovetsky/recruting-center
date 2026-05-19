"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "Чи можу я обрати посаду та підрозділ?",
    answer:
      "Так. Рекрутер допомагає підібрати вакансію відповідно до навичок, досвіду, стану здоров'я та актуальної потреби підрозділів.",
  },
  {
    question: "З чого почати?",
    answer:
      "Перший крок - консультація. Після неї кандидат подає анкету або заяву, проходить співбесіду, професійний відбір і медичний огляд.",
  },
  {
    question: "Які напрями доступні?",
    answer:
      "ДПСУ має бойові й небойові спеціальності: інспекторська служба, водії, БПЛА, зв'язок, технічні посади, документообіг і забезпечення.",
  },
  {
    question: "Які документи потрібні?",
    answer:
      "Базово потрібні документи, що посвідчують особу, РНОКПП, військово-обліковий документ, документи про освіту та фото. Точний перелік уточнює рекрутер.",
  },
  {
    question: "Де проходить ВЛК?",
    answer:
      "Кандидатів направляють на медичний огляд до визначених закладів охорони здоров'я ДПСУ.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#173829] py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <p className="rec-kicker text-[#b9b08d]">Важливі питання</p>
          <h2 className="rec-title mt-4 text-4xl leading-tight text-white md:text-6xl">
            Коротко про добір
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqData.map((item, index) => (
            <div key={item.question} className="rounded-md border border-[#b9b08d]/28 bg-white/6 p-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 rounded-md bg-[#b9b08d] px-5 py-5 text-left transition hover:bg-[#c9c09d]"
              >
                <span className="text-lg font-black text-[#102819]">{item.question}</span>
                <ChevronDown
                  className={`shrink-0 text-[#102819] transition ${openIndex === index ? "rotate-180" : ""}`}
                  size={22}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-3xl px-3 pt-5 text-base leading-7 text-[#c0c9bb]">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
