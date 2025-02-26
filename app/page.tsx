"use client"
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
    
      className={`  bg-gradient-to-r from-[#F84C4C] to-[#FFA63D] select-none ${nunito.className}  `}
    >
      <div className="h-3/6 w-screen absolute top-96" style={{ backgroundImage: "url(/9851063.png)" }}></div>

      <div className="h-screen overflow-clip lg:flex lg:flex-col  lg:justify-center px-4 py-8 md:px-8  lg:px-16 " >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ">
          {/* Left Column */}
          <div className="space-y-20 backdrop-blur-lg  backdrop-filter bg-black/20 p-8 rounded-lg lg:p-12">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-md">
              <Image width="64" height="64" src="/okay.png" className="rounded-md" alt="ok-hand"/>
              </div>
              <h1 className="text-4xl font-light tracking-wide text-white md:text-5xl lg:text-6xl ">Beyond Perfect</h1>
            </div>

            {/* Tagline */}
            <h2 className="text-4xl font-light text-white md:text-5xl lg:text-6xl">
              Perfect was the goal. Let&apos;s go beyond it.
            </h2>

            {/* App Store Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <Image
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <Image
                  src="/appstore.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right Column - App Screenshots */}
          <div className="relative mx-auto w-full max-w-full pt-8 lg:pt-0 hover:cursor-pointer">
            <div className="relative">
              <Image
                src="/website-feature.png"
                alt="Beyond Perfect App Interface showing challenge cards and navigation"
                width={800}
                height={1600}
                className="relative z-30"
                priority
              />
              {/* Decorative overlapped screenshots */}
              {/* <div className="absolute -right-6 top-12 z-20 h-[80%] w-[90%] rounded-[40px] bg-black/20 blur-sm"></div>
              <div className="absolute -right-12 top-24 z-10 h-[70%] w-[80%] rounded-[40px] bg-black/10 blur-md"></div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

