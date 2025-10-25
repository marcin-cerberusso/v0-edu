"use client"

import type React from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function QuestionnairesPage() {
  const [passwords, setPasswords] = useState<{ [key: string]: string }>({})
  const [unlockedQuestionnaires, setUnlockedQuestionnaires] = useState<Set<string>>(new Set())
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const questionnaires = [
    {
      id: "adhd",
      title: "Kwestionariusz ADHD",
      description: "Ocena objawów ADHD - koncentracji, impulsywności i nadpobudliwości",
      file: "/kwestionariusze/adhd.pdf",
      password: "Adhd adhd",
      requiresPassword: true,
    },
    {
      id: "sluch",
      title: "Kwestionariusz Przetwarzania Słuchowego",
      description: "Ocena umiejętności przetwarzania informacji słuchowych",
      file: "/kwestionariusze/przetwarzanie-sluchowe.pdf",
      password: "Słuch",
      requiresPassword: true,
    },
    {
      id: "rozwoj-2-3",
      title: "Kwestionariusz rozwoju dziecka 2-3 lata",
      description: "Ocena rozwoju motorycznego, poznawczego i społecznego",
      file: "/kwestionariusze/rozwoj-2-3.pdf",
      requiresPassword: false,
    },
    {
      id: "rozwoj-4-6",
      title: "Kwestionariusz rozwoju dziecka 4-6 lat",
      description: "Kompleksowa ocena gotowości szkolnej i umiejętności",
      file: "/kwestionariusze/rozwoj-4-6.pdf",
      requiresPassword: false,
    },
    {
      id: "integracja",
      title: "Kwestionariusz integracji sensorycznej",
      description: "Ocena przetwarzania bodźców zmysłowych",
      file: "/kwestionariusze/integracja-sensoryczna.pdf",
      requiresPassword: false,
    },
    {
      id: "emocjonalny",
      title: "Kwestionariusz rozwoju emocjonalnego",
      description: "Ocena umiejętności społecznych i emocjonalnych",
      file: "/kwestionariusze/rozwoj-emocjonalny.pdf",
      requiresPassword: false,
    },
  ]

  const handleSubmit = (e: React.FormEvent, questionnaireId: string, correctPassword: string) => {
    e.preventDefault()
    if (passwords[questionnaireId] === correctPassword) {
      setUnlockedQuestionnaires(new Set([...unlockedQuestionnaires, questionnaireId]))
      setErrors({ ...errors, [questionnaireId]: "" })
    } else {
      setErrors({ ...errors, [questionnaireId]: "Nieprawidłowe hasło. Skontaktuj się, aby otrzymać dostęp." })
    }
  }

  const handlePasswordChange = (questionnaireId: string, value: string) => {
    setPasswords({ ...passwords, [questionnaireId]: value })
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-cyan/30 to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-baloo text-5xl md:text-6xl font-bold text-brand-blue mb-6">Kwestionariusze</h1>
            <p className="font-open text-xl text-gray-dark leading-relaxed">
              Kwestionariusze diagnostyczne dla rodziców. Niektóre wymagają hasła otrzymanego podczas konsultacji.
            </p>
          </div>
        </div>
      </section>

      {/* Questionnaires List */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-brand-blue mb-8 text-center">Dostępne kwestionariusze</h2>

            <div className="space-y-6">
              {questionnaires.map((questionnaire) => {
                const isUnlocked = !questionnaire.requiresPassword || unlockedQuestionnaires.has(questionnaire.id)

                return (
                  <div
                    key={questionnaire.id}
                    className="bg-gradient-to-br from-brand-cyan/20 to-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-baloo text-2xl font-bold text-brand-blue">{questionnaire.title}</h3>
                          {questionnaire.requiresPassword && (
                            <span className="text-2xl">{isUnlocked ? "🔓" : "🔒"}</span>
                          )}
                        </div>
                        <p className="font-open text-gray-medium">{questionnaire.description}</p>
                      </div>
                      {isUnlocked && (
                        <a
                          href={questionnaire.file}
                          download
                          className="flex-shrink-0 bg-brand-yellow text-gray-dark font-baloo font-bold px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                        >
                          📄 Pobierz PDF
                        </a>
                      )}
                    </div>

                    {questionnaire.requiresPassword && !isUnlocked && (
                      <form
                        onSubmit={(e) => handleSubmit(e, questionnaire.id, questionnaire.password!)}
                        className="mt-4 pt-4 border-t border-gray-300"
                      >
                        <div className="flex gap-3">
                          <div className="flex-1">
                            <input
                              type="password"
                              value={passwords[questionnaire.id] || ""}
                              onChange={(e) => handlePasswordChange(questionnaire.id, e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-brand-blue focus:outline-none font-open"
                              placeholder="Wprowadź hasło"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="bg-brand-yellow text-gray-dark font-baloo font-bold px-6 py-3 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                          >
                            Odblokuj
                          </button>
                        </div>
                        {errors[questionnaire.id] && (
                          <div className="mt-3 bg-red-100 border-2 border-red-300 text-red-700 px-4 py-2 rounded-xl font-open text-sm">
                            {errors[questionnaire.id]}
                          </div>
                        )}
                        <p className="mt-3 font-open text-sm text-gray-medium">
                          Nie masz hasła?{" "}
                          <a href="/kontakt" className="text-brand-blue font-bold hover:text-brand-yellow">
                            Skontaktuj się ze mną
                          </a>
                        </p>
                      </form>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 bg-brand-cyan relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-brand-blue mb-6 text-center">
              Jak wypełnić kwestionariusz?
            </h2>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <ol className="space-y-4 font-open text-gray-dark leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>Pobierz odpowiedni kwestionariusz dla wieku Twojego dziecka</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>Wypełnij go spokojnie, obserwując dziecko w codziennych sytuacjach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>Przynieś wypełniony kwestionariusz na konsultację lub prześlij mailem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <span>Omówimy wyniki podczas spotkania i ustalimy plan wsparcia</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-yellow to-brand-yellow/80 relative overflow-hidden">
        <div className="absolute top-16 left-16 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-blue.png"
            alt=""
            width={110}
            height={110}
            className="w-22 h-22 md:w-26 md:h-26 -rotate-15"
          />
        </div>
        <div className="absolute bottom-16 right-16 opacity-20 hidden md:block">
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={90}
            height={90}
            className="w-18 h-18 md:w-22 md:h-22 rotate-30"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold mb-6 text-gray-dark">Potrzebujesz pomocy?</h2>
            <p className="font-open text-xl mb-8 text-gray-dark leading-relaxed">
              Jeśli masz pytania dotyczące kwestionariuszy lub potrzebujesz wsparcia w ich wypełnieniu, skontaktuj się
              ze mną.
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-brand-yellow text-gray-dark font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-brand-yellow hover:border-gray-800"
            >
              Skontaktuj się
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
