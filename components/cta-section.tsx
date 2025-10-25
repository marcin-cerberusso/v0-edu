import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-brand-blue text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-baloo text-4xl md:text-5xl font-bold mb-6">Gotowy na pierwszą wizytę?</h2>
          <p className="font-open text-xl mb-8 opacity-90 leading-relaxed">
            Skontaktuj się z nami i umów bezpłatną konsultację. Razem zadbamy o rozwój Twojego dziecka!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block bg-brand-yellow text-gray-800 font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Umów konsultację
            </Link>
            <Link
              href="/cennik"
              className="inline-block bg-white text-brand-blue font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-yellow hover:text-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Zobacz cennik
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
