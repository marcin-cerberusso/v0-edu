"use client"

import type React from "react"
import Image from "next/image"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#a4efeb]/30 to-[#1ebaf1]/10 relative">
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
            <h1 className="font-baloo text-5xl md:text-6xl font-bold text-[#1ebaf1] mb-6">Kontakt</h1>
            <p className="font-open text-xl text-gray-700 leading-relaxed">
              Skontaktuj się ze mną, aby umówić konsultację lub zadać pytanie
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-gradient-to-br from-[#a4efeb]/30 to-[#1ebaf1]/10 relative min-h-screen">
        {/* Decorative handprint - top right */}
        <div className="absolute top-12 right-12 opacity-20 hidden lg:block">
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={120}
            height={120}
            className="w-24 h-24 lg:w-32 lg:h-32"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information - Absolute positioned cards */}
              <div className="relative">
                <h2 className="font-baloo text-4xl font-bold text-[#1ebaf1] mb-8">Dane kontaktowe</h2>

                <div className="space-y-6">
                  {/* Address Card */}
                  <div className="bg-[#a4efeb]/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/50">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-[#1ebaf1] rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-2">Adres</h3>
                        <p className="font-open text-gray-700 text-lg leading-relaxed">
                          Polna 17
                          <br />
                          83-021 Pomigacze
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-[#fed102]/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-[#fed102] rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-7 h-7 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-2">Telefon</h3>
                        <p className="font-open text-gray-700 text-lg">
                          <a href="tel:+48531509008" className="hover:text-[#1ebaf1] transition-colors">
                            +48 531 509 008
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-[#a4efeb]/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/50">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-[#1ebaf1] rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-2">Email</h3>
                        <p className="font-open text-gray-700 text-lg">
                          <a href="mailto:kontakt@eduhustawka.pl" className="hover:text-[#1ebaf1] transition-colors">
                            kontakt@eduhustawka.pl
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hours Card */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-[#fed102]/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-[#fed102] rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-7 h-7 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-2">Godziny pracy</h3>
                        <p className="font-open text-gray-700 text-lg leading-relaxed">
                          Poniedziałek - Piątek: 8:00 - 16:00
                          <br />
                          Sobota: na umówienie
                          <br />
                          Niedziela: Zamknięte
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
                <h2 className="font-baloo text-4xl font-bold text-[#1ebaf1] mb-8">Wyślij wiadomość</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-baloo font-bold text-[#1ebaf1] mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1ebaf1] focus:outline-none font-open transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-baloo font-bold text-[#1ebaf1] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1ebaf1] focus:outline-none font-open transition-colors"
                        placeholder="jan@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-baloo font-bold text-[#1ebaf1] mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1ebaf1] focus:outline-none font-open transition-colors"
                        placeholder="+48 531 509 008"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-baloo font-bold text-[#1ebaf1] mb-2">
                      Temat *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1ebaf1] focus:outline-none font-open transition-colors"
                    >
                      <option value="">Wybierz temat</option>
                      <option value="consultation">Umówienie konsultacji</option>
                      <option value="therapy">Pytanie o terapię</option>
                      <option value="pricing">Pytanie o cennik</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-baloo font-bold text-[#1ebaf1] mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#1ebaf1] focus:outline-none font-open transition-colors resize-none"
                      placeholder="Opisz swoją sytuację lub zadaj pytanie..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-100 border-2 border-green-300 text-green-700 px-6 py-4 rounded-xl font-open">
                      ✓ Wiadomość została wysłana! Odpowiem najszybciej jak to możliwe.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-100 border-2 border-red-300 text-red-700 px-6 py-4 rounded-xl font-open">
                      ✗ Wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1ebaf1] text-white font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-[#fed102] hover:text-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#a4efeb] relative">
        <div className="absolute bottom-20 right-12 opacity-15 hidden md:block">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-[#1ebaf1] mb-8 text-center">Jak do nas trafić?</h2>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.8!2d18.4!3d54.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDE4JzAwLjAiTiAxOMKwMjQnMDAuMCJF!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa lokalizacji Eduhuśtawka"
                />
              </div>
            </div>
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-4">Dojazd</h3>
              <div className="grid md:grid-cols-2 gap-6 font-open text-gray-700">
                <div>
                  <h4 className="font-bold text-[#1ebaf1] mb-2">Samochodem:</h4>
                  <p>Z Gdańska: droga krajowa nr 7 (ok. 30 min)</p>
                  <p>Z Kartuz: droga wojewódzka 211 (ok. 15 min)</p>
                  <p>Parking dostępny przy budynku</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1ebaf1] mb-2">Komunikacja:</h4>
                  <p>Autobusy z Gdańska i Kartuz</p>
                  <p>Przystanek: Pomigacze Centrum</p>
                  <p>5 minut pieszo od przystanku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-[#a4efeb] to-[#1ebaf1]/60 relative overflow-hidden">
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
            <h2 className="font-baloo text-4xl md:text-5xl font-bold mb-6 text-gray-800">Masz pytania?</h2>
            <p className="font-open text-xl mb-8 text-gray-700 leading-relaxed">
              Sprawdź najczęściej zadawane pytania lub skontaktuj się bezpośrednio
            </p>
            <a
              href="/dla-rodzicow#faq"
              className="inline-block bg-[#fed102] text-gray-800 font-baloo font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Zobacz FAQ
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
