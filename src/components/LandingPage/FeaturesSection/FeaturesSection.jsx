import { TowerCard } from "./TowerCard"
import { TrackAircraft } from "./TrackAircraft"
import { NotificationCard } from "./NotificationCard"
import { MLCard } from "./MLCard"

export function FeaturesSection() {
   return (
      <section className="px-6 py-24 bg-surface-container">
         <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <h2 className="font-bold text-3xl md:text-4xl tracking-tight text-charcoal mb-3">
               Everything you've ever wanted to know.
            </h2>
            <p className="max-w-xl text-on-surface-variant mb-12">
               AeroRadar keeps you informed by tracking more information about
               your flight than any other app.
            </p>

            {/* ── Row 1: MLCard (wider) + TowerCard ──────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-5 mb-5">
               <MLCard />
               <TowerCard />
            </div>

            {/* ── Row 2: NotificationCard + TrackAircraft (wider) */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5">
               <NotificationCard />
               <TrackAircraft />
            </div>

         </div>
      </section>
   )
}