import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Ear, Brain, Hand, Music, Stethoscope, Headphones } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Diagnoza ADHD",
      description:
        "Profesjonalna diagnoza ADHD z kwestionariuszem online. Kompleksowa ocena i plan wsparcia dla dziecka.",
      icon: Stethoscope,
      slug: "diagnoza-adhd",
      features: ["Wywiad diagnostyczny 90 min", "Kwestionariusz online", "Plan wsparcia"],
      category: "Diagnostyka",
    },
    {
      title: "Terapia Pedagogiczna",
      description: "Kompleksowe wsparcie w nauce czytania, pisania i rozwijaniu umiejętności szkolnych.",
      icon: BookOpen,
      slug: "terapia-pedagogiczna",
      features: ["Nauka czytania i pisania", "Wsparcie w trudnościach szkolnych", "Rozwój umiejętności poznawczych"],
      category: "Terapie Indywidualne",
    },
    {
      title: "Wczesna Nauka Czytania",
      description:
        "Metoda symultaniczno-sekwencyjna Prof. Jagody Cieszyńskiej. Skuteczna nauka czytania dla najmłodszych.",
      icon: BookOpen,
      slug: "wczesna-nauka-czytania",
      features: ["Metoda Prof. Cieszyńskiej", "Dla dzieci od 3 lat", "Indywidualne tempo"],
      category: "Terapie Specjalistyczne",
    },
    {
      title: "Czytanie Sylabowe z Forbrain",
      description:
        "Innowacyjna metoda czytania sylabowego ze słuchawkami Forbrain wspierającymi przetwarzanie słuchowe.",
      icon: Headphones,
      slug: "czytanie-forbrain",
      features: ["Słuchawki Forbrain", "Czytanie sylabowe", "Poprawa wymowy"],
      category: "Terapie Specjalistyczne",
    },
    {
      title: "Terapia Ręki",
      description:
        "Rozwijanie sprawności manualnej i precyzji ruchów. Przygotowanie do pisania i codziennych czynności.",
      icon: Hand,
      slug: "terapia-reki",
      features: ["Rozwój sprawności manualnej", "Przygotowanie do pisania", "Ćwiczenia precyzji ruchów"],
      category: "Terapie Indywidualne",
    },
    {
      title: "Terapia ASD/ADHD",
      description:
        "Indywidualna terapia dla dzieci ze spektrum autyzmu i ADHD. Metody behawioralne i integracja sensoryczna.",
      icon: Brain,
      slug: "terapia-asd-adhd",
      features: ["Metody behawioralne ABA", "Integracja sensoryczna", "Wsparcie rozwoju społecznego"],
      category: "Terapie Specjalistyczne",
    },
    {
      title: "Trening Johansen IAS",
      description: "Pasywny trening słuchowy z indywidualnie dobraną muzyką wspierający przetwarzanie słuchowe.",
      icon: Ear,
      slug: "johansen-ias",
      features: ["Indywidualnie dobrana muzyka", "10 min dziennie", "Poprawa koncentracji"],
      category: "Treningi Słuchowe",
    },
    {
      title: "Neuroflow",
      description:
        "Aktywny trening słuchowy z ćwiczeniami online rozwijający koncentrację, pamięć i umiejętności szkolne.",
      icon: Brain,
      slug: "neuroflow",
      features: ["Ćwiczenia online", "Biofeedback", "Rozwój koncentracji"],
      category: "Treningi Słuchowe",
    },
    {
      title: "TMR - Trening Muzyczno-Ruchowy",
      description:
        "Trening muzyczno-ruchowy wspierający koordynację, rytm i integrację sensoryczną przez muzykę i ruch.",
      icon: Music,
      slug: "tmr",
      features: ["Muzyka i ruch", "Koordynacja", "Integracja sensoryczna"],
      category: "Treningi Słuchowe",
    },
    {
      title: "mTalent",
      description: "Interaktywna terapia przetwarzania słuchowego z 700+ ćwiczeniami komputerowymi dla dzieci z CAPD.",
      icon: Headphones,
      slug: "mtalent",
      features: ["700+ ćwiczeń", "Terapia CAPD", "Interaktywne zadania"],
      category: "Terapie Specjalistyczne",
    },
  ]

  // Group services by category
  const categories = [
    { name: "Diagnostyka", services: services.filter((s) => s.category === "Diagnostyka") },
    { name: "Terapie Specjalistyczne", services: services.filter((s) => s.category === "Terapie Specjalistyczne") },
    { name: "Terapie Indywidualne", services: services.filter((s) => s.category === "Terapie Indywidualne") },
    { name: "Treningi Słuchowe", services: services.filter((s) => s.category === "Treningi Słuchowe") },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-cyan/30 to-brand-blue/10 relative">
        <div className="absolute top-32 right-12 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-baloo text-5xl md:text-6xl font-bold text-brand-blue mb-6">Nasze Usługi</h1>
            <p className="font-open text-xl text-gray-dark leading-relaxed">
              Oferujemy kompleksowe wsparcie w rozwoju dziecka. Każda terapia jest dostosowana indywidualnie do potrzeb
              i możliwości dziecka.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-20 left-8 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>
        <div className="absolute top-20 right-12 opacity-20 hidden md:block">
          <Image src="/images/handprint-blue.png" alt="" width={90} height={90} className="w-18 h-18 md:w-22 md:h-22" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {categories.map((category) => (
              <div key={category.name}>
                <h2 className="font-baloo text-3xl md:text-4xl font-bold text-brand-blue mb-8 text-center">
                  {category.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <Link
                        key={service.slug}
                        href={`/terapia/${service.slug}`}
                        className="group bg-gradient-to-br from-white to-brand-cyan/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-brand-blue"
                      >
                        <div className="mb-4 text-brand-blue group-hover:text-brand-yellow transition-colors duration-300">
                          <IconComponent className="w-16 h-16" />
                        </div>
                        <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="font-open text-gray-600 leading-relaxed mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="font-open text-sm text-gray-500 flex items-start gap-2">
                              <span className="text-brand-yellow mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="font-baloo font-bold text-brand-blue group-hover:text-brand-yellow transition-colors duration-300">
                          Dowiedz się więcej →
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-cyan to-brand-blue/60 relative overflow-hidden">
        <div className="absolute top-16 left-16 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={110}
            height={110}
            className="w-22 h-22 md:w-26 md:h-26 -rotate-15"
          />
        </div>
        <div className="absolute bottom-16 right-16 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={90}
            height={90}
            className="w-18 h-18 md:w-22 md:h-22 rotate-30"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold mb-6 text-gray-dark">
              Nie wiesz, którą terapię wybrać?
            </h2>
            <p className="font-open text-xl mb-8 text-gray-dark leading-relaxed">
              Umów się na bezpłatną konsultację. Wspólnie ustalimy, jakie wsparcie będzie najlepsze dla Twojego dziecka.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-brand-yellow text-gray-dark font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-dark hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-brand-yellow hover:border-gray-dark"
            >
              Umów konsultację
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
