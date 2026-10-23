export function LiveBroadcastBadge() {
   return (
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
         border border-red-500/30 bg-red-500/10 text-xs font-mono font-bold
         uppercase tracking-[0.1em] text-red-400">
         <span className="size-2 rounded-full bg-red-500 animate-pulse" />
         Live Broadcast
      </span>
   )
}