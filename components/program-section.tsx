import Image from "next/image"
import { Card } from "@/components/ui/card"

export function ProgramSection() {
  const programs = [
    {
      title: "Zabawy Ruchowe",
      age: "2-3 lata",
      description: "Rozwijamy motorykę dużą poprzez zabawę, taniec i aktywność fizyczną.",
      colorClass: "bg-brand-blue",
      image: "/children-playing-and-moving.jpg",
    },
    {
      title: "Kreatywne Warsztaty",
      age: "3-4 lata",
      description: "Malowanie, lepienie, rysowanie - rozwijamy wyobraźnię i zdolności manualne.",
      colorClass: "bg-brand-yellow",
      image: "/children-doing-arts-and-crafts.jpg",
    },
    {
      title: "Nauka przez Zabawę",
      age: "4-5 lat",
      description: "Pierwsze litery, cyfry i kształty w formie zabawy i eksperymentów.",
      colorClass: "bg-brand-blue",
      image: "/children-learning-with-toys.jpg",
    },
    {
      title: "Przygotowanie do Szkoły",
      age: "5-6 lat",
      description: "Rozwijamy umiejętności społeczne i przygotowujemy do nowego etapu edukacji.",
      colorClass: "bg-brand-cyan",
      image: "/children-in-preschool-classroom.jpg",
    },
  ]

  return (
    <section id="program" className="py-20 md:py-32 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/10 relative">
      <div className="absolute bottom-20 left-8 opacity-20">
        <Image src="/images/handprint-cyan.png" alt="" width={100} height={100} className="w-20 h-20 md:w-24 md:h-24" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Nasz <span className="text-brand-yellow">Program</span>
            </h2>
            <p className="text-lg md:text-xl text-dark max-w-3xl mx-auto leading-relaxed">
              Dostosowane zajęcia dla każdej grupy wiekowej, które wspierają wszechstronny rozwój dziecka.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full text-white font-bold text-sm ${program.colorClass}`}
                  >
                    {program.age}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-dark">{program.title}</h3>
                  <p className="text-base text-dark leading-relaxed">{program.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
