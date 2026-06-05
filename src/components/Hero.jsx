"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: i * 0.1, ease } }),
};

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-16">
      <div className="spotlight pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p variants={rise} initial="hidden" animate="show"
          className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-ember">
          Free · Mac &amp; Windows · No subscription
        </motion.p>

        <motion.h1 variants={rise} custom={1} initial="hidden" animate="show"
          className="font-display text-[clamp(44px,8vw,98px)] font-light leading-[0.96] tracking-tightest">
          The editor that
          <br />
          <span className="warm-text italic">edits beside you.</span>
        </motion.h1>

        <motion.p variants={rise} custom={2} initial="hidden" animate="show"
          className="mx-auto mt-8 max-w-lg text-[clamp(16px,2vw,19px)] font-light leading-relaxed text-ash">
          Photon makes your photos beautiful — and quietly teaches you how, frame by frame.
          Like having a photographer sitting right next to you.
        </motion.p>

        <motion.div variants={rise} custom={3} initial="hidden" animate="show"
          className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <a href="#download"
            className="group relative overflow-hidden rounded-full bg-ember px-8 py-3.5 text-[15px] font-medium text-noir transition-transform duration-300 hover:-translate-y-0.5">
            <span className="relative z-10">Download free</span>
          </a>
          <a href="#demo"
            className="rounded-full border border-line px-8 py-3.5 text-[15px] font-medium text-bone transition-colors duration-300 hover:border-ash">
            Watch it work
          </a>
        </motion.div>
      </div>

      {/* cinematic video frame */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease }}
        className="relative z-10 mx-auto mt-20 max-w-5xl"
        id="demo"
      >
        <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-ember/10 blur-2xl" />
        <div className="relative overflow-hidden rounded-4xl border border-line bg-coal shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)]">
          {/* top bar */}
          <div className="flex items-center gap-2 border-b border-line px-5 py-3">
            <span className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-line" />
              <i className="h-2.5 w-2.5 rounded-full bg-line" />
              <i className="h-2.5 w-2.5 rounded-full bg-line" />
            </span>
            <span className="ml-2 font-mono text-[11px] text-mute">photon — untitled.jpg</span>
            <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-ember">
              <span className="h-1.5 w-1.5 animate-glow rounded-full bg-ember" /> LIVE
            </span>
          </div>
          <video className="w-full" autoPlay muted loop playsInline poster="/media/intro_poster.jpg">
            <source src="/media/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
          real photon, editing in real time
        </p>
      </motion.div>
    </header>
  );
}
