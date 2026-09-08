type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-kc-blue-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 100% 0%, var(--kc-yellow), transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, color-mix(in srgb, var(--kc-blue) 80%, white), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kc-yellow">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
        )}
        <div className="mt-8 h-1 w-16 rounded-full bg-kc-yellow" aria-hidden />
      </div>
    </section>
  );
}
