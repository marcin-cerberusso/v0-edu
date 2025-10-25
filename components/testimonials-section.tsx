export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Anna Kowalska",
      text: "Eduhuśtawka to wspaniałe miejsce! Moja córka uwielbia zajęcia i widać ogromny postęp w jej rozwoju.",
      rating: 5,
    },
    {
      name: "Piotr Nowak",
      text: "Profesjonalne podejście i indywidualna opieka. Polecam każdemu rodzicowi!",
      rating: 5,
    },
    {
      name: "Magdalena Wiśniewska",
      text: "Dzięki terapii mój syn stał się bardziej pewny siebie i chętniej uczestniczy w zajęciach.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-brand-blue mb-4">Co mówią rodzice</h2>
            <p className="font-open text-lg text-gray-700 max-w-2xl mx-auto">
              Opinie rodziców, którzy zaufali Eduhuśtawce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-brand-cyan/20 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-yellow text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-open text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <p className="font-baloo font-bold text-brand-blue">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
