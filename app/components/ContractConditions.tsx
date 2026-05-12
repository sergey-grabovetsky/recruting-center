export default function ContractConditions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Умови контракту</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-2">Зарплата</h3>
            <p className="text-4xl font-bold text-green-600">від 21 000 ₴</p>
            <p className="text-gray-600 mt-2">+ премії та надбавки</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-2">Гарантії</h3>
            <ul className="space-y-3 mt-6">
              <li>✅ Без переведень 1 рік</li>
              <li>✅ Служба тільки в регіоні</li>
              <li>✅ 30 000 ₴ одноразова допомога</li>
              <li>✅ Повний соцпакет ДПСУ</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-2">Ми працюємо</h3>
            <p className="text-xl font-semibold text-green-600">Без ТЦК та СП</p>
          </div>
        </div>
      </div>
    </section>
  );
}