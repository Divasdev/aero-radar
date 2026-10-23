import { HeroBadge } from "./HeroBadge"
import { HeroHeader } from "./HeroHeader"
import { HeroCard } from "./HeroCard"
import flowLineImg from "../../../assets/flow-line.png"
import globeIconImg from "../../../assets/globe-icon.png"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] w-[800px] h-[800px] opacity-10 pointer-events-none z-0">
          <img src={globeIconImg} alt="Globe background" className="w-full h-full object-contain" />
        </div>

        {/* Top text content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex justify-center mb-8">
            <HeroBadge />
          </div>
          <HeroHeader />
        </div>

        {/* Visual Box with flow line background and floating card */}
        <div className="mt-16 mx-auto max-w-4xl h-[400px] md:h-[500px] bg-gray-50 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden flex items-center justify-center border border-gray-200">
          
          {/* Background pattern */}
          <img 
            src={flowLineImg} 
            alt="Flow lines" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          
          {/* Floating Card overlay */}
          <div className="relative z-10 w-full px-4 flex justify-center">
             <HeroCard />
          </div>
          
        </div>
      </div>
    </section>
  )
}