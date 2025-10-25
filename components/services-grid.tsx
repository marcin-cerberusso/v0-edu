import Link from "next/link"
import Image from "next/image"

export function ServicesGrid() {
  const services = [
    {
      title: "Diagnoza ADHD",
      description: "Profesjonalna diagnoza z kwestionariuszem online.",
      image: "/child-assessment-diagnostic-session-with-therapist.jpg",
      slug: "diagnoza-adhd",
      category: "Diagnostyka",
    },
    {
      title: "Terapia ASD/ADHD",
      description: "Indywidualne wsparcie behawioralne i sensoryczne.",
      image: "/therapist-working-with-child-autism-spectrum-thera.jpg",
      slug: "terapia-asd-adhd",
      category: "Terapie Specjalistyczne",
    },
    {
      title: "Terapia Pedagogiczna",
      description: "Wsparcie w czytaniu, pisaniu, liczeniu i koncentracji.",
      image: "/child-learning-writing-reading-with-therapist.jpg",
      slug: "terapia-pedagogiczna",
      category: "Terapie Indywidualne",
    },
    {
      title: "Wczesna Nauka Czytania",
      description: "Metoda prof. Jagody Cieszyńskiej – czytanie sylabami.",
      image: "/child-learning-to-read-with-syllables-colorful-let.jpg",
      slug: "wczesna-nauka-czytania",
      category: "Terapie Indywidualne",
    },
    {
      title: "Czytanie z Forbrain®",
      description: "Nauka czytania + poprawa koncentracji w jednym!",
      image: "/child-reading-book-with-special-headphones-forbrai.jpg",
      slug: "czytanie-sylabowe-forbrain",
      category: "Terapie Indywidualne",
    },
    {
      title: "Terapia Ręki",
      description: "Rozwijanie sprawności manualnej i precyzji ruchów.",
      image: "/child-doing-hand-therapy-fine-motor-skills-exercis.jpg",
      slug: "terapia-reki",
      category: "Terapie Indywidualne",
    },
    {
      title: "Johansen IAS",
      description: "Pasywny trening z indywidualnie dobraną muzyką.",
      image: "/child-wearing-headphones-listening-therapy-session.jpg",
      slug: "trening-johansen",
      category: "Treningi Słuchowe",
    },
    {
      title: "Neuroflow",
      description: "Aktywny trening online rozwijający koncentrację.",
      image: "/child-doing-auditory-training-with-computer-techno.jpg",
      slug: "neuroflow",
      category: "Treningi Słuchowe",
    },
    {
      title: "TMR",
      description: "Dla dzieci z nadwrażliwością słuchową.",
      image: "/child-music-movement-therapy-sensory-integration.jpg",
      slug: "trening-tmr",
      category: "Treningi Słuchowe",
    },
    {
      title: "mTalent",
      description: "700+ interaktywnych ćwiczeń przetwarzania słuchowego.",
      image: "/child-doing-interactive-auditory-exercises-on-tabl.jpg",
      slug: "mtalent",
      category: "Treningi Słuchowe",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-10 right-20 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="25" fill="#fed102" />
          <g stroke="#fed102" strokeWidth="4" strokeLinecap="round">
            <line x1="60" y1="10" x2="60" y2="25" />
            <line x1="60" y1="95" x2="60" y2="110" />
            <line x1="10" y1="60" x2="25" y2="60" />
            <line x1="95" y1="60" x2="110" y2="60" />
            <line x1="25" y1="25" x2="35" y2="35" />
            <line x1="85" y1="85" x2="95" y2="95" />
            <line x1="85" y1="25" x2="95" y2="35" />
            <line x1="25" y1="85" x2="35" y2="95" />
          </g>
        </svg>
      </div>

      <div className="absolute top-20 right-12 opacity-15 hidden md:block">
        <Image src="/images/handprint-cyan.png" alt="" width={96} height={96} className="w-24 h-24" />
      </div>
      <div className="absolute top-40 left-8 opacity-20 hidden lg:block">
        <Image src="/images/handprint-yellow.png" alt="" width={128} height={128} className="w-32 h-32 rotate-90" />
      </div>

      <div className="absolute bottom-40 left-12 opacity-15 hidden md:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="18" fill="#fed102" />
          <g stroke="#fed102" strokeWidth="3" strokeLinecap="round">
            <line x1="40" y1="8" x2="40" y2="20" />
            <line x1="40" y1="60" x2="40" y2="72" />
            <line x1="8" y1="40" x2="20" y2="40" />
            <line x1="60" y1="40" x2="72" y2="40" />
            <line x1="18" y1="18" x2="26" y2="26" />
            <line x1="54" y1="54" x2="62" y2="62" />
            <line x1="54" y1="18" x2="62" y2="26" />
            <line x1="18" y1="54" x2="26" y2="62" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-20 left-8 opacity-15 hidden md:block">
        <Image src="/images/handprint-blue.png" alt="" width={80} height={80} className="w-20 h-20" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-10 hidden lg:block">
        <Image src="/images/handprint-cyan.png" alt="" width={72} height={72} className="w-18 h-18 -rotate-45" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-baloo text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-brand-blue">Nasze</span> <span className="text-brand-yellow">Usługi</span>
          </h2>
          <p className="font-open text-lg text-gray-dark text-center mb-12">
            W Eduhuśtawce wspieramy dzieci w rozwoju – poprzez słuchanie, zabawę i technologię
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/terapia/${service.slug}`}
                className="group bg-gradient-to-br from-white to-brand-cyan/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-baloo text-xl font-bold text-brand-blue mb-2 group-hover:text-brand-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-open text-gray-medium text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/uslugi"
              className="inline-block bg-brand-blue text-white font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-yellow hover:text-gray-dark transition-all duration-300 shadow-lg"
            >
              Zobacz wszystkie usługi
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
