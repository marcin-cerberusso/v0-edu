import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

// Inline SVG components
const PhoneIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const MapPinIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export function ContactSection() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Telefon",
      content: "+48 531 509 008",
      href: "tel:+48531509008",
      color: "#1ebaf1",
    },
    {
      icon: MailIcon,
      title: "Email",
      content: "kontakt@eduhustawka.pl",
      href: "mailto:kontakt@eduhustawka.pl",
      color: "#fed102",
    },
    {
      icon: MapPinIcon,
      title: "Adres",
      content: "Polna 17, 83-021 Pomigacze",
      href: "https://maps.google.com/?q=Polna+17,+Pomigacze",
      color: "#1ebaf1",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-[#1ebaf1]/5 to-[#a4efeb]/10 relative overflow-hidden"
    >
      <div className="absolute top-16 left-12 opacity-15 hidden md:block">
        <Image
          src="/images/handprint-yellow.png"
          alt=""
          width={95}
          height={95}
          className="w-19 h-19 md:w-23 md:h-23 rotate-30"
        />
      </div>
      <div className="absolute bottom-20 left-8 opacity-20 hidden md:block">
        <Image src="/images/handprint-cyan.png" alt="" width={100} height={100} className="w-20 h-20 md:w-24 md:h-24" />
      </div>
      <div className="absolute top-20 right-12 opacity-20 hidden md:block">
        <Image src="/images/handprint-yellow.png" alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-15 hidden lg:block">
        <Image
          src="/images/handprint-blue.png"
          alt=""
          width={105}
          height={105}
          className="w-21 h-21 lg:w-25 lg:h-25 -rotate-60"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#2d3748] mb-4">
              <span className="text-[#1ebaf1]">Skontaktuj</span> się z nami
            </h2>
            <p className="text-lg md:text-xl text-[#2d3748] max-w-3xl mx-auto leading-relaxed">
              Masz pytania? Chcesz zapisać dziecko na zajęcia? Jesteśmy tu dla Ciebie!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.title === "Adres" ? "_blank" : undefined}
                rel={info.title === "Adres" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="p-8 text-center space-y-4 border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full">
                  <div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${info.color}20` }}
                  >
                    <info.icon className="w-10 h-10" style={{ color: info.color }} />
                  </div>
                  <h3 className="font-baloo text-2xl font-bold text-[#2d3748]">{info.title}</h3>
                  <p className="text-base text-[#2d3748] font-medium">{info.content}</p>
                </Card>
              </a>
            ))}
          </div>

          {/* Map and Directions Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Map */}
            <Card className="p-6 border-none shadow-lg overflow-hidden">
              <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-4">Lokalizacja</h3>
              <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gray-100">
                {/* TODO: Replace with real Google Maps embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.2879534916!2d21.012228776926!3d52.22967597198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa lokalizacji Eduhuśtawka"
                />
              </div>
            </Card>

            {/* How to Get Here */}
            <Card className="p-6 border-none shadow-lg">
              <h3 className="font-baloo text-2xl font-bold text-[#1ebaf1] mb-4">Jak do nas dojechać?</h3>
              <div className="space-y-6">
                {/* Public Transport */}
                <div>
                  <h4 className="font-bold text-lg text-[#2d3748] mb-2 flex items-center gap-2">
                    <span className="text-[#fed102]">🚌</span> Komunikacja miejska
                  </h4>
                  <ul className="space-y-2 text-base text-[#2d3748] ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1ebaf1] font-bold">•</span>
                      <span>Autobus: linie 123, 456 - przystanek "Polna"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1ebaf1] font-bold">•</span>
                      <span>Tramwaj: linie 7, 9 - przystanek "Centrum Pomigacze"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1ebaf1] font-bold">•</span>
                      <span>Metro: linia M1 - stacja "Centrum Pomigacze" (5 min pieszo)</span>
                    </li>
                  </ul>
                </div>

                {/* Car */}
                <div>
                  <h4 className="font-bold text-lg text-[#2d3748] mb-2 flex items-center gap-2">
                    <span className="text-[#fed102]">🚗</span> Samochodem
                  </h4>
                  <ul className="space-y-2 text-base text-[#2d3748] ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1ebaf1] font-bold">•</span>
                      <span>Parking dostępny przy budynku</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1ebaf1] font-bold">•</span>
                      <span>Wjazd od ulicy Polna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1ebaf1] font-bold">•</span>
                      <span>Miejsca dla osób z niepełnosprawnościami</span>
                    </li>
                  </ul>
                </div>

                {/* Additional Info */}
                <div className="bg-[#a4efeb]/10 p-4 rounded-lg">
                  <p className="text-sm text-[#2d3748] font-medium">
                    <span className="text-[#1ebaf1] font-bold">💡 Wskazówka:</span> Budynek znajduje się przy głównej
                    ulicy, obok apteki. Wejście od strony parkingu.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#fed102] hover:bg-[#2d3748] text-[#2d3748] hover:text-white font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Umów się na wizytę
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
