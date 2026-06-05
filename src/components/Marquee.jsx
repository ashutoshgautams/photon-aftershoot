"use client";
const WORDS = ["Tap", "Learn", "Glow", "Repeat", "No subscriptions", "Made to be outgrown"];
export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section className="overflow-hidden border-b border-line py-6">
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-light italic text-ash/50">
            {w} <span className="text-ember not-italic">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
