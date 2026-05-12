export default function Algorithm() {
  const steps = [
    "Звернення до рекрутера",
    "Співбесіда",
    "Збір документів",
    "Військово-лікарська комісія",
    "Підписання контракту",
    "Прибуття до підрозділу"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Шлях до мети</h2>
        <div className="grid md:grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                {i+1}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}