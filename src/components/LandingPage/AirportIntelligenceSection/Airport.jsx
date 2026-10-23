import { LiveBroadcastBadge } from "./LiveBroadcastBadge"
import { AirportSectionHeader } from "./AirportSectionHeader"
import { AirportCardsGrid } from "./AirportCard"

export function Airport() {
   return (
      <section className="bg-black py-24 px-6">
         <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">

            {/* Badge */}
            <LiveBroadcastBadge />

            {/* Heading + Subtitle */}
            <AirportSectionHeader />

            {/* Airport Cards */}
            <AirportCardsGrid />

         </div>
      </section>
   )
}