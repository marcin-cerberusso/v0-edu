import type React from "react"
import Image from "next/image"

// Inline SVG components
const HeartIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const StarIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const UsersIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

export function AboutSection() {
  const features = [
    {
      icon: HeartIcon,
      title: "Z Pasją",
      description:
        "Każde dziecko jest dla nas wyjątkowe. Wspieramy jego indywidualny rozwój z troską i zaangażowaniem.",
      colorClass: "text-brand-blue",
      bgClass: "bg-brand-blue/10",
    },
    {
      icon: StarIcon,
      title: "Kreatywnie",
      description: "Rozwijamy wyobraźnię i kreatywność poprzez zabawę, sztukę i eksperymentowanie.",
      colorClass: "text-brand-yellow",
      bgClass: "bg-brand-yellow/10",
    },
    {
      icon: UsersIcon,
      title: "Razem",
      description: "Budujemy społeczność, w której dzieci uczą się współpracy, empatii i przyjaźni.",
      colorClass: "text-brand-blue",
      bgClass: "bg-brand-blue/10",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-8 opacity-20">
        <Image
          src="/images/handprint-yellow.png"
          alt=""
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              O <span className="text-brand-blue">Eduhuśtawce</span>
            </h2>
            <p className="text-lg md:text-xl text-dark max-w-3xl mx-auto leading-relaxed">
              Jesteśmy centrum rozwoju dla najmłodszych, gdzie każdy dzień to nowa przygoda pełna odkryć, nauki i
              radości.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-3xl hover:bg-brand-cyan/10 transition-colors"
              >
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${feature.bgClass}`}>
                  <feature.icon className={`w-10 h-10 ${feature.colorClass}`} />
                </div>
                <h3 className="text-2xl font-bold text-dark">{feature.title}</h3>
                <p className="text-base text-dark leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
