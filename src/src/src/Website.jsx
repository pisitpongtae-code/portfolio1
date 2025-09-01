import React, { useMemo, useState } from "react";

export default function Website() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.currentTarget.reset();
  }

  const nav = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-slate-900 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 text-white font-bold">PT</div>
            <span className="text-lg font-semibold tracking-tight">Portfolio</span>
          </a>

          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <button
            className="inline-flex items-center rounded-xl border border-slate-700 px-3 py-2 text-sm font-medium md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-slate-700">
            <div className="mx-auto max-w-7xl px-4 py-3">
              <div className="grid gap-2">
                {nav.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Sound Tower
            </h1>
            <p className="mt-4 max-w-prose text-base text-slate-400 md:text-lg">
              Reimagining Karystos through sound, space, and urban harmony.
            </p>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700 shadow-sm">
              <img src="/images/sound-tower_cover.jpg" alt="Sound Tower project cover" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-slate-700 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-slate-400 max-w-prose">
            I am an architect who explores the intersection of sustainability, culture, and urban resilience. 
            My design vision focuses on reimagining public spaces through sound, water, and landscape, 
            transforming them into immersive experiences that connect people and place.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-slate-700 bg-slate-800/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contact</h2>
          <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input id="name" name="name" required className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white" />
            </div>
            <div className="flex items-center gap-4">
              <button type="submit" className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400">
                Send
              </button>
              {sent && (
                <span className="text-sm text-green-400">Message sent!</span>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-white text-xs font-bold">PT</div>
              <span>© {year} Portfolio. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

