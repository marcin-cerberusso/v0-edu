export function ParentsPreview() {
  const faqItems = [
    {
      question: "W jakim wieku najlepiej rozpocząć terapię?",
      answer:
        "Terapię można rozpocząć już od 2. roku życia. Im wcześniej zauważymy trudności i rozpoczniemy wsparcie, tym lepsze efekty możemy osiągnąć.",
    },
    {
      question: "Jak długo trwa jedna sesja terapeutyczna?",
      answer:
        "Standardowa sesja trwa 45-60 minut, w zależności od wieku dziecka i rodzaju terapii. Dla najmłodszych dzieci sesje mogą być krótsze.",
    },
    {
      question: "Czy rodzice mogą uczestniczyć w zajęciach?",
      answer:
        "Tak! Zachęcam rodziców do aktywnego uczestnictwa, szczególnie na początku terapii. Wasza obecność pomaga dziecku poczuć się bezpiecznie.",
    },
  ]

  const blogPosts = [
    {
      title: "5 sposobów na wspieranie rozwoju mowy u małych dzieci",
      excerpt:
        "Poznaj proste, codzienne aktywności, które pomogą Twojemu dziecku rozwijać umiejętności językowe w naturalny sposób.",
      date: "15 stycznia 2025",
    },
    {
      title: "Integracja sensoryczna - co to takiego?",
      excerpt:
        "Dowiedz się, czym jest integracja sensoryczna i jak wpływa na codzienne funkcjonowanie Twojego dziecka.",
      date: "8 stycznia 2025",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-brand-cyan/20 to-brand-yellow/10 relative overflow-hidden">
      <div className="absolute top-20 left-8 opacity-15 hidden md:block">
        <img src="/images/handprint-blue.png" alt="" className="w-20 h-20" />
      </div>
      <div className="absolute top-32 right-16 opacity-20 hidden lg:block">
        <img src="/images/handprint-cyan.png" alt="" className="w-28 h-28 rotate-45" />
      </div>
      <div className="absolute bottom-20 right-12 opacity-15 hidden md:block">
        <img src="/images/handprint-yellow.png" alt="" className="w-24 h-24" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-10 hidden lg:block">
        <img src="/images/handprint-blue.png" alt="" className="w-16 h-16 -rotate-30" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-baloo text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-brand-blue">Dla</span> <span className="text-brand-yellow">Rodziców</span>
          </h2>
          <p className="font-open text-lg text-gray-700 text-center mb-12">Odpowiedzi na pytania i praktyczne porady</p>

          {/* FAQ Preview */}
          <div className="mb-12">
            <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-6">Najczęściej zadawane pytania</h3>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="font-baloo text-lg font-bold text-brand-blue mb-2">{item.question}</h4>
                  <p className="font-open text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Preview */}
          <div>
            <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-6">Najnowsze artykuły</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-sm font-open text-brand-blue mb-2">{post.date}</div>
                  <h4 className="font-baloo text-xl font-bold text-gray-800 mb-3">{post.title}</h4>
                  <p className="font-open text-gray-600">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/dla-rodzicow"
              className="inline-block bg-brand-blue text-white font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-yellow hover:text-gray-800 transition-all duration-300 shadow-lg"
            >
              Zobacz więcej
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
