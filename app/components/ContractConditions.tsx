const benefits = [
  {
    title: "Широкий вибір професій",
    text: "Бойові та небойові спеціальності для кандидатів із різним досвідом і навичками.",
  },
  {
    title: "Регулярні ротації",
    text: "Плановість служби, відновлення та супровід особового складу в бойових підрозділах.",
  },
  {
    title: "Якісна підготовка",
    text: "Підготовка в Україні та за кордоном залежно від напряму служби й посади.",
  },
  {
    title: "Сучасне забезпечення",
    text: "Озброєння, техніка та засоби, необхідні для виконання завдань підрозділів ДПСУ.",
  },
];

export default function ContractConditions() {
  return (
    <section id="conditions" className="bg-[#173829] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl border-y border-[#b9b08d]/55 py-8 text-center">
          <p className="rec-kicker text-[#b9b08d]">Що пропонує ДПСУ</p>
          <h2 className="rec-title mt-3 text-4xl leading-tight text-white md:text-6xl">
            Долучайся до Державної прикордонної служби України
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {benefits.map(({ title, text }) => (
            <article key={title} className="grid gap-3 border-b border-[#b9b08d]/30 pb-5 text-center md:grid-cols-[0.52fr_1fr] md:text-left">
              <h3 className="text-xl font-black uppercase text-[#d5dccf]">{title}</h3>
              <p className="text-base leading-7 text-[#c0c9bb]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
