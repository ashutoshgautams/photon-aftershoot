import { Logo } from "./Logo";
const COLS = [
  ["Product", [["Features", "#features"], ["Meet Iris", "#coach"], ["Download", "#download"], ["Blog", "#"]]],
  ["Company", [["About", "#"], ["Careers", "#"], ["Contact", "#"], ["Aftershoot Pro", "https://aftershoot.com"]]],
  ["Learn", [["Tutorials", "#"], ["FAQ", "#"], ["Community", "#"]]],
];
export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between gap-12 border-b border-line pb-12">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[14px] font-light leading-relaxed text-ash">
              The free photo editor that teaches you as you go. Made with warmth by Aftershoot.
            </p>
          </div>
          <div className="flex flex-wrap gap-14">
            {COLS.map(([title, links]) => (
              <div key={title}>
                <h5 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bone">{title}</h5>
                {links.map(([l, h]) => (
                  <a key={l} href={h} className="mb-2.5 block text-[14px] font-light text-ash transition-colors hover:text-ember-soft">{l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-3 font-mono text-[11px] text-mute">
          <span>© 2026 Aftershoot — Photon</span>
          <span className="flex gap-5"><a href="#" className="hover:text-bone">Privacy</a><a href="#" className="hover:text-bone">Terms</a></span>
        </div>
      </div>
    </footer>
  );
}
