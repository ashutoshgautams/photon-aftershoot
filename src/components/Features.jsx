"use client";
import Reveal from "./Reveal";

const I = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">{p}</svg>
);

const F = [
  { title: "One-tap looks", body: "Hand-crafted presets that make any photo glow. Tap, love, done — or refine from there.",
    icon: I(<><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></>), wide: true },
  { title: "Auto-enhance", body: "One button balances light, colour and clarity.",
    icon: I(<><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>) },
  { title: "Plain-word sliders", body: "Brightness, warmth, mood. No tone-curve PhD.",
    icon: I(<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M4 16l5-7 4 5 3-4 4 6" /></>) },
  { title: "Cleanup magic", body: "Brush away a photobomber or a power line in a stroke.",
    icon: I(<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M21 15l-5-5L5 21M5 7h3M6.5 5.5v3" /></>) },
  { title: "Iris teaches as you go", body: "Every edit nudges you a little closer to seeing like a photographer.",
    icon: I(<path d="M12 2l2.4 6.8H21l-5.3 4 2 6.8L12 15.6 6.3 19.6l2-6.8L3 8.8h6.6z" />), wide: true },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 px-5 py-28 sm:px-8 lg:px-16">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-ember">What&apos;s inside</p>
        <h2 className="font-display text-[clamp(30px,5vw,56px)] font-light leading-[1.04] tracking-tightest">
          Powerful underneath.
          <span className="warm-text italic"> Effortless</span> on top.
        </h2>
      </Reveal>
      <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {F.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.07} className={f.wide ? "lg:col-span-2" : ""}>
            <div className="group h-full rounded-3xl border border-line bg-coal p-7 transition-colors duration-500 hover:border-ember/30">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-line text-ember transition-colors duration-500 group-hover:border-ember/40 group-hover:bg-ember/10">
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-normal text-bone">{f.title}</h3>
              <p className="mt-2 max-w-md text-[14.5px] font-light leading-relaxed text-ash">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
