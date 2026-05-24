export default function ScrollDownIndicator() {
  return (
    <div className="pointer-events-none absolute left-1/2 bottom-6 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white">
      <span className="text-[11px] uppercase tracking-[0.28em] text-white/75">Scroll</span>
      <div className="scroll-indicator flex h-[44px] w-[28px] items-start justify-center rounded-full border border-white/70 p-1">
        <span className="scroll-indicator-dot block h-2.5 w-2.5 rounded-full bg-white/90" />
      </div>
    </div>
  );
}
