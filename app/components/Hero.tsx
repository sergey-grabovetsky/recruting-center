"use client";

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), 
                         url('https://plus.unsplash.com/premium_photo-1667840484099-f504c26dbb56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Лого ДПСУ */}
        <div className="mb-8 flex justify-center">
          <img 
            src="https://raw.githubusercontent.com/sergey-grabovetsky/recruting-center/a069b60eb296c89d8ecca8b584ace0a4ab57f1d2/logo_dpsu.svg" 
            alt="Емблема ДПСУ" 
            className="h-28 drop-shadow-2xl"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-none">
          РЕКРУТИНГОВИЙ ЦЕНТР
        </h1>

        <p className="text-3xl md:text-4xl mb-10 text-green-400 font-medium">
          Тільки небойові посади
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => document.getElementById('vacancies')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 px-12 py-6 rounded-2xl text-xl font-semibold transition"
          >
            Переглянути вакансії
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-black px-12 py-6 rounded-2xl text-xl font-semibold transition">
            Написати в чат
          </button>
        </div>

        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Служба в Одеському регіоні • Без ТЦК та СП • Гарантія без переведень
        </p>
      </div>
    </section>
  );
}