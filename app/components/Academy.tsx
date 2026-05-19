import { Mail, MapPinned, Phone } from "lucide-react";

const contacts = [
  {
    city: "Одеса",
    phones: ["(068) 307-10-20", "(066) 307-10-20"],
  },
  {
    city: "Білгород-Дністровський",
    phones: ["(095) 416-77-04", "(067) 518-36-26"],
  },
  {
    city: "Ізмаїл",
    phones: ["(095) 654-64-66"],
  },
  {
    city: "Подільськ",
    phones: ["(095) 180-77-58"],
  },
];

export default function Academy() {
  return (
    <section id="contacts" className="bg-[#173829] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="rec-kicker text-[#b9b08d]">Наші рекрутингові підрозділи</p>
            <h2 className="rec-title mt-4 text-4xl leading-tight text-white md:text-6xl">
              Зв&apos;яжіться з рекрутинговим підрозділом
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#c0c9bb]">
              Для первинної консультації оберіть найближче місто або телефонуйте на загальний call-центр ДПСУ.
            </p>

            <div className="mt-8 grid gap-3">
              <a href="tel:+380442307600" className="inline-flex items-center gap-3 font-black text-[#eef1e8]">
                <Phone className="text-[#b9b08d]" size={21} />
                Call-центр: (044) 230-76-00
              </a>
              <a href="mailto:recruiting@dpsu.gov.ua" className="inline-flex items-center gap-3 font-black text-[#eef1e8]">
                <Mail className="text-[#b9b08d]" size={21} />
                recruiting@dpsu.gov.ua
              </a>
              <div className="inline-flex items-center gap-3 font-black text-[#eef1e8]">
                <MapPinned className="text-[#b9b08d]" size={21} />
                Одеська область
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {contacts.map((item) => (
              <article key={item.city} className="rounded-md border border-[#b9b08d]/28 bg-white/6 p-6 transition hover:-translate-y-1 hover:bg-white/10">
                <h3 className="text-2xl font-black text-[#eef1e8]">{item.city}</h3>
                <div className="mt-5 grid gap-3">
                  {item.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+38${phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-3 text-lg font-bold text-[#b9b08d] transition hover:text-white"
                    >
                      <Phone size={18} />
                      {phone}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
