import aeroImg from "../../../assets/aeroplane-wings.jpg";


export function TrackAircraft() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-card">
      <img
        src={aeroImg}
        alt="Aircraft wing"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-8 left-8 z-10 max-w-sm text-white">
        <h2 className="text-4xl font-bold leading-tight">
          Track inbound aircraft.
        </h2>

        <p className="mt-3 text-base leading-6 text-gray-200">
          Watch your plane arrive before you even board.
        </p>
      </div>
    </div>
  )
}