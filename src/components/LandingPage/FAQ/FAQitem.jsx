import { useState } from "react";

const faqs = [
   {
      question: "Where do you get your flight data?",
      answer: "We aggregate data directly from global ATC systems, FAA feeds, and airline proprietary APIs to ensure the lowest latency possible."
   },
   {
      question: "How accurate is the delay prediction?",
      answer: "Our ML models predict delays based on inbound aircraft status, historical weather patterns, and airport congestion, boasting a 94% accuracy rate up to 24 hours prior to departure."
   },
   {
      question: "Is AeroRadar free to use?",
      answer: "AeroRadar offers a free tier with basic flight tracking and airport information. Advanced analytics and historical delay data are available in the Pro plan."
   },
   {
      question: "Which airports do you cover?",
      answer: "We currently cover over 5,000 airports worldwide, including all major international hubs and most regional airports with commercial service."
   }
];


export function FAQitem() {
   const [openIndex, setOpenIndex] = useState(null);
   return (
      <div className="max-w-4xl mx-auto space-y-4">

         {faqs.map((faq, index) => (

            <div
               key={faq.question}
               className="border border-outline-variant rounded-card px-6 hover:border-primary/40 transition-colors"
            >
               <button
                  className="flex items-center justify-between w-full py-5 cursor-pointer"
                  onClick={() => {
                     setOpenIndex(openIndex === index ? null : index);
                  }}
               >
                  <span className="text-left font-semibold text-charcoal">
                     {faq.question}
                  </span>

                  <span
                     className={`text-sm text-outline transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  >▼</span>
               </button>

               {openIndex === index && (
                  <div className="pb-6">
                     <p className="text-on-surface-variant leading-7">
                        {faq.answer}
                     </p>
                  </div>
               )}

            </div>

         ))}

      </div>
   );
}