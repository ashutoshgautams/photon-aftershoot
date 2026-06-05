"use client";
import Reveal from "./Reveal";

const ROWS = [
  ["Day one", "Tap a preset. Your photo looks beautiful instantly."],
  ["Week four", "You start reaching for the sliders yourself."],
  ["Month three", "Iris shows you light — and you start to see it too."],
  ["One day", "You don't need Iris anymore. She'd be proud."],
];

export default function Ladder() {
  return (
    <section className="relative overflow-hidden border-y border-line px-5 py-28 sm:px-8 lg:px-16">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-ember">The quiet glow-up</p>
        <h2 className="font-display text-[clamp(30px,5vw,56px)] font-light leading-[1.04] tracking-tightest">
          From a nice photo
          <br />
          to <span className="warm-text italic">a photographer.</span>
        </h2>
      </Reveal>
      <div className="mx-auto max-w-3xl">
        {ROWS.map(([when, what], i) => (
          <Reveal key={when} delay={i * 0.08}>
            <div className="group flex items-baseline gap-6 border-b border-line py-7 transition-colors hover:border-ember/30">
              <span className="w-28 shrink-0 font-mono text-[12px] uppercase tracking-wider text-ember">{when}</span>
              <p className="font-display text-[clamp(18px,2.4vw,26px)] font-light text-bone transition-colors group-hover:text-ember-soft">
                {what}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
