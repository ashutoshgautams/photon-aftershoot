"use client";
import Reveal from "./Reveal";
import { PhotonMark } from "./Logo";

export default function Download() {
  return (
    <section id="download" className="scroll-mt-24 px-5 pb-28 sm:px-8 lg:px-16">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-5xl border border-line bg-coal px-6 py-24 text-center">
          <div className="spotlight pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 opacity-80">
            <PhotonMark className="h-12 w-12" />
          </div>
          <h2 className="relative mt-16 font-display text-[clamp(32px,5.5vw,68px)] font-light leading-[1.0] tracking-tightest">
            Your best photo is
            <br />
            <span className="warm-text italic">one tap away.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-md text-[16px] font-light text-ash">
            Free to download, free to keep, free of the usual headache.
          </p>
          <button
            onClick={() => alert("🎉 In production this kicks off your free download — MVP demo!")}
            className="relative mt-10 rounded-full bg-ember px-9 py-4 text-[16px] font-medium text-noir transition-transform duration-300 hover:-translate-y-0.5">
            Download Photon — Free
          </button>
          <div className="relative mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-mute">
            <span>macOS 12+</span><span>Windows 10+</span><span>No card required</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
