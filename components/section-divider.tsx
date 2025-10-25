import Image from "next/image"

interface SectionDividerProps {
  variant?: "wave" | "handprints" | "curve" | "gradient"
  color?: "blue" | "yellow" | "cyan" | "white"
  flip?: boolean
}

export function SectionDivider({ variant = "wave", color = "blue", flip = false }: SectionDividerProps) {
  const colorMap = {
    blue: "var(--color-brand-blue)",
    yellow: "var(--color-brand-yellow)",
    cyan: "var(--color-brand-cyan)",
    white: "#ffffff",
  }

  const bgColor = colorMap[color]

  if (variant === "handprints") {
    return (
      <div className={`relative h-24 ${flip ? "rotate-180" : ""}`}>
        <div className="absolute inset-0 flex items-center justify-center gap-8 md:gap-12 overflow-hidden">
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16 opacity-20 -rotate-12"
          />
          <Image
            src="/images/handprint-blue.png"
            alt=""
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16 opacity-20 rotate-45"
          />
          <Image
            src="/images/handprint-cyan.png"
            alt=""
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16 opacity-20 -rotate-6"
          />
          <Image
            src="/images/handprint-yellow.png"
            alt=""
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16 opacity-20 rotate-12 hidden md:block"
          />
          <Image
            src="/images/handprint-blue.png"
            alt=""
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16 opacity-20 -rotate-45 hidden md:block"
          />
        </div>
      </div>
    )
  }

  if (variant === "gradient") {
    return (
      <div
        className={`h-32 ${flip ? "rotate-180" : ""}`}
        style={{
          background: `linear-gradient(to bottom, transparent, ${bgColor}20, transparent)`,
        }}
      />
    )
  }

  if (variant === "curve") {
    return (
      <div className={`relative h-16 md:h-24 ${flip ? "rotate-180" : ""}`}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill={bgColor} fillOpacity="0.1" />
        </svg>
      </div>
    )
  }

  // Default: wave variant
  return (
    <div className={`relative h-20 md:h-32 ${flip ? "rotate-180" : ""}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"
          fill={bgColor}
          fillOpacity="0.15"
        />
        <path
          d="M0,20 C200,100 400,100 600,60 C800,20 1000,20 1200,60 L1200,120 L0,120 Z"
          fill={bgColor}
          fillOpacity="0.08"
        />
      </svg>
    </div>
  )
}
