"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"

export default function ParentInterviewPage() {
  const [formData, setFormData] = useState({
    // Basic Information
    childName: "",
    childDOB: "",
    childAge: "",
    interviewDate: "",
    medicalDiagnosis: "",
    interviewer: "Eduhuśtawka",

    // Pregnancy
    pregnancyNumber: "",
    previousPregnancyIssues: "",
    pregnancyProgress: "",
    pregnancyActivity: "",
    pregnancyHealth: "",
    pregnancyMedications: "",
    pregnancySubstances: "",
    pregnancyIllnesses: "",
    pregnancyXray: "",
    pregnancyStress: "",

    // Birth
    birthTerm: "",
    birthType: "",
    birthComplications: "",
    newbornCondition: "",
    birthWeight: "",
    birthInjuries: "",
    apgarScore: "",
    incubator: "",
    jaundice: "",
    infections: "",

    // Development
    feeding: "",
    pacifier: "",
    sitting: "",
    crawling: "",
    crawlingOnAllFours: "",
    walking: "",

    // Medical History
    pastIllnesses: "",
    hospitalStays: "",
    medications: "",
    earThroatInflammations: "",
    currentHealth: "",
    physicalInjuries: "",
    specialistCare: "",
    hearingVisionTests: "",

    // Speech Development
    babbling: "",
    firstWords: "",
    expressNeeds: "",
    understandCommands: "",
    speechDisorders: "",

    // Self-care
    toiletTraining: "",
    dressing: "",
    eating: "",

    // Sleep
    sleepDuration: "",
    daytimeSleep: "",
    fallsAsleepAlone: "",
    nightWaking: "",

    // Behavior
    eyeContact: "",
    mobility: "",
    concentration: "",
    emotionExpression: "",
    usualMood: "",

    // General Information
    interests: "",
    playForms: "",
    relationshipWithFamily: "",
    schoolEnvironment: "",
    difficulties: "",
    mainConcerns: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Dziękujemy za wypełnienie wywiadu! Skontaktujemy się z Tobą wkrótce.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1ebaf1]/10 to-[#a4efeb]/20 relative overflow-hidden">
        <div className="absolute top-32 left-8 opacity-15 hidden md:block">
          <Image src="/images/handprint-yellow.png" alt="" width={100} height={100} className="w-20 h-20 rotate-12" />
        </div>
        <div className="absolute top-20 right-16 opacity-10 hidden lg:block">
          <Image src="/images/handprint-cyan.png" alt="" width={120} height={120} className="w-24 h-24 -rotate-45" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-baloo text-5xl md:text-6xl font-bold text-[#1ebaf1] mb-6">Wywiad z Rodzicami</h1>
            <p className="font-open text-xl text-gray-700 leading-relaxed">
              Wypełnienie tego formularza pomoże mi lepiej poznać Twoje dziecko i przygotować się do pierwszego
              spotkania. Wszystkie informacje są poufne i służą wyłącznie celom diagnostycznym.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Basic Information */}
              <div className="bg-gradient-to-br from-[#1ebaf1]/5 to-[#a4efeb]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Informacje Podstawowe</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Imię i nazwisko dziecka</label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Data urodzenia dziecka</label>
                    <input
                      type="date"
                      name="childDOB"
                      value={formData.childDOB}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Wiek dziecka</label>
                    <input
                      type="text"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder="np. 4 lata 6 miesięcy"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Data przeprowadzonego wywiadu
                    </label>
                    <input
                      type="date"
                      name="interviewDate"
                      value={formData.interviewDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Diagnoza medyczna dziecka
                    </label>
                    <textarea
                      name="medicalDiagnosis"
                      value={formData.medicalDiagnosis}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      placeholder="Jeśli dziecko ma postawioną diagnozę medyczną, proszę ją opisać"
                    />
                  </div>
                </div>
              </div>

              {/* Pregnancy */}
              <div className="bg-gradient-to-br from-[#fed102]/5 to-[#fed102]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Ciąża</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Która ciąża</label>
                      <input
                        type="text"
                        name="pregnancyNumber"
                        value={formData.pregnancyNumber}
                        onChange={handleChange}
                        placeholder="np. pierwsza, druga"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">
                        Problemy z wcześniejszymi ciążami
                      </label>
                      <input
                        type="text"
                        name="previousPregnancyIssues"
                        value={formData.previousPregnancyIssues}
                        onChange={handleChange}
                        placeholder="Jeśli dotyczy"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Przebieg ciąży</label>
                    <textarea
                      name="pregnancyProgress"
                      value={formData.pregnancyProgress}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Opisz przebieg ciąży (np. przeleżana, matka aktywna ruchowo)"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Stan zdrowia w trakcie ciąży
                    </label>
                    <textarea
                      name="pregnancyHealth"
                      value={formData.pregnancyHealth}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Leki w czasie ciąży</label>
                      <input
                        type="text"
                        name="pregnancyMedications"
                        value={formData.pregnancyMedications}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Używki</label>
                      <input
                        type="text"
                        name="pregnancySubstances"
                        value={formData.pregnancySubstances}
                        onChange={handleChange}
                        placeholder="Papierosy, alkohol, itp."
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Choroby w czasie ciąży</label>
                    <input
                      type="text"
                      name="pregnancyIllnesses"
                      value={formData.pregnancyIllnesses}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Promieniowanie RTG</label>
                      <select
                        name="pregnancyXray"
                        value={formData.pregnancyXray}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      >
                        <option value="">Wybierz</option>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">
                        Sytuacje silnie stresujące
                      </label>
                      <input
                        type="text"
                        name="pregnancyStress"
                        value={formData.pregnancyStress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Birth */}
              <div className="bg-gradient-to-br from-[#a4efeb]/5 to-[#a4efeb]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Poród</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">
                        Termin (norma 38-42 tydzień)
                      </label>
                      <input
                        type="text"
                        name="birthTerm"
                        value={formData.birthTerm}
                        onChange={handleChange}
                        placeholder="np. 40 tydzień"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Rodzaj porodu</label>
                      <select
                        name="birthType"
                        value={formData.birthType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      >
                        <option value="">Wybierz</option>
                        <option value="Naturalny">Naturalny</option>
                        <option value="Cesarskie cięcie">Cesarskie cięcie</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Powikłania (zamartwica, wody płodowe)
                    </label>
                    <textarea
                      name="birthComplications"
                      value={formData.birthComplications}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">
                        Stan noworodka po urodzeniu
                      </label>
                      <input
                        type="text"
                        name="newbornCondition"
                        value={formData.newbornCondition}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Waga urodzeniowa</label>
                      <input
                        type="text"
                        name="birthWeight"
                        value={formData.birthWeight}
                        onChange={handleChange}
                        placeholder="np. 3500g"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Urazy okołoporodowe</label>
                      <input
                        type="text"
                        name="birthInjuries"
                        value={formData.birthInjuries}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Ocena wg skali Apgar</label>
                      <input
                        type="text"
                        name="apgarScore"
                        value={formData.apgarScore}
                        onChange={handleChange}
                        placeholder="np. 10/10"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Inkubator</label>
                      <select
                        name="incubator"
                        value={formData.incubator}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      >
                        <option value="">Wybierz</option>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">
                        Żółtaczka fizjologiczna
                      </label>
                      <input
                        type="text"
                        name="jaundice"
                        value={formData.jaundice}
                        onChange={handleChange}
                        placeholder="Jak długo trwała"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Infekcje</label>
                      <input
                        type="text"
                        name="infections"
                        value={formData.infections}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Development */}
              <div className="bg-gradient-to-br from-[#1ebaf1]/5 to-[#a4efeb]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Rozwój Psycho-motoryczny</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Karmienie (piersią, butelką, pokarmy stałe)
                    </label>
                    <textarea
                      name="feeding"
                      value={formData.feeding}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Smoczek</label>
                      <input
                        type="text"
                        name="pacifier"
                        value={formData.pacifier}
                        onChange={handleChange}
                        placeholder="Tak/Nie, jak długo"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Siadanie</label>
                      <input
                        type="text"
                        name="sitting"
                        value={formData.sitting}
                        onChange={handleChange}
                        placeholder="W jakim wieku"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Pełzanie</label>
                      <input
                        type="text"
                        name="crawling"
                        value={formData.crawling}
                        onChange={handleChange}
                        placeholder="W jakim wieku"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Raczkowanie</label>
                      <input
                        type="text"
                        name="crawlingOnAllFours"
                        value={formData.crawlingOnAllFours}
                        onChange={handleChange}
                        placeholder="W jakim wieku"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Chodzenie</label>
                      <input
                        type="text"
                        name="walking"
                        value={formData.walking}
                        onChange={handleChange}
                        placeholder="W jakim wieku"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical History */}
              <div className="bg-gradient-to-br from-[#fed102]/5 to-[#fed102]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Historia Medyczna</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Przebyte choroby</label>
                    <textarea
                      name="pastIllnesses"
                      value={formData.pastIllnesses}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Pobyty w szpitalu</label>
                      <input
                        type="text"
                        name="hospitalStays"
                        value={formData.hospitalStays}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Leki</label>
                      <input
                        type="text"
                        name="medications"
                        value={formData.medications}
                        onChange={handleChange}
                        placeholder="Obecnie przyjmowane"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Stany zapalne ucha, gardła, krtani, przerost migdałów
                    </label>
                    <textarea
                      name="earThroatInflammations"
                      value={formData.earThroatInflammations}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Aktualny stan zdrowia</label>
                      <input
                        type="text"
                        name="currentHealth"
                        value={formData.currentHealth}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Urazy fizyczne</label>
                      <input
                        type="text"
                        name="physicalInjuries"
                        value={formData.physicalInjuries}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Opieka w poradni specjalistycznej
                    </label>
                    <input
                      type="text"
                      name="specialistCare"
                      value={formData.specialistCare}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Wyniki badań dodatkowych (słuch, wzrok)
                    </label>
                    <textarea
                      name="hearingVisionTests"
                      value={formData.hearingVisionTests}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Speech Development */}
              <div className="bg-gradient-to-br from-[#a4efeb]/5 to-[#a4efeb]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Rozwój Mowy</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Gaworzenie</label>
                      <input
                        type="text"
                        name="babbling"
                        value={formData.babbling}
                        onChange={handleChange}
                        placeholder="W jakim wieku"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Pierwsze słowa</label>
                      <input
                        type="text"
                        name="firstWords"
                        value={formData.firstWords}
                        onChange={handleChange}
                        placeholder="W jakim wieku"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Jak wyraża potrzeby</label>
                    <textarea
                      name="expressNeeds"
                      value={formData.expressNeeds}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Czy rozumie polecenia</label>
                    <textarea
                      name="understandCommands"
                      value={formData.understandCommands}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Zaburzenia mowy</label>
                    <textarea
                      name="speechDisorders"
                      value={formData.speechDisorders}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Jeśli występują"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Self-care */}
              <div className="bg-gradient-to-br from-[#1ebaf1]/5 to-[#a4efeb]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Samoobsługa</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Przebieg treningu czystości
                    </label>
                    <textarea
                      name="toiletTraining"
                      value={formData.toiletTraining}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Ubieranie się</label>
                      <textarea
                        name="dressing"
                        value={formData.dressing}
                        onChange={handleChange}
                        rows={2}
                        placeholder="Czy dziecko ubiera się samodzielnie"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Jedzenie</label>
                      <textarea
                        name="eating"
                        value={formData.eating}
                        onChange={handleChange}
                        rows={2}
                        placeholder="Czy dziecko je samodzielnie"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Child Characteristics */}
              <div className="bg-gradient-to-br from-[#fed102]/5 to-[#fed102]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Charakterystyka Dziecka</h2>

                {/* Sleep */}
                <h3 className="font-baloo text-2xl font-bold text-gray-800 mb-4 mt-6">Sen</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Długość snu</label>
                      <input
                        type="text"
                        name="sleepDuration"
                        value={formData.sleepDuration}
                        onChange={handleChange}
                        placeholder="np. 10 godzin"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Czy w ciągu dnia śpi</label>
                      <select
                        name="daytimeSleep"
                        value={formData.daytimeSleep}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      >
                        <option value="">Wybierz</option>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                        <option value="Czasami">Czasami</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Zasypia samodzielnie</label>
                      <select
                        name="fallsAsleepAlone"
                        value={formData.fallsAsleepAlone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      >
                        <option value="">Wybierz</option>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Czy budzi się w nocy</label>
                      <select
                        name="nightWaking"
                        value={formData.nightWaking}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      >
                        <option value="">Wybierz</option>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                        <option value="Czasami">Czasami</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Behavior */}
                <h3 className="font-baloo text-2xl font-bold text-gray-800 mb-4 mt-8">Zachowanie dziecka</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Kontakt wzrokowy</label>
                    <textarea
                      name="eyeContact"
                      value={formData.eyeContact}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Czy dziecko nawiązuje kontakt wzrokowy"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Ruchliwość</label>
                      <input
                        type="text"
                        name="mobility"
                        value={formData.mobility}
                        onChange={handleChange}
                        placeholder="np. bardzo ruchliwe, spokojne"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-open font-semibold text-gray-700 mb-2">Koncentracja</label>
                      <input
                        type="text"
                        name="concentration"
                        value={formData.concentration}
                        onChange={handleChange}
                        placeholder="Jak długo potrafi się skupić"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      W jaki sposób pokazuje emocje - adekwatnie do sytuacji
                    </label>
                    <textarea
                      name="emotionExpression"
                      value={formData.emotionExpression}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Jaki ma zwykle nastrój</label>
                    <input
                      type="text"
                      name="usualMood"
                      value={formData.usualMood}
                      onChange={handleChange}
                      placeholder="np. radosny, smutny, zmienny"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* General Information */}
              <div className="bg-gradient-to-br from-[#a4efeb]/5 to-[#a4efeb]/10 rounded-3xl p-8 shadow-md">
                <h2 className="font-baloo text-3xl font-bold text-[#1ebaf1] mb-6">Informacje Ogólne</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Zainteresowania</label>
                    <textarea
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Czym dziecko się interesuje, co lubi robić"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">Formy zabaw</label>
                    <textarea
                      name="playForms"
                      value={formData.playForms}
                      onChange={handleChange}
                      rows={2}
                      placeholder="W co dziecko lubi się bawić"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Stosunek do rodzeństwa i rodziców
                    </label>
                    <textarea
                      name="relationshipWithFamily"
                      value={formData.relationshipWithFamily}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Środowisko przedszkolne i szkolne
                    </label>
                    <textarea
                      name="schoolEnvironment"
                      value={formData.schoolEnvironment}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Żłobek, przedszkole, szkoła - postępy dziecka, stosunek do nauczyciela i kolegów"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Trudności jakie sprawia dziecko, nietypowe, stereotypowe, niepokojące zachowania
                    </label>
                    <textarea
                      name="difficulties"
                      value={formData.difficulties}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-open font-semibold text-gray-700 mb-2">
                      Co najbardziej niepokoi w rozwoju dziecka
                    </label>
                    <textarea
                      name="mainConcerns"
                      value={formData.mainConcerns}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ebaf1] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="bg-[#fed102] text-gray-800 font-baloo font-bold text-xl px-12 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-[#fed102] hover:border-gray-800 transform hover:scale-105"
                >
                  Wyślij Wywiad
                </button>
                <p className="font-open text-sm text-gray-600 mt-4">
                  Wszystkie informacje są poufne i służą wyłącznie celom diagnostycznym
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
