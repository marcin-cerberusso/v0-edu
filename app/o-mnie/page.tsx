"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Award, Heart, GraduationCap, BookOpen, Stethoscope, Users } from "lucide-react"

export default function AboutPage() {
  const [openCategories, setOpenCategories] = useState<string[]>(["auditory", "diagnostic", "therapy", "behavioral"])

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-cyan/10 via-white to-brand-blue/5 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-20 right-12 opacity-5">
          <Image src="/images/handprint-blue.png" alt="" width={120} height={120} className="w-28 h-28" />
        </div>
        <div className="absolute bottom-20 left-12 opacity-5">
          <Image src="/images/handprint-cyan.png" alt="" width={100} height={100} className="w-24 h-24" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-baloo font-bold">Pedagog Specjalny</span>
                </div>

                <h1 className="font-baloo text-5xl md:text-6xl lg:text-7xl font-bold text-brand-blue leading-tight">
                  Joanna Kowalska
                </h1>

                <div className="space-y-4">
                  <p className="font-open text-xl text-gray-dark leading-relaxed">
                    Jestem pedagogiem specjalnym z wieloletnim doświadczeniem w pracy z dziećmi o zróżnicowanych
                    potrzebach rozwojowych i edukacyjnych.
                  </p>
                  <p className="font-open text-lg text-gray-medium leading-relaxed">
                    Specjalizuję się w terapii dzieci z niepełnosprawnością intelektualną, ze spektrum autyzmu,
                    zaburzeniami zachowania oraz trudnościami w uczeniu się.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-brand-cyan/20">
                    <div className="text-3xl font-baloo font-bold text-brand-blue">10+</div>
                    <div className="text-sm font-open text-gray-medium">Lat doświadczenia</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-brand-yellow/20">
                    <div className="text-3xl font-baloo font-bold text-brand-blue">20+</div>
                    <div className="text-sm font-open text-gray-medium">Certyfikatów</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-brand-blue/20">
                    <div className="text-3xl font-baloo font-bold text-brand-blue">100+</div>
                    <div className="text-sm font-open text-gray-medium">Dzieci wsparte</div>
                  </div>
                </div>
              </div>

              {/* Right: Photo with subtle decorative elements */}
              <div className="relative">
                <div className="relative z-10">
                  {/* Main photo container */}
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* Subtle background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 rounded-full blur-3xl"></div>

                    {/* Photo */}
                    <div className="relative rounded-full overflow-hidden shadow-xl border-4 border-white">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oferta%20Terapii%20i%20Diagnozy%20dla%20Dzieci%20Pomagam%20dzieciom%20pokonywa%C4%87%20trudno%C5%9Bci%20i%20rozwija%C4%87%20ich%20potencja%C5%82%20w%20przyjaznej%2C%20domowej%20atmosferze%21%20%F0%9F%8F%A1%F0%9F%92%9B%20Oferuj%C4%99%20indywidualne%20zaj%C4%99cia%20terapeutyczne%20dla%20dzieci%20w%20wi-HCwRKM1yRZBYV7PQe0gWvQ2nIw5oIY.png"
                        alt="Joanna Kowalska - Pedagog Specjalny"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Subtle corner accents */}
                    <div className="absolute -top-3 -right-3 bg-brand-yellow text-white p-3 rounded-xl shadow-lg">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-brand-blue text-white p-3 rounded-xl shadow-lg">
                      <Heart className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-br from-brand-beige/50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-baloo text-4xl md:text-5xl font-bold text-brand-blue mb-4">Wykształcenie</h2>
              <p className="font-open text-lg text-gray-medium max-w-2xl mx-auto">
                Solidne podstawy teoretyczne i praktyczne w pedagogice specjalnej
              </p>
            </div>

            <div className="space-y-8">
              {/* Master's Degree */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-brand-blue/10 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-xl flex items-center justify-center shadow-md">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-baloo font-bold mb-3">
                      Studia Magisterskie
                    </div>
                    <h3 className="font-baloo text-2xl md:text-3xl font-bold text-brand-blue mb-3">
                      Edukacja i rehabilitacja osób z niepełnosprawnością intelektualną
                    </h3>
                    <p className="font-open text-lg text-gray-dark">
                      Akademia Pedagogiki Specjalnej im. Marii Grzegorzewskiej
                    </p>
                  </div>
                </div>
              </div>

              {/* Postgraduate Studies */}
              <div className="bg-gradient-to-br from-brand-yellow/5 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-brand-yellow/20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow to-brand-yellow/80 rounded-xl flex items-center justify-center shadow-md">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="inline-block bg-brand-yellow/20 text-brand-blue px-3 py-1 rounded-full text-sm font-baloo font-bold mb-1">
                      Studia Podyplomowe
                    </div>
                    <h3 className="font-baloo text-2xl md:text-3xl font-bold text-brand-blue">
                      Specjalizacje zawodowe
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Pedagogika opiekuńczo-wychowawcza z pomocą psychologiczno-pedagogiczną",
                    "Pedagogika korekcyjna",
                    "Edukacja i rewalidacja osób ze spektrum autyzmu",
                    "Wczesne wspomaganie rozwoju dziecka",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-brand-yellow/10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-7 h-7 bg-brand-yellow/20 rounded-lg flex items-center justify-center text-brand-blue font-baloo font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="font-open text-gray-dark leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Qualifications Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-baloo text-4xl md:text-5xl font-bold text-brand-blue mb-4">
                Ukończone Kursy i Szkolenia
              </h2>
              <p className="font-open text-lg text-gray-medium max-w-3xl mx-auto">
                Ciągły rozwój zawodowy pozwala mi oferować najwyższą jakość wsparcia terapeutycznego
              </p>
            </div>

            <div className="space-y-6">
              {/* Auditory Training Category */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-brand-blue/20 hover:border-brand-blue/40 transition-colors">
                <button
                  onClick={() => toggleCategory("auditory")}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-brand-blue/5 transition-colors"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-xl flex items-center justify-center shadow-md">
                      <Stethoscope className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-baloo text-2xl md:text-3xl font-bold text-brand-blue">Treningi Słuchowe</h3>
                      <p className="font-open text-sm md:text-base text-gray-medium">3 specjalistyczne certyfikacje</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 md:w-7 md:h-7 text-brand-blue transition-transform duration-300 ${
                      openCategories.includes("auditory") ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openCategories.includes("auditory") ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 grid md:grid-cols-3 gap-4">
                    {[
                      { title: "Neuroflow", desc: "Trening słuchowy Neuroflow" },
                      { title: "Johansen IAS", desc: "Indywidualna Stymulacja Słuchu" },
                      { title: "(C)APD", desc: "Zaburzenia przetwarzania słuchowego - diagnoza i terapia" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-brand-blue/5 rounded-xl p-5 hover:shadow-md transition-shadow border border-brand-blue/10"
                      >
                        <h4 className="font-baloo text-lg font-bold text-brand-blue mb-2">{item.title}</h4>
                        <p className="font-open text-sm text-gray-dark">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Diagnostic Tools Category */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-brand-yellow/20 hover:border-brand-yellow/40 transition-colors">
                <button
                  onClick={() => toggleCategory("diagnostic")}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-brand-yellow/5 transition-colors"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-yellow to-brand-yellow/80 rounded-xl flex items-center justify-center shadow-md">
                      <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-baloo text-2xl md:text-3xl font-bold text-brand-blue">
                        Narzędzia Diagnostyczne
                      </h3>
                      <p className="font-open text-sm md:text-base text-gray-medium">3 certyfikowane metody oceny</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 md:w-7 md:h-7 text-brand-yellow transition-transform duration-300 ${
                      openCategories.includes("diagnostic") ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openCategories.includes("diagnostic") ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 grid md:grid-cols-3 gap-4">
                    {[
                      { title: "KOZE", desc: "Karty Oceny Zachowania i Emocji" },
                      { title: "KOJR", desc: "Karty Oceny Jakościowej Rozwoju" },
                      { title: "KORP", desc: "Karty Oceny Rozwoju Psychoruchowego (1 m.ż.–9 r.ż.)" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-brand-yellow/5 rounded-xl p-5 hover:shadow-md transition-shadow border border-brand-yellow/10"
                      >
                        <h4 className="font-baloo text-lg font-bold text-brand-blue mb-2">{item.title}</h4>
                        <p className="font-open text-sm text-gray-dark">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Therapy Methods Category */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-brand-cyan/20 hover:border-brand-cyan/40 transition-colors">
                <button
                  onClick={() => toggleCategory("therapy")}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-brand-cyan/5 transition-colors"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-cyan to-brand-cyan/80 rounded-xl flex items-center justify-center shadow-md">
                      <Heart className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-baloo text-2xl md:text-3xl font-bold text-brand-blue">
                        Metody Terapeutyczne
                      </h3>
                      <p className="font-open text-sm md:text-base text-gray-medium">4 specjalistyczne podejścia</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 md:w-7 md:h-7 text-brand-cyan transition-transform duration-300 ${
                      openCategories.includes("therapy") ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openCategories.includes("therapy") ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Terapia Ręki",
                        desc: "Diagnoza i działania terapeutyczne (MODM Białystok)",
                      },
                      {
                        title: "Nauka Czytania",
                        desc: "Symultaniczno-Sekwencyjna Nauka Czytania (CEN Białystok)",
                      },
                      { title: "TUS", desc: "Trening Umiejętności Społecznych (PODN Białystok)" },
                      {
                        title: "Kierownik Wypoczynku",
                        desc: "Kurs Kierownika Wypoczynku (Gaudeamus, Warszawa)",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-brand-cyan/5 rounded-xl p-5 hover:shadow-md transition-shadow border border-brand-cyan/10"
                      >
                        <h4 className="font-baloo text-lg font-bold text-brand-blue mb-2">{item.title}</h4>
                        <p className="font-open text-sm text-gray-dark">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Behavioral Therapy Category */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-brand-blue/20 hover:border-brand-blue/40 transition-colors">
                <button
                  onClick={() => toggleCategory("behavioral")}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-brand-blue/5 transition-colors"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-xl flex items-center justify-center shadow-md">
                      <Users className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-baloo text-2xl md:text-3xl font-bold text-brand-blue">
                        Terapia Behawioralna
                      </h3>
                      <p className="font-open text-sm md:text-base text-gray-medium">3 zaawansowane certyfikacje</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 md:w-7 md:h-7 text-brand-blue transition-transform duration-300 ${
                      openCategories.includes("behavioral") ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openCategories.includes("behavioral") ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 grid md:grid-cols-3 gap-4">
                    {[
                      { title: "ABA", desc: "3-modułowy kurs Stosowanej Analizy Zachowania" },
                      { title: "TZA", desc: "Trening Zastępowania Agresji (MODM Białystok)" },
                      { title: "PECS", desc: "PECS poziom 1 - system komunikacji alternatywnej" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-brand-blue/5 rounded-xl p-5 hover:shadow-md transition-shadow border border-brand-blue/10"
                      >
                        <h4 className="font-baloo text-lg font-bold text-brand-blue mb-2">{item.title}</h4>
                        <p className="font-open text-sm text-gray-dark">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-brand-yellow/5 via-brand-beige/30 to-white relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-5">
          <Image src="/images/handprint-cyan.png" alt="" width={100} height={100} className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5">
          <Image src="/images/handprint-blue.png" alt="" width={100} height={100} className="w-24 h-24" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-blue">
                Każde dziecko jest wyjątkowe
              </h2>
              <p className="font-open text-xl md:text-2xl leading-relaxed text-gray-dark max-w-3xl mx-auto">
                W mojej pracy stawiam na budowanie relacji opartej na{" "}
                <span className="text-brand-blue font-bold">zaufaniu</span>,{" "}
                <span className="text-brand-yellow font-bold">szacunku</span> i{" "}
                <span className="text-brand-cyan font-bold">radości</span> z odkrywania świata.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-brand-blue/10">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 rounded-xl">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="font-baloo text-lg font-bold text-brand-blue mb-2">Indywidualne podejście</h3>
                  <p className="font-open text-sm text-gray-medium">Każde dziecko ma swoje tempo i potrzeby</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 rounded-xl">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <h3 className="font-baloo text-lg font-bold text-brand-blue mb-2">Ciągły rozwój</h3>
                  <p className="font-open text-sm text-gray-medium">Najnowsze metody i badania naukowe</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-brand-cyan/5 to-brand-cyan/10 rounded-xl">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h3 className="font-baloo text-lg font-bold text-brand-blue mb-2">Wsparcie rodziny</h3>
                  <p className="font-open text-sm text-gray-medium">Razem osiągamy więcej</p>
                </div>
              </div>

              <div className="text-center pt-8">
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-baloo text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Skontaktuj się ze mną
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      <Footer />
    </main>
  )
}
