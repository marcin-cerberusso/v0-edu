import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TherapyCTA } from "@/components/therapy-cta"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Check, ArrowRight, Clock, DollarSign } from "lucide-react"

const servicesData = {
  "terapia-sluchowa-johansen-neuroflow": {
    title: "Terapia Słuchowa Johansen IAS & Neuroflow",
    colorTheme: "blue", // Primary color theme for this page
    heroImage: "/child-wearing-headphones-listening-therapy-session.jpg",
    sectionImage: "/child-doing-auditory-training-with-computer-techno.jpg",
    tagline: "Kompleksowa stymulacja słuchowa: Johansen IAS + Neuroflow na koncentrację, pamięć i uczenie się",
    description:
      "Ta usługa łączy dwie zaawansowane metody terapii słuchowej: Johansen IAS (nieinwazyjna stymulacja audio z indywidualnymi programami domowymi) i Neuroflow (terapia z biofeedbackiem, gdzie mózg dziecka reaguje w czasie rzeczywistym na dźwięki). Ćwiczenia trwają 10–30 min dziennie, z monitorowaniem postępów za pomocą aplikacji.",
    benefits: [
      "Poprawa koncentracji o 30–50% (wg badań IAS i neurofeedbacku)",
      "Lepsza pamięć słuchowa i mowa – łatwiejsze zapamiętywanie",
      "Redukcja frustracji w nauce – mniej błędów w czytaniu/pisaniu",
      "Rozwój sensoryczny: Mniej nadwrażliwości na dźwięki",
    ],
    process: [
      {
        title: "Diagnoza wstępna (45–60 min)",
        description: "Test słuchowy (IAS) + EEG biofeedback (Neuroflow) + wywiad z rodzicami",
      },
      {
        title: "Program terapeutyczny",
        description: "Codzienne ćwiczenia audio + sesje w gabinecie (1x/tydzień, 30 min)",
      },
      {
        title: "Kontrola postępów",
        description: "Po 4 i 8 tygodniach – analiza danych z appki + korekta programu",
      },
      {
        title: "Zakończenie",
        description: "Szczegółowy raport PDF + rekomendacje na utrzymanie efektów",
      },
    ],
    forWhom: [
      "Dzieci w wieku 5–12 lat z dysleksją, dysgrafią, opóźnionym rozwojem mowy lub ADHD",
      "Problemy z koncentracją w hałasie, koordynacją ruchową lub przetwarzaniem sensorycznym",
      "Dzieci ze spektrum autyzmu (ASD) z nadwrażliwością słuchową",
    ],
    example:
      "8-letnie dziecko z ADHD po 10 tygodniach kończy zadania szkolne bez rozpraszania się, a rodzice zauważają spokojniejsze wieczory.",
    duration: "8–10 tygodni (intensywny) + follow-up co 3 miesiące",
    price: "Pakiet startowy 900 zł (w tym diagnoza, materiały audio i 8 sesji); sesja dodatkowa 100 zł",
  },
  "diagnoza-adhd": {
    title: "Diagnoza ADHD z Kwestionariuszem Online",
    colorTheme: "yellow",
    heroImage: "/child-assessment-diagnostic-session-with-therapist.jpg",
    sectionImage: "/child-assessment-diagnostic-session-with-therapist.jpg",
    tagline: "Profesjonalna diagnoza ADHD: Od podejrzenia do kompleksowego planu wsparcia",
    description:
      "Kompleksowa ocena oparta na standardach DSM-5, wykorzystująca kwestionariusz online (skala Connersa dla rodziców i nauczycieli) oraz testy behawioralne. Hasło do kwestionariusza: ADHD. Otrzymujesz nie tylko diagnozę, ale gotowy plan terapeutyczny.",
    benefits: [
      "Jasna diagnoza – koniec niepewności, szybki start wsparcia",
      "Indywidualny plan: Rekomendacje behawioralne, edukacyjne i medyczne",
      "Wsparcie zewnętrzne: List do szkoły/pediatry + wskazówki dla rodziców",
      "Wczesna interwencja: Poprawa wyników szkolnych o 20–40%",
    ],
    process: [
      {
        title: "Kwestionariusz online (20–30 min)",
        description: "Dostępny 24/7 via bezpieczny link – wypełniają rodzice/nauczyciele",
      },
      {
        title: "Wywiad i obserwacja (90 min)",
        description: "Sesja online/stacjonarna z dzieckiem i rodziną + testy uwagi",
      },
      {
        title: "Analiza i dodatkowe testy",
        description: "Wender Utah dla starszych dzieci lub skalę Vanderbilt",
      },
      {
        title: "Raport i konsultacja",
        description: "Szczegółowy PDF (20–30 stron) z diagnozą, rekomendacjami i planem",
      },
    ],
    forWhom: [
      "Dzieci w wieku 4–14 lat z podejrzeniem ADHD: impulsywność, hiperaktywność, trudności w skupieniu",
      "W kontekście innych wyzwań, jak ASD, dysleksja lub problemy szkolne",
      "Rodzice szukający jasnych odpowiedzi przed decyzją o terapii",
    ],
    example:
      "6-letnie dziecko z podejrzeniem ADHD po diagnozie otrzymuje plan z ćwiczeniami na uwagę – po 2 miesiącach nauczycielka zauważa poprawę.",
    duration: "1–2 tygodnie od wypełnienia kwestionariusza",
    price: "500 zł (w tym pełny raport i 30-min konsultacja follow-up)",
  },
  "nauka-czytania-sylabowego": {
    title: "Nauka Czytania Sylabowego",
    colorTheme: "cyan",
    heroImage: "/child-learning-to-read-with-syllables-colorful-let.jpg",
    sectionImage: "/child-reading-book-with-special-headphones-forbrai.jpg",
    tagline: "Nauka czytania bez łez: Metoda prof. Cieszyńskiej z technologią Forbrain®",
    description:
      "Innowacyjne zajęcia oparte na Symultaniczno-Sekwencyjnej Metodzie Czytania połączone z słuchawkami Forbrain®. Multisensoryczne ćwiczenia: karty obrazkowe, rymowanki, ruch i gry interaktywne.",
    benefits: [
      "Płynne czytanie ze zrozumieniem po 3 miesiącach (wzrost o 25–40%)",
      "Aktywacja obu półkul mózgowych: Lepsze myślenie językowe i pamięć",
      "Poprawa koncentracji: Dłuższe skupienie dzięki technologii Forbrain®",
      "Motywacja przez zabawę: Dziecko kocha książki, mniej frustracji",
    ],
    process: [
      {
        title: "Diagnoza gotowości (30 min)",
        description: "Test czytelniczy + ocena percepcji głosu (Forbrain®)",
      },
      {
        title: "Sesje terapeutyczne (45 min, 1x/tydzień)",
        description: "Czytanie sylabowe z zabawami, feedbackiem audio i ruchem",
      },
      {
        title: "Ćwiczenia domowe",
        description: "10–15 min/dzień z appką Forbrain® + drukowane karty",
      },
      {
        title: "Ewaluacja postępów",
        description: "Co 4 tygodnie – test płynności + raport dla rodziców",
      },
    ],
    forWhom: [
      "Przedszkolaki i dzieci wczesnoszkolne (3–8 lat) rozwijające się typowo lub z ryzykiem dysleksji",
      "Dzieci z opóźnioną mową, zaburzeniami komunikacyjnymi, ASD lub dwujęzycznością",
      "Problemy z przetwarzaniem słuchowym lub koncentracją podczas czytania",
    ],
    example:
      "5-letnie dziecko z opóźnioną mową po 3 miesiącach czyta proste zdania samodzielnie, a rodzice chwalą wzrost pewności siebie.",
    duration: "Indywidualny (3–6 miesięcy)",
    price: "90 zł/sesja (pakiet 10 sesji: 800 zł, w tym słuchawki na próbę); materiały domowe gratis",
  },
  "terapia-asd-adhd": {
    title: "Terapia Spektrum Autyzmu (ASD) / ADHD",
    colorTheme: "blue",
    heroImage: "/therapist-working-with-child-autism-spectrum-thera.jpg",
    sectionImage: "/therapist-working-with-child-autism-spectrum-thera.jpg",
    tagline: "Indywidualna terapia behawioralna i sensoryczna: ABA + TEACCH",
    description:
      "Holistyczna terapia oparta na metodach ABA i TEACCH, z elementami integracji sensorycznej. Pracujemy nad komunikacją, emocjami i codziennymi umiejętnościami poprzez zabawy, karty PECS i ćwiczenia sensoryczne.",
    benefits: [
      "Lepsza komunikacja: Wzrost kontaktu wzrokowego i rozumienia emocji o 50%",
      "Samodzielność: Redukcja sztywności zachowań, lepsze planowanie dnia",
      "Jakość życia rodziny: Mniej wybuchów emocjonalnych",
      "Wczesna interwencja: Znacząca poprawa adaptacji szkolnej",
    ],
    process: [
      {
        title: "Diagnoza wstępna (60 min)",
        description: "Test ADOS-2 + kwestionariusz rodzinny + obserwacja",
      },
      {
        title: "Sesje indywidualne (50 min, 1–2x/tydzień)",
        description: "Ćwiczenia behawioralne, gry społeczne i sensoryczne",
      },
      {
        title: "Wsparcie domowe",
        description: "Tygodniowe zadania dla rodziców + szkolenia online",
      },
      {
        title: "Ewaluacja",
        description: "Co 3 miesiące – mierzenie postępów + dostosowanie planu",
      },
    ],
    forWhom: [
      "Dzieci 3–12 lat ze spektrum autyzmu (ASD) lub ADHD",
      "Wyzwania społeczne: Brak kontaktu wzrokowego, rozumienie emocji",
      "Problemy sensoryczne lub emocjonalne wpływające na szkołę/przedszkole",
    ],
    example:
      "4-letnie dziecko z ASD po 6 miesiącach inicjuje zabawę z rodzeństwem i używa prostych zdań – rodzice czują ulgę.",
    duration: "Długoterminowy (6–24 miesiące, z przerwami)",
    price: "120 zł/sesja (pakiet 10 sesji: 1000 zł); konsultacja rodzinna gratis",
  },
  mtalent: {
    title: "Interaktywna Terapia Przetwarzania Słuchowego – mTalent",
    colorTheme: "yellow",
    heroImage: "/child-doing-interactive-auditory-exercises-on-tabl.jpg",
    sectionImage: "/child-doing-interactive-auditory-exercises-on-tabl.jpg",
    tagline: "Gry i ćwiczenia na CAPD: Certyfikowany program mTalent",
    description:
      "Profesjonalny program terapeutyczny mTalent z ponad 700 interaktywnymi ekranami i 150 kartami pracy. Ćwiczenia na tablecie/komputerze: Rozpoznawanie dźwięków, pamięć słuchowa i filtrowanie hałasu.",
    benefits: [
      "Lepsze rozumienie mowy w hałasie (poprawa o 35–50%)",
      "Redukcja błędów językowych: Mniej pomyłek w czytaniu i pisaniu",
      "Wzrost uwagi i pamięci: Dłuższe skupienie na lekcjach",
      "Rozwój ogólny: Lepsze wyniki szkolne i mniej frustracji",
    ],
    process: [
      {
        title: "Test diagnostyczny CAPD (45 min)",
        description: "Ocena percepcji słuchowej + wywiad",
      },
      {
        title: "Sesje interaktywne (40 min, 1x/tydzień)",
        description: "Gry jak 'polowanie na dźwięki' lub 'pamięć sekwencji'",
      },
      {
        title: "Moduły domowe",
        description: "Dostęp online dla rodziców (15 min/dzień) z trackingiem postępów",
      },
      {
        title: "Raporty i korekta",
        description: "Automatyczne dane co 2 tygodnie + sesja ewaluacyjna",
      },
    ],
    forWhom: [
      "Dzieci 4–10 lat z CAPD: Trudności w rozumieniu mowy mimo dobrego słuchu",
      "Mylenie podobnych głosek, problemy z czytaniem/pisaniem",
      "W połączeniu z ADHD, dysleksją lub ASD",
    ],
    example:
      "7-letnie dziecko z CAPD po 10 tygodniach nie myli już 'kota' z 'gota' i skupia się na historiach – nauczycielka chwali postępy.",
    duration: "10–12 tygodni (intensywny) + utrzymanie",
    price: "90 zł/sesja (pakiet 12 sesji: 900 zł, w tym dostęp online)",
  },
  "terapia-pedagogiczna": {
    title: "Terapia Pedagogiczna",
    colorTheme: "cyan",
    heroImage: "/child-learning-writing-reading-with-therapist.jpg",
    sectionImage: "/child-learning-writing-reading-with-therapist.jpg",
    tagline: "Wsparcie w nauce i rozwoju umiejętności szkolnych",
    description:
      "Indywidualna terapia pedagogiczna wspierająca dzieci w trudnościach szkolnych. Pracujemy nad czytaniem, pisaniem, matematyką i organizacją nauki. Dostosowuję metody do indywidualnych potrzeb dziecka.",
    benefits: [
      "Poprawa wyników szkolnych i pewności siebie",
      "Rozwój umiejętności czytania i pisania",
      "Lepsza organizacja nauki i zarządzanie czasem",
      "Wzrost motywacji do nauki",
    ],
    process: [
      {
        title: "Diagnoza pedagogiczna",
        description: "Ocena poziomu umiejętności i identyfikacja trudności",
      },
      {
        title: "Plan terapeutyczny",
        description: "Indywidualny program dostosowany do potrzeb dziecka",
      },
      {
        title: "Sesje terapeutyczne",
        description: "Regularne zajęcia z wykorzystaniem różnorodnych metod",
      },
      {
        title: "Monitoring postępów",
        description: "Regularna ocena efektów i dostosowanie programu",
      },
    ],
    forWhom: [
      "Dzieci z trudnościami w nauce czytania i pisania",
      "Uczniowie z problemami w matematyce",
      "Dzieci wymagające wsparcia w organizacji nauki",
    ],
    example: "8-letnie dziecko z trudnościami w czytaniu po 3 miesiącach czyta płynniej i chętniej sięga po książki.",
    duration: "50 minut, 1-2 razy w tygodniu",
    price: "U terapeuty: 120 zł | W domu: 150 zł",
  },
  "wczesna-nauka-czytania": {
    title: "Wczesna Nauka Czytania",
    colorTheme: "blue",
    heroImage: "/child-learning-to-read-with-syllables-colorful-let.jpg",
    sectionImage: "/child-learning-to-read-with-syllables-colorful-let.jpg",
    tagline: "Nauka czytania metodą prof. Jagody Cieszyńskiej",
    description:
      "Innowacyjna metoda nauki czytania oparta na naturalnych procesach rozwoju mózgu. Wykorzystuje jednoczesną aktywację obu półkul mózgowych poprzez czytanie całych sylab zamiast pojedynczych liter.",
    benefits: [
      "Szybsza nauka czytania ze zrozumieniem",
      "Aktywacja obu półkul mózgowych",
      "Profilaktyka dysleksji",
      "Rozwój pamięci i koncentracji",
    ],
    process: [
      {
        title: "Ocena gotowości",
        description: "Test gotowości do nauki czytania",
      },
      {
        title: "Nauka sylabowa",
        description: "Czytanie całych sylab z wykorzystaniem kart obrazkowych",
      },
      {
        title: "Ćwiczenia multisensoryczne",
        description: "Integracja wzroku, słuchu i ruchu",
      },
      {
        title: "Rozwój płynności",
        description: "Stopniowe zwiększanie tempa i zrozumienia",
      },
    ],
    forWhom: [
      "Przedszkolaki i dzieci wczesnoszkolne (4-8 lat)",
      "Dzieci z ryzykiem dysleksji",
      "Dzieci z opóźnionym rozwojem mowy",
    ],
    example: "5-letnie dziecko po 4 miesiącach czyta proste zdania i z radością pokazuje swoje umiejętności.",
    duration: "50 minut, 1-2 razy w tygodniu",
    price: "U terapeuty: 120 zł | W domu: 150 zł",
  },
  "czytanie-forbrain": {
    title: "Czytanie Sylabowe ze Słuchawkami Forbrain®",
    colorTheme: "yellow",
    heroImage: "/child-reading-book-with-special-headphones-forbrai.jpg",
    sectionImage: "/child-reading-book-with-special-headphones-forbrai.jpg",
    tagline: "Technologia Forbrain® wspierająca rozwój czytania",
    description:
      "Innowacyjna metoda łącząca naukę czytania sylabowego z technologią słuchawek Forbrain®, które wzmacniają przewodnictwo kostne i poprawiają percepcję własnego głosu.",
    benefits: [
      "Lepsza percepcja własnego głosu podczas czytania",
      "Poprawa koncentracji i uwagi",
      "Szybszy rozwój płynności czytania",
      "Redukcja błędów w czytaniu",
    ],
    process: [
      {
        title: "Diagnoza czytelnicza",
        description: "Ocena poziomu czytania i percepcji słuchowej",
      },
      {
        title: "Sesje z Forbrain®",
        description: "Czytanie z wykorzystaniem specjalnych słuchawek",
      },
      {
        title: "Ćwiczenia domowe",
        description: "Regularne ćwiczenia z materiałami do domu",
      },
      {
        title: "Monitoring postępów",
        description: "Regularna ocena płynności i zrozumienia",
      },
    ],
    forWhom: [
      "Dzieci uczące się czytać (5-10 lat)",
      "Dzieci z trudnościami w płynnym czytaniu",
      "Dzieci z problemami z koncentracją podczas czytania",
    ],
    example: "7-letnie dziecko po 2 miesiącach czyta znacznie płynniej i popełnia mniej błędów.",
    duration: "50 minut, 1-2 razy w tygodniu",
    price: "U terapeuty: 150 zł | W domu: 180 zł",
  },
  "terapia-reki": {
    title: "Terapia Ręki",
    colorTheme: "cyan",
    heroImage: "/child-doing-hand-therapy-fine-motor-skills-exercis.jpg",
    sectionImage: "/child-doing-hand-therapy-fine-motor-skills-exercis.jpg",
    tagline: "Rozwój sprawności manualnej i grafomotoryki",
    description:
      "Specjalistyczna terapia wspierająca rozwój sprawności manualnej, grafomotoryki i koordynacji wzrokowo-ruchowej. Pracujemy nad precyzją ruchów, siłą chwytu i płynnością pisania.",
    benefits: [
      "Poprawa sprawności manualnej i precyzji ruchów",
      "Rozwój grafomotoryki i pisma",
      "Lepsza koordynacja wzrokowo-ruchowa",
      "Wzrost pewności siebie w czynnościach manualnych",
    ],
    process: [
      {
        title: "Ocena sprawności ręki",
        description: "Diagnoza poziomu rozwoju motoryki małej",
      },
      {
        title: "Ćwiczenia manualne",
        description: "Różnorodne zabawy i ćwiczenia rozwijające sprawność",
      },
      {
        title: "Grafomotoryka",
        description: "Ćwiczenia przygotowujące do pisania",
      },
      {
        title: "Monitoring rozwoju",
        description: "Regularna ocena postępów i dostosowanie programu",
      },
    ],
    forWhom: [
      "Dzieci z opóźnionym rozwojem motoryki małej",
      "Dzieci z trudnościami w pisaniu",
      "Dzieci wymagające wsparcia w czynnościach manualnych",
    ],
    example: "6-letnie dziecko po 3 miesiącach terapii pisze czytelniej i chętniej rysuje.",
    duration: "50 minut, 1-2 razy w tygodniu",
    price: "U terapeuty: 120 zł | W domu: 150 zł",
  },
  "johansen-ias": {
    title: "Trening Słuchowy Johansen IAS",
    colorTheme: "blue",
    heroImage: "/child-wearing-headphones-listening-therapy-session.jpg",
    sectionImage: "/child-wearing-headphones-listening-therapy-session.jpg",
    tagline: "Indywidualny program stymulacji słuchowej",
    description:
      "Metoda Johansena (IAS) to nieinwazyjna terapia słuchowa wykorzystująca indywidualnie dobraną muzykę do stymulacji przetwarzania słuchowego. Program domowy trwa 10-15 minut dziennie.",
    benefits: [
      "Poprawa przetwarzania słuchowego",
      "Lepsza koncentracja i uwaga",
      "Rozwój umiejętności językowych",
      "Poprawa czytania i pisania",
    ],
    process: [
      {
        title: "Diagnoza słuchowa",
        description: "Szczegółowy test przetwarzania słuchowego",
      },
      {
        title: "Dobór programu",
        description: "Indywidualny dobór muzyki terapeutycznej",
      },
      {
        title: "Program domowy",
        description: "Codzienne słuchanie 10-15 minut",
      },
      {
        title: "Kontrole postępów",
        description: "Regularne spotkania i dostosowanie programu",
      },
    ],
    forWhom: [
      "Dzieci z zaburzeniami przetwarzania słuchowego",
      "Dzieci z trudnościami w koncentracji",
      "Dzieci z opóźnionym rozwojem mowy i języka",
    ],
    example: "8-letnie dziecko po 3 miesiącach lepiej rozumie polecenia w hałasie i poprawia wyniki w szkole.",
    duration: "8-10 tygodni programu intensywnego",
    price: "Diagnoza: 300 zł | Program indywidualny: 250-300 zł",
  },
  neuroflow: {
    title: "Trening Słuchowy Neuroflow",
    colorTheme: "yellow",
    heroImage: "/child-doing-auditory-training-with-computer-techno.jpg",
    sectionImage: "/child-doing-auditory-training-with-computer-techno.jpg",
    tagline: "Nowoczesny trening z biofeedbackiem",
    description:
      "Neuroflow to zaawansowana metoda treningu słuchowego wykorzystująca biofeedback. Mózg dziecka reaguje w czasie rzeczywistym na dźwięki, co pozwala na aktywny trening koncentracji.",
    benefits: [
      "Poprawa koncentracji i uwagi",
      "Rozwój pamięci słuchowej",
      "Lepsze wyniki w nauce",
      "Redukcja stresu i frustracji",
    ],
    process: [
      {
        title: "Ocena wstępna",
        description: "Test EEG biofeedback i wywiad",
      },
      {
        title: "Sesje treningowe",
        description: "Regularne sesje w gabinecie (30 min)",
      },
      {
        title: "Monitoring online",
        description: "Śledzenie postępów przez aplikację",
      },
      {
        title: "Dostosowanie programu",
        description: "Regularna korekta na podstawie danych",
      },
    ],
    forWhom: [
      "Dzieci z ADHD i problemami z koncentracją",
      "Dzieci z trudnościami w nauce",
      "Dzieci z zaburzeniami przetwarzania słuchowego",
    ],
    example: "9-letnie dziecko z ADHD po 8 tygodniach kończy zadania bez rozpraszania się.",
    duration: "3 etapy treningowe",
    price: "Etap I: 470 zł | Etap II: 460 zł | Etap III: 450 zł",
  },
  tmr: {
    title: "Trening Muzyczno-Ruchowy (TMR)",
    colorTheme: "cyan",
    heroImage: "/child-music-movement-therapy-sensory-integration.jpg",
    sectionImage: "/child-music-movement-therapy-sensory-integration.jpg",
    tagline: "Integracja muzyki, ruchu i rozwoju sensorycznego",
    description:
      "Trening Muzyczno-Ruchowy łączy elementy muzyki, ruchu i integracji sensorycznej. Wspiera rozwój koordynacji, rytmu, koncentracji i umiejętności społecznych.",
    benefits: [
      "Poprawa koordynacji ruchowej",
      "Rozwój poczucia rytmu",
      "Lepsza koncentracja i uwaga",
      "Rozwój umiejętności społecznych",
    ],
    process: [
      {
        title: "Ocena rozwoju",
        description: "Diagnoza koordynacji i integracji sensorycznej",
      },
      {
        title: "Sesje grupowe/indywidualne",
        description: "Zabawy muzyczno-ruchowe",
      },
      {
        title: "Ćwiczenia domowe",
        description: "Proste zabawy do wykonania w domu",
      },
      {
        title: "Ewaluacja postępów",
        description: "Regularna ocena rozwoju",
      },
    ],
    forWhom: [
      "Dzieci z problemami z koordynacją ruchową",
      "Dzieci z zaburzeniami integracji sensorycznej",
      "Dzieci wymagające wsparcia w rozwoju społecznym",
    ],
    example: "5-letnie dziecko po 2 miesiącach lepiej koordynuje ruchy i chętniej bawi się z rówieśnikami.",
    duration: "3 etapy treningowe",
    price: "Etap I: 170 zł | Etap II: 160 zł | Etap III: 150 zł",
  },
}

const getThemeColors = (theme: string) => {
  switch (theme) {
    case "blue":
      return {
        heroBg: "from-brand-blue/20 to-white",
        benefitsBg: "bg-brand-blue/10",
        benefitsHover: "hover:bg-brand-blue/20",
        processBg: "bg-brand-blue/10",
        forWhomBg: "bg-brand-blue/10",
        exampleBg: "bg-brand-blue/20",
        exampleBorder: "border-brand-blue",
        detailsGradient1: "from-brand-blue/20 to-brand-cyan/20",
        detailsGradient2: "from-brand-cyan/20 to-brand-blue/10",
      }
    case "yellow":
      return {
        heroBg: "from-brand-yellow/20 to-white",
        benefitsBg: "bg-brand-yellow/10",
        benefitsHover: "hover:bg-brand-yellow/20",
        processBg: "bg-brand-yellow/10",
        forWhomBg: "bg-brand-yellow/10",
        exampleBg: "bg-brand-yellow/20",
        exampleBorder: "border-brand-yellow",
        detailsGradient1: "from-brand-yellow/20 to-brand-cyan/20",
        detailsGradient2: "from-brand-cyan/20 to-brand-yellow/10",
      }
    case "cyan":
      return {
        heroBg: "from-brand-cyan/30 to-white",
        benefitsBg: "bg-brand-cyan/10",
        benefitsHover: "hover:bg-brand-cyan/20",
        processBg: "bg-brand-cyan/10",
        forWhomBg: "bg-brand-cyan/10",
        exampleBg: "bg-brand-cyan/20",
        exampleBorder: "border-brand-cyan",
        detailsGradient1: "from-brand-cyan/20 to-brand-blue/20",
        detailsGradient2: "from-brand-blue/20 to-brand-cyan/10",
      }
    default:
      return {
        heroBg: "from-brand-cyan/30 to-white",
        benefitsBg: "bg-brand-cyan/10",
        benefitsHover: "hover:bg-brand-cyan/20",
        processBg: "bg-brand-yellow/10",
        forWhomBg: "bg-brand-blue/10",
        exampleBg: "bg-brand-cyan/20",
        exampleBorder: "border-brand-yellow",
        detailsGradient1: "from-brand-cyan/20 to-brand-blue/20",
        detailsGradient2: "from-brand-yellow/20 to-brand-cyan/20",
      }
  }
}

export default async function TherapyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    notFound()
  }

  const colors = getThemeColors(service.colorTheme)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section with Image */}
      <section className={`pt-32 pb-20 bg-gradient-to-b ${colors.heroBg} relative overflow-hidden`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h1 className="font-baloo text-4xl md:text-5xl font-bold text-brand-blue mb-6">{service.title}</h1>
                <p className="font-open text-xl text-brand-yellow font-bold mb-4">{service.tagline}</p>
                <p className="font-open text-lg text-gray-dark leading-relaxed">{service.description}</p>
              </div>
              {/* Hero Image */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.heroImage || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-brand-blue mb-8 text-center">Korzyści i efekty</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${colors.benefitsBg} rounded-2xl p-6 ${colors.benefitsHover} transition-colors`}
                >
                  <Check className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="font-open text-gray-dark text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className={`py-20 ${colors.processBg} relative`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-brand-blue mb-12 text-center">Proces terapii</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              {/* Process Steps */}
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-baloo text-lg font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-baloo text-xl font-bold text-brand-blue mb-2">{step.title}</h3>
                        <p className="font-open text-gray-dark leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Section Image */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.sectionImage || "/placeholder.svg"}
                  alt="Proces terapii"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-brand-blue mb-8 text-center">Dla kogo?</h2>
            <div className="space-y-4">
              {service.forWhom.map((item, index) => (
                <div key={index} className={`flex items-start gap-4 ${colors.forWhomBg} rounded-2xl p-6`}>
                  <ArrowRight className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <span className="font-open text-gray-dark text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className={`py-20 ${colors.exampleBg} relative`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-brand-blue mb-8 text-center">Przykładowy efekt</h2>
            <div className={`bg-white rounded-3xl p-8 shadow-lg border-l-8 ${colors.exampleBorder}`}>
              <p className="font-open text-gray-dark leading-relaxed text-lg italic">{service.example}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl font-bold text-brand-blue mb-8 text-center">Szczegóły</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-gradient-to-br ${colors.detailsGradient1} rounded-3xl p-8 text-center`}>
                <Clock className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-2">Czas trwania</h3>
                <p className="font-open text-gray-dark text-lg">{service.duration}</p>
              </div>
              <div className={`bg-gradient-to-br ${colors.detailsGradient2} rounded-3xl p-8 text-center`}>
                <DollarSign className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
                <h3 className="font-baloo text-2xl font-bold text-brand-blue mb-2">Cena</h3>
                <p className="font-open text-gray-dark text-lg font-bold">{service.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <TherapyCTA />

      <Footer />
    </main>
  )
}
