import Image from "next/image"
import { Nunito } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export default function LandingPage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-r from-[#F84C4C] to-[#FFA63D] px-4 py-8 md:px-8 lg:px-16 ${nunito.className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12">
                <svg viewBox="0 0 40 40" fill="white" className="h-full w-full">
                  <path d="M30.5,11.5c-0.3-0.3-0.7-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.1,0.4l-8.8,8.8l-2.9-2.9c-0.3-0.3-0.7-0.4-1.1-0.4 c-0.4,0-0.8,0.1-1.1,0.4c-0.6,0.6-0.6,1.5,0,2.1l4,4c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4l9.9-9.9 C31.1,13,31.1,12.1,30.5,11.5z" />
                </svg>
              </div>
              <h1 className="text-4xl font-light tracking-wide text-white md:text-5xl lg:text-6xl">Beyond Perfect</h1>
            </div>

            {/* Tagline */}
            <h2 className="text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
              Perfect was the goal. Let&apos;s go beyond it.
            </h2>

            {/* App Store Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/website%20feature.jpg-mYCoDYHo02v28NzpdHfs7Pwahaahwk.jpeg"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/website%20feature.jpg-mYCoDYHo02v28NzpdHfs7Pwahaahwk.jpeg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right Column - App Screenshots */}
          <div className="relative mx-auto w-full max-w-[400px] pt-8 lg:pt-0">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscalemedia-transformed-dhL2RcWHTYSmyikDlhO6avDGU0CmZI.png"
                alt="Beyond Perfect App Interface showing challenge cards and navigation"
                width={800}
                height={1600}
                className="relative z-30 rounded-[40px] shadow-2xl"
                priority
              />
              {/* Decorative overlapped screenshots */}
              <div className="absolute -right-6 top-12 z-20 h-[80%] w-[90%] rounded-[40px] bg-black/20 blur-sm"></div>
              <div className="absolute -right-12 top-24 z-10 h-[70%] w-[80%] rounded-[40px] bg-black/10 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

