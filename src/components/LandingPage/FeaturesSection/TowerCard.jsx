import signalImg from "../../../assets/signal.png";

export function TowerCard() {
   return (
      <div className="shadow-lg bg-white rounded-3xl p-8">
         <img src={signalImg}
            className="w-10 h-10 object-contain mb-5"
         />

         <h2 className="font-bold text-2xl tracking-tighter mb-3">Direct from the tower.
         </h2>
         <p className="font-medium text-gray-500">Raw ATC mandates decoded.Know exactly what stops your flight.
         </p>

         <div className="mt-6 bg-gray-900 rounded-xl p-4 font-mono text-sm max-w-md" >
            <p className="text-gray-600">KSFO METAR</p>

            <p className="text-green-500">KSFO 241950Z 28015G20KT 10SM</p>

            <p className="text-green-500">FEW030 15/09 A3002 RMK AO2</p>

            <p className="text-green-500">SLP186 T01500089</p>
         </div>
      </div>
   )
}
