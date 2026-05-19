"use client";

import { Shield } from "lucide-react";
import { vacancies } from "../data/vacancies";

export default function Vacancies() {
  return (
    <section id="vacancies" className="bg-[#173829] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-y border-[#b9b08d]/55 py-10">
          <div className="grid items-end gap-3 md:grid-cols-[0.7fr_1fr]">
            <h2 className="rec-title text-6xl leading-[0.9] text-white md:text-8xl">
              Вакансії
            </h2>
            <p className="rec-title text-3xl leading-none text-[#b9b08d] md:pb-2 md:text-5xl">
              в підрозділах ДПСУ
            </p>
          </div>
        </div>

        <div
          className="mx-auto mt-16 max-w-6xl"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            columnGap: "40px",
            rowGap: "64px",
          }}
        >
          {vacancies.map((vacancy) => (
            <a
              key={vacancy.id}
              href={vacancy.source}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[320px] flex-col items-center justify-start text-center text-[#c7d0c2] transition hover:-translate-y-1 hover:text-white"
              aria-label={`Деталі вакансії: ${vacancy.title}`}
            >
              <div className="flex h-32 w-32 items-center justify-center opacity-45 transition group-hover:opacity-75">
                <div className="flex h-28 w-24 items-center justify-center rounded-[28px] border-[5px] border-[#c7d0c2] text-[#c7d0c2]">
                  <Shield size={58} strokeWidth={1.8} />
                </div>
              </div>

              <p className="mt-8 min-h-20 text-[15px] font-black uppercase leading-8 tracking-[-0.01em] text-[#c7d0c2]">
                {vacancy.unit}
              </p>

              <h3 className="mt-7 text-[16px] font-bold leading-8 text-[#c7d0c2]">
                {vacancy.title}
              </h3>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://lobbyx.army/?sector=bordercontrol"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-64 items-center justify-center bg-[#b9b08d] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#102819] transition hover:bg-[#c9c09d]"
          >
            Показати ще
          </a>
        </div>
      </div>
    </section>
  );
}
