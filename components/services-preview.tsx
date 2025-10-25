import Link from "next/link"

export function ServicesPreview() {
  const services = [
    {
      title: "Terapia Pedagogiczna",
      description: "Wsparcie w nauce czytania, pisania i rozwijaniu umiejętności szkolnych.",
      icon: "📚",
      slug: "terapia-pedagogiczna",
    },
    {
      title: "Terapia Integracji Sensorycznej",
      description: "Pomoc dzieciom w lepszym przetwarzaniu bodźców zmysłowych.",
      icon: "🎨",
      slug: "terapia-integracji-sensorycznej",
    },
    {
      title: "Terapia Ręki",
      description: "Rozwijanie sprawności manualnej i precyzji ruchów.",
      icon: "✋",
      slug: "terapia-reki",
    },
  ]

  return (
    <section className="py-20 bg-brand-cyan relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-brand-blue mb-4">Nasze Usługi</h2>
            <p className="font-open text-lg text-gray-700 max-w-2xl mx-auto">
              Oferujemy kompleksowe wsparcie w rozwoju dziecka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/terapia/${service.slug}`}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="font-open text-gray-600 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/uslugi"
              className="inline-block bg-brand-yellow text-gray-800 font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Zobacz wszystkie usługi
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
