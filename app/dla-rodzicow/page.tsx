import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQAccordion } from "@/components/faq-accordion"
import Link from "next/link"
import Image from "next/image"

export default function ParentsPage() {
  const faqItems = [
    {
      question: "W jakim wieku najlepiej rozpocząć terapię?",
      answer:
        "Terapię można rozpocząć już od 2. roku życia. Im wcześniej zauważymy trudności i rozpoczniemy wsparcie, tym lepsze efekty możemy osiągnąć. Każde dziecko rozwija się w swoim tempie, dlatego warto obserwować i reagować na sygnały.",
    },
    {
      question: "Jak długo trwa jedna sesja terapeutyczna?",
      answer:
        "Standardowa sesja trwa 45-60 minut, w zależności od wieku dziecka i rodzaju terapii. Dla najmłodszych dzieci (2-3 lata) sesje mogą być krótsze (30-45 minut), aby dostosować się do ich możliwości koncentracji.",
    },
    {
      question: "Jak często powinny odbywać się zajęcia?",
      answer:
        "Zalecana częstotliwość to 1-2 razy w tygodniu. Regularność jest kluczowa dla osiągnięcia postępów. W przypadku intensywnej terapii możliwe są częstsze spotkania, dostosowane do indywidualnych potrzeb dziecka.",
    },
    {
      question: "Czy rodzice mogą uczestniczyć w zajęciach?",
      answer:
        "Tak! Zachęcam rodziców do aktywnego uczestnictwa, szczególnie na początku terapii. Wasza obecność pomaga dziecku poczuć się bezpiecznie. Dodatkowo, pokazuję techniki i ćwiczenia, które możecie kontynuować w domu.",
    },
    {
      question: "Kiedy można spodziewać się pierwszych efektów?",
      answer:
        "Pierwsze efekty są zazwyczaj widoczne po 4-6 tygodniach regularnych zajęć. Tempo postępów jest indywidualne i zależy od wielu czynników, w tym od rodzaju trudności, zaangażowania dziecka i wsparcia w domu.",
    },
    {
      question: "Czy terapia jest refundowana przez NFZ?",
      answer:
        "Niestety, prywatne sesje terapeutyczne nie są refundowane przez NFZ. Jednak wiele firm oferuje pakiety medyczne dla pracowników, które mogą pokrywać część kosztów. Warto sprawdzić dostępne opcje u swojego pracodawcy.",
    },
  ]

  const blogPosts = [
    {
      title: "5 sposobów na wspieranie rozwoju mowy u małych dzieci",
      excerpt:
        "Poznaj proste, codzienne aktywności, które pomogą Twojemu dziecku rozwijać umiejętności językowe w naturalny i przyjemny sposób.",
      date: "15 stycznia 2025",
      slug: "wspieranie-rozwoju-mowy",
    },
    {
      title: "Integracja sensoryczna - co to takiego?",
      excerpt:
        "Dowiedz się, czym jest integracja sensoryczna i jak wpływa na codzienne funkcjonowanie Twojego dziecka. Praktyczne wskazówki dla rodziców.",
      date: "8 stycznia 2025",
      slug: "integracja-sensoryczna",
    },
    {
      title: "Jak przygotować dziecko do przedszkola?",
      excerpt:
        "Rozpoczęcie przedszkola to ważny krok. Zobacz, jak możesz pomóc swojemu dziecku w tym przejściu i sprawić, by było to pozytywne doświadczenie.",
      date: "2 stycznia 2025",
      slug: "przygotowanie-do-przedszkola",
    },
  ]

  const resources = [
    {
      title: "Wywiad z rodzicami",
      description: "Wypełnij szczegółowy formularz przed pierwszą wizytą, aby pomóc mi lepiej poznać Twoje dziecko.",
      icon: "📋",
      link: "/wywiad-z-rodzicami",
    },
    {
      title: "Kwestionariusz ADHD",
      description: "Ocena objawów ADHD - koncentracji, impulsywności i nadpobudliwości u Twojego dziecka.",
      icon: "🎯",
      link: "/kwestionariusze",
    },
    {
      title: "Kwestionariusz Przetwarzania Słuchowego",
      description: "Ocena umiejętności przetwarzania informacji słuchowych i rozwoju słuchu fonematycznego.",
      icon: "👂",
      link: "/kwestionariusze",
    },
    {
      title: "Ćwiczenia do wykonania w domu",
      description: "Zestaw prostych ćwiczeń wspierających rozwój dziecka, które możesz wykonywać codziennie.",
      icon: "🏠",
    },
    {
      title: "Polecane książki dla dzieci",
      description: "Lista książek wspierających rozwój emocjonalny i poznawczy dzieci w wieku 2-6 lat.",
      icon: "📚",
    },
    {
      title: "Zabawy rozwijające",
      description: "Pomysły na kreatywne zabawy, które wspierają rozwój motoryczny i poznawczy.",
      icon: "🎨",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#fed102]/20 to-[#a4efeb]/10 relative overflow-hidden">
        <div className="absolute top-32 left-8 opacity-20 hidden md:block">
          <Image src="/images/handprint-blue.png" alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
        </div>
        <div className="absolute top-20 right-16 opacity-15 hidden lg:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={120}
            height={120}
            className="w-24 h-24 lg:w-28 lg:h-28 rotate-12"
          />
        </div>
        <div className="absolute bottom-32 right-8 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24 -rotate-45"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-baloo text-5xl md:text-6xl font-bold text-brand-blue mb-6">
              Dla Rodziców – Budujemy Twoją siłę
            </h1>
            <p className="font-open text-xl text-gray-dark leading-relaxed">
              Wsparcie, edukacja i relaks w jednym miejscu. Warsztaty, konsultacje i grupy wsparcia dla rodziców dzieci
              z wyzwaniami rozwojowymi.
            </p>
          </div>
        </div>
      </section>

      {/* Parent Support Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-12 opacity-15 hidden md:block">
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24 rotate-12"
          />
        </div>
        <div className="absolute bottom-20 right-12 opacity-15 hidden md:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={90}
            height={90}
            className="w-18 h-18 md:w-22 md:h-22 -rotate-45"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-7xl mb-6">❤️</div>
              <h2 className="font-baloo text-4xl md:text-5xl font-bold text-brand-blue mb-4">
                Warsztaty, Konsultacje i Grupy Wsparcia
              </h2>
              <p className="font-open text-xl text-gray-dark leading-relaxed max-w-3xl mx-auto">
                Dedykowane usługi dla opiekunów dzieci z wyzwaniami rozwojowymi (ASD, ADHD, dysleksja, CAPD). Praktyczne
                narzędzia, wsparcie emocjonalne i sieć kontaktów.
              </p>
            </div>

            {/* Services Overview */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-brand-cyan/20 to-brand-yellow/10 rounded-3xl p-8 shadow-md">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-3">Konsultacje indywidualne</h3>
                <p className="font-open text-gray-medium mb-4">
                  60 minut spersonalizowanego wsparcia z planem działania (PDF)
                </p>
                <p className="font-baloo text-xl font-bold text-brand-yellow">150 zł/sesja</p>
              </div>

              <div className="bg-gradient-to-br from-brand-yellow/20 to-brand-cyan/10 rounded-3xl p-8 shadow-md">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-3">Warsztaty tematyczne</h3>
                <p className="font-open text-gray-medium mb-4">
                  2-3h interaktywnych zajęć w grupach 4-8 osób + materiały
                </p>
                <p className="font-baloo text-xl font-bold text-brand-yellow">80 zł/osoba</p>
              </div>

              <div className="bg-gradient-to-br from-brand-blue/20 to-brand-yellow/10 rounded-3xl p-8 shadow-md">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-3">Grupy wsparcia</h3>
                <p className="font-open text-gray-medium mb-4">1,5h co 2 tygodnie, cykl 8 spotkań online (6-10 osób)</p>
                <p className="font-baloo text-xl font-bold text-brand-yellow">50 zł/sesja lub 350 zł/pakiet</p>
              </div>
            </div>

            {/* Detailed Process */}
            <div className="bg-gradient-to-br from-brand-cyan/10 to-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="font-baloo text-3xl font-bold text-brand-blue mb-8 text-center">Jak to działa?</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-baloo font-bold text-xl text-gray-dark">
                    1
                  </div>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-gray-dark mb-2">Konsultacje indywidualne</h4>
                    <p className="font-open text-gray-medium">
                      <strong>Proces:</strong> Wywiad wstępny (email/formularz) → Sesja online/stacjonarna →
                      Spersonalizowany plan (PDF z ćwiczeniami)
                    </p>
                    <p className="font-open text-gray-medium mt-2">
                      <strong>Tematy:</strong> Strategie na wybuchy złości, budowanie rutyn domowych, komunikacja z
                      dzieckiem
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-baloo font-bold text-xl text-gray-dark">
                    2
                  </div>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-gray-dark mb-2">Warsztaty tematyczne</h4>
                    <p className="font-open text-gray-medium">
                      <strong>Proces:</strong> Zapis online → Spotkanie interaktywne (prezentacja + ćwiczenia) →
                      Materiały follow-up (nagranie + checklisty)
                    </p>
                    <p className="font-open text-gray-medium mt-2">
                      <strong>Przykłady:</strong> "Komunikacja z dzieckiem ASD", "Codzienne życie z ADHD", "Opieka nad
                      sobą: Jak uniknąć wypalenia"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-baloo font-bold text-xl text-gray-dark">
                    3
                  </div>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-gray-dark mb-2">Grupy wsparcia</h4>
                    <p className="font-open text-gray-medium">
                      <strong>Proces:</strong> Wstępny kwestionariusz (hasło: "Rodzic") → Cykl 8 spotkań → Zamknięcie z
                      certyfikatem
                    </p>
                    <p className="font-open text-gray-medium mt-2">
                      <strong>Format:</strong> Online via Zoom – dyskusje moderowane, goście eksperci (psychologowie,
                      terapeuci)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-cyan/10 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="font-baloo text-3xl font-bold text-brand-blue mb-8 text-center">Korzyści i efekty</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-brand-yellow text-3xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-gray-dark mb-2">Praktyczne narzędzia</h4>
                    <p className="font-open text-gray-medium">
                      Od razu stosowalne strategie, które redukują konflikty o 40-60% (wg badań APA)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-brand-yellow text-3xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-gray-dark mb-2">Wsparcie emocjonalne</h4>
                    <p className="font-open text-gray-medium">
                      Mniej stresu, wzrost pewności siebie – rodzice czują się mniej samotni
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-brand-yellow text-3xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-gray-dark mb-2">Wiedza specjalistyczna</h4>
                    <p className="font-open text-gray-medium">
                      Zrozumienie diagnozy dziecka + integracja z terapią (np. ABA w domu)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-brand-yellow text-3xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-gray-dark mb-2">Sieć kontaktów</h4>
                    <p className="font-open text-gray-medium">
                      Nowe przyjaźnie i inspiracje od innych rodziców w podobnej sytuacji
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-2xl p-6">
                <p className="font-open text-gray-dark">
                  <strong className="text-brand-blue">Przykładowy efekt:</strong> Rodzic po warsztacie "ADHD" wdraża
                  system nagród – dziecko kończy zadania bez przypominania, a wieczory stają się spokojniejsze dla całej
                  rodziny.
                </p>
              </div>
            </div>

            {/* Special Package */}
            <div className="bg-gradient-to-br from-brand-blue/20 to-brand-yellow/20 rounded-3xl p-8 md:p-12 shadow-xl mb-12 border-4 border-brand-yellow">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🦸</div>
                <h3 className="font-baloo text-3xl font-bold text-brand-blue mb-3">Pakiet "Rodzic Superbohater"</h3>
                <p className="font-open text-xl text-gray-dark mb-4">
                  4 konsultacje + 1 warsztat + dostęp do grupy wsparcia (3 miesiące)
                </p>
                <p className="font-baloo text-4xl font-bold text-brand-yellow mb-2">500 zł</p>
                <p className="font-open text-gray-medium">(oszczędzasz 180 zł!)</p>
              </div>
            </div>

            {/* Free Webinar CTA */}
            <div className="bg-gradient-to-br from-brand-cyan to-brand-blue rounded-3xl p-8 md:p-12 shadow-xl text-center">
              <h3 className="font-baloo text-3xl font-bold text-white mb-4">Bezpłatny webinar wprowadzający</h3>
              <p className="font-open text-xl text-white/90 mb-6">
                "5 kroków do lepszego dnia z dzieckiem specjalnej troski"
              </p>
              <Link
                href="/kontakt"
                className="inline-block bg-brand-yellow text-gray-dark font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                Zapisz się już dziś!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#a4efeb] relative overflow-hidden">
        <div className="absolute top-20 left-12 opacity-15 hidden md:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={90}
            height={90}
            className="w-18 h-18 md:w-22 md:h-22 rotate-45"
          />
        </div>
        <div className="absolute bottom-20 right-12 opacity-15 hidden md:block">
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>
        <div className="absolute top-1/2 right-8 opacity-10 hidden lg:block">
          <Image
            src="/images/handprint-blue.png"
            alt=""
            width={70}
            height={70}
            className="w-14 h-14 lg:w-16 lg:h-16 -rotate-12"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1ebaf1] mb-4 text-center">
              Najczęściej zadawane pytania
            </h2>
            <p className="font-open text-lg text-gray-700 mb-12 text-center">
              Odpowiedzi na pytania, które najczęściej słyszę od rodziców
            </p>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-12 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={90}
            height={90}
            className="w-18 h-18 md:w-22 md:h-22"
          />
        </div>
        <div className="absolute top-40 right-16 opacity-15 hidden lg:block">
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={110}
            height={110}
            className="w-22 h-22 lg:w-26 lg:h-26 rotate-90"
          />
        </div>
        <div className="absolute bottom-32 left-16 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-blue.png"
            alt=""
            width={85}
            height={85}
            className="w-17 h-17 md:w-20 md:h-20 -rotate-30"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1ebaf1] mb-4 text-center">
              Artykuły i porady
            </h2>
            <p className="font-open text-lg text-gray-700 mb-12 text-center">
              Praktyczne wskazówki i wiedza o rozwoju dziecka
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-gradient-to-br from-[#a4efeb]/20 to-[#fed102]/10 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-sm font-open text-[#1ebaf1] mb-3">{post.date}</div>
                  <h3 className="font-baloo text-2xl font-bold text-gray-800 mb-4">{post.title}</h3>
                  <p className="font-open text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block font-baloo font-bold text-[#1ebaf1] hover:text-[#fed102] transition-colors duration-200"
                  >
                    Czytaj więcej →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-[#fed102]/20 relative overflow-hidden">
        <div className="absolute top-24 right-12 opacity-15 hidden md:block">
          <Image
            src="/images/handprint-blue.png"
            alt=""
            width={95}
            height={95}
            className="w-19 h-19 md:w-23 md:h-23 rotate-180"
          />
        </div>
        <div className="absolute bottom-20 left-8 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>
        <div className="absolute top-1/3 right-8 opacity-10 hidden lg:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={75}
            height={75}
            className="w-15 h-15 lg:w-18 lg:h-18 rotate-45"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1ebaf1] mb-4 text-center">
              Przydatne zasoby
            </h2>
            <p className="font-open text-lg text-gray-700 mb-12 text-center">
              Materiały i narzędzia wspierające rozwój Twojego dziecka
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-5xl mb-4">{resource.icon}</div>
                  <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-3">{resource.title}</h3>
                  <p className="font-open text-gray-600 leading-relaxed mb-4">{resource.description}</p>
                  {resource.link && (
                    <Link
                      href={resource.link}
                      className="inline-block font-baloo font-bold text-[#1ebaf1] hover:text-[#fed102] transition-colors duration-200"
                    >
                      Wypełnij formularz →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#a4efeb] to-[#1ebaf1] relative overflow-hidden">
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
            src="/images/handprint-blue.png"
            alt=""
            width={90}
            height={90}
            className="w-18 h-18 md:w-22 md:h-22 rotate-30"
          />
        </div>
        <div className="absolute top-1/2 right-8 opacity-15 hidden lg:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={70}
            height={70}
            className="w-14 h-14 lg:w-16 lg:h-16 rotate-90"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold mb-6 text-gray-800">Masz pytania?</h2>
            <p className="font-open text-xl mb-8 text-gray-700 leading-relaxed">
              Skontaktuj się ze mną, chętnie odpowiem na wszystkie Twoje pytania i pomogę wybrać najlepszą formę
              wsparcia dla Twojego dziecka.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-[#fed102] text-gray-800 font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-[#fed102] hover:border-gray-800"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
