const navItems = [
  { label: "Рекрутингові підрозділи", href: "#contacts" },
  { label: "Пошук вакансій", href: "#vacancies" },
  { label: "Важливі питання", href: "/faq" },
];

const heroImage =
  "https://plus.unsplash.com/premium_photo-1667840484099-f504c26dbb56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(8,36,22,0.48) 0%, rgba(11,55,31,0.72) 58%, rgba(8,36,22,0.94) 100%), url("${heroImage}")`,
      }}
    >
      <div className="relative mx-auto max-w-7xl px-5 py-5 text-white sm:px-8">
        <a
          href="https://dpsu.gov.ua/"
          target="_blank"
          rel="noreferrer"
          className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo_dpsu.svg" alt="ДПСУ" className="h-16 w-auto" />
        </a>

        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center pb-14 pt-7 text-center">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-[min(92vw,920px)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://rec.dpsu.gov.ua/img/be_first.svg"
                alt="Будь першим"
                className="mx-auto w-full"
              />
            </div>

            <div className="mx-auto mt-8 max-w-sm -translate-y-[15px]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d7caa0]">Call-центр</p>
              <a
                href="tel:+380442307600"
                className="mt-0 block text-4xl font-black !text-white"
                style={{ color: "#ffffff" }}
              >
                (044) 230-76-00
              </a>
            </div>

            <nav className="mx-auto mt-8 flex w-full max-w-[920px] flex-row justify-center gap-[26px]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="sta-btn min-h-12 min-w-0 flex-1 px-3 py-2 text-xs sm:px-4 sm:text-base lg:text-xl"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
