"use client";
import Reveal from "./Reveal";

const A = [
  ["Hobbyists", "You shoot for the love of it. Now make those shots sing."],
  ["Memory keepers", "Family, travel, the dog being ridiculous — turned into keepsakes."],
  ["Social creators", "A feed that looks like you. Edit fast, post faster."],
  ["Adobe refugees", "Burned by Photoshop? Breathe. This one is kind."],
];

export default function Audience() {
  return (
    <section id="who" className="scroll-mt-24 px-5 py-28 sm:px-8 lg:px-16">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-ember">Made for you</p>
        <h2 className="font-display text-[clamp(30px,5vw,56px)] font-light leading-[1.04] tracking-tightest">
          For people who love the
          <span className="warm-text italic"> photo</span>, not the software.
        </h2>
      </Reveal>
      <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {A.map(([t, b], i) => (
          <Reveal key={t} delay={(i % 4) * 0.07}>
            <div className="h-full rounded-3xl border border-line bg-coal p-6 transition-colors hover:border-ember/30">
              <span className="font-mono text-[11px] text-ember">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-normal text-bone">{t}</h3>
              <p className="mt-1.5 text-[13.5px] font-light leading-relaxed text-ash">{b}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-24 max-w-3xl text-center">
        <p className="text-ember">✦</p>
        <blockquote className="mt-5 font-display text-[clamp(24px,3.6vw,40px)] font-light italic leading-[1.3] tracking-tight text-bone">
          &quot;I edited a whole year of phone photos in one rainy afternoon — and actually
          <span className="warm-text"> enjoyed it.</span>&quot;
        </blockquote>
        <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Priya · weekend photographer</p>
      </Reveal>
    </section>
  );
}
