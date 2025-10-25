import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center w-full min-h-[958px] overflow-hidden bg-brand-beige bg-[url('https://cdn.prod.website-files.com/66de8f3b3173256786845430/66e111d9979824771c4bec1e_hero-banner-v1.jpg')] bg-right bg-no-repeat"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-[1320px] px-4">
        {/* Left Content */}
        <div className="w-full lg:w-[726px] mt-0 lg:mt-16 relative">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={138}
            height={138}
            className="absolute top-[395px] right-[196px] w-[138px] hidden lg:block opacity-80"
          />
          <Image
            src="/images/handprint-blue.png"
            alt=""
            width={103}
            height={103}
            className="absolute top-0 right-9 w-[103px] hidden lg:block opacity-80 animate-pulse"
          />
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={103}
            height={103}
            className="absolute top-[142px] -left-[130px] w-[103px] hidden lg:block opacity-80 animate-bounce"
          />

          <div className="inline-block bg-brand-blue text-white text-2xl md:text-[28px] font-medium leading-7 rounded-[10px] px-5 py-2.5 font-baloo">
            Rozwijaj Ciekawość, Inspiruj Naukę
          </div>

          <div className="h-4"></div>

          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-extrabold leading-tight lg:leading-[81px] font-baloo text-dark text-balance">
            <span className="text-brand-blue">Ucz się</span>, <span className="text-brand-yellow">Odkrywaj</span> i{" "}
            <span className="text-brand-blue">Rozwijaj</span> Razem
          </h1>

          <div className="h-8"></div>

          <div className="font-open text-gray-medium text-lg leading-relaxed">
            Odkryj potencjał swojego dziecka dzięki zabawnym i angażującym programom edukacyjnym. Nauka dostosowana do
            każdego etapu rozwoju Twojego dziecka (2-6 lat).
          </div>

          <div className="h-12"></div>

          <a
            href="#contact"
            className="inline-block bg-brand-blue hover:bg-brand-blue/90 rounded-[30px] p-1.5 transition-all duration-300 transform hover:scale-105"
          >
            <div className="inline-block border-2 border-dashed border-white rounded-[30px] px-6 py-2.5">
              <h2 className="text-2xl md:text-[28px] font-bold leading-7 font-baloo text-white m-0">Zacznij Dziś</h2>
            </div>
          </a>
        </div>

        {/* Right Content - Empty space for background image */}
        <div className="hidden lg:block w-full lg:w-[544px] h-[575px] flex-1"></div>
      </div>
    </section>
  )
}
