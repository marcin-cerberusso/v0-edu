import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-12 relative overflow-hidden">
      {/* Large handprint - top left */}
      <div className="absolute -top-10 -left-10 opacity-10 pointer-events-none">
        <Image src="/images/handprint-yellow.png" alt="" width={200} height={200} className="w-48 h-48 -rotate-45" />
      </div>

      {/* Large handprint - top right */}
      <div className="absolute top-20 -right-16 opacity-10 pointer-events-none">
        <Image src="/images/handprint-cyan.png" alt="" width={240} height={240} className="w-56 h-56 rotate-[25deg]" />
      </div>

      {/* Large handprint - center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Image src="/images/handprint-blue.png" alt="" width={280} height={280} className="w-64 h-64 -rotate-12" />
      </div>

      {/* Large handprint - bottom left */}
      <div className="absolute -bottom-12 left-20 opacity-10 pointer-events-none">
        <Image
          src="/images/handprint-blue-2.png"
          alt=""
          width={200}
          height={200}
          className="w-48 h-48 rotate-[35deg]"
        />
      </div>

      {/* Large handprint - bottom right */}
      <div className="absolute -bottom-8 -right-12 opacity-10 pointer-events-none">
        <Image
          src="/images/handprint-yellow.png"
          alt=""
          width={220}
          height={220}
          className="w-52 h-52 -rotate-[20deg]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="bg-white rounded-2xl p-6 space-y-3 relative overflow-hidden">
              {/* Decorative handprint */}
              <div className="absolute -bottom-4 -right-4 opacity-10 pointer-events-none">
                <Image
                  src="/images/handprint-blue-2.png"
                  alt=""
                  width={120}
                  height={120}
                  className="w-32 h-32 rotate-12"
                />
              </div>

              <Image
                src="/images/logo.svg"
                alt="Eduhuśtawka Logo"
                width={180}
                height={60}
                className="h-16 w-auto relative z-10"
              />
              <div className="space-y-1 relative z-10">
                <p className="text-brand-blue font-bold text-xl leading-tight">Eduhuśtawka</p>
                <p className="text-brand-yellow text-base font-semibold leading-tight">wsparcie w rozwoju dziecka</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-yellow font-baloo">Szybkie linki</h3>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-base font-medium text-white hover:text-brand-yellow transition-colors">
                  Strona główna
                </Link>
                <Link
                  href="/o-mnie"
                  className="text-base font-medium text-white hover:text-brand-yellow transition-colors"
                >
                  O mnie
                </Link>
                <Link
                  href="/dla-rodzicow"
                  className="text-base font-medium text-white hover:text-brand-yellow transition-colors"
                >
                  Dla rodziców
                </Link>
                <Link
                  href="/uslugi"
                  className="text-base font-medium text-white hover:text-brand-yellow transition-colors"
                >
                  Usługi
                </Link>
                <Link
                  href="/cennik"
                  className="text-base font-medium text-white hover:text-brand-yellow transition-colors"
                >
                  Cennik
                </Link>
                <Link
                  href="/kontakt"
                  className="text-base font-medium text-white hover:text-brand-yellow transition-colors"
                >
                  Kontakt
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-yellow font-baloo">Kontakt</h3>
              <div className="space-y-3 text-base font-medium text-white">
                <p>Polna 17</p>
                <p>83-021 Pomigacze</p>
                <p>Tel: +48 531 509 008</p>
                <p>Email: kontakt@eduhustawka.pl</p>
                <p className="pt-2 border-t border-white/20">Pon-Pt: 8:00-16:00</p>
                <p>Sob: na umówienie</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 text-center text-base font-medium text-white">
            <p>&copy; {new Date().getFullYear()} Eduhuśtawka. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
