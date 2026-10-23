import notficationiconlImg from "../../../assets/notification-icon.png";

export function NotificationCard() {
   return (
      <div className="shadow-card bg-white rounded-3xl p-8">
         <img src={notficationiconlImg}
            className="w-10 h-10 object-contain mb-4"
         />
         <h2 className="font-bold text-2xl tracking-tight mb-2">First to know.</h2>

         <p className="text-sm text-gray-500 mb-6">
            Instant push notifications often beat airport displays by minutes.
         </p>

         <div className="space-y-3">
            {/* Departure delay notification */}
            <div className="flex items-center gap-3 bg-surface-container rounded-2xl px-4 py-3 border-l-4 border-orange-400">
               <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="#f97316" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round" className="w-4 h-4">
                     <circle cx="12" cy="12" r="10" />
                     <polyline points="12 6 12 12 16 14" />
                  </svg>
               </span>
               <span className="font-semibold text-sm text-charcoal">Departure delayed to 11:15</span>
            </div>

            {/* Gate change notification */}
            <div className="flex items-center gap-3 bg-surface-container rounded-2xl px-4 py-3 border-l-4 border-blue-400">
               <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round" className="w-4 h-4">
                     <rect x="3" y="3" width="18" height="18" rx="2" />
                     <path d="M9 3v18" />
                  </svg>
               </span>
               <span className="font-semibold text-sm text-charcoal">Gate changed to C4</span>
            </div>
         </div>
      </div>
   )
}