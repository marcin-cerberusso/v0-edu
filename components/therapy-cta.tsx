import Link from "next/link"
import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TherapyCTA() {
  return (
    <section className="py-20 bg-brand-cyan/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <svg className="w-24 h-24 text-brand-yellow" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="20" />
          <path d="M50 0 L55 25 L50 20 L45 25 Z" />
          <path d="M100 50 L75 55 L80 50 L75 45 Z" />
          <path d="M50 100 L55 75 L50 80 L45 75 Z" />
          <path d="M0 50 L25 55 L20 50 L25 45 Z" />
          <path d="M85 15 L65 25 L70 20 L65 15 Z" />
          <path d="M85 85 L65 75 L70 80 L65 85 Z" />
          <path d="M15 85 L35 75 L30 80 L35 85 Z" />
          <path d="M15 15 L35 25 L30 20 L35 15 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-baloo text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Zainteresowany tą terapią?</h2>
          <p className="font-open text-xl mb-8 text-gray-dark leading-relaxed">
            Skontaktuj się ze mną, aby umówić konsultację i dowiedzieć się więcej o tym, jak mogę pomóc Twojemu dziecku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-yellow text-gray-dark hover:bg-brand-yellow/90 font-semibold text-lg px-8 py-6"
            >
              <Link href="/kontakt">
                <Calendar className="mr-2 h-5 w-5" />
                Umów konsultację
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold text-lg px-8 py-6"
            >
              <a href="tel:+48531509008">
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń: 531 509 008
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
