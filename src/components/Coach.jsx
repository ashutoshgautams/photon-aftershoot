"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  { n: 1, title: "Warm, golden light", tip: "Push the temperature warmer to echo the glow of golden hour.", rec: "6200 K", state: "Getting closer" },
  { n: 2, title: "Lift the shadows", tip: "Open the darkest corners so faces never disappear into them.", rec: "+18", state: "Nicely done" },
  { n: 3, title: "Glowing midtones", tip: "Bend the curve gently to spread that warm light across the frame.", rec: "soft S-curve", state: "Almost there" },
];

export default function Coach() {
  const [a, setA] = useState(0);
  const s = STEPS[a];
  return (
    <section id="coach" className="relative scroll-mt-24 overflow-hidden border-y border-line px-5 py-28 sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-ember/10 blur-[120px]" />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.35em] text-ember">Meet Iris</p>
        <h2 className="font-display text-[clamp(32px,5.5vw,62px)] font-light leading-[1.02] tracking-tightest">
          Chess players have Dr. Wolf.
          <br />
          <span className="warm-text italic">Photographers have Iris.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-lg text-[17px] font-light leading-relaxed text-ash">
          Iris doesn&apos;t just fix the photo. She shows you the why — one gentle step at a
          time, until the day you no longer need her.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-16 grid max-w-6xl items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-4xl bg-ember/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-4xl border border-line bg-coal shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]">
              <video className="w-full" autoPlay muted loop playsInline poster="/media/coach_poster.jpg">
                <source src="/media/coach.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-4xl border border-line bg-coal p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-ember/40 bg-ember/15 text-ember">✦</span>
              <div>
                <p className="text-[14px] font-medium text-bone">Iris</p>
                <p className="font-mono text-[10px] text-mute">your pocket photographer</p>
              </div>
              <span className="ml-auto font-mono text-[11px] text-ember">Step {s.n} / 7</span>
            </div>

            <h3 className="font-display text-2xl font-normal text-bone">{s.title}</h3>
            <p className="mt-2 text-[14px] font-light leading-relaxed text-ash">{s.tip}</p>

            <div className="my-5 h-1.5 w-full overflow-hidden rounded-full bg-smoke">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-sage via-bone to-ember" />
            </div>

            <div className="flex items-center justify-between text-[13px]">
              <span className="text-sage">Recommended · {s.rec}</span>
              <span className="text-ember-soft">{s.state}</span>
            </div>

            <div className="mt-6 flex gap-1.5">
              {STEPS.map((_, i) => (
                <button key={i} onClick={() => setA(i)}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${i === a ? "bg-ember" : "bg-line"}`} />
              ))}
            </div>

            <button onClick={() => setA((a + 1) % STEPS.length)}
              className="mt-6 w-full rounded-full border border-line py-3 text-[14px] font-medium text-bone transition-colors hover:border-ember/50 hover:text-ember-soft">
              Next tip →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
