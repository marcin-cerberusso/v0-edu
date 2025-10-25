"use client"

import Link from "next/link"
import Image from "next/image"
import { BookOpen, Hand, Headphones, Music, Brain, Ear } from "lucide-react"

export function PricingPreview() {
  const therapies = [
    {
      icon: BookOpen,
      title: "Terapia Pedagogiczna",
      priceTherapist: "120 zł",
      priceHome: "150 zł",
      duration: "50 min",
    },
    {
      icon: BookOpen,
      title: "Wczesna Nauka Czytania",
      priceTherapist: "120 zł",
      priceHome: "150 zł",
      duration: "50 min",
    },
    {
      icon: Headphones,
      title: "Czytanie z Forbrain",
      priceTherapist: "150 zł",
      priceHome: "180 zł",
      duration: "50 min",
    },
    {
      icon: Hand,
      title: "Terapia Ręki",
      priceTherapist: "120 zł",
      priceHome: "150 zł",
      duration: "50 min",
    },
  ]

  const auditoryTraining = [
    {
      icon: Ear,
      title: "Johansen IAS",
      price: "250-300 zł",
      description: "program indywidualny",
    },
    {
      icon: Brain,
      title: "Neuroflow",
      price: "450-470 zł",
      description: "etap I-III",
    },
    {
      icon: Music,
      title: "TMR",
      price: "150-170 zł",
      description: "etap I-III",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-brand-cyan/5 to-brand-yellow/5 relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10 hidden md:block">
        <svg className="w-20 h-20 text-brand-yellow" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="20" />
          <g>
            {[...Array(8)].map((_, i) => (
              <rect key={i} x="48" y="10" width="4" height="15" rx="2" transform={`rotate(${i * 45} 50 50)`} />
            ))}
          </g>
        </svg>
      </div>
      {/* </CHANGE> */}

      <div className="absolute top-20 left-12 opacity-10 hidden md:block">
        <Image src="/images/handprint-cyan.png" alt="" width={100} height={100} className="w-24 h-24 rotate-12" />
      </div>
      <div className="absolute bottom-20 right-12 opacity-10 hidden md:block">
        <Image src="/images/handprint-yellow.png" alt="" width={100} height={100} className="w-24 h-24 -rotate-12" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold mb-4">
              <span className="text-brand-blue">Cennik</span> <span className="text-brand-yellow">Usług</span>
            </h2>
            <p className="font-open text-lg text-gray-dark max-w-2xl mx-auto leading-relaxed">
              Przejrzyste ceny dostosowane do Twoich potrzeb. Wybierz zajęcia w gabinecie lub w domu.
            </p>
          </div>
          {/* </CHANGE> */}

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Individual Therapies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-blue/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-blue/10 rounded-full p-3">
                  <BookOpen className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-baloo text-2xl font-bold text-brand-blue">Terapie Indywidualne</h3>
              </div>

              <div className="space-y-4">
                {therapies.map((therapy, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <therapy.icon className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-baloo text-lg font-semibold text-gray-dark">{therapy.title}</h4>
                          <p className="font-open text-sm text-gray-medium">{therapy.duration}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center ml-8">
                      <div className="flex gap-4">
                        <div>
                          <p className="font-open text-xs text-gray-medium">w gabinecie</p>
                          <p className="font-baloo text-lg font-bold text-brand-blue">{therapy.priceTherapist}</p>
                        </div>
                        <div>
                          <p className="font-open text-xs text-gray-medium">w domu</p>
                          <p className="font-baloo text-lg font-bold text-brand-cyan">{therapy.priceHome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auditory Training */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-yellow/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-yellow/20 rounded-full p-3">
                  <Headphones className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-baloo text-2xl font-bold text-brand-blue">Treningi Słuchowe</h3>
              </div>

              <div className="space-y-6">
                {auditoryTraining.map((training, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-brand-cyan/10 rounded-lg p-2">
                        <training.icon className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-baloo text-xl font-semibold text-gray-dark mb-1">{training.title}</h4>
                        <p className="font-open text-sm text-gray-medium mb-2">{training.description}</p>
                        <p className="font-baloo text-2xl font-bold text-brand-blue">{training.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-open text-sm text-gray-medium text-center">
                  Cena obejmuje diagnozę i program indywidualny
                </p>
              </div>
            </div>
          </div>
          {/* </CHANGE> */}

          <div className="text-center">
            <Link
              href="/cennik"
              className="inline-block bg-brand-yellow hover:bg-gray-800 text-gray-dark hover:text-white font-baloo font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Zobacz szczegółowy cennik
            </Link>
          </div>
          {/* </CHANGE> */}
        </div>
      </div>
    </section>
  )
}
