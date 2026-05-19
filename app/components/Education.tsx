import { ExternalLink, GraduationCap } from "lucide-react";

const schools = [
  "Національна академія ДПСУ",
  "Військові коледжі та навчальні центри",
  "Професійна підготовка за обраною спеціальністю",
];

export default function Education() {
  return (
    <section className="bg-[#173829] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 rounded-md border border-[#b9b08d]/28 bg-white/6 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <p className="rec-kicker text-[#b9b08d]">Навчання</p>
            <h2 className="rec-title mt-4 text-4xl leading-tight text-white md:text-6xl">
              Вищі військові навчальні заклади України
            </h2>
            <a
              href="https://anketa-nadpsu.dpsu.gov.ua"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#b9b08d] px-6 py-4 text-sm font-black uppercase text-[#102819] transition hover:bg-[#c9c09d]"
            >
              Подати анкету
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid gap-4">
            {schools.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-md border border-[#b9b08d]/28 bg-white/8 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#b9b08d] text-[#102819]">
                  <GraduationCap size={24} />
                </div>
                <p className="text-lg font-black text-[#eef1e8]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
