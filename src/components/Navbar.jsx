"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [["Meet Iris", "#coach"], ["See it move", "#demo"], ["Features", "#features"], ["Who it's for", "#who"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-16 ${
        scrolled ? "border-b border-line bg-noir/70 py-3.5 backdrop-blur-xl" : "py-6"
      }`}
    >
      <Logo />
      <div className="hidden items-center gap-9 text-[14px] text-ash md:flex">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="transition-colors hover:text-bone">{label}</a>
        ))}
      </div>
      <a href="#download"
        className="rounded-full border border-ember/40 bg-ember/10 px-5 py-2 text-[14px] font-medium text-ember-soft transition-all duration-300 hover:border-ember hover:bg-ember/20">
        Download free
      </a>
    </motion.nav>
  );
}
