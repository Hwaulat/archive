export function LppomLogo({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg bg-card px-4 py-2 leading-none ${className ?? ""}`}
    >
      <span className="font-display text-2xl font-bold tracking-tight text-foreground">LPPOM</span>
      <span className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.08em] text-brand">
        Leading in Halal Assurance Solutions
      </span>
    </div>
  );
}
