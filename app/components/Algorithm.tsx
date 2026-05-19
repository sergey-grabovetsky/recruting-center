const steps = [
  {
    title: "Звернення",
    text: "Телефонуєте або залишаєте заявку, рекрутер уточнює ваш досвід і побажання.",
  },
  {
    title: "Підбір посади",
    text: "Порівнюємо навички кандидата з актуальними вакансіями підрозділів.",
  },
  {
    title: "Документи",
    text: "Пояснюємо перелік документів і готуємо кандидата до наступних етапів.",
  },
  {
    title: "Відбір і ВЛК",
    text: "Співбесіди, професійно-психологічний відбір і медичний огляд.",
  },
  {
    title: "Контракт",
    text: "Після успішного добору оформлюється особова справа та підписується контракт.",
  },
];

export default function Algorithm() {
  return (
    <section id="steps" className="bg-[#f7f7f2] py-20 text-[#10140f]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="rec-kicker">Етапи добору</p>
          <h2 className="rec-title mt-4 text-4xl leading-tight md:text-6xl">
            Зрозумілий шлях від консультації до служби
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="rec-panel rounded-md p-6">
              <div className="mb-10 flex h-12 w-12 items-center justify-center bg-[#19733d] text-xl font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-black">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#596254]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
