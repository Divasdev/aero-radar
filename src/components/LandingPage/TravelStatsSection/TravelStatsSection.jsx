import { StatsGrid } from "./StatsCard";
import { PassportPreview } from "./PassportPreview";

export function TravelStatsSection() {
   return (
      <section className="bg-surface-container py-24 px-6">

         {/* ── One complete container div holding everything together ── */}
         <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-card
            p-10 md:p-16">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-center">

               {/* ── Left Column: Text + Stat Cards ─────────────── */}
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-4">
                     Look back on your travels.
                  </h2>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-8">
                     Whether you fly one time per year or one hundred, AeroRadar
                     gives you a beautiful record of your flying history. How many
                     miles have you traveled around the Earth?
                  </p>

                  {/* Stat Cards Grid */}
                  <StatsGrid />
               </div>

               {/* ── Right Column: Passport Phone Mockup ────────── */}
               <div>
                  <PassportPreview />
               </div>

            </div>
         </div>

      </section>
   );
}