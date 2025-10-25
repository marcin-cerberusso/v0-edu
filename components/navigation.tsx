"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "STRONA GŁÓWNA" },
    { href: "/o-mnie", label: "O MNIE" },
    { href: "/dla-rodzicow", label: "DLA RODZICÓW" },
    { href: "/uslugi", label: "USŁUGI" },
    { href: "/cennik", label: "CENNIK" },
    { href: "/kontakt", label: "KONTAKT" },
  ]

  const services = [
    { slug: "diagnoza-adhd", label: "Diagnoza ADHD", icon: "🔍" },
    { slug: "terapia-asd-adhd", label: "Terapia ASD/ADHD", icon: "🧩" },
    { type: "separator", label: "Terapie Indywidualne" },
    { slug: "terapia-pedagogiczna", label: "Terapia Pedagogiczna", icon: "📚" },
    { slug: "wczesna-nauka-czytania", label: "Wczesna Nauka Czytania", icon: "📖" },
    { slug: "czytanie-sylabowe-forbrain", label: "Czytanie z Forbrain®", icon: "🎧" },
    { slug: "terapia-reki", label: "Terapia Ręki", icon: "✋" },
    { type: "separator", label: "Treningi Słuchowe" },
    { slug: "trening-johansen", label: "Johansen IAS", icon: "🎵" },
    { slug: "neuroflow", label: "Neuroflow", icon: "🧠" },
    { slug: "trening-tmr", label: "TMR", icon: "🎶" },
    { slug: "mtalent", label: "mTalent", icon: "💻" },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center h-16 md:h-20 lg:h-24">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 md:gap-4 h-full px-4 sm:px-6 md:px-8 rounded-br-[30px] md:rounded-br-[40px] hover:opacity-90 transition-all duration-300"
        >
          <Image
            src="/images/logo.svg"
            alt="Eduhuśtawka Logo"
            width={180}
            height={60}
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            priority
          />
          <div className="hidden sm:flex flex-col justify-center gap-0.5">
            <span className="text-brand-blue font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-tight whitespace-nowrap">
              Eduhuśtawka
            </span>
            <span className="text-brand-yellow text-[10px] sm:text-xs md:text-sm leading-tight whitespace-nowrap">
              wsparcie w rozwoju dziecka
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-8 bg-brand-blue rounded-bl-[30px] lg:rounded-bl-[40px] h-full items-center px-6 xl:px-10 2xl:px-12">
          {navLinks.map((link) => {
            if (link.href === "/uslugi") {
              return (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`uppercase text-sm xl:text-base 2xl:text-lg font-bold leading-tight transition-all duration-200 hover:opacity-80 hover:scale-105 whitespace-nowrap flex items-center gap-2 ${
                      isActive(link.href) ? "text-brand-yellow" : "text-white"
                    }`}
                  >
                    {link.label}
                    <span className="text-xs">▼</span>
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 min-w-[280px] ${
                      isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {services.map((service, index) => {
                      if (service.type === "separator") {
                        return (
                          <div
                            key={`separator-${index}`}
                            className="px-5 py-2 bg-brand-cyan/10 border-y border-brand-cyan/20"
                          >
                            <span className="text-xs font-bold text-brand-blue uppercase tracking-wide">
                              {service.label}
                            </span>
                          </div>
                        )
                      }

                      return (
                        <Link
                          key={service.slug}
                          href={`/terapia/${service.slug}`}
                          onClick={handleLinkClick}
                          className="flex items-center gap-3 px-5 py-3 hover:bg-brand-cyan/20 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-2xl">{service.icon}</span>
                          <span className="text-sm font-medium text-gray-700 hover:text-brand-blue">
                            {service.label}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`uppercase text-sm xl:text-base 2xl:text-lg font-bold leading-tight transition-all duration-200 hover:opacity-80 hover:scale-105 whitespace-nowrap ${
                  isActive(link.href) ? "text-brand-yellow" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden bg-brand-blue text-white rounded-bl-[30px] h-full px-5 sm:px-6 md:px-8 flex items-center justify-center hover:opacity-90 transition-all duration-300 active:scale-95"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-brand-blue px-6 py-6 space-y-1 shadow-lg">
          {navLinks.map((link, index) => {
            if (link.href === "/uslugi") {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full flex items-center justify-between uppercase text-base md:text-lg font-bold py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 ${
                      isActive(link.href) ? "text-brand-yellow bg-white/10" : "text-white"
                    }`}
                    style={{
                      animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none",
                    }}
                  >
                    <span>{link.label}</span>
                    <span className={`text-xs transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {/* Mobile Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isServicesOpen ? "max-h-[800px] opacity-100 mt-1" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {services.map((service, index) => {
                        if (service.type === "separator") {
                          return (
                            <div key={`separator-${index}`} className="py-2 px-4">
                              <span className="text-xs font-bold text-brand-yellow uppercase tracking-wide">
                                {service.label}
                              </span>
                            </div>
                          )
                        }

                        return (
                          <Link
                            key={service.slug}
                            href={`/terapia/${service.slug}`}
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 text-white/90 hover:text-white"
                          >
                            <span className="text-lg">{service.icon}</span>
                            <span className="text-sm">{service.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block uppercase text-base md:text-lg font-bold py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 active:scale-95 ${
                  isActive(link.href) ? "text-brand-yellow bg-white/10" : "text-white"
                }`}
                style={{
                  animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none",
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        :global {
          --brand-blue: #1ebaf1;
          --brand-yellow: #fed102;
          --brand-cyan: #a4efeb;
        }
      `}</style>
    </header>
  )
}
