import Image from "next/image"

export function WhyChooseMe() {
  const values = [
    {
      icon: "🎯",
      title: "Indywidualne podejście",
      description: "Każde dziecko jest wyjątkowe - dostosowuję terapię do jego potrzeb i tempa rozwoju",
    },
    {
      icon: "⭐",
      title: "Wieloletnie doświadczenie",
      description: "Ponad 10 lat pracy z dziećmi o różnorodnych potrzebach rozwojowych",
    },
    {
      icon: "❤️",
      title: "Zaangażowanie i troska",
      description: "Buduję relacje oparte na zaufaniu, szacunku i radości z odkrywania świata",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#fed102]/10 to-white relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10 hidden md:block">
        <Image src="/images/handprint-blue.png" alt="" width={100} height={100} className="w-20 h-20 rotate-12" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden md:block">
        <Image src="/images/handprint-cyan.png" alt="" width={100} height={100} className="w-20 h-20 -rotate-12" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-baloo text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-[#1ebaf1]">Dlaczego</span> <span className="text-[#fed102]">warto?</span>
          </h2>
          <p className="font-open text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Profesjonalne wsparcie z pasją i zaangażowaniem
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fed102]/30"
              >
                <div className="text-6xl mb-4 text-center">{value.icon}</div>
                <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-3 text-center">{value.title}</h3>
                <p className="font-open text-gray-600 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
