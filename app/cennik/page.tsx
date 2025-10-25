"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingPage() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const diagnosticServices = [
    {
      name: "Diagnoza ADHD z kwestionariuszem online",
      scope: "Kompleksowa diagnoza ADHD z wywiadem, obserwacją i kwestionariuszem online (hasło: ADHD)",
      price: "500 zł / 90 min",
      category: "Diagnostyka",
    },
  ]

  const specializedTherapies = [
    {
      name: "Terapia Spektrum Autyzmu (ASD) / ADHD",
      scope: "Indywidualna terapia behawioralna i sensoryczna dla dzieci z autyzmem i ADHD",
      priceTherapist: "120 zł / 50 min",
      priceHome: "150 zł / 50 min",
      category: "Terapie specjalistyczne",
    },
    {
      name: "Interaktywna Terapia Przetwarzania Słuchowego – mTalent",
      scope: "700+ interaktywnych ćwiczeń komputerowych wspierających przetwarzanie słuchowe (CAPD)",
      price: "90 zł / 40 min",
      category: "Terapie specjalistyczne",
    },
  ]

  const individualTherapies = [
    {
      name: "Terapia pedagogiczna",
      scope: "Trudności w czytaniu, pisaniu, liczeniu, koncentracji, pamięci, rozwoju emocjonalno-społecznym",
      priceTherapist: "120 zł / 50 min",
      priceHome: "150 zł / 50 min",
      category: "Terapie indywidualne",
    },
    {
      name: "Wczesna nauka czytania – Metoda symultaniczno-sekwencyjna",
      scope: "Nauka czytania sylabami dla dzieci z ryzykiem dysleksji, opóźnionym rozwojem mowy, autyzmem",
      priceTherapist: "120 zł / 50 min",
      priceHome: "150 zł / 50 min",
      category: "Terapie indywidualne",
    },
    {
      name: "Czytanie sylabowe ze słuchawkami Forbrain®",
      scope: "Nauka czytania z technologią Forbrain®, wspierająca rozwój mowy i myślenia",
      priceTherapist: "150 zł / 50 min",
      priceHome: "180 zł / 50 min",
      category: "Terapie indywidualne",
    },
    {
      name: "Terapia ręki",
      scope: "Trudności w motoryce małej i dużej, nieprawidłowy chwyt, problemy z samoobsługą",
      priceTherapist: "120 zł / 50 min",
      priceHome: "150 zł / 50 min",
      category: "Terapie indywidualne",
    },
  ]

  const auditoryTraining = [
    {
      name: "Trening słuchowy Johansen IAS",
      scope: "Pasywny trening z indywidualnie dobraną muzyką wspierający przetwarzanie słuchowe",
      priceTherapist: "Diagnoza: 300 zł",
      priceHome: "Program: 250-300 zł",
      details: ["Diagnoza pełna: 300 zł", "Przygotowanie indywidualnego programu: 250-300 zł"],
      category: "Treningi słuchowe",
    },
    {
      name: "Trening słuchowy Neuroflow",
      scope: "Aktywny trening online rozwijający koncentrację, pamięć i umiejętności szkolne",
      priceTherapist: "I etap: 470 zł",
      priceHome: "II etap: 460 zł",
      details: ["I etap treningu: 470 zł", "II etap treningu: 460 zł", "III etap treningu: 450 zł"],
      category: "Treningi słuchowe",
    },
    {
      name: "Trening muzyczno-ruchowy (TMR)",
      scope: "Dla dzieci z nadwrażliwością słuchową oraz potrzebą obniżenia napięcia i stresu",
      priceTherapist: "I etap: 170 zł",
      priceHome: "II etap: 160 zł",
      details: ["I etap: 170 zł", "II etap: 160 zł", "III etap: 150 zł"],
      category: "Treningi słuchowe",
    },
  ]

  const allServices = [...diagnosticServices, ...specializedTherapies, ...individualTherapies, ...auditoryTraining]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-blue/10 via-white to-brand-yellow/10 relative overflow-hidden">
        <div className="absolute top-32 left-8 opacity-10 hidden md:block">
          <Image src="/images/handprint-blue.png" alt="" width={100} height={100} className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 right-12 opacity-10 hidden md:block">
          <Image src="/images/handprint-yellow.png" alt="" width={120} height={120} className="w-28 h-28" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-baloo text-5xl md:text-6xl font-bold mb-6">
              <span className="text-brand-blue">Cennik</span> <span className="text-brand-yellow">Usług</span>
            </h1>
            <p className="font-open text-xl text-gray-dark leading-relaxed mb-8">
              Kompleksowa oferta terapii i diagnozy z przejrzystymi cenami
            </p>
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-baloo text-3xl md:text-4xl font-bold text-brand-blue mb-12 text-center">
              Terapie i Diagnostyka
            </h2>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-3xl shadow-2xl border-2 border-brand-cyan/20 mb-12">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white">
                  <tr>
                    <th className="px-6 py-5 text-left font-baloo text-lg">Rodzaj usługi</th>
                    <th className="px-6 py-5 text-left font-baloo text-lg">Zakres wsparcia</th>
                    <th className="px-6 py-5 text-center font-baloo text-lg">Cena u terapeuty</th>
                    <th className="px-6 py-5 text-center font-baloo text-lg">Cena w domu</th>
                  </tr>
                </thead>
                <tbody>
                  {allServices.map((service, index) => (
                    <>
                      <tr
                        key={index}
                        className={`border-b border-gray-200 hover:bg-brand-cyan/5 transition-all ${
                          service.details ? "cursor-pointer" : ""
                        } ${expandedRow === index ? "bg-brand-yellow/5" : ""}`}
                        onClick={() => service.details && setExpandedRow(expandedRow === index ? null : index)}
                      >
                        <td className="px-6 py-5 font-baloo font-semibold text-brand-blue text-base">
                          {service.name}
                          {service.details && (
                            <span className="ml-2 text-brand-yellow text-sm">{expandedRow === index ? "▼" : "▶"}</span>
                          )}
                        </td>
                        <td className="px-6 py-5 font-open text-sm text-gray-dark leading-relaxed">{service.scope}</td>
                        <td className="px-6 py-5 text-center">
                          <span className="inline-block bg-brand-blue/10 px-4 py-2 rounded-full font-open font-semibold text-gray-800">
                            {service.priceTherapist || service.price}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          {service.priceHome ? (
                            <span className="inline-block bg-brand-yellow/10 px-4 py-2 rounded-full font-open font-semibold text-gray-800">
                              {service.priceHome}
                            </span>
                          ) : (
                            <span className="text-gray-500 text-sm">—</span>
                          )}
                        </td>
                      </tr>
                      {service.details && expandedRow === index && (
                        <tr className="bg-gradient-to-r from-brand-yellow/10 to-brand-cyan/10">
                          <td colSpan={4} className="px-6 py-5">
                            <div className="font-open text-sm text-gray-dark bg-white rounded-2xl p-6 shadow-inner">
                              <p className="font-baloo font-bold text-brand-blue mb-3 text-base">
                                Szczegółowy cennik programu:
                              </p>
                              <div className="grid md:grid-cols-2 gap-3">
                                {service.details.map((detail, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-brand-cyan/5 rounded-lg p-3 hover:bg-brand-cyan/10 transition-colors"
                                  >
                                    <Check className="w-5 h-5 text-brand-blue" />
                                    <span>{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4 mb-12">
              {allServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-brand-cyan/5 rounded-2xl p-6 shadow-lg border-2 border-brand-cyan/20 hover:border-brand-blue/40 transition-all"
                >
                  <h3
                    className="font-baloo text-lg font-bold text-brand-blue mb-3 cursor-pointer flex items-center justify-between"
                    onClick={() => service.details && setExpandedRow(expandedRow === index ? null : index)}
                  >
                    {service.name}
                    {service.details && (
                      <span className="text-brand-yellow text-sm">{expandedRow === index ? "▼" : "▶"}</span>
                    )}
                  </h3>
                  <p className="font-open text-sm text-gray-dark mb-4 leading-relaxed">{service.scope}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-brand-blue/10 rounded-xl p-4">
                      <p className="font-open text-xs text-gray-600 mb-1 font-semibold">U terapeuty</p>
                      <p className="font-open font-bold text-gray-800">{service.priceTherapist || service.price}</p>
                    </div>
                    {service.priceHome && (
                      <div className="bg-brand-yellow/10 rounded-xl p-4">
                        <p className="font-open text-xs text-gray-600 mb-1 font-semibold">W domu</p>
                        <p className="font-open font-bold text-gray-800">{service.priceHome}</p>
                      </div>
                    )}
                  </div>
                  {service.details && expandedRow === index && (
                    <div className="mt-4 pt-4 border-t border-brand-cyan/30">
                      <p className="font-baloo text-sm font-bold text-brand-blue mb-3">Szczegóły programu:</p>
                      <div className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="font-open text-sm text-gray-dark flex items-start gap-2 bg-brand-cyan/5 rounded-lg p-2"
                          >
                            <Check className="w-4 h-4 text-brand-blue mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-yellow/10 to-brand-cyan/10 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-baloo text-3xl md:text-4xl font-bold text-brand-blue mb-12 text-center">
              Wsparcie dla Rodziców
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Individual Consultations */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all">
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-4">Konsultacje indywidualne</h3>
                <p className="font-open text-gray-dark mb-6 leading-relaxed">
                  Praktyczne strategie, wsparcie emocjonalne i indywidualny plan działania
                </p>
                <div className="text-center mb-6">
                  <span className="inline-block bg-brand-blue/10 px-6 py-3 rounded-full font-baloo text-2xl font-bold text-brand-blue">
                    150 zł / 60 min
                  </span>
                </div>
              </div>

              {/* Workshops */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-brand-yellow/20 hover:border-brand-yellow/40 transition-all">
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-4">Warsztaty tematyczne</h3>
                <p className="font-open text-gray-dark mb-6 leading-relaxed">
                  Grupowe spotkania edukacyjne na tematy wychowawcze i rozwojowe
                </p>
                <div className="text-center mb-6">
                  <span className="inline-block bg-brand-yellow/10 px-6 py-3 rounded-full font-baloo text-2xl font-bold text-brand-blue">
                    80 zł / osoba
                  </span>
                </div>
              </div>

              {/* Support Groups */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-brand-cyan/20 hover:border-brand-cyan/40 transition-all">
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-4">Grupy wsparcia</h3>
                <p className="font-open text-gray-dark mb-6 leading-relaxed">
                  Regularne spotkania w małych grupach dla rodziców dzieci z podobnymi wyzwaniami
                </p>
                <div className="text-center">
                  <span className="inline-block bg-brand-cyan/10 px-6 py-3 rounded-full font-baloo text-2xl font-bold text-brand-blue">
                    50 zł / spotkanie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-20 left-8 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-blue.png"
            alt=""
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-brand-blue mb-8 text-center">Dodatkowe informacje</h2>
            <div className="space-y-6">
              <div className="bg-brand-cyan/20 rounded-2xl p-6">
                <h3 className="font-baloo text-xl font-bold text-brand-blue mb-2">Bezpłatna konsultacja</h3>
                <p className="font-open text-gray-dark leading-relaxed">
                  Pierwsza konsultacja diagnostyczna jest bezpłatna. Podczas spotkania omówimy potrzeby dziecka i
                  ustalimy plan terapii.
                </p>
              </div>
              <div className="bg-brand-yellow/20 rounded-2xl p-6">
                <h3 className="font-baloo text-xl font-bold text-brand-blue mb-2">Elastyczne terminy</h3>
                <p className="font-open text-gray-dark leading-relaxed">
                  Oferuję elastyczne godziny zajęć, dostosowane do Waszego harmonogramu. Możliwość odwołania sesji z
                  24-godzinnym wyprzedzeniem.
                </p>
              </div>
              <div className="bg-brand-cyan/20 rounded-2xl p-6">
                <h3 className="font-baloo text-xl font-bold text-brand-blue mb-2">Formy płatności</h3>
                <p className="font-open text-gray-dark leading-relaxed">
                  Akceptuję płatności gotówką oraz przelewem bankowym. Możliwość wystawienia faktury VAT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-cyan via-brand-cyan/80 to-brand-blue/30 text-gray-800 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 hidden md:block">
          <Image src="/images/handprint-yellow.png" alt="" width={120} height={120} className="w-28 h-28 rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 hidden md:block">
          <Image src="/images/handprint-blue.png" alt="" width={100} height={100} className="w-24 h-24 -rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
              Gotowy na pierwszą wizytę?
            </h2>
            <p className="font-open text-xl mb-8 leading-relaxed text-gray-dark">
              Umów się na bezpłatną konsultację i poznaj szczegóły oferty
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-brand-yellow text-gray-800 font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-brand-yellow hover:border-gray-800"
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
