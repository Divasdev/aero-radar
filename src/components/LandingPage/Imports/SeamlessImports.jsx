import airplaneIcon from '../../../assets/airplane.png';
import calendarIcon from '../../../assets/business.png';
import emailIcon from '../../../assets/email.png';

const importMethods = [
   {
      icon: calendarIcon,
      label: "Calendar Sync",
   },
   {
      icon: emailIcon,
      label: "Email Forwarding",
   },
   {
      icon: airplaneIcon,
      label: "TripIt Integration",
   }
];

export function SeamlessImports() {
   return (
      <section className="bg-surface-container py-20 px-6">

         {/* Section Header */}
         <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-charcoal tracking-tight mb-4">
               Seamless Imports.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
               Forward your confirmation emails, sync your calendar, or connect TripIt.
               <br />
               AeroRadar automatically builds your itinerary with zero manual data entry.
            </p>
         </div>

         {/* Icons Row with Dashed Connectors */}
         <div className="flex items-center justify-center gap-0 max-w-lg mx-auto">

            {importMethods.map((method, index) => (
               <div key={method.label} className="flex items-center">

                  {/* Icon + Label */}
                  <div className="flex flex-col items-center gap-3">
                     <div
                        className="group size-16 rounded-2xl bg-surface border border-outline-variant
                        flex items-center justify-center shadow-card
                        transition-all duration-300 ease-out
                        hover:scale-110 hover:border-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)]
                        hover:bg-blue-50/40 cursor-pointer"
                     >
                        <img
                           src={method.icon}
                           alt={method.label}
                           className="size-9 transition-transform duration-300 group-hover:scale-105"
                        />
                     </div>
                     <span className="text-xs font-medium text-on-surface-variant">
                        {method.label}
                     </span>
                  </div>

                  {/* Dashed Connector (not after the last item) */}
                  {index < importMethods.length - 1 && (
                     <div className="w-16 border-t-2 border-dashed border-outline-variant mx-4 mb-6" />
                  )}

               </div>
            ))}

         </div>

      </section>
   );
}